import EnergyBar from '../ui/EnergyBar';
import MoneyBar from '../ui/MoneyBar';

export default function GameUserEnergyAndMoneyBar() {
  return (
    <li
      id='game__user-money-and-energy'
      className='flex items-center w-full max-w-48 sm:max-w-56 lg:max-w-64 xl:max-w-80 3xl:max-w-[20%] bg-blue-0 gap-8 md:gap-11 2xl:gap-12 3xl:gap-20'
    >
      <EnergyBar />
      <MoneyBar />
    </li>
  );
}
