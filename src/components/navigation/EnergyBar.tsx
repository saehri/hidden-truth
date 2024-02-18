import {motion} from 'framer-motion';

import Icons from '../ui/Icons';

export default function EnergyBar() {
  const energyBars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className='p-1 px-2 flex items-center gap-3 border-r border-slate-200'>
      <motion.span
        initial={{opacity: 0, x: 50}}
        animate={{opacity: 1, x: 0}}
        transition={{delay: 0.7}}
      >
        <Icons.EnergyBlack className='w-[11px] h-4' />
      </motion.span>

      <motion.div
        transition={{staggerChildren: 0.05, delayChildren: 0.9}}
        initial='rest'
        animate='show'
        className='flex items-center gap-[2px] w-full h-4'
      >
        {energyBars.map((bar) => (
          <motion.div
            variants={{
              rest: {opacity: 0, x: 50},
              show: {
                opacity: 1,
                x: 0,
              },
            }}
            transition={{duration: 0.7}}
            key={bar}
            className='w-2 bg-background h-full'
          ></motion.div>
        ))}
      </motion.div>
    </div>
  );
}
