import {motion} from 'framer-motion';

import Icons from '../ui/Icons';

export default function EnergyBar() {
  const energyBars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
        {energyBars.map((bar) => (
          <motion.div
            variants={{
              rest: {opacity: 0, y: 50},
              show: {
                opacity: 1,
                y: 0,
              },
            }}
            transition={{damping: 50}}
            key={bar}
            className='w-[6px] sm:w-2 bg-slate-50/60 h-full'
          ></motion.div>
        ))}
      </motion.div>

      <button className='bg-yellow-400/40 rounded-full w-5 h-5 grid shrink-0 place-items-center border border-yellow-500'>
        <Icons.AddAlt className='w-[12px] h-[12px]' />
      </button>
    </div>
  );
}
