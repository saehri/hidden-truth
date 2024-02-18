import FullscreenBackground from '../components/ui/FullscreenBackground';
import HomepageGradientLayer from '../components/ui/HomepageGradientLayer';
import HomepageMovingAvatar from '../components/ui/HomepageMovingAvatar';
import NewUserDialog from '../components/ui/NewUserDialog';
import PlayGameCTA from '../components/ui/PlayGameCTA';

import {homepageBackground} from '../assets/backgrounds/homepageBackground';

export default function Homepage() {
  return (
    <div className='relative w-full h-full'>
      <NewUserDialog />

      <div className='absolute bottom-0 left-0 w-full z-20 mb-4 xl:mb-8 3xl:mb-10'>
        <PlayGameCTA />
        <span className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex h-[1px] sm:h-[1.5px] w-full bg-gradient-to-r from-transparent via-[#d6b613] to-transparent'></span>
      </div>

      <CharacterPosterLayer />

      <div className='absolute top-0 left-0 w-full h-full -z-0 overflow-hidden'>
        <HomepageGradientLayer />
        <HomepageMovingAvatar />
        <FullscreenBackground
          imageLink={homepageBackground}
          placeholderLink={
            'https://utfs.io/f/9e30c3bc-3310-4497-a0d1-793a1ac62ae8-e5s95w.webp'
          }
        />
      </div>
    </div>
  );
}

function CharacterPosterLayer() {
  return (
    <div className='absolute top-0 left-0 w-full h-full z-10'>
      <div className='w-[80vw] h-[80vw] absolute rounded-full -bottom-[40vw] left-1/2 -translate-x-1/2 bg-white/10'></div>

      <div className='w-full max-w-[70%] absolute bottom-0 left-1/2 -translate-x-1/2'>
        <div className='w-full pt-[calc((12/20)*100%)] bg-blue-600'></div>
      </div>
    </div>
  );
}
