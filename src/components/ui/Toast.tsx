import {useEffect} from 'react';
import {motion} from 'framer-motion';
import {twMerge} from 'tailwind-merge';

import Icons from './Icons';

interface ToastProps {
  backgroundColor: string;
  title: string;
  detail: string;
  closeAction: () => void;
  closeDelay?: number;
}

export default function Toast({
  backgroundColor,
  closeAction,
  detail,
  title,
  closeDelay = 5,
}: ToastProps) {
  useEffect(() => {
    const timeout = setTimeout(() => closeAction(), closeDelay * 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.div
      initial={{height: 0, opacity: 0}}
      animate={{height: 'auto', opacity: 1}}
      exit={{height: 0, opacity: 0}}
      className='overflow-hidden absolute bottom-4 lg:top-4 left-1/2 -translate-x-1/2 z-50 min-w-80 max-w-96 shadow-xl'
    >
      <div
        className={twMerge(
          'p-3 border border-yellow-500 relative',
          backgroundColor
        )}
      >
        <h4 className='font-semibold text-xs lg:text-sm text-yellow-500 mb-2'>
          {title}
        </h4>

        <p className='text-slate-200 text-xs lg:text-sm'>{detail}</p>

        <button className='absolute top-2 right-2' onClick={closeAction}>
          <Icons.CloseCircled className='w-4 h-4 lg:w-5 lg:h-5' />
        </button>
      </div>
    </motion.div>
  );
}
