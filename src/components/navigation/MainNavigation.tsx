import GameUserAvatar from './GameUserAvatar';
import GameUserEnergyAndMoneyBar from './GameUserEnergyAndMoneyBar';
import GameUserNavigation from './GameUserNavigation';

export default function MainNavigation() {
  return (
    <header
      id='game__header'
      className='absolute w-full h-10 top-0 left-0 z-50 pt-4 2xl:pt-8'
    >
      <nav className='max-w-[92%] mx-auto'>
        <ul className='grid grid-cols-[repeat(16,1fr)] gap-4 bg-yellow-300'>
          <GameUserAvatar />

          <GameUserEnergyAndMoneyBar />

          <GameUserNavigation />
        </ul>
      </nav>
    </header>
  );
}
