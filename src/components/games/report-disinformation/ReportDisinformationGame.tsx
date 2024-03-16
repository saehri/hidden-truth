import {memo, useEffect} from 'react';

import GameEndingModal from '../../modal/game-ending-modal/GameEndingModal';
import InGameCountdown from '../../ui/InGameCountdown';
import ReportDisinformation from './ReportDisinformation';
import useGameController from '../../../services/hooks/useGameController';
import GameTutorial from '../../game-tutorial/GameTutorial';
import BlinkingRedLayer from '../../ui/BlinkingRedLayer';
import GameHeader from '../GameHeader';

const tutorialText = ['text', 'text'];

const ReportDisinformationGame = memo(() => {
  const {
    gameData,
    gameDuration,
    gameState,
    setGameState,
    playerLife,
    reducePlayerLife,
  } = useGameController({
    customDuration: {easy: 5000, hard: 5000, medium: 5000},
  });

  const hideGame = ['gameOver', 'completed', 'preparation'].includes(gameState);

  useEffect(() => {
    let startTimer: any;
    if (!gameData.hasTutorial) {
      // Start the game after 1 seconds delay
      startTimer = setTimeout(() => setGameState('start'), 1 * 1000);
    }

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
          {!hideGame && (
            <ReportDisinformation
              gameState={gameState}
              gameData={gameData.data}
            />
          )}
        </div>
      </div>

      <GameTutorial
        isOpen={gameData.hasTutorial && gameState === 'preparation'}
        onTutorialEnd={() => setGameState('start')}
        tutorialText={tutorialText}
      />
      <BlinkingRedLayer playerLife={playerLife} />
      <GameEndingModal status={gameState} gameRewards={gameData.rewards} />
    </section>
  );
});

export default ReportDisinformationGame;
