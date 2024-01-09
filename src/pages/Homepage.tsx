import FullscreenBackground from '../components/ui/FullscreenBackground';
import HomepageGradientLayer from '../components/ui/HomepageGradientLayer';
import HomepageMovingAvatar from '../components/ui/HomepageMovingAvatar';
import PlayGameCTA from '../components/ui/PlayGameCTA';

export default function Homepage() {
  return (
    <div className='relative w-full h-full'>
      <div className='absolute bottom-0 left-0 w-full z-10 grid place-items-center mb-4 xl:mb-8 3xl:mb-10'>
        <PlayGameCTA />
        <span className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex h-[1px] sm:h-[1.5px] w-full bg-gradient-to-r from-transparent via-[#867209] to-transparent'></span>
      </div>

      <div className='absolute top-0 left-0 w-full h-full -z-0 overflow-hidden'>
        <HomepageGradientLayer />
        <HomepageMovingAvatar />
        <FullscreenBackground
          imageLink={'/background/homescreen-big.webp'}
          placeholderLink={
            '/background/placeholder/homescreen-placeholder.webp'
          }
        />
      </div>
    </div>
  );
}
