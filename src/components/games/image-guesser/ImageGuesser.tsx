import {useEffect} from 'react';
import {AnimatePresence} from 'framer-motion';

import useGameController from '../../../services/hooks/useGameController';

import InGameCountdown from '../../ui/InGameCountdown';
import GameEndingModal from '../../modal/GameEndingModal';
import GameHeader from '../GameHeader';
import ImageGuesserContent from './ImageGuesserContent';

export default function ImageGuesser() {
  const customDuration = {easy: 10000, hard: 10000, medium: 10000};
  const gameController = useGameController({customDuration});
  const {
    gameData,
    gameDuration,
    gameState,
    setGameState,
    playerLife,
    reducePlayerLife,
    isGameOver,
  } = gameController;

  // useEffect(() => {
  //   // Handle the start of game
  //   const startTimer = setTimeout(() => setGameState('start'), 1 * 1000);

  //   return () => clearTimeout(startTimer);
  // }, []);

  return (
    <section className='w-full h-full'>
      <InGameCountdown
        gameState={gameState}
        setGameState={setGameState}
        countdownDuration={gameDuration}
      />

      <div className='w-full h-full flex flex-col mx-auto max-w-screen-sm py-16'>
        <GameHeader playerLife={playerLife} />

        <div className='flex-1 flex items-center'>
          <ImageGuesserContent gameData={gameData} />
        </div>
      </div>

      <AnimatePresence>
        {isGameOver && <GameEndingModal status={gameState} />}
      </AnimatePresence>
    </section>
  );
}
