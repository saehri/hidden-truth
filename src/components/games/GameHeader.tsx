import {memo, useContext} from 'react';
import {ActivePageContext} from '../../services/API/pageViewingManagerAPI';
import {GameDifficultyTypes, GameTypes} from '../../services/utils/types';
import {twMerge} from 'tailwind-merge';
import {motion} from 'framer-motion';
import Icons from '../ui/Icons';

const gameTypes: Record<GameTypes, string> = {
  RD: 'LAPOR DISINFORMASI',
  TG: 'TEBAK GAMBAR',
};

const animations = {
  wipe: {hide: {width: 0}, show: {width: 'auto'}},
  popUp: {hide: {y: 20, opacity: 0}, show: {y: 0, opacity: 1}},
};

type GameHeaderTypes = {playerLife: number};

const GameHeader = memo(({playerLife}: GameHeaderTypes) => {
  const {activePage} = useContext(ActivePageContext);

  const playerLifes = Array(playerLife).fill(1);
  const chapterName: string = activePage.state?.chapterName as string;
  const gameDifficulty: GameDifficultyTypes = activePage.state
    ?.gameDifficulty as GameDifficultyTypes;
  const gameType: string = gameTypes[activePage.state?.gameType as GameTypes];

  const gameDifficultyCardColor: Record<GameDifficultyTypes, string> = {
    easy: 'bg-green-600',
    medium: 'bg-yellow-600',
    hard: 'bg-red-600',
  };

  return (
    <motion.div
      initial='hide'
      animate='show'
      transition={{staggerChildren: 0.1, delayChildren: 0.8, damping: 50}}
      className='w-full h-max flex gap-5 justify-between p-2 md:p-0 md:pl-2 border-l border-slate-50/60'
    >
      <div>
        <motion.div
          variants={animations.wipe}
          transition={{delayChildren: 0.5}}
          className='overflow-hidden'
        >
          <p className='tracking-tighter flex gap-2 lg:backdrop-blur-sm uppercase text-slate-300 bg-slate-600/40 w-max p-1 text-sm pr-6 mb-1'>
            <span className='hidden sm:block'>{chapterName}</span>
            <span className='hidden sm:block'>|</span>
            <span>{gameType}</span>
          </p>
        </motion.div>

        <motion.div variants={animations.wipe} className='overflow-hidden'>
          <p
            className={twMerge(
              'bg-primary text-slate-950 uppercase text-xs pr-6 pl-1 block w-max',
              gameDifficultyCardColor[gameDifficulty]
            )}
          >
            {gameDifficulty}
          </p>
        </motion.div>
      </div>

      <div className='flex flex-col items-end gap-1 uppercase'>
        <motion.div variants={animations.wipe} className='overflow-hidden'>
          <p className='bg-slate-600/40 lg:backdrop-blur-sm w-max text-slate-300 border-x border-slate-50/60 text-center text-xs px-4'>
            Your Life
          </p>
        </motion.div>

        <motion.div
          initial='hide'
          animate='show'
          transition={{staggerChildren: 0.1, delayChildren: 1, damping: 50}}
          className='w-max flex gap-1'
        >
          {playerLifes.map((_, index) => (
            <motion.div
              key={index + _}
              variants={animations.popUp}
              className={twMerge(
                playerLife === 1 ? 'animate-pulse' : 'animate-none'
              )}
            >
              <Icons.Heart fill='rgb(220, 38, 38)' />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
});

export default GameHeader;
