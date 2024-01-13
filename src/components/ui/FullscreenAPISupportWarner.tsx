import {useState} from 'react';
import {twMerge} from 'tailwind-merge';
import Icons from './Icons';

export default function FullscreenAPISupportWarner() {
  const [fullScreenAvailable, setFullScreenAvailable] = useState<boolean>(
    document.fullscreenEnabled
  );

  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }

  return (
    <div
      onDoubleClick={toggleFullScreen}
      className={twMerge(
        'fixed top-0 left-0 z-40 w-full h-full place-items-center text-border bg-slate-950/95',
        fullScreenAvailable ? 'grid' : 'hidden'
      )}
    >
      <div className='p-4 bg-background border border-border relative m-4 w-full max-w-96 text-xs sm:text-sm md:text-base'>
        <button
          onClick={() => setFullScreenAvailable(!fullScreenAvailable)}
          className='absolute -bottom-4 left-1/2 -translate-x-1/2'
        >
          <Icons.CloseCircled />
        </button>
        <strong className='font-bold'>
          Perangkat anda mendukung mode layar fullscren.
        </strong>{' '}
        <br />
        <br /> Ketuk layar dua kali untuk masuk atau keluar dari mode layar
        fullscreen.
        <br />
        <br />
        Kamu juga bisa mengaktifkan/mematikan mode fullscreen dari menu setting.
      </div>
    </div>
  );
}
