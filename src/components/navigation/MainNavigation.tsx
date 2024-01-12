import UserAvatar from './UserAvatar';
import MainMenu from './MainMenu';
import GameUserEnergyAndMoneyBar from './UserEnergyAndMoneyBar';

export default function MainNavigation() {
  return (
    <header
      id='game__header'
      className='absolute w-full h-10 top-0 left-0 z-50 gap-4 pt-2 sm:pt-4 md:pt-8 2xl:pt-10'
    >
      <nav className='max-w-[92%] mx-auto'>
        <ul className='flex justify-between'>
          <UserAvatar />

          <GameUserEnergyAndMoneyBar />

          <MainMenu />
        </ul>
      </nav>
    </header>
  );
}
