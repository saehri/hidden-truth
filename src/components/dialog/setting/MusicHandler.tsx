import {useContext, useEffect, useState} from 'react';
import {AudioContext} from '../../audio/AudioWrapper';
import Icons from '../../ui/Icons';

export default function MusicHandler() {
  const [isOn, setOn] = useState<boolean>(true);
  const musicController = useContext(AudioContext);

  const iconStyles =
    'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 lg:w-10 lg:h-10';

  function toggleAudio() {
    setOn(!isOn);
    if (isOn) musicController.musicRef.pause();
    else musicController.musicRef.play();
  }

  useEffect(() => {
    setOn(!musicController.musicRef.paused);
  }, [musicController.musicRef]);

  return (
    <>
      <button
        onClick={toggleAudio}
        className='bg-gradient-to-tl from-yellow-800 to-yellow-400 p-2 rounded-full'
      >
        <div className='w-14 h-14 lg:w-20 lg:h-20 grid place-items-center rounded-full bg-background relative'>
          {isOn ? (
            <Icons.MusicOn className={iconStyles} />
          ) : (
            <Icons.MusicOff className={iconStyles} />
          )}
        </div>
      </button>
    </>
  );
}
