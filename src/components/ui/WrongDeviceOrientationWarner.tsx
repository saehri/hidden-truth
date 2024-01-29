import {useEffect, useState} from 'react';
import {twMerge} from 'tailwind-merge';

export default function WrongDeviceOrientationWarner() {
  const [isOnLandscape, setOnLandscape] = useState<boolean>(
    window.innerWidth > window.innerHeight
  );

  useEffect(() => {
    function handleWindowResize(ev: UIEvent) {
      setOnLandscape(window.innerWidth > window.innerHeight);
    }

    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <>
      <div
        className={twMerge(
          'bg-slate-950 w-full h-full place-items-center fixed top-0 left-0 z-[1000] text-border p-4',
          isOnLandscape ? 'hidden' : 'grid'
        )}
      >
        <div className='p-4 bg-background border border-border relative m-4 w-full max-w-96 text-xs sm:text-sm md:text-base'>
          <strong className='font-bold'>
            Oh tidak! Layar device kamu terlalu kecil untuk membuka game ini.
          </strong>
          <br />
          <p>
            Kamu butuh device dengan layar yang lebih luas untuk memainkan game
            ini.
          </p>
          <br />
          <p>
            Jika masih tidak berhasil, silahkan kirim email ke{' '}
            <a href='mailto:bahreesaepul1@gmail.com' target='_blank'>
              bahreesaepul1@gmail.com
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
