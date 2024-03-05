import {Dispatch, SetStateAction, useContext} from 'react';
import {motion} from 'framer-motion';
import {ActivePageContext} from '../../services/API/pageViewingManagerAPI';
import {createPortal} from 'react-dom';
import {GameStateTypes} from '../../services/utils/types';

import Button from '../ui/Button';
import Icons from '../ui/Icons';

interface PauseGameModal {
  modalState: boolean;
  setGameState: Dispatch<SetStateAction<GameStateTypes>>;
}

export default function PauseGameModal({
  setGameState,
  modalState,
}: PauseGameModal) {
  const {activePage, setActivePage} = useContext(ActivePageContext);

  return (
    <>
      {modalState &&
        createPortal(
          <div className='bg-slate-950 absolute top-0 left-0 w-full h-full z-[100] flex flex-col items-center justify-center gap-8 text-yellow-500 text-center'>
            <motion.div
              initial={{y: 50, opacity: 0}}
              animate={{y: 0, opacity: 1, transition: {delay: 0.3}}}
              className='flex gap-4 items-center relative z-10'
            >
              <Button className='bg-gradient-to-tr from-yellow-800 via-yellow-500 to-yellow-300 rounded-full p-2'>
                <div className='grid place-items-center bg-background rounded-full p-2 pointer-events-none'>
                  <Icons.Setting className='w-7 h-7 xl:w-9 xl:h-9' />
                </div>
              </Button>

              <Button
                onClick={() => setGameState('start')}
                className='bg-gradient-to-tr from-yellow-800 via-yellow-500 to-yellow-300 border border-slate-800 rounded-full p-2'
              >
                <div className='p-2 grid place-items-center border border-border bg-gradient-to-tr from-green-800 via-green-600 to-green-300 rounded-full'>
                  {/* <Icons.Play className='w-14 h-14 m-4 translate-x-[2px]' /> */}
                </div>
              </Button>

              <Button
                onClick={() =>
                  setActivePage({
                    location: 'storylineDetailPage',
                    state: {
                      storylineId: activePage?.state?.storylineId as string,
                      storylineType: activePage?.state?.storylineType as string,
                      storylineTitle: activePage.state
                        ?.storylineTitle as string,
                    },
                  })
                }
                className='bg-gradient-to-tr from-yellow-800 via-yellow-500 to-yellow-300 rounded-full p-2'
              >
                <div className='grid place-items-center bg-background rounded-full p-2'>
                  <Icons.Running className='w-7 h-7 xl:w-9 xl:h-9' />
                </div>
              </Button>
            </motion.div>

            <motion.img
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              src='https://utfs.io/f/609ea85c-f146-469c-836c-5e1fd875e5e2-emhtjq.webp'
              alt=''
              className='absolute top-0 left-0 w-full h-full object-cover'
            />
          </div>,
          document.getElementById('emtris__dialog') as
            | Element
            | DocumentFragment
        )}
    </>
  );
}
