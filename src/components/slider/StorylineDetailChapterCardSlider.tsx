import {useContext} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {motion} from 'framer-motion';

import {ActivePageContext} from '../../services/API/pageViewingManagerAPI';

import SwiperNavigation from './SwiperNavigation';
import StorylinePrologCard from '../ui/StorylinePrologCard';

import {getStorylineData} from '../../database/storyline/storylines';
import {StorylineIdTypes, StorylineTypes} from '../../services/utils/types';
import StorylineDetailChapterCard from './StorylineDetailChapterCard';

export default function StorylineDetailChapterCardSlider() {
  const {activePage} = useContext(ActivePageContext);
  const storylines = getStorylineData(
    activePage?.state?.storylineId as StorylineIdTypes,
    activePage?.state?.storylineType as StorylineTypes
  );

  return (
    <motion.div
      variants={{
        rest: {opacity: 1},
        show: {
          opacity: 1,
          transition: {staggerChildren: 0.1, delayChildren: 0.3},
        },
      }}
      initial='rest'
      animate='show'
      className='h-full'
    >
      <Swiper
        slidesPerView={1}
        navigation
        grabCursor
        className='overflow-visible h-full'
      >
        <SwiperSlide className='grid place-items-center'>
          <StorylinePrologCard />
        </SwiperSlide>

        {storylines?.playableChapter.map((chapter) => (
          <SwiperSlide
            className='grid place-items-center'
            key={chapter.chapterName}
          >
            {(props) => <StorylineDetailChapterCard {...props} />}
          </SwiperSlide>
        ))}

        {storylines?.playableChapter.length && <SwiperNavigation />}
      </Swiper>
    </motion.div>
  );
}
