import {useContext} from 'react';
import {ActivePageContext} from '../../services/API/pageViewingManagerAPI';

import Icons from '../ui/Icons';

export default function GameUserAvatar() {
  const {activePage} = useContext(ActivePageContext);

  return (
    <li
      style={{
        opacity: activePage.location === 'storylineDetailPage' ? 0 : 1,
      }}
      id='game__user-avatar'
      className='w-full max-w-40 sm:max-w-52 lg:max-w-56 xl:max-w-64 2xl:max-w-80'
    >
      <button
        className='flex translate-y-[-2px] lg:translate-y-[-8px] w-full'
        disabled={
          activePage.location === 'gamePage' ||
          activePage.location === 'storylineDetailPage'
        }
      >
        <div className='w-full max-w-14 sm:max-w-16 lg:max-w-20 xl:max-w-28 relative shrink-0'>
          <div className='absolute w-full top-0 left-0 pt-[100%]'>
            <Icons.AvatarBackground />
            <div className='absolute top-0 left-0 p-2 lg:p-3 w-full h-full'>
              <img
                src='/temp/temp_avatar.png'
                alt=''
                className='block w-full h-full object-cover'
              />
            </div>
          </div>
        </div>

        <div className='bg-primary/70 shrink-0 px-2 border border-border border-l-0 flex-1 h-5 lg:h-6 3xl:h-9 overflow-hidden overflow-ellipsis text-xs sm:text-sm xl:text-base 3xl:text-2xl grid place-items-center text-white translate-y-[5px] lg:translate-y-[10px] -translate-x-[1.5px] text-nowrap'>
          Ayu Cluenight
        </div>
      </button>
    </li>
  );
}
