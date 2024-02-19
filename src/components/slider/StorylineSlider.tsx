import {motion} from 'framer-motion';
import {useContext} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

import StorylineCard from '../ui/StorylineCard';

import {getStorylineCards} from '../../database/storyline/storylines';
import {ActivePageContext} from '../../services/API/pageViewingManagerAPI';

// Import swiper styles
import 'swiper/css';

import SwiperNavigation from './SwiperNavigation';

export default function StorylineSlider() {
  const {setActivePage} = useContext(ActivePageContext);
  const storylineCards = getStorylineCards();

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
        slidesPerView={'auto'}
        spaceBetween={0}
        navigation
        grabCursor
        className='overflow-visible h-full'
      >
        {storylineCards.map((card, index) => (
          <SwiperSlide
            key={card.storylineId + index}
            className='w-max h-full p-8 flex items-center'
          >
            {({isActive, isPrev, isNext, isVisible}) => (
              <StorylineCard
                isActive={isActive}
                isNext={isNext}
                isPrev={isPrev}
                isVisible={isVisible}
                {...card}
                onClick={() =>
                  setActivePage({
                    location: 'storylineDetailPage',
                    state: {
                      storylineId: card.storylineId,
                      storylineType: card.storylineType,
                      storylineTitle: card.storylineTitle,
                    },
                  })
                }
              />
            )}
          </SwiperSlide>
        ))}

        {storylineCards.length > 1 && <SwiperNavigation />}
      </Swiper>
    </motion.div>
  );
}
