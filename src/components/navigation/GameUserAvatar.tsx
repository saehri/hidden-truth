export default function GameUserAvatar() {
  return (
    <li
      id='game__user-avatar'
      style={{gridColumn: '1/5'}}
      className='bg-blue-500 grid grid-cols-[31.81609195402299%,1fr]'
    >
      <div className='relative'>
        <div className='absolute top-0 left-0 w-full'>
          <div className='pt-[100%] w-full'>
            <div className='absolute top-0 left-0 w-full h-full bg-teal-500'>
              Avatar
            </div>
          </div>
        </div>
      </div>

      <div className='bg-pink-500 grid place-items-center'>User playername</div>
    </li>
  );
}
