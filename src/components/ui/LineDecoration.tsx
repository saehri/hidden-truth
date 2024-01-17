import {motion} from 'framer-motion';

export default function LineDecoration() {
  return (
    <div className='flex items-center justify-center'>
      <motion.div
        initial={{width: 0}}
        animate={{width: '100%'}}
        className='h-[1px] rounded-full bg-yellow-700'
      ></motion.div>
    </div>
  );
}
