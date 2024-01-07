import {createContext, useContext, useEffect, useState} from 'react';
import {createPortal} from 'react-dom';
import {twMerge} from 'tailwind-merge';

interface ModaLWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  initialState?: boolean;
}

interface ModalTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {}

interface ModalContentProps extends React.HTMLAttributes<HTMLDivElement> {
  initialState?: boolean;
}

const ModalContext = createContext(null as any);

const Modal = {
  Wrapper: ({children, initialState}: ModaLWrapperProps) => {
    const [isOpen, setOpen] = useState<boolean>(initialState || false);

    useEffect(() => {
      function closeModal() {
        setOpen(false);
      }

      window.addEventListener('keyup', (e: KeyboardEvent) => {
        if (e.key === 'Escape') closeModal();
      });

      return window.removeEventListener('keyup', closeModal);
    }, []);

    function toggleState() {
      setOpen(!isOpen);
    }

    return (
      <ModalContext.Provider
        value={{state: isOpen, toggleState, setState: setOpen}}
      >
        {children}
      </ModalContext.Provider>
    );
  },
  Trigger: ({children, className}: ModalTriggerProps) => {
    const modal = useContext(ModalContext);

    return (
      <button className={twMerge(className)} onClick={modal.toggleState}>
        {children}
      </button>
    );
  },
  CloseButton: ({className, children}: ModalTriggerProps) => {
    const modal = useContext(ModalContext);

    return (
      <button
        className={twMerge(
          'flex gap-2 items-center justify-center shrink-0 p-1 relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-yellow-600 after:rounded-full after:pointer-events-none after:blur-md after:opacity-0 after:hover:opacity-50 after:transition-opacity',
          className
        )}
        onClick={() => modal.setState(false)}
      >
        {children}
      </button>
    );
  },
  Content: ({children, className, initialState}: ModalContentProps) => {
    const modal = useContext(ModalContext);
    const modalState = initialState !== null ? initialState : modal.state;

    return (
      <>
        {modalState &&
          createPortal(
            <div className='fixed top-0 left-0 w-full h-full z-50 flex items-center'>
              <div className='w-full pt-[calc((9/20)*_100%)] relative'>
                <div
                  role='button'
                  onClick={modal.toggleState}
                  className='absolute top-0 cursor-default left-0 w-full h-full bg-slate-950/90 backdrop-blur-sm grid place-items-center'
                ></div>

                <div
                  className={twMerge(
                    'absolute z-50 w-full h-full top-0 left-0',
                    className
                  )}
                >
                  {children}
                </div>
              </div>
            </div>,
            document.getElementById('emtris__dialog') as
              | Element
              | DocumentFragment
          )}
      </>
    );
  },
};

export default Modal;
