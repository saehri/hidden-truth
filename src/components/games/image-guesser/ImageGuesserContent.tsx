import {FormEvent, memo, useState} from 'react';
import {motion} from 'framer-motion';
import {
  GameStateTypes,
  ImageGuesserGameDataTypes,
} from '../../../services/utils/types';
import {twMerge} from 'tailwind-merge';

type ImageGuesserContentTypes = {
  gameData: ImageGuesserGameDataTypes;
  reducePlayerLife: () => void;
  setGameState: React.Dispatch<React.SetStateAction<GameStateTypes>>;
};

const animations = {
  scaleUp: {
    rest: {scale: 0.5, opacity: 0},
    show: {scale: 1, opacity: 1},
  },
  popUp: {
    rest: {y: 50, opacity: 0},
    show: {y: 0, opacity: 1},
  },
};

const ImageGuesserContent = memo(
  ({gameData, reducePlayerLife, setGameState}: ImageGuesserContentTypes) => {
    return (
      <motion.div
        initial='rest'
        animate='show'
        transition={{staggerChildren: 0.1, delayChildren: 0.8}}
        className='p-4 md:p-0 flex flex-col gap-5 w-full'
      >
        <CluePopup />
        <ImageViewer imageLink={gameData.imageLink} />
        <AnswerInput
          questionAnswer={gameData.answer}
          reducePlayerLife={reducePlayerLife}
          setGameState={setGameState}
        />
      </motion.div>
    );
  }
);

function CluePopup() {
  return <button>CLUE</button>;
}

type AnswerInputTypes = {
  questionAnswer: string;
  reducePlayerLife: () => void;
  setGameState: React.Dispatch<React.SetStateAction<GameStateTypes>>;
};

function AnswerInput({
  questionAnswer,
  reducePlayerLife,
  setGameState,
}: AnswerInputTypes) {
  const [playerAnswer, setPlayerAnswer] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  function checkAnswer(ev: FormEvent) {
    ev.preventDefault();

    const answer = playerAnswer?.toLowerCase().trim();

    if (answer === questionAnswer) {
      setGameState('completed');
    } else {
      const isSameLength = answer.length === questionAnswer.length;
      const sameFirstLetter = answer[0] === questionAnswer[0];
      const sameLastLetter =
        answer[answer.length - 1] === questionAnswer[questionAnswer.length - 1];

      if (isSameLength && sameFirstLetter && sameLastLetter) {
        setErrorMessage('Dikit lagi');
      } else {
        setErrorMessage('Jawaban kamu salah');
      }

      reducePlayerLife();
    }
  }

  return (
    <div>
      <motion.form
        variants={animations.popUp}
        onSubmit={(ev) => checkAnswer(ev)}
        className='w-full sm:w-1/2 mx-auto px-4 z-50 flex flex-col items-center'
      >
        <input
          type='text'
          className='block bg-slate-50/10 text-slate-50 lg:backdrop-blur-sm outline-none w-full uppercase p-2 border-x border-slate-50/50 focus:bg-slate-50/20 text-center text-sm'
          placeholder='Jawaban kamu'
          maxLength={100}
          value={playerAnswer}
          name='playerAnswer'
          onChange={(ev) => setPlayerAnswer(ev.target.value)}
          autoComplete='off'
          autoCorrect='off'
        />

        <button
          type='submit'
          className='outline-none border-t hover:bg-slate-50/20 border-slate-50/20 py-1 pb-2 px-10 bg-slate-50/10 grid place-items-center lg:backdrop-blur-sm text-xs text-slate-50'
          style={{
            clipPath: 'polygon(0 0, 100% 0, 87% 100%, 15% 100%)',
          }}
        >
          Check Jawaban
        </button>
      </motion.form>

      <Anouncer message={errorMessage} setMessage={setErrorMessage} />
    </div>
  );
}

type AnouncerTypes = {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
};
function Anouncer({message, setMessage}: AnouncerTypes) {
  return (
    <div className='absolute left-1/2 -translate-x-1/2 bottom-28'>
      <motion.div
        animate={{
          width: ['0%', '100%', '100%', '100%', '100%', '0%'],
          transition: {duration: 3},
        }}
        key={message}
        onAnimationComplete={() => setMessage('')}
        className={twMerge(
          'overflow-hidden max-w-96 mx-auto bg-red-600/30 border-x border-red-600/60',
          message.length ? 'block' : 'hidden'
        )}
      >
        <p className='text-slate-50 text-sm block w-max mx-auto p-1 px-6 min-w-32 uppercase empty:hi'>
          {message}
        </p>
      </motion.div>
    </div>
  );
}

type ImageViewerTypes = {imageLink: string};

function ImageViewer({imageLink}: ImageViewerTypes) {
  return (
    <motion.div
      variants={animations.scaleUp}
      className='bg-slate-600/30 lg:backdrop-blur-sm p-4 border-x border-slate-50/80 relative'
    >
      <div className='pt-[calc((9/20)*100%)] relative border border-slate-50/10 bg-slate-600/50'>
        <motion.img
          variants={animations.scaleUp}
          className='absolute top-0 left-0 w-full h-full object-cover'
          src={imageLink}
          alt=''
        />
      </div>

      <span className='absolute top-0 left-0 w-10 h-[1px] bg-slate-50/80' />
      <span className='absolute top-0 right-0 w-10 h-[1px] bg-slate-50/80' />
      <span className='absolute bottom-0 left-0 w-10 h-[1px] bg-slate-50/80' />
      <span className='absolute bottom-0 right-0 w-10 h-[1px] bg-slate-50/80' />
    </motion.div>
  );
}

export default ImageGuesserContent;
