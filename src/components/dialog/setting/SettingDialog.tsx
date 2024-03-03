import {memo, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {createPortal} from 'react-dom';

import Icons from '../../ui/Icons';
import SettingDialogContent from './SettingDialogContent';

const SettingDialog = memo(() => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className='absolute right-3 top-2 p-3'
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

const animationVariants = {
  mainWrapper: {
    rest: {opacity: 0},
    show: {opacity: 1},
  },
  dialogContainer: {
    rest: {opacity: 0, y: 50},
    show: {opacity: 1, y: 0, transition: {delay: 0.3}},
    exit: {opacity: 1, y: 200},
  },
};

function Dialog({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      {createPortal(
        <motion.div
          variants={animationVariants.mainWrapper}
          initial='rest'
          animate='show'
          exit='rest'
          className='fixed top-0 left-0 z-50 w-full h-full grid place-items-center p-4 lg:p-8'
        >
          <motion.div
            variants={animationVariants.dialogContainer}
            initial='rest'
            animate='show'
            exit='exit'
            transition={{ease: 'easeInOut', duration: 0.3}}
            className='w-full h-full bg-gradient-to-l from-yellow-900 via-yellow-950 to-yellow-900 rounded-md border border-slate-50/20 p-2 mx-auto relative z-20 max-w-96 sm:max-w-[500px] max-h-60 sm:max-h-80'
          >
            <button
              className='absolute -right-4 -top-4'
              onClick={() => setOpen(false)}
            >
              <Icons.CloseCircled className='w-4 h-4 lg:w-5 lg:h-5 3xl:w-8 3xl:h-8' />
            </button>

            <SettingDialogContent />

            <div
              className='w-5 h-10 absolute -bottom-8 left-1/3 bg-blue-600'
              style={{
                clipPath: 'polygon(100% 0, 100% 100%, 48% 75%, 0 100%, 0 0)',
              }}
            ></div>
          </motion.div>

          <div
            onClick={() => setOpen(false)}
            className='absolute top-0 left-0 -z-10 w-full h-full bg-slate-950/75'
          ></div>
        </motion.div>,
        document.getElementById('emtris__dialog') as Element | DocumentFragment
      )}
    </>
  );
}
