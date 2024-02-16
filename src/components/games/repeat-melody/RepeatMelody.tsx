import {memo} from 'react';
import {motion} from 'framer-motion';

type MusicTones = 'do' | 're' | 'mi' | 'fa' | 'sol' | 'la' | 'si' | 'doo';

const musicTones: string[] = ['do', 're', 'mi', 'fa', 'sol', 'la', 'si', 'doo'];
const toneSeuquence: {id: MusicTones; order: number; delay: number}[] = [
  {id: 'do', order: 1, delay: 0.5},
  {id: 're', order: 3, delay: 0.5},
  {id: 'mi', order: 4, delay: 0.5},
  {id: 'fa', order: 5, delay: 0.5},
  {id: 'sol', order: 7, delay: 0.5},
  {id: 'la', order: 8, delay: 0.5},
  {id: 'si', order: 2, delay: 0.5},
  {id: 'do', order: 6, delay: 0.5},
];

const RepeatMelody = memo(() => {
  return (
    <div className='bg-blue-500 w-full h-full flex flex-col gap-3 mb-4'>
      <div className='grid grid-cols-8 gap-3 flex-1'>
        {toneSeuquence.map((tone) => (
          <motion.div
            key={tone.id}
            initial={{scale: 1}}
            animate={{scale: 0.9}}
            transition={{
              delay: tone.order - tone.delay,
              duration: 1,
            }}
            className='bg-green-500'
          >
            {tone.id}
          </motion.div>
        ))}
      </div>
      <div className='grid grid-cols-8 gap-3 flex-1'>
        {musicTones.map((melody) => (
          <MelodyCard tone={melody} key={melody} />
        ))}
      </div>
    </div>
  );
});

export default RepeatMelody;

interface MelodyCard {
  tone: string;
}

function MelodyCard({tone}: MelodyCard) {
  return <motion.div className='w-full h-full bg-green-500'>{tone}</motion.div>;
}
