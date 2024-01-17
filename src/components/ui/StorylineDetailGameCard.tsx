import {useContext} from 'react';

import {
  GameTypes,
  StorylineIdTypes,
  StorylineTypes,
} from '../../services/utils/types';
import {ActivePageContext} from '../../services/API/pageViewingManagerAPI';

import Icons from './Icons';

interface StorylineDetailGameCard {
  gameName: string;
  gameLocation: string;
  gameId: string;
  hasOpeningDialog: boolean;
  gameType: GameTypes;
  chapterName: string;
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
  const {activePage, setActivePage} = useContext(ActivePageContext);

  return (
    <div className='items-center border-b last:border-b-0 border-slate-400 justify-between text-sm font-normal text-left grid grid-cols-[34px,_1fr,_15%] p-1'>
      <span className='border border-slate-800 rounded-full p-2 grid items-center'>
        {index}
      </span>

      <p className='bg-bue-600 h-full w-full p-4'>
        <span className='text-slate-800'>{gameName}</span>
        <br />
        <span className='text-slate-500 text-xs'>{gameLocation}</span>
      </p>

      <button
        onClick={() =>
          setActivePage({
            location: hasOpeningDialog ? 'dialogPage' : 'gamePage',
            state: {
              gameId: gameId,
              gameType: gameType,
              gameName: `${chapterName}: ${gameName}`,
              storylineId: activePage.state?.storylineId as StorylineIdTypes,
              storylineType: activePage.state?.storylineType as StorylineTypes,
            },
          })
        }
        className='border border-border rounded-full w-7 h-7 bg-yellow-500 grid place-items-center'
      >
        <Icons.Play />
      </button>
    </div>
  );
}
