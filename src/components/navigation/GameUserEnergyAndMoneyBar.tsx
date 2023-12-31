import EnergyBar from '../ui/EnergyBar';
import MoneyBar from '../ui/MoneyBar';

export default function GameUserEnergyAndMoneyBar() {
  return (
    <li
      id='game__user-money-and-energy'
      className='flex items-center gap-11 2xl:gap-12 3xl:gap-20'
    >
      <EnergyBar />
      <MoneyBar />
    </li>
  );
}
