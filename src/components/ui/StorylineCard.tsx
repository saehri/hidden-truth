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
    <motion.button
      variants={{
        rest: {opacity: 0, x: 50},
        show: {opacity: 1, x: 0},
      }}
      {...(rest as any)}
      className='w-96'
    >
      <div className='w-full pt-[calc((4/3)*100%)] relative'>
        <div className='absolute top-0 left-0 w-full h-full bg-green-50 p-4'>
          <h2>{storylineTitle}</h2>
        </div>
      </div>
    </motion.button>
  );
}
