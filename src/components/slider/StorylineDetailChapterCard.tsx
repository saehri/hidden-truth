import {motion} from 'framer-motion';

interface StorylineDetailChapterCard {
  isActive: boolean;
  isPrev: boolean;
  isNext: boolean;
  isVisible: boolean;
}

export default function StorylineDetailChapterCard({
  isActive,
}: StorylineDetailChapterCard) {
  return (
    <motion.div
      variants={{
        rest: {opacity: 0, x: 50, rotate: 15, y: 200},
        show: {opacity: isActive ? 1 : 0.8, x: 0, rotate: 0, y: 0},
      }}
      animate={{
        scale: isActive ? 1 : 0.9,
        opacity: isActive ? 1 : 0.8,
      }}
      className='w-86 sm:w-96'
    >
      <div className='pt-[calc((4/3)*100%)] relative'>
        <div className='absolute top-0 left-0 w-full h-full p-4 z-50 bg-gradient-to-tr from-yellow-600 to-yellow-500 shadow-lg shadow-slate-950'>
          <h5 className='font-semibold'>CHAPTER 1 - JUDUL CHAPTER</h5>
        </div>

        <div className='absolute -top-[7px] left-2 w-full h-[95%] bg-gradient-to-tr from-yellow-900 to-yellow-800 -rotate-2'></div>
      </div>
    </motion.div>
  );
}
