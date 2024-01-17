import {Dispatch, SetStateAction} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {
  GameStateTypes,
  ImageGuesserGameDataTypes,
} from '../../services/utils/types';
import {twMerge} from 'tailwind-merge';

interface Props {
  gameData: ImageGuesserGameDataTypes[];
  setStart: Dispatch<SetStateAction<GameStateTypes>>;
  gameState: GameStateTypes;
}

export default function ImageGuesserCards({
  gameData,
  setStart,
  gameState,
}: Props) {
  return (
    <motion.div
      initial='hide'
      animate='show'
      exit='exit'
      variants={{
        hide: {opacity: 0, y: -100},
        show: {
          y: 0,
          opacity: 1,
          transition: {
            delay: 2.8,
            staggerChildren: 0.1,
            delayChildren: 3.2,
            staggerDirection: -1,
          },
        },
      }}
      onAnimationComplete={() => setStart('start')}
      className='absolute top-0 left-0 w-full h-full'
    >
      <AnimatePresence mode='popLayout'>
        {gameData.map((x, i) => (
          <motion.div
            key={x.id}
            animate={{
              y: i * 30,
              x: i * -5,
              rotate: 0.1 * (i * 10),
            }}
            exit={{x: '100%', opacity: 0}}
            variants={{
              hide: {y: -200 + i * 5, x: 0, rotate: 0.1 * (i * 1)},
              show: {
                y: i * 25,
                x: i * -5,
                rotate: 0.1 * (i * 10),
                transition: {
                  duration: 0.1,
                  ease: [0.85, 0.44, 0.12, 0.62],
                },
              },
            }}
            style={{
              zIndex: 20 - i,
            }}
            className='w-full bg-white p-6 pb-20 mb-10 absolute top-0 left-0 shadow-lg border border-slate-400/60'
          >
            <div className='w-full pt-[calc((9/16)*100%)] relative'>
              <img
                src={x.imageLink}
                className={twMerge(
                  'absolute top-0 left-0 w-full h-full object-cover transition-all duration-300 pointer-events-none',
                  gameState === 'paused' || gameState === 'preparation'
                    ? 'brightness-0'
                    : 'brightness-100'
                )}
                alt=''
                draggable='false'
              />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
