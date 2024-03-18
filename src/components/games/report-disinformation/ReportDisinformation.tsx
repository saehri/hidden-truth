import {memo, useEffect, useState} from 'react';
import {motion} from 'framer-motion';

import {GameStateTypes, RDPostTypes} from '../../../services/utils/types';
import ReportDisinformationPost from './ReportDisinformationPost';
import {twMerge} from 'tailwind-merge';

interface ReportDisinformation {
  posts: RDPostTypes[];
  gameState: GameStateTypes;
  reducePlayerLife: (x: number) => void;
  totalDisinformation: number;
  setGameState: (state: GameStateTypes) => void;
}

const ReportDisinformation = memo(
  ({
    posts,
    gameState,
    reducePlayerLife,
    totalDisinformation,
    setGameState,
  }: ReportDisinformation) => {
    const [disinformationCount] = useState<number>(totalDisinformation);
    const [userCorrectAnswerCount, setUserCorrectAnswerCount] =
      useState<number>(0);

    useEffect(() => {
      if (userCorrectAnswerCount === disinformationCount) {
        setGameState('completed');
      }
    }, [userCorrectAnswerCount]);

    return (
      <motion.section
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        className={twMerge(
          'h-max grid place-items-center overflow-hidden transition-all',
          gameState === 'paused' ? 'brightness-0' : 'brightness-100'
        )}
      >
        <div className='flex flex-col gap-4 pb-36 lg:pb-14 p-2 lg:p-0'>
          {posts.map((data, index) => (
            <ReportDisinformationPost
              index={index + 1}
              key={data.postId}
              reducePlayerLife={reducePlayerLife}
              setUserCorrectAnswerCount={setUserCorrectAnswerCount}
              {...data}
            />
          ))}
        </div>
      </motion.section>
    );
  }
);

export default ReportDisinformation;
