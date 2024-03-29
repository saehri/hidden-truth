import {useEffect} from 'react';

import useGameController from '../../../services/hooks/useGameController';

import InGameCountdown from '../../ui/InGameCountdown';
import GameEndingModal from '../../modal/game-ending-modal/GameEndingModal';
import GameHeader from '../GameHeader';
import ImageGuesserContent from './ImageGuesserContent';
import BlinkingRedLayer from '../../ui/BlinkingRedLayer';
import GameTutorial from '../../game-tutorial/GameTutorial';

/* used in the game tutorial component */
const tutorialText: string[] = [
  'Selamat datang di game pertama kamu!',
  'Di game ini kamu harus mencari makna tersembunyi dari gambar yang disediakan',
  'Kamu punya tiga kesempatan untuk menjawab',
  'Cari makna tersembunyi gambar dengan cepat sebelum waktu habis',
  'Selamat bertugas!',
];

export default function ImageGuesser() {
  const customDuration = {easy: 50, medium: 40, hard: 30};
  const gameController = useGameController({customDuration});
  const {
    gameData,
    gameDuration,
    gameState,
    setGameState,
    playerLife,
    reducePlayerLife,
  } = gameController;

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
            <ImageGuesserContent
              gameState={gameState}
              gameData={gameData.data}
              reducePlayerLife={reducePlayerLife}
              setGameState={setGameState}
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
}
