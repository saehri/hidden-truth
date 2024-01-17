import {useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import {getStorylineData} from '../../database/storyline/storylines';
import {
  StorylineChapterTypes,
  StorylineDataTypes,
  StorylineIdTypes,
  StorylineTypes,
} from '../../services/utils/types';

import StorylineDetailGameCard from './StorylineDetailGameCard';

interface StorylineDetailChapterCard {
  storylineId: StorylineIdTypes;
  storylineType: StorylineTypes;
}

export default function StorylineDetailChapterCard({
  storylineId,
  storylineType,
}: StorylineDetailChapterCard) {
  const [storylineData] = useState<StorylineDataTypes>(
    getStorylineData(
      storylineId,
      storylineType
    ) as unknown as StorylineDataTypes
  );
  const playableChapterLength = storylineData.playableChapter.length;

  return (
    <div
      style={{gridTemplateColumns: `repeat(${playableChapterLength}, 420px)`}}
      className='grid w-full'
    >
      {storylineData?.playableChapter.map((ch) => (
        <div key={ch.chapterName}>
          <div className='w-full relative pt-[100%]'>
            <img
              src='/decoration/thumbtack.webp'
              width={60}
              height={60}
              className='absolute -top-2 -right-2 z-20 rotate-[90deg]'
            />
            <Card ch={ch} />
          </div>
        </div>
      ))}
    </div>
  );
}

interface CardProps {
  ch: StorylineChapterTypes;
}

function Card({ch}: CardProps) {
  return (
    <div
      className='absolute top-0 left-0 w-full bg-slate-100 p-4 shadow-md origin-top-right -rotate-3 hover:rotate-0 transition-transform'
      style={{perspective: '100px'}}
    >
      <div className='border border-slate-400 w-full'>
        <button className='p-1 pt-2 px-4 w-full mb-1 flex items-center justify-between'>
          <h4 className='text-sm uppercase text-slate-800 font-normal'>
            {ch.chapterName}
          </h4>
        </button>
        <motion.div className='flex flex-col text-left'>
          {ch.games.map((g, index) => (
            <StorylineDetailGameCard
              chapterName={ch.chapterName}
              gameId={g.gameId}
              gameLocation={g.location}
              gameName={g.gameName}
              gameType={g.gameType}
              hasOpeningDialog={g.hasOpeningDialog}
              key={g.gameId}
              index={index + 1}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
