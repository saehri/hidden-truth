import {motion} from 'framer-motion';

import Icons from '../ui/Icons';

export default function MoneyBar() {
  return (
    <div className='p-1 px-2 flex items-center gap-3'>
      <motion.span
        initial={{opacity: 0, x: -50}}
        animate={{opacity: 1, x: 0}}
        transition={{delay: 1.5}}
        className='block'
      >
        <Icons.MoneyBlack />
      </motion.span>

      <div className='font-body font-semibold text-background min-w-20 text-sm lg:text-base'>
        <motion.span
          initial={{opacity: 0, x: -50}}
          animate={{opacity: 1, x: 0}}
          transition={{delay: 1.7}}
          className='block'
        >
          2000
        </motion.span>
      </div>
    </div>
  );
}
