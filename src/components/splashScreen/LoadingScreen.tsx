import {motion} from 'framer-motion';
import {createPortal} from 'react-dom';

export default function LoadingScreen() {
  const loadingDuration = 1;

  return createPortal(
    <motion.div
      initial={{opacity: 1, y: 0}}
      animate={{opacity: 0, y: '100%'}}
      transition={{
        duration: 0.3,
        delay: loadingDuration + 0.5,
        y: {duration: 0, delay: loadingDuration + 0.8},
      }}
      className='absolute top-0 left-0 z-50 w-full h-full flex flex-col justify-end py-8 bg-slate-950'
    >
      <div className='w-full h-full max-w-[45%] mx-auto flex flex-col gap-8 justify-center items-center text-center text-border'>
        <p>MEMUAT HALAMAN</p>

        <div className='w-full h-8 border-2 border-border p-1 relative mb-8'>
          <motion.div
            initial={{width: 0}}
            animate={{width: '100%'}}
            transition={{duration: loadingDuration, ease: 'easeInOut'}}
            className='h-full bg-border'
          ></motion.div>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quasi
          optio facere sint nam voluptatem sunt minus iusto, omnis, inventore
          reprehenderit mollitia itaque nulla doloremque, magni vero assumenda
          laborum. Modi, illum quis. Laborum, enim saepe sed delectus a ad natus
          commodi magni quo nulla incidunt, vitae, modi ipsa fugit consectetur?
        </p>
      </div>
    </motion.div>,
    document.getElementById('emtris__dialog') as Element | DocumentFragment
  );
}
