import {useContext} from 'react';
import {motion} from 'framer-motion';

import {ActivePageContext} from '../../services/API/pageViewingManagerAPI';

import StorylinePrologCard from '../ui/StorylinePrologCard';

import {getStorylineData} from '../../database/storyline/storylines';
import {StorylineIdTypes, StorylineTypes} from '../../services/utils/types';
import StorylineDetailChapterCard from './StorylineDetailChapterCard';

export default function StorylineDetailChapterCardSlider() {
  const {activePage} = useContext(ActivePageContext);
  const storylines = getStorylineData(
    activePage?.state?.storylineId as StorylineIdTypes
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
      className='fixed top-0 left-0 w-full h-full px-10 overflow-x-auto hideScrollbar'
    >
      <div className='h-full w-max flex gap-5 items-center'>
        {/* <StorylinePrologCard /> */}

        {storylines?.playableChapter.map((chapter, index) => (
          <StorylineDetailChapterCard
            games={chapter.games}
            title={chapter.chapterName}
            key={chapter.chapterName}
            chapterId={chapter.chapterId}
            chapterIndex={index + 1}
          />
        ))}
      </div>
    </motion.div>
  );
}
