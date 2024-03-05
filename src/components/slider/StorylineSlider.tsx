import {motion} from 'framer-motion';
import {useContext} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

import StorylineCard from './StorylineCard';

import {getStorylineCards} from '../../database/storyline/storylines';
import {ActivePageContext} from '../../services/API/pageViewingManagerAPI';

// Import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import SwiperNavigation from './SwiperNavigation';
import {Circle} from '../../pages/Homepage';

export default function StorylineSlider() {
  const {setActivePage} = useContext(ActivePageContext);
  const storylines = getStorylineCards();

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
      className='w-full h-full relative'
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        pagination
        navigation
        grabCursor
        className='h-full relative z-50'
      >
        {storylines.map((storyline, index) => (
          <SwiperSlide
            key={storyline.id}
            className='w-full h-full flex items-center justify-center'
          >
            {({isActive}) => (
              <StorylineCard
                isActive={isActive}
                {...storyline}
                onClick={() =>
                  setActivePage({
                    location: 'storylineDetailPage',
                    state: {
                      storylineId: storyline.id,
                      storylineType: storyline.types,
                      storylineTitle: storyline.title,
                    },
                  })
                }
              />
            )}
          </SwiperSlide>
        ))}

        {storylines.length > 1 && <SwiperNavigation />}
      </Swiper>
      <Circle withColor={false} />
    </motion.div>
  );
}
