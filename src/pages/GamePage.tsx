import ImageGuesser from '../components/games/ImageGuesser';
import FullscreenBackground from '../components/ui/FullscreenBackground';

export default function GamePage() {
  return (
    <div className='relative w-full h-full'>
      <div className='absolute top-0 left-0 z-40 w-full h-full bg-slate-950/70'>
        <ImageGuesser />
      </div>

      <FullscreenBackground
        imageLink='/background/gamepage-big.webp'
        placeholderLink='/background/gamepage-big.webp'
      />
    </div>
  );
}
