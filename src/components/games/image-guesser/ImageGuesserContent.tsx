import {memo, useState} from 'react';
import {motion} from 'framer-motion';
import {ImageGuesserGameDataTypes} from '../../../services/utils/types';
import {twMerge} from 'tailwind-merge';

type ImageGuesserContentTypes = {gameData: ImageGuesserGameDataTypes[]};

const ImageGuesserContent = memo(({gameData}: ImageGuesserContentTypes) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [idOfGuessedQuestion, setIdOfGuessedQuestion] = useState<string[]>([]);

  const gameDataLength = gameData.length;

  // This function is used in the image pagination slide
  // component to handle the insertion logic of question id to
  // guessed question id list
  function recordGuessedQuestion(questionId: string) {
    setIdOfGuessedQuestion((prev) => [...prev, questionId]);
  }

  return (
    <motion.div
      initial='rest'
      animate='show'
      transition={{staggerChildren: 0.1, delayChildren: 0.8}}
      className='p-4 md:p-0 flex flex-col gap-5 w-full'
    >
      <ImageViewer imageLink={gameData[currentQuestionIndex].imageLink} />
      <AnswerInput />

      <div className='flex gap-2 justify-end xl:justify-start w-full'>
        {gameData.map((question, index) => (
          <ImagePaginationButton
            idOfGuessedQuestion={idOfGuessedQuestion}
            questionId={question.id}
            key={question.id}
            isActive={currentQuestionIndex === index}
            setCurrentQuestionIndex={() => setCurrentQuestionIndex(index)}
          >
            {index + 1}
          </ImagePaginationButton>
        ))}
      </div>
    </motion.div>
  );
});

function AnswerInput() {
  return (
    <motion.div className='w-full sm:w-1/2 mx-auto px-4 z-50 flex flex-col items-center'>
      <input
        type='text'
        className='block bg-slate-50/10 text-slate-50 lg:backdrop-blur-sm outline-none w-full uppercase p-2 border-x border-slate-50/50 focus:bg-slate-50/20 text-center text-sm'
        placeholder='Jawaban kamu'
        maxLength={100}
      />

      <button
        className='outline-none border-t hover:bg-slate-50/20 border-slate-50/20 py-1 pb-2 px-10 bg-slate-50/10 grid place-items-center lg:backdrop-blur-sm text-xs text-slate-50'
        style={{
          clipPath: 'polygon(0 0, 100% 0, 87% 100%, 15% 100%)',
        }}
      >
        Check Jawaban
      </button>
    </motion.div>
  );
}

interface ImagePaginationButtonTypes
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  questionId: string;
  idOfGuessedQuestion: string[];
  isActive: boolean;
  setCurrentQuestionIndex: () => void;
}

function ImagePaginationButton({
  children,
  questionId,
  idOfGuessedQuestion,
  isActive,
  setCurrentQuestionIndex,
}: ImagePaginationButtonTypes) {
  const isGuessed = idOfGuessedQuestion.includes(questionId);
  const buttonColor = () => {
    if (isActive) {
      return 'bg-primary/80 text-slate-50 border border-primary/80';
    }

    return 'bg-primary/30 text-slate-50 border border-primary/80';
  };

  return (
    <button
      className={twMerge('w-8 h-8 text-sm hover:opacity-90', buttonColor())}
      onClick={setCurrentQuestionIndex}
      disabled={isGuessed}
    >
      {children}
    </button>
  );
}

type ImageViewerTypes = {imageLink: string};

const animations = {
  scaleUp: {
    rest: {scale: 0.5, opacity: 0},
    show: {scale: 1, opacity: 1},
  },
};

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
