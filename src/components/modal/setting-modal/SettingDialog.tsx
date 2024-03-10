import {memo, useContext, useState} from 'react';
import {createPortal} from 'react-dom';
import {AnimatePresence} from 'framer-motion';
import {twMerge} from 'tailwind-merge';

import {ActivePageContext} from '../../../services/API/pageViewingManagerAPI';

import Icons from '../../ui/Icons';
import SettingDialogContent from './SettingDialogContent';

const SettingDialog = memo(() => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const {activePage} = useContext(ActivePageContext);
  const isHidden = activePage.location === 'startPage';

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={twMerge(
          'absolute right-3 top-2 p-3',
          isHidden ? 'hidden' : 'block'
        )}
      >
        <Icons.Setting />
      </button>

      <AnimatePresence>
        {isOpen && <Dialog setOpen={setOpen} />}
      </AnimatePresence>
    </>
  );
});

export default SettingDialog;

function Dialog({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      {createPortal(
        <DialogContentWrapper setOpen={setOpen}>
          <DialogContentHeader setOpen={setOpen} />

          <SettingDialogContent />
        </DialogContentWrapper>,
        document.getElementById('emtris__dialog') as Element | DocumentFragment
      )}
    </>
  );
}

interface DialogContentWrapper extends React.HTMLAttributes<HTMLDivElement> {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function DialogContentHeader({setOpen}: DialogContentWrapper) {
  return (
    <header className='flex justify-between items-center mb-3 border-b border-slate-50/10 pb-2'>
      <h4>SETTING</h4>

      <button onClick={() => setOpen(false)}>
        [X]
        <span className='sr-only'>Close modal</span>
      </button>
    </header>
  );
}

function DialogContentWrapper({children, setOpen}: DialogContentWrapper) {
  return (
    <div className='absolute top-0 left-0 w-full h-full z-50 grid place-items-center p-4'>
      <div
        className='relative z-50 w-full max-w-96 p-4 bg-primary/20 border-x border-primary/60 sm:backdrop-blur-sm text-slate-50'
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 80%, 93% 100%, 0 100%, 0% 50%)',
        }}
      >
        {children}
      </div>

      <div
        onClick={() => setOpen(false)}
        className='absolute top-0 left-0 w-full h-full bg-slate-950/90'
      />
    </div>
  );
}
