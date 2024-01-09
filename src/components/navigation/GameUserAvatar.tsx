import {useContext} from 'react';
import {motion} from 'framer-motion';
import {ActivePageContext} from '../../services/API/pageViewingManagerAPI';

import Icons from '../ui/Icons';

export default function GameUserAvatar() {
  const {activePage} = useContext(ActivePageContext);

  return (
    <motion.li
      id='game__user-avatar'
      className='w-full max-w-40 sm:max-w-52 md:max-w-56 lg:max-w-64 xl:max-w-80'
    >
      <button
        className='flex translate-y-[-2px] md:translate-y-[-8px] w-full'
        disabled={activePage.location === 'game'}
      >
        <div className='w-full max-w-14 sm:max-w-16 md:max-w-20 lg:max-w-28 relative shrink-0'>
          <div className='absolute w-full top-0 left-0 pt-[100%]'>
            <Icons.AvatarBackground />
            <div className='absolute top-0 left-0 p-2 md:p-3 w-full h-full'>
              <img
                src='/temp/temp_avatar.png'
                alt=''
                className='block w-full h-full object-cover'
              />
            </div>
          </div>
        </div>

        <div className='bg-primary/70 shrink-0 px-2 border border-border border-l-0 flex-1 h-5 md:h-7 3xl:h-9 overflow-hidden overflow-ellipsis text-xs sm:text-sm md:text-base 3xl:text-2xl grid place-items-center text-white translate-y-[5px] md:translate-y-[10px] -translate-x-[1.5px] text-nowrap'>
          Ayu Cluenight
        </div>
      </button>
    </motion.li>
  );
}
