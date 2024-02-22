import {useContext} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

import {ActivePageContext} from '../../services/API/pageViewingManagerAPI';

import SwiperNavigation from './SwiperNavigation';
import StorylinePrologCard from '../ui/StorylinePrologCard';

import {getStorylineData} from '../../database/storyline/storylines';
import {StorylineIdTypes, StorylineTypes} from '../../services/utils/types';

export default function StorylineDetailChapterCardSlider() {
  const {activePage} = useContext(ActivePageContext);
  const storylines = getStorylineData(
    activePage?.state?.storylineId as StorylineIdTypes,
    activePage?.state?.storylineType as StorylineTypes
  );

  return (
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
          <StorylineDetailChapterCard />
        </SwiperSlide>
      ))}

      {storylines?.playableChapter.length && <SwiperNavigation />}
    </Swiper>
  );
}

function StorylineDetailChapterCard() {
  return (
    <div className='w-86 sm:w-96'>
      <div className='pt-[calc((4/3)*100%)] relative bg-yellow-100'>
        <div className='absolute top-0 left-0 w-full h-full'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio,
          ipsam?
        </div>
      </div>
    </div>
  );
}
