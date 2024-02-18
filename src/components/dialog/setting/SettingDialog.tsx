import {memo, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';

import Button from '../../ui/Button';
import Icons from '../../ui/Icons';
import {createPortal} from 'react-dom';
import SettingDialogTab from './SettingDialogTab';

const SettingDialog = memo(() => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        <Icons.Setting />
      </Button>

      <AnimatePresence>
        {isOpen && <SettingDialogContent setOpen={setOpen} />}
      </AnimatePresence>
    </>
  );
});

export default SettingDialog;

function SettingDialogContent({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      {createPortal(
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          className='fixed top-0 left-0 z-50 w-full h-full grid place-items-center p-4 lg:p-8'
        >
          <motion.div
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y: 0, transition: {delay: 0.3}}}
            exit={{opacity: 1, y: '100%'}}
            transition={{ease: 'easeInOut', duration: 0.3}}
            className='w-full h-full bg-white rounded-xl lg:rounded-2xl xl:rounded-3xl p-4 pb-2 mx-auto relative z-20 max-w-96 lg:max-w-[500px] max-h-60 lg:max-h-80 border border-border-light'
          >
            <Button
              className='absolute -right-4 -top-4'
              onClick={() => setOpen(false)}
            >
              <Icons.CloseCircled className='w-4 h-4 lg:w-5 lg:h-5 3xl:w-8 3xl:h-8' />
            </Button>

            <SettingDialogTab />
          </motion.div>

          <div
            onClick={() => setOpen(false)}
            className='absolute top-0 left-0 -z-10 w-full h-full bg-slate-950/75 xl:backdrop-blur-sm'
          ></div>
        </motion.div>,
        document.getElementById('emtris__dialog') as Element | DocumentFragment
      )}
    </>
  );
}
