import {memo, useContext, useState} from 'react';
import {ActivePageContext} from '../../services/API/pageViewingManagerAPI';

import {twMerge} from 'tailwind-merge';
import AvatarCard from '../ui/AvatarCard';

export default function GameUserAvatar() {
  const {activePage} = useContext(ActivePageContext);
  const isHidden =
    activePage.location === 'storylineDetailPage' ||
    activePage.location === 'gamePage';

  return (
    <li
      id='game__user-avatar'
      className={twMerge(
        'w-full max-w-40 sm:max-w-52 lg:max-w-56 xl:max-w-64 2xl:max-w-80',
        isHidden
          ? 'opacity-0 pointer-events-none max-w-36 sm:max-w-40 lg:max-w-52 xl:max-w-64 2xl:max-w-80'
          : 'opacity-100 pointer-events-auto'
      )}
    >
      <AvatarCard isHidden={isHidden} />
    </li>
  );
}
