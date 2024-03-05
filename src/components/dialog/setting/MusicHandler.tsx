import {motion} from 'framer-motion';

import {useContext, useEffect, useState} from 'react';
import {AudioContext} from '../../audio/AudioWrapper';

export default function MusicHandler() {
  const [isOn, setOn] = useState<boolean>(true);
  const musicController = useContext(AudioContext);

  function toggleAudio() {
    setOn(!isOn);
    if (isOn) musicController.musicRef.pause();
    else musicController.musicRef.play();
  }

  useEffect(() => {
    setOn(!musicController.musicRef.paused);
  }, [musicController.musicRef]);

  return (
    <div className='flex items-center justify-between text-sm uppercase text-slate-300'>
      <p>Musik</p>

      <button onClick={toggleAudio}>[{isOn ? 'ON' : 'OFF'}]</button>
    </div>
  );
}
