import {motion} from 'framer-motion';

import BackButton from '../components/ui/BackButton';
import StorylineDetailChapterCardSlider from '../components/slider/StorylineDetailChapterCardSlider';
import {Lines} from './Homepage';

import {homepageBackground} from '../assets/backgrounds/homepageBackground';

export default function StorylineDetailPage() {
  return (
    <section className='relative w-full h-full'>
      <div className='relative h-full w-full max-w-screen-sm mx-auto'>
        <BackButton
          goBackTo={{location: 'storylineSelectionPage'}}
          iconType='back'
        />

        {/* <StorylineDetailChapterCardSlider /> */}
      </div>

      {/* DECORATION */}
      <div className='absolute w-full h-full top-0 left-0 z-10 bg-gradient-to-r from-slate-950 via-transparent to-slate-950' />

      <Lines />
      <RectangeLeft />

      <motion.img
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        src={homepageBackground}
        className='w-full h-full object-cover brightness-50 absolute top-0 left-0 z-0'
        alt=''
      />
    </section>
  );
}

function RectangeLeft() {
  return (
    <div
      className='w-96 h-96 absolute bottom-0 left-0 z-10 backdrop-blur-sm bg-slate-950/20'
      style={{
        backgroundImage:
          'repeating-linear-gradient(45deg, rgba(210, 210, 210, 0.1) 0, rgba(210, 210, 210, 0.1) 1px, rgba(229,229,247,0) 0, rgba(229,229,247,0) 50%)',
        backgroundSize: '10px 10px',
        clipPath: 'polygon(0 0, 0% 100%, 100% 100%)',
      }}
    />
  );
}
