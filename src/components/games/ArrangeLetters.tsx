import {useContext, useEffect, useState} from 'react';
import {AnimatePresence, Reorder} from 'framer-motion';
import {ActivePageContext} from '../../services/API/pageViewingManagerAPI';
import {
  ArrangeLettersGameDataTypes,
  GameStateTypes,
  GameTypes,
  StorylineIdTypes,
} from '../../services/utils/types';
import {getGameData} from '../../database/gameData';

import InGameCountdown from '../ui/InGameCountdown';
import GameEndingModal from '../modal/GameEndingModal';

export default function ArrangeLetters() {
  const [gameState, setGameState] = useState<GameStateTypes>('start');
  const {activePage} = useContext(ActivePageContext);
  const data: ArrangeLettersGameDataTypes = getGameData({
    gameId: activePage.state?.gameId as string,
    gameType: activePage.state?.gameType as GameTypes,
    storylineId: activePage.state?.storylineId as StorylineIdTypes,
  });
  const gameDuration =
    data.difficulty === 'easy' ? 60 : data.difficulty === 'medium' ? 190 : 60;

  return (
    <section className='w-full h-full max-w-[92%] flex mx-auto'>
      <InGameCountdown
        gameState={gameState}
        setGameState={setGameState}
        countdownDuration={gameDuration}
      />

      <div className='relative h-full flex w-full flex-col justify-between pt-36'>
        <ArrangeLettersCards
          answer={data.answer}
          data={data.scrambledLetters}
          setGameState={setGameState}
        />

        <div
          className='bg-slate-100 p-4 border border-border border-b-0 mx-auto w-full max-w-[50%] text-slate-950'
          style={{
            clipPath: 'polygon(10% 0%, 90% 0, 100% 100%, 0% 100%)',
          }}
        >
          <div className='max-w-[80%] mx-auto flex items-center gap-4'>
            <h6 className='bg-gradient-to-t rounded-full from-yellow-700 to-yellow-600 text-yellow-300 p-1 px-2 pt-2 w-max mb-4'>
              Clue
            </h6>

            <p className='text-slate-700'>{data.clue}</p>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {gameState === 'completed' && (
          <GameEndingModal
            status={gameState === 'completed' ? 'win' : 'over'}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function ArrangeLettersCards({
  data,
  answer,
  setGameState,
}: {
  data: string[];
  answer: string;
  setGameState: React.Dispatch<React.SetStateAction<GameStateTypes>>;
}) {
  const [gameData, setGameData] = useState<string[]>(data);

  useEffect(() => {
    const userAnswer = gameData.map((l) => l.split('_')[0]).join('');
    if (userAnswer === answer) {
      setTimeout(() => setGameState('completed'), 500);
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
          whileHover={{scale: 1.05}}
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
