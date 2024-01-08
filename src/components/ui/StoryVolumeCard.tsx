import {motion} from 'framer-motion';
import {StoryVolumeCardTypes} from '../../services/utils/types';

export default function StoryVolumeCard({
  volumeId,
  volumeTile,
  volumeCardBackground,
  ...rest
}: StoryVolumeCardTypes) {
  return (
    <motion.div
      variants={{
        rest: {opacity: 0, x: 50},
        show: {opacity: 1, x: 0},
      }}
      whileHover={{y: -10}}
    >
      <button
        style={{clipPath: 'polygon(9% 0, 100% 0%, 91% 100%, 0% 100%)'}}
        className='min-w-48 3xl:min-w-72 h-full p-4 flex items-end text-base border-[1.5px] border-border relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-yellow-600 after:rounded-full after:pointer-events-none after:blur-md after:opacity-0 after:hover:opacity-20 after:transition-opacity'
        {...rest}
      >
        <h4 className='uppercase italic text-lg 3xl:text-2xl text-[#FBE886] relative z-10'>
          {volumeTile}
        </h4>
        <span
          className='absolute block w-full h-full top-0 left-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent'
          style={{clipPath: 'polygon(9% 0, 100% 0%, 91% 100%, 0% 100%)'}}
        ></span>
      </button>
    </motion.div>
  );
}
