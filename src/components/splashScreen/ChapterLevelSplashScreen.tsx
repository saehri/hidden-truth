import {motion} from 'framer-motion';
import {createPortal} from 'react-dom';

interface ChapterLevelSplashScreen {
  isOpen: boolean;
  levelName: string;
  levelInfo: string;
}

export default function ChapterLevelSplashScreen({
  isOpen,
  levelInfo,
  levelName,
}: ChapterLevelSplashScreen) {
  return (
    <>
      {isOpen &&
        createPortal(
          <motion.div
            animate={{
              opacity: [0, 0, 1, 1, 1, 1, 1, 1, 0],
              transition: {
                duration: 3,
              },
            }}
            className='fixed top-0 left-0 w-full h-full z-50 bg-slate-950'
          >
            <div className='w-full h-full max-w-[45%] mx-auto flex flex-col gap-8 justify-center items-center text-center text-border'>
              <p className='uppercase'>{levelName}</p>

              <p className='capitalize'>{levelInfo}</p>
            </div>
          </motion.div>,
          document.getElementById('emtris__dialog') as
            | Element
            | DocumentFragment
        )}
    </>
  );
}
