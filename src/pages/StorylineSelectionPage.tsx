import {motion} from 'framer-motion';

import BackButton from '../components/ui/BackButton';
import StorylineSlider from '../components/slider/StorylineSlider';

export default function StorylineSelectionPage() {
  return (
    <section className='w-full h-full'>
      <div className='max-w-screen-sm mx-auto h-full relative'>
        <BackButton
          buttonName='Tipe alur cerita'
          goBackTo={{location: 'homepage'}}
          iconType='back'
        />

        <StorylineSlider />
      </div>

      <LineDecoration />
    </section>
  );
}

function LineDecoration() {
  return (
    <div className='w-full h-full absolute top-0 left-0 z-40 sm:z-10 bg-blue-950/10 pointer-events-none'>
      <motion.div
        initial={{y: -100}}
        animate={{y: 0, transition: {delay: 0.5, damping: 50}}}
        className='absolute w-full h-16 bg-slate-900/10 backdrop-blur-sm border-b border-slate-300/10 flex items-center justify-between'
      >
        <motion.span
          initial={{width: 0}}
          animate={{width: '25%'}}
          transition={{delay: 0.8, damping: 50}}
          className='bg-slate-600/20 h-1 hidden sm:block'
        ></motion.span>
        <motion.span
          initial={{width: 0}}
          animate={{width: '25%'}}
          transition={{delay: 0.8, damping: 50}}
          className='bg-slate-600/20 h-1 hidden sm:block'
        ></motion.span>
      </motion.div>

      <motion.div
        initial={{y: 100}}
        animate={{y: 0, transition: {delay: 0.5, damping: 50}}}
        className='absolute hidden bottom-0 w-full h-16 bg-slate-900/10 backdrop-blur-sm sm:flex items-center justify-between border-t border-slate-300/10'
      >
        <motion.span
          initial={{width: 0}}
          animate={{width: '30%'}}
          transition={{delay: 0.8, damping: 50}}
          className='bg-slate-600/20 h-1'
        ></motion.span>

        <span className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 font-body uppercase text-slate-50/80'>
          PILIH ALUR CERITA
        </span>

        <motion.span
          initial={{width: 0}}
          animate={{width: '30%'}}
          transition={{delay: 0.8, damping: 50}}
          className='bg-slate-600/20 h-1'
        ></motion.span>
      </motion.div>
    </div>
  );
}
