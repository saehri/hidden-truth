import {memo} from 'react';
import {motion} from 'framer-motion';
import {twMerge} from 'tailwind-merge';

import useCharacterController from '../../services/controller/characterController';

import Icons from '../ui/Icons';

const EnergyBar = memo(() => {
  const energyBars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const characterController = useCharacterController();
  const energyCount = characterController.character?.energy?.current as number;

  return (
    <div className='p-1 px-2 flex items-center overflow-hidden'>
      <motion.span
        initial={{opacity: 0, y: 50}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.8, damping: 50}}
      >
        <Icons.EnergyAlt className='w-[11px] h-4' />
      </motion.span>

      <motion.div
        transition={{staggerChildren: 0.01, delayChildren: 0.9}}
        initial='rest'
        animate='show'
        className='flex items-center gap-[2px] w-full h-3 mx-3'
      >
        {energyBars.map((bar, index) => (
          <motion.div
            variants={{
              rest: {opacity: 0, y: 50},
              show: {
                opacity: index + 1 > energyCount ? 0.2 : 1,
                y: 0,
              },
            }}
            animate={{opacity: index + 1 > energyCount ? 0.2 : 1}}
            transition={{damping: 50}}
            key={bar}
            className={twMerge('w-[6px] sm:w-2 bg-slate-50/60 h-full')}
          ></motion.div>
        ))}
      </motion.div>
    </div>
  );
});

export default EnergyBar;
