import {memo, useEffect} from 'react';

import GameEndingModal from '../../modal/game-ending-modal/GameEndingModal';
import InGameCountdown from '../../ui/InGameCountdown';
import ReportDisinformation from './ReportDisinformation';
import useGameController from '../../../services/hooks/useGameController';
import GameTutorial from '../../game-tutorial/GameTutorial';
import BlinkingRedLayer from '../../ui/BlinkingRedLayer';
import GameHeader from '../GameHeader';

const tutorialText = [
  'Kamu benar - benar luar biasa! Kamu bisa bertahan sejauh ini, sangat hebat sekali',
  'Di misi kali ini kamu akan diberikan beberapa postingan sosial media',
  'Tugasmu adalah untuk mengidentifikasi kategori disinformasi yang ada pada postingan tersebut',
  'Jika kamu gagal menebak kategori disinformasi yang ada dalam suatu postingan, maka nyawamu akan berkurang sejumlah kategori yang salah kamu tebak',
  'Harap diingat tidak semua postingan yang diberikan mengandung disinformasi',
  'Pesan terakhir dariku, jika kamu merasa terhambat kamu bisa memulai ulang misi ini',
  'Selamat bertugas!',
];

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
    initialLife: 5,
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

      <div className='w-full h-full flex flex-col gap-8 mx-auto max-w-screen-sm pt-16'>
        <GameHeader playerLife={playerLife} />

        <div className='overflow-y-auto hideScrollbar'>
          {!hideGame && (
            <ReportDisinformation
              gameState={gameState}
              posts={gameData.data}
              reducePlayerLife={reducePlayerLife}
              totalDisinformation={gameData.totalDisinformationCategory}
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
});

export default ReportDisinformationGame;
