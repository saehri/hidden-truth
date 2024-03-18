import {motion} from 'framer-motion';

import useCharacterController from '../../services/controller/characterController';

import Icons from '../ui/Icons';

export default function MoneyBar() {
  const characterController = useCharacterController();
  const moneyCount = characterController.character?.money as number;

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
          {moneyCount}
        </motion.span>
      </div>
    </div>
  );
}
