import {useState} from 'react';
import {useSwiper} from 'swiper/react';
import {AnimatePresence, motion} from 'framer-motion';

import Icons from '../ui/Icons';

export default function SwiperNavigation() {
  const swiper = useSwiper();
  const [isEnding, setIsEnding] = useState<boolean>(swiper.isEnd);
  const [isBeginning, setIsBeginning] = useState<boolean>(swiper.isBeginning);

  function handleNext() {
    swiper.slideNext();
    setIsEnding(swiper.isEnd);
    setIsBeginning(swiper.isBeginning);
  }

  function handlePrev() {
    swiper.slidePrev();
    setIsEnding(swiper.isEnd);
    setIsBeginning(swiper.isBeginning);
  }

  return (
    <AnimatePresence>
      {!isEnding && (
        <motion.button
          key={'nextButton'}
          initial={{scale: 0.8, opacity: 0}}
          animate={{scale: 1, opacity: 1}}
          exit={{scale: 0.8, opacity: 0}}
          whileTap={{scale: 0.7}}
          onClick={handleNext}
          className='fixed top-1/2 -translate-y-1/2 -right-36 xl:-right-44 z-[1000] bg-yellow-600 rounded-full w-10 h-10 hidden lg:grid lg:place-items-center border-none outline-none'
        >
          <span className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
            <Icons.Back className='rotate-180' />
          </span>
        </motion.button>
      )}

      {!isBeginning && (
        <motion.button
          key={'prevButton'}
          initial={{scale: 0.8, opacity: 0}}
          animate={{scale: 1, opacity: 1}}
          exit={{scale: 0.8, opacity: 0}}
          whileTap={{scale: 0.7}}
          onClick={handlePrev}
          className='fixed top-1/2 -translate-y-1/2 -left-36 xl:-right-44 z-[1000] bg-yellow-600 rounded-full w-10 h-10 hidden lg:grid lg:place-items-center border-none outline-none'
        >
          <span className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
            <Icons.Back className='w-5 h-5' />
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
