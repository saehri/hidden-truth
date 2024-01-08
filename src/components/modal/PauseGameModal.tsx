import {Dispatch, SetStateAction, useContext} from 'react';
import {ActivePageContext} from '../../services/API/pageViewingManagerAPI';
import {createPortal} from 'react-dom';
import {
  GameStateTypes,
  StoryVolumeIdTypes,
  StoryVolumeTypes,
} from '../../services/utils/types';

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
          <div className='bg-slate-950/90 absolute top-0 left-0 w-full h-full z-[60] flex flex-col items-center justify-center gap-8 text-yellow-500 text-center'>
            <div className='w-full h-full max-w-[30%] mx-auto flex flex-col justify-center items-center text-center text-border'>
              <div className='p-4 border border-border bg-background w-full flex flex-col gap-4 relative'>
                <Button
                  onClick={() => setGameState('start')}
                  className='absolute -top-4 -right-4'
                >
                  <Icons.CloseCircled />
                </Button>

                <h4>GAME DIJEDA</h4>

                <button
                  onClick={() =>
                    setActivePage({
                      location: 'storyVolumeDetail',
                      state: {
                        volumeId: activePage.state
                          ?.volumeId as StoryVolumeIdTypes,
                        volumeType: activePage.state
                          ?.volumeType as StoryVolumeTypes,
                      },
                    })
                  }
                  className='py-3 px-4 rounded-sm bg-gradient-to-t from-red-600 via-red-500 to-red-400 text-white disabled:opacity-50'
                >
                  Menyerah
                </button>
              </div>
            </div>
          </div>,
          document.getElementById('emtris__dialog') as
            | Element
            | DocumentFragment
        )}
    </>
  );
}
