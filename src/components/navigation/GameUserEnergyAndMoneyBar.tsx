import EnergyBar from '../ui/EnergyBar';

export default function GameUserEnergyAndMoneyBar() {
  return (
    <li
      id='game__user-money-and-energy'
      className='flex items-center gap-12 2xl:gap-14 3xl:gap-16'
    >
      <EnergyBar />
      <div className='bg-pink-500'>Money bar</div>
    </li>
  );
}
