import {motion} from 'framer-motion';
import {Dispatch, FormEvent, SetStateAction, useRef, useState} from 'react';
import {GameStateTypes} from '../../services/utils/types';

interface Props {
  currentQuestionAnswer: string;
  gameDataLength: number;
  onAnswerCorrect: (index: number) => void;
  gameState: GameStateTypes;
  setGameState: Dispatch<SetStateAction<GameStateTypes>>;
}

export default function ImageGuesserGamePlayerInput({
  currentQuestionAnswer,
  gameDataLength,
  onAnswerCorrect,
  gameState,
  setGameState,
}: Props) {
  const playerInputRef = useRef<any>();
  const [isPlayerAnswerWrong, setPlayerAnswerWrong] = useState<boolean>(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const playerAnswer = playerInputRef?.current.value.toLowerCase().trim();
    const isPlayerAnswerCorrect = playerAnswer === currentQuestionAnswer;

    if (isPlayerAnswerCorrect) {
      playerInputRef.current.value = '';

      if (gameDataLength - 1 > 0) {
        onAnswerCorrect(0);
      }

      if (gameDataLength === 1) {
        setGameState('completed');
        alert('Congratulation, you win the game!');
      }
    } else {
      setPlayerAnswerWrong(true);

      setTimeout(() => setPlayerAnswerWrong(false), 200);
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='flex items-end h-max w-full border border-border bg-background p-4'
      >
        <div className='flex gap-2 w-full'>
          <input
            ref={playerInputRef}
            type='text'
            className='w-full py-1 px-2'
            disabled={gameState !== 'start'}
            placeholder='Jawab di sini'
          />

          <button
            disabled={gameState !== 'start'}
            type='submit'
            className='py-2 px-4 rounded-sm bg-gradient-to-t from-yellow-600 via-yellow-300 to-yellow-50 text-yellow-900 disabled:opacity-50'
          >
            Periksa Jawaban
          </button>
        </div>
      </form>

      {isPlayerAnswerWrong && (
        <motion.div
          animate={{
            background: ['rgb(220 38 38 / 0.3)', 'rgb(220 38 38 / 0)'],
            transition: {duration: 0.8},
          }}
          className='fixed top-0 left-0 w-full h-full z-10 pointer-events-none'
        ></motion.div>
      )}
    </>
  );
}
