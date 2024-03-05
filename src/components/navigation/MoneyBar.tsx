import {motion} from 'framer-motion';

import Icons from '../ui/Icons';

export default function MoneyBar() {
  return (
    <div className='flex items-center overflow-hidden'>
      <motion.span
        initial={{opacity: 0, y: 50}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.7, damping: 50}}
        className='block'
      >
        <Icons.MoneyAlt className='w-4' />
      </motion.span>

      <div className='font-semibold text-slate-50/70 mx-3 text-sm'>
        <motion.span
          initial={{opacity: 0, y: 50}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 1, damping: 50}}
          className='block'
        >
          2000
        </motion.span>
      </div>

      <button className='bg-yellow-400/40 rounded-full w-5 h-5 grid shrink-0 place-items-center border border-yellow-500'>
        <Icons.AddAlt className='w-[12px] h-[12px]' />
      </button>
    </div>
  );
}
