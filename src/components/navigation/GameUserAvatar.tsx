import Icons from '../ui/Icons';

export default function GameUserAvatar() {
  return (
    <li id='game__user-avatar'>
      <button className='flex translate-y-[-10px]'>
        <div className='w-28 relative'>
          <div className='absolute w-full top-0 left-0 pt-[100%]'>
            <Icons.AvatarBackground />
            <div className='absolute top-0 left-0 p-3 w-full h-full'>
              <img
                src='/temp/temp_avatar.png'
                alt=''
                className='block w-full h-full object-cover'
              />
            </div>
          </div>
        </div>

        <div className='bg-primary/70 pt-[2px] border border-border border-l-0 min-w-40 3xl:min-w-52 h-7 3xl:h-9 3xl:text-2xl grid place-items-center text-white translate-y-[10px] -translate-x-[1.5px]'>
          Ayu Cluenight
        </div>
      </button>
    </li>
  );
}
