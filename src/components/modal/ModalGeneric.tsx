import {createContext, useContext, useEffect, useState} from 'react';
import {createPortal} from 'react-dom';
import {twMerge} from 'tailwind-merge';
import {motion} from 'framer-motion';

interface ModaLWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  initialState?: boolean;
}

interface ModalTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

interface ModalContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const ModalContext = createContext(null as any);

const Modal = {
  Wrapper: ({children, initialState}: ModaLWrapperProps) => {
    const [isOpen, setOpen] = useState<boolean>(initialState || false);

    useEffect(() => {
      if (initialState) {
        setOpen(initialState);
      }

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
      <ModalContext.Provider value={{state: isOpen, toggleState}}>
        {children}
      </ModalContext.Provider>
    );
  },
  Trigger: ({children, className, asChild}: ModalTriggerProps) => {
    const modal = useContext(ModalContext);

    return (
      <button className={twMerge(className)} onClick={modal.toggleState}>
        {children}
      </button>
    );
  },
  Content: ({children, className}: ModalContentProps) => {
    const modal = useContext(ModalContext);

    return (
      <>
        {modal.state &&
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
