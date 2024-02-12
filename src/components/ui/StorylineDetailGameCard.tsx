import {motion} from 'framer-motion';
import {useContext, useState} from 'react';

import {GameTypes} from '../../services/utils/types';
import {ActivePageContext} from '../../services/API/pageViewingManagerAPI';

import Icons from './Icons';
import {createPortal} from 'react-dom';
import {homepageBackground} from '../../assets/backgrounds/homepageBackground';

interface GameOverviewModalProps {
  chapterName: string;
  gameName: string;
  gameId: string;
  gameType: GameTypes;
  hasOpeningDialog: boolean;
}

interface StorylineDetailGameCard extends GameOverviewModalProps {
  gameLocation: string;
  index: number;
}

export default function StorylineDetailGameCard({
  gameLocation,
  gameName,
  chapterName,
  gameId,
  gameType,
  hasOpeningDialog,
  index,
}: StorylineDetailGameCard) {
  return (
    <>
      <div className='items-center border-b last:border-b-0 border-slate-400 justify-between text-sm font-normal text-left grid grid-cols-[34px,_1fr,_15%] p-1'>
        <span className='border border-slate-800 rounded-full p-2 grid items-center'>
          {index}
        </span>
        <p className='bg-bue-600 h-full w-full p-4'>
          <span className='text-slate-800'>{gameName}</span>
          <br />
          <span className='text-slate-500 text-xs'>{gameLocation}</span>
        </p>

        <GameOverviewModal
          gameName={gameName}
          chapterName={chapterName}
          gameId={gameId}
          gameType={gameType}
          hasOpeningDialog={hasOpeningDialog}
        />
      </div>
    </>
  );
}

function GameOverviewModal({
  chapterName,
  gameId,
  gameType,
  hasOpeningDialog,
  gameName,
}: GameOverviewModalProps) {
  const {activePage, setActivePage} = useContext(ActivePageContext);
  const [modalState, setModalState] = useState<boolean>(false);

  const gameMessage: Record<GameTypes, string> = {
    SK: '[SUSUN KATA] Susun huruf - huruf yang sudah diacak sehingga membentuk suatu kata yang padu.',
    TG: '[TEBAK GAMBAR] Tebak arti tersembunyi dari sebuah gambar.',
    TO: '[GUESS THE PERSON] Selidiki tersangka kasus.',
    MC: '[PILIHAN GANDA]',
    RD: '[REPORT DISINFORMATION]',
  };

  return (
    <>
      <button
        className='border border-border rounded-full w-7 h-7 bg-yellow-500 grid 
        place-items-center'
        onClick={() => setModalState(true)}
      >
        <Icons.Play />
      </button>

      {modalState &&
        createPortal(
          <div className='fixed top-0 left-0 z-50 w-full h-full'>
            <motion.button
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              className='block w-full h-full bg-slate-950/95'
              onClick={() => setModalState(false)}
            >
              <div className='sr-only'>Close modal</div>
            </motion.button>

            <motion.div
              initial={{y: 200, x: '-50%', opacity: 0}}
              animate={{y: '-50%', x: '-50%', opacity: 1}}
              transition={{delay: 0.3}}
              className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-96 min-h-52 lg:min-h-64 max-w-[450px] p-4 h-max bg-background border border-border pt-6 rounded-md flex flex-col justify-between'
            >
              <button
                className='absolute -right-8 -top-8'
                onClick={() => setModalState(false)}
              >
                <div className='sr-only'>Close modal</div>
                <Icons.CloseCircled />
              </button>

              <h4 className='uppercase font-semibold text-slate-950 text-sm lg:text-lg absolute -top-5 left-1/2 -translate-x-1/2 w-max bg-slate-300 p-1 pt-2 px-3 rounded-full'>
                {chapterName}
              </h4>

              <div className='w-10 h-10 rounded-full border border-border bg-yellow-500 pt-1 text-yellow-800 font-semibold grid place-items-center'>
                {gameType}
              </div>

              <div className='max-w-[75%] lg:max-w-[70%] text-yellow-300'>
                <p className='drop-shadow-md font-normal text-xs lg:text-base'>
                  {gameMessage[gameType]}
                </p>
              </div>

              <div className='absolute z-[-1] top-0 left-0 w-full h-full overflow-hidden rounded-md'>
                <img
                  src={homepageBackground}
                  alt=''
                  className='w-full h-full object-cover brightness-50'
                />
              </div>

              <button
                onClick={() =>
                  setActivePage({
                    location: hasOpeningDialog ? 'dialogPage' : 'gamePage',
                    state: {
                      gameId: gameId,
                      gameType: gameType,
                      gameName: `${chapterName}: ${gameName}`,
                      ...activePage.state,
                    },
                  })
                }
                className='w-[25%] group border-none outline-none z-10 block mx-auto absolute -bottom-5 -right-5 lg:-bottom-8 lg:-right-8 shadow-xl shadow-slate-950 rounded-full'
              >
                <span className='sr-only'>Play game</span>

                <span className='block w-full pt-[100%] relative'>
                  <span className='yellow--layer block absolute top-0 left-0 w-full h-full p-1 lg:p-2 3xl:p-3 rounded-full bg-gradient-to-t from-[#453B06] via-[#BFA622] to-[#FFF8D1] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-yellow-600 after:rounded-full after:pointer-events-none after:blur-md after:opacity-0 after:group-hover:opacity-20 after:transition-opacity'>
                    <span className='dark-blue--layer block rounded-full w-full h-full bg-[#002534] p-[2px] lg:p-1 3xl:p-2'>
                      <span className='relative blue-layer grid place-items-center overflow-hidden rounded-full w-full h-full bg-gradient-to-t from-transparent via-[#22A2D3]/50 to-[#D8F4FF] border-2 border-[#3988A7]'>
                        <span className='relative z-10 text-lg xl:text-2xl 3xl:text-3xl font-normal pointer-events-none text-white translate-y-1'>
                          PLAY
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </button>
            </motion.div>
          </div>,
          document.getElementById('emtris__dialog') as
            | Element
            | DocumentFragment
        )}
    </>
  );
}
