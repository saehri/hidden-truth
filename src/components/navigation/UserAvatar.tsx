import {useContext} from 'react';
import {ActivePageContext} from '../../services/API/pageViewingManagerAPI';

import Icons from '../ui/Icons';
import {twMerge} from 'tailwind-merge';

export default function GameUserAvatar() {
  const {activePage} = useContext(ActivePageContext);
  const isHiden =
    activePage.location === 'storylineDetailPage' ||
    activePage.location === 'gamePage';

  return (
    <li
      id='game__user-avatar'
      className={twMerge(
        'w-full max-w-40 sm:max-w-52 lg:max-w-56 xl:max-w-64 2xl:max-w-80',
        isHiden
          ? 'opacity-0 pointer-events-none max-w-36 sm:max-w-40 lg:max-w-52 xl:max-w-64 2xl:max-w-80'
          : 'opacity-100 pointer-events-auto'
      )}
    >
      <button
        className='flex translate-y-[-2px] lg:translate-y-[-8px] w-full'
        disabled={isHiden}
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
