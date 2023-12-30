export default function GameUserNavigation() {
  return (
    <li
      id='game__user-navigation'
      style={{gridColumn: '14/-1'}}
      className='bg-blue-500 grid grid-cols-4 gap-6'
    >
      <div className='pt-[100%] relative'>
        <span className='grid place-items-center absolute top-0 left-0 w-full h-full bg-pink-500'>
          SH
        </span>
      </div>
      <div className='pt-[100%] relative'>
        <span className='grid place-items-center absolute top-0 left-0 w-full h-full bg-pink-500'>
          N
        </span>
      </div>
      <div className='pt-[100%] relative'>
        <span className='grid place-items-center absolute top-0 left-0 w-full h-full bg-pink-500'>
          B
        </span>
      </div>
      <div className='pt-[100%] relative'>
        <span className='grid place-items-center absolute top-0 left-0 w-full h-full bg-pink-500'>
          ST
        </span>
      </div>
    </li>
  );
}
