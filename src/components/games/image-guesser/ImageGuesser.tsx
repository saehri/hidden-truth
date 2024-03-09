import {useEffect} from 'react';
import {AnimatePresence, motion} from 'framer-motion';

import useGameController from '../../../services/hooks/useGameController';

import InGameCountdown from '../../ui/InGameCountdown';
import GameEndingModal from '../../modal/GameEndingModal';
import GameHeader from '../GameHeader';
import ImageGuesserContent from './ImageGuesserContent';
import BlinkingRedLayer from '../../ui/BlinkingRedLayer';

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
          <ImageGuesserContent
            gameData={gameData}
            reducePlayerLife={reducePlayerLife}
            setGameState={setGameState}
          />
        </div>
      </div>

      <BlinkingRedLayer playerLife={playerLife} />
      <GameEndingModal status={gameState} />
    </section>
  );
}
