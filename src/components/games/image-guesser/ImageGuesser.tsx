import {useEffect} from 'react';
import {AnimatePresence, motion} from 'framer-motion';

import useGameController from '../../../services/hooks/useGameController';

import InGameCountdown from '../../ui/InGameCountdown';
import GameEndingModal from '../../modal/GameEndingModal';
import GameHeader from '../GameHeader';
import ImageGuesserContent from './ImageGuesserContent';

export default function ImageGuesser() {
  const customDuration = {easy: 120, medium: 100, hard: 80};
  const gameController = useGameController({customDuration});
  const {
    gameData,
    gameDuration,
    gameState,
    setGameState,
    playerLife,
    reducePlayerLife,
    isGameOver,
    isGameCompleted,
  } = gameController;

  useEffect(() => {
    // Handle the start of game
    const startTimer = setTimeout(() => setGameState('start'), 1 * 1000);

    return () => clearTimeout(startTimer);
  }, []);

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
          <ImageGuesserContent
            gameData={gameData}
            reducePlayerLife={reducePlayerLife}
            setGameState={setGameState}
          />
        </div>
      </div>

      {playerLife === 1 && (
        <motion.div
          animate={{opacity: [0.2, 0.1, 0.2]}}
          transition={{repeat: Infinity, duration: 1.5}}
          className='fixed top-0 left-0 bg-red-500/50 w-full h-full z-50 pointer-events-none'
        />
      )}

      <AnimatePresence>
        {(isGameOver || isGameCompleted) && (
          <GameEndingModal status={gameState} />
        )}
      </AnimatePresence>
    </section>
  );
}
