import {Dispatch, SetStateAction} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {ImageGuesserGameDataTypes} from '../../services/utils/types';

interface Props {
  gameData: ImageGuesserGameDataTypes[];
  setStart: Dispatch<SetStateAction<boolean>>;
}

export default function ImageGuesserCards({gameData, setStart}: Props) {
  return (
    <motion.div
      initial='hide'
      animate='show'
      exit='exit'
      variants={{
        hide: {opacity: 0},
        show: {
          opacity: 1,
          transition: {
            delay: 0.7,
            staggerChildren: 0.1,
            delayChildren: 1.8,
            staggerDirection: -1,
          },
        },
      }}
      onAnimationComplete={() => setStart(true)}
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
                className='absolute top-0 left-0 w-full h-full object-cover'
                alt=''
              />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}

{
  /*  */
}
