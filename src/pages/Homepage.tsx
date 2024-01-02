import HomepageBackground from '../components/ui/HomepageBackground';
import HomepageGradientLayer from '../components/ui/HomepageGradientLayer';
import HomepageMovingAvatar from '../components/ui/HomepageMovingAvatar';
import PlayGameCTA from '../components/ui/PlayGameCTA';

export default function Homepage() {
  return (
    <div className='relative w-full h-full'>
      <div className='relative h-full z-30 flex items-end justify-center'>
        <div className='relative min-h-[12%] w-full'>
          <span className='flex h-[1.5px] w-full bg-gradient-to-r from-transparent via-[#867209] to-transparent'></span>
          <PlayGameCTA />
        </div>
      </div>

      <div className='absolute top-0 left-0 w-full h-full -z-0 overflow-hidden'>
        <HomepageGradientLayer />
        <HomepageMovingAvatar />
        <HomepageBackground />
      </div>
    </div>
  );
}
