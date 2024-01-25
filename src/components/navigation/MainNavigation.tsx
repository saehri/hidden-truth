import {useContext} from 'react';
import {ActivePageContext} from '../../services/API/pageViewingManagerAPI';
import {twMerge} from 'tailwind-merge';

import UserAvatar from './UserAvatar';
import MainMenu from './MainMenu';
import GameUserEnergyAndMoneyBar from './UserEnergyAndMoneyBar';
import FullscreenToggle from '../ui/FullscreenToggle';

export default function MainNavigation() {
  const {activePage} = useContext(ActivePageContext);

  return (
    <header
      id='game__header'
      className={twMerge(
        'absolute w-full top-0 left-0 gap-4',
        activePage.location === 'storylineDetailPage'
          ? 'pt-1 sm:pt-2 md:pt-3 2xl:pt-4 pr-9 lg:pr-0'
          : 'pt-2 sm:pt-4 md:pt-8 2xl:pt-10'
      )}
    >
      <nav
        className={twMerge(
          'max-w-[92%] mx-auto z-50 relative',
          activePage.location === 'gamePage' ||
            activePage.location === 'storylineSelectionPage'
            ? 'pointer-events-none opacity-0'
            : 'pointer-events-auto'
        )}
      >
        <ul className='flex justify-between'>
          <UserAvatar />

          <GameUserEnergyAndMoneyBar />

          <MainMenu />
        </ul>
      </nav>

      <FullscreenToggle />
    </header>
  );
}
