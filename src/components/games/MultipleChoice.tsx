import React, {memo, useContext, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {ActivePageContext} from '../../services/API/pageViewingManagerAPI';
import {
  GameStateTypes,
  MultipleChoiceGameDataTypes,
} from '../../services/utils/types';

import InGameCountdown from '../ui/InGameCountdown';
import GameEndingModal from '../modal/GameEndingModal';

import {homepageBackground} from '../../assets/backgrounds/homepageBackground';
import {getGameData} from '../../database/gameData';

const MultipleChoice = memo(() => {
  const [gameState, setGameState] = useState<GameStateTypes>('start');
  const {activePage} = useContext(ActivePageContext);
  // @ts-ignore
  const gameData = getGameData({
    ...activePage.state,
  }) as MultipleChoiceGameDataTypes[];

  const isOver = gameState === 'completed' || gameState === 'over';

  const gameDuration = 2000;

  return (
    <section className='w-full h-full max-w-[92%] flex mx-auto'>
      <InGameCountdown
        gameState={gameState}
        setGameState={setGameState}
        countdownDuration={gameDuration}
      />

      <div className='relative h-full flex w-full flex-col justify-between pt-16 gap-4 lg:gap-8'>
        <MultipleChoiceGame setGameState={setGameState} gameData={gameData} />

        <div
          className='bg-slate-100 p-2 lg:p-4 border border-border border-b-0 mx-auto w-full max-w-[90%] lg:max-w-[50%] text-slate-950'
          style={{
            clipPath: 'polygon(10% 0%, 90% 0, 100% 100%, 0% 100%)',
          }}
        >
          <div className='max-w-[80%] mx-auto flex items-center gap-4'>
            <h6 className='bg-gradient-to-t rounded-full from-yellow-700 to-yellow-600 text-yellow-300 p-1 px-2 pt-2 w-max mb-2 lg:mb-4 text-xs lg:text-base'>
              Clue
            </h6>

            <p className='text-slate-700 text-sm lg:text-base'>
              Pilih salah satu jawaban yang paling benar untuk lanjut ke
              pertanyaan selanjutnya.
            </p>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOver && (
          <GameEndingModal
            status={gameState === 'completed' ? 'win' : 'over'}
          />
        )}
      </AnimatePresence>
    </section>
  );
});

export default MultipleChoice;

interface MultipleChoiceGame {
  setGameState: React.Dispatch<React.SetStateAction<GameStateTypes>>;
  gameData: MultipleChoiceGameDataTypes[];
}

const MultipleChoiceGame = memo(
  ({setGameState, gameData}: MultipleChoiceGame) => {
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);

    function handleSelectingAnswer(userAnswer: number) {
      const isUserAnswerCorrect =
        userAnswer === gameData[currentQuestion].correctQcId;
      if (!isUserAnswerCorrect) {
        return setGameState('over');
      }

      if (currentQuestion < gameData.length - 1) {
        setTimeout(() => {
          setCurrentQuestion((prev) => prev + 1);
        }, 800);
      } else {
        setGameState('completed');
      }
    }

    return (
      <motion.section
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        className='bg-red-800/50 h-full'
        style={{clipPath: 'polygon(3% 0, 100% 0, 97% 100%, 0% 100%)'}}
      >
        <div
          className='w-full h-full bg-slate-50 grid grid-cols-2 overflow-hidden relative'
          style={{clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0% 100%)'}}
        >
          <div className='absolute top-0 right-0 text-xs lg:text-sm p-1 px-2 bg-blue-400 text-white rounded-sm'>
            Pertanyaan {currentQuestion + 1} dari {gameData.length}
          </div>

          <motion.div
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y: 0, transition: {delay: 1}}}
            className='bg-gradient-to-tl from-blue-500/80 to-blue-300/90 text-white backdrop-blur-sm shadow-sm p-2 lg:p-4 text-xs lg:text-base rounded-3xl rounded-tl-none absolute bottom-2 left-8 lg:bottom-8 lg:left-16 w-[40%] z-50'
          >
            {gameData[currentQuestion].question}
          </motion.div>

          <div
            className='relative w-full h-full overflow-hidden'
            style={{clipPath: 'polygon(0% 0, 100% 0, 88% 100%, 0% 100%)'}}
          >
            <motion.img
              initial={{opacity: 0, y: 200}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.7}}
              src='https://utfs.io/f/1d31e60b-4f2b-473a-8e05-0ffbca3fc951-tpwgpb.webp'
              alt=''
              className='absolute w-full h-full object-contain top-0 left-0'
            />

            <motion.img
              src={homepageBackground}
              initial={{opacity: 0, x: 200}}
              animate={{opacity: 1, x: 0}}
              transition={{delay: 0.5}}
              alt=''
              className='absolute w-full h-full object-cover top-0 left-0 -z-10 brightness-50'
            />
          </div>

          <motion.div
            transition={{staggerChildren: 0.1, delayChildren: 1.5}}
            initial='rest'
            animate='show'
            className='w-full h-full flex flex-col gap-1 lg:gap-3 justify-end p-1 pb-2 pr-12 lg:p-4 lg:pb-8 lg:pr-24'
          >
            {gameData[currentQuestion].qc.map((question) => (
              <SelectionButton
                key={question.choiceId}
                questionId={question.choiceId}
                qcLabel={question.answer}
                onChoiceSelected={() =>
                  handleSelectingAnswer(question.choiceId)
                }
                correctQcId={gameData[currentQuestion].correctQcId}
              />
            ))}
          </motion.div>
        </div>
      </motion.section>
    );
  }
);

interface SelectionButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  questionId: number;
  onChoiceSelected: () => void;
  qcLabel: string;
  correctQcId: number;
}

function SelectionButton({
  onChoiceSelected,
  questionId,
  qcLabel,
  correctQcId,
}: SelectionButton) {
  const [buttonColor, setButtonColor] = useState<'blue' | 'red' | 'green'>(
    'blue'
  );

  function handleClick() {
    onChoiceSelected();
    if (correctQcId === questionId) setButtonColor('green');
    else setButtonColor('red');

    setTimeout(() => setButtonColor('blue'), 800);
  }

  return (
    <motion.button
      data-button-color={buttonColor}
      onClick={handleClick}
      variants={{rest: {opacity: 0, x: 100}, show: {opacity: 1, x: 0}}}
      className='text-blue-950 p-2 lg:p-4 rounded-lg block text-left text-xs lg:text-sm bg-blue-300/90 data-[button-color=blue]:bg-blue-300/90 data-[button-color=blue]:text-blue-950 data-[button-color=green]:bg-green-500 data-[button-color=green]:text-green-950 data-[button-color=red]:bg-red-500 data-[button-color=red]:text-red-950'
    >
      {qcLabel}
    </motion.button>
  );
}
