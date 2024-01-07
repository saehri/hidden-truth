import {useState} from 'react';
import ImageGuesserCards from '../ui/ImageGuesserCards';

import {
  GameStateTypes,
  ImageGuesserGameDataTypes,
} from '../../services/utils/types';
import ImageGuesserGamePlayerInput from '../forms/ImageGuesserGamePlayerInput';
import InGameCountdown from '../ui/InGameCountdown';
import ChapterLevelSplashScreen from '../splashScreen/ChapterLevelSplashScreen';

const gameDataExample: ImageGuesserGameDataTypes[] = [
  {
    id: 'pemilu24-1-01',
    imageLink:
      'https://images.unsplash.com/photo-1597953601374-1ff2d5640c85?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    answer: 'panda',
  },
  {
    id: 'pemilu24-1-02',
    imageLink:
      'https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    answer: 'fish',
  },
  {
    id: 'pemilu24-1-03',
    imageLink:
      'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    answer: 'flower',
  },
];

export default function ImageGuesser() {
  const [gameData, setGameData] =
    useState<ImageGuesserGameDataTypes[]>(gameDataExample);
  const [gameState, setGameState] = useState<GameStateTypes>('preparation');

  const deleteByIndex = (index: number) => {
    setGameData((oldValues) => {
      return oldValues.filter((_, i) => i !== index);
    });
  };

  return (
    <section className='w-full h-full max-w-[92%] flex items-end mx-auto'>
      <div className='w-full h-[85%] grid grid-cols-[15%,_50%,_1fr] gap-8 pb-8'>
        <div className='flex items-center'>
          <InGameCountdown
            gameState={gameState}
            setGameState={setGameState}
            countdownDuration={150}
          />
        </div>

        <div className='relative'>
          <ImageGuesserCards
            gameData={gameData}
            setStart={setGameState}
            gameState={gameState}
          />
        </div>

        <div className='h-full relative flex flex-col justify-between'>
          <ImageGuesserGamePlayerInput
            currentQuestionAnswer={gameData[0].answer}
            gameDataLength={gameData.length}
            onAnswerCorrect={deleteByIndex}
            gameState={gameState}
            setGameState={setGameState}
          />
        </div>
      </div>

      <ChapterLevelSplashScreen
        isOpen={gameState === 'preparation'}
        levelInfo='Tebak Gambar'
        levelName='CHAPTER 1 - KERIBUTAN'
      />
    </section>
  );
}
