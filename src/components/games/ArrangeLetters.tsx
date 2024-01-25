import {useContext, useEffect, useState} from 'react';
import {Reorder} from 'framer-motion';
import {ActivePageContext} from '../../services/API/pageViewingManagerAPI';
import {
  ArrangeLettersGameDataTypes,
  GameStateTypes,
  GameTypes,
  StorylineIdTypes,
} from '../../services/utils/types';

import InGameCountdown from '../ui/InGameCountdown';
import ChapterLevelSplashScreen from '../splashScreen/ChapterLevelSplashScreen';
import {getGameData} from '../../database/gameData';

export default function ArrangeLetters() {
  const [gameState, setGameState] = useState<GameStateTypes>('start');
  const {activePage} = useContext(ActivePageContext);
  const data: ArrangeLettersGameDataTypes = getGameData({
    gameId: activePage.state?.gameId as string,
    gameType: activePage.state?.gameType as GameTypes,
    storylineId: activePage.state?.storylineId as StorylineIdTypes,
  });
  const gameDuration =
    data.difficulty === 'easy'
      ? 6000
      : data.difficulty === 'medium'
      ? 4500
      : 3000;

  return (
    <section className='w-full h-full max-w-[92%] flex mx-auto'>
      <InGameCountdown
        gameState={gameState}
        setGameState={setGameState}
        countdownDuration={gameDuration}
      />

      <div className='relative h-full flex w-full flex-col justify-between py-36'>
        <ArrangeLettersCards
          answer={data.answer}
          data={data.scrambledLetters}
        />

        <div className='bg-background p-4 border border-border mx-auto max-w-96 text-yellow-500'>
          {data.clue}
        </div>
      </div>

      {/* <ChapterLevelSplashScreen
        isOpen={gameState === 'preparation'}
        levelInfo='Tebak Gambar'
        levelName={activePage.state?.gameName as string}
      /> */}
    </section>
  );
}

function ArrangeLettersCards({data, answer}: {data: string[]; answer: string}) {
  const [gameData, setGameData] = useState<string[]>(data);

  useEffect(() => {
    const userAnswer = gameData.map((l) => l.split('_')[0]).join('');
    if (userAnswer === answer) {
      console.log('win');
    }
  }, [gameData]);

  return (
    <Reorder.Group
      values={gameData}
      onReorder={setGameData}
      className='grid gap-2 w-full'
      style={{gridTemplateColumns: `repeat(${gameData.length}, 1fr)`}}
      axis='x'
      variants={{
        rest: {opacity: 1},
        show: {
          opacity: 1,
          transition: {staggerChildren: 0.1, delayChildren: 0.3},
        },
      }}
      initial='rest'
      animate='show'
    >
      {gameData.map((l) => (
        <Reorder.Item
          key={l}
          value={l}
          className='h-full bg-gradient-to-tl from-slate-300 via-slate-200 to-white shadow-md w-full pt-[100%] relative'
          variants={{
            rest: {y: 50, opacity: 0},
            show: {y: 0, opacity: 1},
          }}
        >
          <div className='absolute top-0 left-0 w-full h-full grid place-items-center uppercase text-sm xl:text-4xl'>
            {l.split('_')[0]}
          </div>
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}
