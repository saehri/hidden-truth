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
import GameEndingModal from '../modal/GameEndingModal';
import {AnimatePresence} from 'framer-motion';

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
  const isOver = gameState === 'completed' || gameState === 'over';

  const deleteByIndex = (index: number) => {
    setGameData((oldValues) => {
      return oldValues.filter((_, i) => i !== index);
    });
  };

  const gameDuration = 3000;

  return (
    <section className='w-full h-full max-w-[92%] flex mx-auto'>
      <InGameCountdown
        gameState={gameState}
        setGameState={setGameState}
        countdownDuration={gameDuration}
      />

      <div className='relative h-full flex w-full flex-col justify-between pt-16 gap-4'>
        <div className='grid grid-cols-[60%,_1fr] gap-4'>
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

        <div
          className='bg-slate-100 p-2 lg:p-4 border border-border border-b-0 mx-auto w-full max-w-[90%] lg:max-w-[50%] text-slate-950 relative z-50'
          style={{
            clipPath: 'polygon(10% 0%, 90% 0, 100% 100%, 0% 100%)',
          }}
        >
          <div className='max-w-[80%] mx-auto flex items-center gap-4'>
            <h6 className='bg-gradient-to-t rounded-full from-yellow-700 to-yellow-600 text-yellow-300 p-1 px-2 pt-2 w-max mb-2 lg:mb-4 text-xs lg:text-base'>
              Clue
            </h6>

            <p className='text-slate-700 text-sm lg:text-base'>
              Pilih orang - orang yang memiliki karakteristik berikut:{' '}
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
}
