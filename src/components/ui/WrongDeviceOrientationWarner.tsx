import {useEffect, useState} from 'react';
import {createPortal} from 'react-dom';
import {twMerge} from 'tailwind-merge';

type ScreenOrientationTypes = 'landscape-primary' | 'portrait-primary';

export default function WrongDeviceOrientationWarner() {
  const [currentDeviceOrientation, setCurrentDeviceOrientation] =
    useState<ScreenOrientationTypes>(
      screen.orientation.type === 'landscape-primary'
        ? 'landscape-primary'
        : 'portrait-primary'
    );

  useEffect(() => {
    function handleDeviceOrientation(ev: any) {
      setCurrentDeviceOrientation(ev.currentTarget.type);
    }

    screen.orientation.addEventListener('change', handleDeviceOrientation);

    return () =>
      screen.orientation.removeEventListener('change', handleDeviceOrientation);
  }, []);

  return (
    <>
      <div
        className={twMerge(
          'bg-slate-950 w-full h-full place-items-center fixed top-0 left-0 z-50 text-border p-4',
          currentDeviceOrientation === 'portrait-primary' ? 'grid' : 'hidden'
        )}
      >
        <div className='p-4 bg-background border border-border relative m-4 w-full max-w-96 text-xs sm:text-sm md:text-base'>
          <strong className='font-bold'>
            Oh no! Sistem kami mendeteksi perangkat kamu sedang dalam mode
            portrait.
          </strong>{' '}
          <br />
          <br /> Silahkan rotasikan perangkat kamu ke mode landscape untuk
          memainkan game ini.
        </div>
      </div>
    </>
  );
}
