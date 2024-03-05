import {motion} from 'framer-motion';

import BackButton from '../components/ui/BackButton';
import StorylineDetailChapterCardSlider from '../components/slider/StorylineDetailChapterCardSlider';
import {Lines} from './Homepage';

import {homepageBackground} from '../assets/backgrounds/homepageBackground';

export default function StorylineDetailPage() {
  return (
    <section className='relative w-full h-full'>
      <div className='relative z-10 h-full w-full max-w-screen-sm mx-auto'>
        <BackButton
          goBackTo={{location: 'storylineSelectionPage'}}
          iconType='back'
        />

        <StorylineDetailChapterCardSlider />
      </div>

      {/* DECORATION */}
      <Lines />

      <motion.img
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        src={homepageBackground}
        className='w-full h-full object-cover brightness-[.1] sm:brightness-[.3] absolute top-0 left-0 z-0'
        alt=''
      />
    </section>
  );
}
