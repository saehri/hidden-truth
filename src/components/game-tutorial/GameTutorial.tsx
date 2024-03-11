import {memo, useState} from 'react';
import {createPortal} from 'react-dom';
import {motion} from 'framer-motion';

type ImageGuesserTutorialProps = {
  isOpen: boolean;
  onTutorialEnd: () => void;
  tutorialText: string[];
};

const animations = {
  fadeUp: {
    rest: {opacity: 0},
    show: {opacity: 1},
  },
};

const GameTutorial = memo(
  ({isOpen, onTutorialEnd, tutorialText}: ImageGuesserTutorialProps) => {
    const [isModalOpen, setModalOpen] = useState<boolean>(isOpen);
    const [currentTutorialIndex, setCurrentTutorialIndex] = useState<number>(0);
    const isTutorialEnd = currentTutorialIndex === tutorialText.length - 1;

    function endTutorial() {
      setModalOpen(false);
      onTutorialEnd();
    }

    function handleTutorial() {
      if (isTutorialEnd) {
        endTutorial();
      } else {
        setCurrentTutorialIndex((prev) => prev + 1);
      }
    }

    return (
      <>
        {isModalOpen &&
          createPortal(
            <motion.div
              variants={animations.fadeUp}
              transition={{
                delay: 2,
                delayChildren: 2.5,
                staggerChildren: 0.2,
              }}
              initial='rest'
              animate='show'
              className='fixed top-0 left-0 z-50 w-full h-full bg-slate-950/95 lg:bg-slate-950/80 lg:backdrop-blur-sm grid place-items-center p-2 lg:p-0'
            >
              <div className='w-full max-w-screen-sm mx-auto relative'>
                <div className='grid grid-cols-[max-content,_20%,_1fr] gap-2'>
                  <div className='flex gap-[1px] sm:gap-1'>
                    <span className='w-[2px] h-[6px] sm:w-2 sm:h-3 bg-slate-50' />
                    <span className='w-[2px] h-[6px] sm:w-2 sm:h-3 bg-slate-50' />
                  </div>

                  <MrDefactoThirstTrap />

                  <div className='relative pr-5'>
                    <div>
                      <h5 className='bg-primary/40 border-x border-primary text-sm sm:text-base leading-tight text-slate-50 font-semibold w-max px-4 mb-2'>
                        MR DEFACTO
                      </h5>

                      <p className='text-slate-50 text-xs sm:text-sm tracking-tighter leading-tight'>
                        {tutorialText[currentTutorialIndex]}
                      </p>
                    </div>

                    <span className='absolute w-1 h-3 sm:w-2 sm:h-5 bg-slate-50 top-0 right-0' />
                  </div>
                </div>

                <div className='flex items-center justify-between gap-8 xs:gap-[20%] mt-5 sm:pl-7'>
                  <button
                    onClick={endTutorial}
                    className='flex gap-1 items-end w-full relative'
                  >
                    <span className='text-slate-50/50 text-xs sm:text-sm block leading-tight border-b border-slate-50/50 pl-5 w-max flex-1 text-right'>
                      Skip Tutorial
                    </span>

                    <span className='w-5 h-5 bg-slate-50/50' />
                    <span className='sm:w-[20%] h-2 bg-slate-50/50 absolute bottom-0 left-0' />
                  </button>

                  <button
                    onClick={handleTutorial}
                    className='bg-primary text-slate-50 h-6 px-2 pl-7 text-xs sm:text-sm'
                    style={{
                      clipPath:
                        'polygon(9% 0, 100% 0, 100% 100%, 0 100%, 0 40%)',
                    }}
                  >
                    {isTutorialEnd ? 'Selesai' : 'Lanjutkan'}
                  </button>
                </div>
              </div>
            </motion.div>,
            document.getElementById('emtris__dialog') as Element
          )}
      </>
    );
  }
);

function MrDefactoThirstTrap() {
  return (
    <div>
      <div className='pt-[calc((4/4)*100%)] bg-slate-300'></div>
    </div>
  );
}

export default GameTutorial;
