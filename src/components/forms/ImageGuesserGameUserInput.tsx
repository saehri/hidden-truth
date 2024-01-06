import {motion} from 'framer-motion';
import {FormEvent, useRef, useState} from 'react';

interface Props {
  currentQuestionAnswer: string;
  gameDataLength: number;
  onAnswerCorrect: (index: number) => void;
}

export default function ImageGuesserGamePlayerInput({
  currentQuestionAnswer,
  gameDataLength,
  onAnswerCorrect,
}: Props) {
  // const [playerInput, setPlayerInput] = useState<string>('');
  const playerInputRef = useRef<any>();
  const [isPlayerAnswerWrong, setPlayerAnswerWrong] = useState<boolean>(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setPlayerAnswerWrong(false);

    const playerAnswer = playerInputRef?.current.value.toLowerCase();
    const isPlayerAnswerCorrect = playerAnswer === currentQuestionAnswer;

    if (isPlayerAnswerCorrect) {
      playerInputRef.current.value = '';

      if (gameDataLength - 1 > 0) {
        onAnswerCorrect(0);
      }
    } else {
      setPlayerAnswerWrong(true);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='flex items-end h-max w-full'>
        <div className='flex gap-2 w-full'>
          <input
            ref={playerInputRef}
            type='text'
            className='w-full py-1 px-2'
            autoFocus
          />

          <button className='py-2 px-4 rounded-sm bg-gradient-to-t from-yellow-600 via-yellow-300 to-yellow-50 text-border'>
            Periksa Jawaban
          </button>
        </div>
      </form>

      <motion.div
        animate={
          isPlayerAnswerWrong && {
            background: ['rgb(220 38 38 / 0.3)', 'rgb(220 38 38 / 0)'],
            transition: {duration: 5},
          }
        }
        className='fixed top-0 left-0 w-full h-full z-10 pointer-events-none'
      ></motion.div>
    </>
  );
}
