import InGameCountdown from '../../ui/InGameCountdown';
import GameEndingModal from '../../modal/GameEndingModal';

import useGameController from '../../../services/hooks/useGameController';
import ArrangeLettersCards from './ArrangeLetters';

export default function ArrangeLetters() {
  const {gameData, gameDuration, gameState, setGameState} = useGameController();

  return (
    <section className='w-full h-full max-w-[92%] flex mx-auto'>
      <InGameCountdown
        gameState={gameState}
        setGameState={setGameState}
        countdownDuration={gameDuration}
      />

      <div className='relative h-full flex w-full flex-col justify-between pt-36'>
        <ArrangeLettersCards
          answer={gameData.answer}
          scrambledLetters={gameData.scrambledLetters}
          setGameState={setGameState}
        />
      </div>

      <GameEndingModal status={gameState} />
    </section>
  );
}
