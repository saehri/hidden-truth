export default function GameUserEnergyAndMoneyBar() {
  return (
    <li
      id='game__user-money-and-energy'
      style={{gridColumn: '7/12'}}
      className='bg-blue-500 grid grid-cols-2 gap-6'
    >
      <div className='bg-pink-500'>Energy bar</div>
      <div className='bg-pink-500'>Money bar</div>
    </li>
  );
}
