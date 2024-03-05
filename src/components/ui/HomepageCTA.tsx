import {useContext} from 'react';
import {motion} from 'framer-motion';

import {ActivePageContext} from '../../services/API/pageViewingManagerAPI';

export default function HomepageCTA() {
  const {setActivePage} = useContext(ActivePageContext);

  return (
    <div className='absolute bottom-12 w-full grid place-items-center gap-2 z-50'>
      <motion.button
        variants={{
          rest: {y: 100, opacity: 0},
          show: {y: 0, opacity: 1, transition: {delay: 0.3, damping: 50}},
        }}
        initial='rest'
        animate='show'
        whileHover={'animate'}
        onClick={() => setActivePage({location: 'storylineSelectionPage'})}
        className='bg-primary min-h-9 px-4 min-w-52 rounded-full border border-blue-950 text-left flex items-center justify-between relative overflow-hidden text-sm'
      >
        <motion.span
          variants={{animate: {opacity: 0, y: -50}}}
          className='font-body font-medium uppercase text-slate-200 relative z-20'
        >
          Mode Cerita
        </motion.span>

        <motion.span
          initial={{opacity: 0, y: 50}}
          variants={{animate: {opacity: 1, y: 0}}}
          className='font-body font-medium uppercase absolute left-4 text-slate-200 z-20'
        >
          Play Now
        </motion.span>

        <motion.span
          variants={{
            animate: {
              scale: [1, 0.8, 1],
              transition: {
                repeat: Infinity,
                duration: 1,
                delay: 0.5,
                repeatDelay: 0,
              },
            },
          }}
          className='block w-2 h-2 outline-1 outline-slate-50 outline outline-offset-4 bg-slate-50 rounded-full z-20'
        />

        <motion.img
          variants={{
            animate: {
              y: 10,
              transition: {damping: 50},
            },
          }}
          className='absolute -right-8 w-32 h-32 object-cover z-0 opacity-90'
          src='/images/fingerprint.png'
          alt=''
        />
      </motion.button>
    </div>
  );
}
