import {useContext} from 'react';
import {ActivePageContext} from '../../services/API/pageViewingManagerAPI';

import Icons from './Icons';

export default function PlayGameCTA() {
  const {setActivePage} = useContext(ActivePageContext);

  return (
    <button
      onClick={() => setActivePage({location: 'storyVolumeSelection'})}
      className='w-[14%] sm:w-[13%] lg:w-[11.25%] p-[6px] lg:p-2 3xl:p-4 group border-none outline-none relative z-10'
    >
      <span className='sr-only'>Play game</span>

      <span className='block w-full pt-[100%] relative'>
        <span className='yellow--layer block absolute top-0 left-0 w-full h-full p-1 lg:p-2 3xl:p-3 rounded-full bg-gradient-to-t from-[#453B06] via-[#BFA622] to-[#FFF8D1] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-yellow-600 after:rounded-full after:pointer-events-none after:blur-md after:opacity-0 after:group-hover:opacity-20 after:transition-opacity'>
          <span className='dark-blue--layer block rounded-full w-full h-full bg-[#002534] p-[2px] lg:p-1 3xl:p-2'>
            <span className='relative blue-layer grid place-items-center overflow-hidden rounded-full w-full h-full bg-gradient-to-t from-transparent via-[#22A2D3]/50 to-[#D8F4FF] border-2 border-[#3988A7]'>
              <span className='relative z-10 text-sm sm:text-xl xl:text-4xl 3xl:text-5xl font-normal pointer-events-none text-white translate-y-1'>
                PLAY
              </span>
            </span>
          </span>
        </span>
      </span>

      <Icons.PlayButtonRing />
    </button>
  );
}
