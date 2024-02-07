import FullscreenBackground from '../components/ui/FullscreenBackground';
import HomepageGradientLayer from '../components/ui/HomepageGradientLayer';
import HomepageMovingAvatar from '../components/ui/HomepageMovingAvatar';
import NewUserDialog from '../components/ui/NewUserDialog';
import PlayGameCTA from '../components/ui/PlayGameCTA';

export default function Homepage() {
  return (
    <div className='relative w-full h-full'>
      <NewUserDialog />

      <div className='absolute bottom-0 left-0 w-full z-10 mb-4 xl:mb-8 3xl:mb-10'>
        <PlayGameCTA />
        <span className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex h-[1px] sm:h-[1.5px] w-full bg-gradient-to-r from-transparent via-[#d6b613] to-transparent'></span>
      </div>

      <div className='absolute top-0 left-0 w-full h-full -z-0 overflow-hidden'>
        <HomepageGradientLayer />
        <HomepageMovingAvatar />
        <FullscreenBackground
          imageLink={
            'https://utfs.io/f/1f6ec64e-2de0-45ef-93f3-1b27a37c0db3-gpa8vq.webp'
          }
          placeholderLink={
            'https://utfs.io/f/9e30c3bc-3310-4497-a0d1-793a1ac62ae8-e5s95w.webp'
          }
        />
      </div>
    </div>
  );
}
