import {Dispatch, useEffect, useState, SetStateAction} from 'react';
import {GameStateTypes} from '../../../services/utils/types';
import {Reorder} from 'framer-motion';

const animationVariants = {
  reorderGroup: {
    rest: {opacity: 1},
    show: {
      opacity: 1,
      transition: {staggerChildren: 0.1, delayChildren: 0.3},
    },
  },
  reorderItem: {
    rest: {y: 50, opacity: 0},
    show: {y: 0, opacity: 1},
  },
};

interface Props {
  scrambledLetters: string[];
  answer: string;
  setGameState: React.Dispatch<React.SetStateAction<GameStateTypes>>;
}

export default function ArrangeLettersCards({
  scrambledLetters,
  answer,
  setGameState,
}: Props) {
  const [gameData, setGameData] = useState<string[]>(scrambledLetters);

  useEffect(() => {
    const userAnswer = gameData.map((l) => l.split('_')[0]).join('');
    if (userAnswer === answer) {
      setTimeout(() => setGameState('completed'), 500);
    }
  }, [gameData]);

  return (
    <CardsWrapper
      gameData={gameData}
      gameDataLength={gameData.length}
      setGameData={setGameData}
    >
      {gameData.map((letter) => (
        <Card key={letter} letter={letter} />
      ))}
    </CardsWrapper>
  );
}

function Card({letter}: {letter: string}) {
  return (
    <Reorder.Item
      value={letter}
      className='h-full bg-gradient-to-tl from-slate-300 via-slate-200 to-white shadow-md w-full pt-[100%] relative'
      variants={animationVariants.reorderItem}
    >
      <div className='absolute top-0 left-0 w-full h-full grid place-items-center uppercase text-sm xl:text-4xl'>
        {letter.split('_')[0]}
      </div>
    </Reorder.Item>
  );
}

interface CardsWrapper {
  children: React.ReactNode;
  gameData: string[];
  setGameData: Dispatch<SetStateAction<string[]>>;
  gameDataLength: number;
}

function CardsWrapper({
  children,
  gameData,
  gameDataLength,
  setGameData,
}: CardsWrapper) {
  return (
    <Reorder.Group
      values={gameData}
      onReorder={setGameData}
      className='grid gap-2 w-full'
      style={{gridTemplateColumns: `repeat(${gameDataLength}, 1fr)`}}
      axis='x'
      variants={animationVariants.reorderGroup}
      initial='rest'
      animate='show'
    >
      {children}
    </Reorder.Group>
  );
}
