import MainMenu from './MainMenu';
import GameUserEnergyAndMoneyBar from './UserEnergyAndMoneyBar';

export default function MainNavigation() {
  return (
    <header id='game__header' className='fixed w-full top-0 left-0 gap-4 z-50'>
      <GameUserEnergyAndMoneyBar />

      <MainMenu />
    </header>
  );
}
