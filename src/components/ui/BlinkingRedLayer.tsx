import {memo} from 'react';
import {motion} from 'framer-motion';

type BlinkingRedLayerTypes = {playerLife: number};

// This component will be rendered when the player life is 1 -> They are about to game over lol
const BlinkingRedLayer = memo(({playerLife}: BlinkingRedLayerTypes) => {
  const isOpen = playerLife === 1;

  return (
    <>
      {isOpen && (
        <motion.div
          animate={{opacity: [0.4, 0.1, 0.4]}}
          transition={{repeat: Infinity, duration: 1}}
          className='fixed top-0 left-0 bg-red-500/50 w-full h-full z-50 pointer-events-none'
        />
      )}
    </>
  );
});

export default BlinkingRedLayer;
