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
    <div className='text-xs flex items-center justify-between text-slate-700'>
      <p>Musik</p>

      <button
        className='relative bg-yellow-600/80 border border-r-border-light w-6 p-[2px] rounded-full flex'
        onClick={toggleAudio}
        style={{justifyContent: isOn ? 'flex-end' : 'flex-start'}}
      >
        <motion.div
          layout
          transition={{
            duration: 0.8,
            type: 'spring',
            stiffness: 700,
            damping: 30,
          }}
          className='w-2 h-2 rounded-full bg-yellow-400 border-l border-t border-slate-50/40'
        ></motion.div>
      </button>
    </div>
  );
}
