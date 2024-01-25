import {useContext, useState} from 'react';

import {getGameData} from '../../database/gameData';
import {ActivePageContext} from '../../services/API/pageViewingManagerAPI';
import {
  GameStateTypes,
  GameTypes,
  ImageGuesserGameDataTypes,
  StorylineIdTypes,
} from '../../services/utils/types';

import InGameCountdown from '../ui/InGameCountdown';
import ImageGuesserCards from '../ui/ImageGuesserCards';
import ImageGuesserGamePlayerInput from '../forms/ImageGuesserGamePlayerInput';

export default function ImageGuesser() {
  const {activePage} = useContext(ActivePageContext);
  const [gameData, setGameData] = useState<ImageGuesserGameDataTypes[]>(
    getGameData({
      gameId: activePage.state?.gameId as string,
      gameType: activePage.state?.gameType as GameTypes,
      storylineId: activePage.state?.storylineId as StorylineIdTypes,
    })
  );
  const [gameState, setGameState] = useState<GameStateTypes>('preparation');

  const deleteByIndex = (index: number) => {
    setGameData((oldValues) => {
      return oldValues.filter((_, i) => i !== index);
    });
  };

  return (
    <section className='w-full h-full max-w-[92%] flex items-end mx-auto'>
      <div className='w-full h-[85%] grid grid-cols-[15%,_50%,_1fr] gap-8 pb-8'>
        <InGameCountdown
          gameState={gameState}
          setGameState={setGameState}
          countdownDuration={150}
        />

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
    </section>
  );
}
