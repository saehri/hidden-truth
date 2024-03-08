import {Dispatch, SetStateAction, useContext, useState} from 'react';
import {motion} from 'framer-motion';
import {ActivePageContext} from '../../../services/API/pageViewingManagerAPI';
import {createPortal} from 'react-dom';
import {GameStateTypes} from '../../../services/utils/types';
import {twMerge} from 'tailwind-merge';

interface PauseGameModal {
  modalState: boolean;
  setGameState: Dispatch<SetStateAction<GameStateTypes>>;
}

export default function PauseGameModal({
  setGameState,
  modalState,
}: PauseGameModal) {
  const {activePage, setActivePage} = useContext(ActivePageContext);

  function abortGame() {
    setActivePage({
      location: 'storylineDetailPage',
      state: {
        storylineId: activePage?.state?.storylineId as string,
        storylineType: activePage?.state?.storylineType as string,
        storylineTitle: activePage.state?.storylineTitle as string,
      },
    });
  }

  function unPauseGame() {
    setGameState('start');
  }

  return (
    <>
      {modalState &&
        createPortal(
          <ModalWrapper>
            <div className='flex justify-between mb-8'>
              <h4 className='text-2xl font-medium tracking-tighter'>
                GAME PAUSED
              </h4>

              <motion.button
                whileHover={{opacity: 0.7}}
                onClick={unPauseGame}
                className='bg-slate-950 text-sm w-max h-max text-primary'
              >
                [X]
              </motion.button>
            </div>

            <div className='flex items-center gap-4 justify-between flex-wrap'>
              <GameCancelationDialog abortGame={abortGame} />
              <ModalButton
                onClick={unPauseGame}
                name='LANJUTKAN GAME'
                withOutline
              />
            </div>
          </ModalWrapper>,
          document.getElementById('emtris__dialog') as
            | Element
            | DocumentFragment
        )}
    </>
  );
}

const modalWrapperAnimation = {
  rest: {height: 0},
  animate: {height: 'auto'},
};

function ModalWrapper({children}: {children: React.ReactNode}) {
  return (
    <motion.div
      initial='rest'
      animate='animate'
      transition={{staggerChildren: 0.1}}
      className='bg-slate-950 absolute p-4 top-0 left-0 w-full h-full z-[100] grid place-items-center text-slate-950'
    >
      <motion.div
        variants={modalWrapperAnimation}
        transition={{damping: 50}}
        className='overflow-hidden w-full max-w-96'
      >
        <div className='bg-primary p-2 w-full'>{children}</div>
      </motion.div>
    </motion.div>
  );
}

type ModalButtonTypes = {
  onClick: () => void;
  name: string;
  withOutline?: boolean;
};

function ModalButton({onClick, name, withOutline}: ModalButtonTypes) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{opacity: 0.7}}
      className={twMerge(
        'text-primary p-1 px-2 uppercase bg-slate-950',
        withOutline
          ? 'outline outline-slate-950 outline-1 outline-offset-2'
          : ''
      )}
    >
      {name}
    </motion.button>
  );
}

type GameCancelationDialogType = {abortGame: () => void};
function GameCancelationDialog({abortGame}: GameCancelationDialogType) {
  const [isCanceling, setCanceling] = useState<boolean>(false);

  function toggleCancelation() {
    setCanceling(!isCanceling);
  }

  return (
    <>
      <ModalButton onClick={toggleCancelation} name='BATALKAN MISI' />

      {isCanceling && (
        <div className='fixed top-0 left-0 w-full h-full z-50 grid place-items-center p-4'>
          <div className='bg-red-600 p-2 w-full max-w-96 relative z-50'>
            <div className='flex justify-between mb-6'>
              <h4 className='text-2xl font-medium tracking-tighter'>
                YAKIN MAU BATALIN?
              </h4>

              <button
                onClick={() => setCanceling(false)}
                className='bg-slate-950 text-sm w-max h-max text-red-600'
              >
                [X]
              </button>
            </div>

            <p className='text-slate-950 text-sm mb-4'>
              Dengan membatalkan, progress kamu tidak akan tersimpan.
            </p>

            <div className='flex items-center justify-between gap-4'>
              <motion.button
                whileHover={{opacity: 0.7}}
                onClick={abortGame}
                className='bg-slate-950 text-red-600 p-1 px-2 uppercase'
              >
                IYA BATALIN
              </motion.button>
              <motion.button
                whileHover={{opacity: 0.7}}
                onClick={toggleCancelation}
                className='bg-slate-950 text-red-600 p-1 px-2 uppercase outline outline-slate-950 outline-1 outline-offset-2'
              >
                ENGGAK DEH
              </motion.button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
