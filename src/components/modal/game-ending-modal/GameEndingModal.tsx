import {AnimatePresence, motion} from 'framer-motion';
import React, {useContext} from 'react';
import {ActivePageContext} from '../../../services/API/pageViewingManagerAPI';

import {GameStateTypes} from '../../../services/utils/types';
import {twMerge} from 'tailwind-merge';
import {barCode} from '../../../assets/images/barCode';

type DivTypes = React.HTMLAttributes<HTMLDivElement>;

export default function GameEndingModal({status}: {status: GameStateTypes}) {
  const {activePage, setActivePage} = useContext(ActivePageContext);

  function closeModal() {
    setActivePage({
      location: 'storylineDetailPage',
      state: {
        storylineId: activePage?.state?.storylineId as string,
        storylineType: activePage?.state?.storylineType as string,
        storylineTitle: activePage.state?.storylineTitle as string,
      },
    });
  }

  function repeatMission() {
    setActivePage({
      location: 'gamePage',
      state: {
        ...activePage.state,
      },
    });
  }

  const isOpen = status === 'completed' || status === 'gameOver';
  const description =
    status === 'completed'
      ? 'Kamu berhasil menyelesaikan tugas ini. Ayo selesaikan tugas lain.'
      : 'Kamu gagal menyelesaikan tugas ini. Jangan khawatir, kamu masih bisa mencoba kembali.';

  return (
    <>
      {isOpen && (
        <Wrapper gameState={status}>
          <Title gameState={status} />
          <span className='block w-full mb-3 border-t border-dashed border-slate-50/40' />

          <p className='text-slate-200/80 text-sm tracking-tighter leading-tight'>
            {description}
          </p>

          {status === 'completed' && <RewardsContainer />}

          <div className='flex justify-between gap-4 mt-6 border-t border-dashed border-slate-50/30 pt-1'>
            <img src={barCode} alt='' className='w-24 h-7 object-cover' />

            <button
              onClick={closeModal}
              className={twMerge(
                'text-slate-950 p-2 py-1 px-5 pr-10 font-medium text-sm',
                status === 'completed' ? 'bg-green-400' : 'bg-red-600'
              )}
              style={{
                clipPath: 'polygon(100% 0, 100% 78%, 94% 100%, 0 100%, 0 0)',
              }}
            >
              TUTUP
            </button>
          </div>
        </Wrapper>
      )}
    </>
  );
}

function RewardsContainer() {
  return (
    <div className='mt-4'>
      <h5 className='text-xs text-slate-300/50 mb-2'>REWARDS</h5>
      <div className='w-12 h-12 bg-slate-50/20 border border-slate-50/40'></div>
    </div>
  );
}

interface Title extends React.HTMLAttributes<HTMLHeadingElement> {
  gameState: GameStateTypes;
}

function Title({gameState}: Title) {
  const text = gameState === 'completed' ? 'CONGRATULATIONS!' : 'KAMU GAGAL';

  return (
    <h4
      className={twMerge(
        'font-semibold text-2xl',
        gameState === 'completed' ? 'text-green-400' : 'text-red-600'
      )}
    >
      {text}
    </h4>
  );
}

interface Wrapper extends React.HTMLAttributes<HTMLDivElement> {
  gameState: GameStateTypes;
}

function Wrapper({children, gameState}: Wrapper) {
  const backgroundColor =
    gameState === 'completed' ? 'bg-green-400' : 'bg-red-600';

  return (
    <div className='fixed top-0 left-0 w-full h-full z-[100] grid place-items-center p-4 bg-slate-950/90 lg:backdrop-blur-sm'>
      <motion.div
        initial={{y: 50, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        className={twMerge(
          'w-full max-w-96 p-6 relative',
          gameState === 'completed'
            ? 'border-green-400 bg-green-400/20'
            : 'border-red-600 bg-red-600/20'
        )}
      >
        {children}

        <CornerDots backgroundColor={backgroundColor} />
      </motion.div>
    </div>
  );
}

function CornerDots({backgroundColor}: {backgroundColor: string}) {
  return (
    <>
      <span
        className={twMerge('absolute -top-1 -left-1 w-2 h-2', backgroundColor)}
      />
      <span
        className={twMerge('absolute -top-1 -right-1 w-2 h-2', backgroundColor)}
      />
      <span
        className={twMerge(
          'absolute -bottom-1 -left-1 w-2 h-2',
          backgroundColor
        )}
      />
      <span
        className={twMerge(
          'absolute -bottom-1 -right-1 w-2 h-2',
          backgroundColor
        )}
      />
    </>
  );
}
