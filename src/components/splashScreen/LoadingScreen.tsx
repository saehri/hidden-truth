import {motion} from 'framer-motion';
import {useLayoutEffect, useState} from 'react';
import {createPortal} from 'react-dom';

const loadingMessages: string[] = [
  '[REMEMBER] Life is too short for stress',
  '[REMEMBER] Nothing can stop you',
  '[REMEMBER] Beleive in your self',
  '[FUNFACT] Nama asli Mr Defacto adalah Darren Wijaya Defacto',
];

function pick(messages: string[]) {
  const index = Math.floor(Math.random() * messages.length);

  return messages[index];
}

const loadingDuration = 2;

export default function LoadingScreen() {
  const [messages, setMessages] = useState<string>();

  useLayoutEffect(() => {
    setMessages(pick(loadingMessages));
  }, []);

  return createPortal(
    <motion.div
      initial={{opacity: 1, y: 0}}
      animate={{opacity: 0, y: '100%'}}
      transition={{
        duration: 0.3,
        delay: loadingDuration + 0.5,
        y: {duration: 0, delay: loadingDuration + 0.8},
      }}
      className='absolute top-0 left-0 z-[100] w-full h-full flex flex-col justify-end py-8 bg-slate-950 polka-yellow'
    >
      <div className='w-full h-full max-w-[45%] mx-auto flex flex-col gap-6 justify-center items-center text-center text-border'>
        <p className='text-sm lg:text-base'>MEMUAT HALAMAN</p>

        <div className='w-full h-5 lg:h-8 border-2 border-border p-1 relative mb-8'>
          <motion.div
            initial={{width: 0}}
            animate={{width: '100%'}}
            transition={{duration: loadingDuration, ease: 'easeInOut'}}
            className='h-full bg-border'
          ></motion.div>
        </div>

        <p className='text-xs lg:text-sm'>{messages}</p>
      </div>
    </motion.div>,
    document.getElementById('emtris__dialog') as Element | DocumentFragment
  );
}
