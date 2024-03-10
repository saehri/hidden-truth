import {memo, useContext, useState} from 'react';
import {ActivePageContext} from '../../../services/API/pageViewingManagerAPI';
import {AnimatePresence} from 'framer-motion';
import {getGameData} from '../../../database/gameData';
import {
  GameStateTypes,
  ReportDisinformationGameDataTypes,
} from '../../../services/utils/types';

import GameEndingModal from '../../modal/game-ending-modal/GameEndingModal';
import InGameCountdown from '../../ui/InGameCountdown';
import ReportDisinformation from './ReportDisinformation';

const ReportDisinformationGame = memo(() => {
  const [gameState, setGameState] = useState<GameStateTypes>('start');
  const {activePage} = useContext(ActivePageContext);
  // @ts-ignore
  const gameData = getGameData({
    ...activePage.state,
  }) as ReportDisinformationGameDataTypes[];

  const isOver = gameState === 'completed' || gameState === 'over';

  const gameDuration = 2000;

  return (
    <section className='w-full h-full max-w-[92%] flex mx-auto'>
      <InGameCountdown
        gameState={gameState}
        setGameState={setGameState}
        countdownDuration={gameDuration}
      />

      <div className='relative h-full flex w-full flex-col justify-between pt-1 lg:pt-12'>
        <ReportDisinformation gameData={gameData} />

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

            <p className='text-slate-700 text-xs lg:text-base'>
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

export default ReportDisinformationGame;
