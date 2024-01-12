import {motion} from 'framer-motion';
import {StorylineCardTypes} from '../../services/utils/types';

export default function StorylineCard({
  storylineId,
  storylineTitle,
  storylineCardBackground,
  storylineType,
  ...rest
}: StorylineCardTypes) {
  return (
    <motion.div
      variants={{
        rest: {opacity: 0, x: 50},
        show: {opacity: 1, x: 0},
      }}
    >
      <button
        className='min-w-20 md:min-w-48 3xl:min-w-72 h-full p-2 pr-4 md:p-4 bg-background flex items-end text-base border-[1.5px] border-border relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-yellow-600 after:rounded-full after:pointer-events-none after:blur-md after:opacity-0 after:hover:opacity-20 after:transition-opacity'
        {...rest}
      >
        <h4 className='uppercase text-sm sm:text-base md:text-lg 3xl:text-2xl text-slate-50 relative z-10'>
          {storylineTitle}
        </h4>
        <span className='absolute block w-full h-full top-0 left-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent'></span>
      </button>
    </motion.div>
  );
}
