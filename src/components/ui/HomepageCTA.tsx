import {useContext} from 'react';
import {motion} from 'framer-motion';

import {ActivePageContext} from '../../services/API/pageViewingManagerAPI';

export default function HomepageCTA() {
  const {setActivePage} = useContext(ActivePageContext);

  return (
    <div className='absolute bottom-12 w-full grid place-items-center gap-2'>
      <motion.button
        whileTap={{scale: 0.8}}
        onClick={() => setActivePage({location: 'storylineSelectionPage'})}
        className='bg-yellow-800/90 text-yellow-950 border border-yellow-500/40 p-3 px-6 w-max group z-40 relative'
      >
        <span className='w-max font-bold relative z-40 font-sans'>
          Mode Cerita
        </span>

        <span className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-yellow-500 to-yellow-200 border border-yellow-400 p-1 block rotate-3 group-hover:rotate-1 transition-transform shadow-sm'></span>
      </motion.button>

      <motion.button
        whileTap={{scale: 0.8}}
        onClick={() => setActivePage({location: 'storylineSelectionPage'})}
        className='bg-slate-800/90 text-slate-950 border border-slate-500/40 p-3 px-6 w-max group z-40 relative'
      >
        <span className='w-max font-semibold relative z-40 font-sans'>
          Mode Bebas
        </span>

        <span className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-slate-500 to-slate-200 border border-slate-400 p-1 block rotate-3 group-hover:rotate-1 transition-transform shadow-sm'></span>
      </motion.button>
    </div>
  );
}
