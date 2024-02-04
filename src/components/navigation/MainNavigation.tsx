import {useContext} from 'react';
import {ActivePageContext} from '../../services/API/pageViewingManagerAPI';
import {twMerge} from 'tailwind-merge';

import MainMenu from './MainMenu';
import GameUserEnergyAndMoneyBar from './UserEnergyAndMoneyBar';
import FullscreenToggle from '../ui/FullscreenToggle';

export default function MainNavigation() {
  const {activePage} = useContext(ActivePageContext);
  const hideMainNavigation = [
    'signinPage',
    'signupPage',
    'gamePage',
    'storylineSelectionPage',
  ].includes(activePage.location);

  return (
    <header
      id='game__header'
      className={twMerge(
        'fixed w-full top-0 left-0 gap-4 z-50 pt-2 sm:pt-4 md:pt-8 2xl:pt-10'
      )}
    >
      <nav
        className={twMerge(
          'max-w-[92%] mx-auto z-50 relative',
          hideMainNavigation ? 'hidden' : 'block'
        )}
      >
        <ul className='flex justify-between'>
          <GameUserEnergyAndMoneyBar />

          {!hideMainNavigation && <MainMenu />}
        </ul>
      </nav>

      <FullscreenToggle />
    </header>
  );
}
