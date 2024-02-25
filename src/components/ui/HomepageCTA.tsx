import {useContext} from 'react';
import {motion} from 'framer-motion';

import {ActivePageContext} from '../../services/API/pageViewingManagerAPI';

export default function HomepageCTA() {
  const {setActivePage} = useContext(ActivePageContext);

  return (
    <div className='absolute bottom-12 w-full grid place-items-center'>
      <motion.button
        initial={{opacity: 0.9, scale: 1.5, filter: 'blur(4px)'}}
        animate={{opacity: 1, scale: 1, filter: 'blur(0px)'}}
        transition={{delay: 0.6}}
        whileTap={{scale: 0.8}}
        onClick={() => setActivePage({location: 'storylineSelectionPage'})}
        className='bg-yellow-800/90 text-yellow-950 border border-yellow-500/40 p-3 px-6 w-max group z-40 relative'
      >
        <span className='w-max font-semibold relative z-40'>PLAY GAME</span>

        <span className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-yellow-500 to-yellow-200 border border-yellow-400 p-1 block rotate-3 group-hover:rotate-1 transition-transform shadow-sm'></span>
      </motion.button>
    </div>
  );
}