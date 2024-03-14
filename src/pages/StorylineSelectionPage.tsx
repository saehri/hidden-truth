import {motion} from 'framer-motion';

import BackButton from '../components/ui/BackButton';
import StorylineSelectionTab from '../components/storyline-selection-tab/StorylineSelectionTab';
import {Lines, TriangleLeft, TriangleRight} from './Homepage';

import {homepageBackground} from '../assets/backgrounds/homepageBackground';

export default function StorylineSelectionPage() {
  return (
    <section className='w-full h-full relative'>
      <div className='h-full relative max-w-screen-sm mx-auto'>
        <BackButton goBackTo={{location: 'homepage'}} iconType='back' />

        <StorylineSelectionTab />
      </div>

      {/* DECORATION */}
      <div className='absolute w-full h-full top-0 left-0 z-20 bg-gradient-to-l from-slate-950/90 via-transparent to-slate-950/90'></div>
      <Block />

      <TriangleLeft />
      <TriangleRight />
      <Lines />

      {/* change the bg */}
      <img
        src={homepageBackground}
        className='w-full h-full object-cover brightness-75 absolute top-0 left-0 z-0'
        alt=''
      />
    </section>
  );
}

function Block() {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1]}}
      className='pointer-events-none absolute top-0 left-0 w-full h-full z-30 hidden lg:block'
    >
      <div className='topLeft w-20 h-10 bg-slate-50/10 absolute top-0 left-0'></div>
      <div className='topRight w-20 h-10 bg-slate-50/10 absolute top-0 right-0'></div>

      <div className='bottomLeft w-20 h-10 bg-slate-50/10 absolute bottom-0 left-0'></div>
      <div className='bottomRight w-20 h-10 bg-slate-50/10 absolute bottom-0 right-0'></div>
    </motion.div>
  );
}
