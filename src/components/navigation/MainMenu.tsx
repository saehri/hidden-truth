import {useContext} from 'react';
import {ActivePageContext} from '../../services/API/pageViewingManagerAPI';
import {motion} from 'framer-motion';

import Icons from '../ui/Icons';
import {twMerge} from 'tailwind-merge';

const buttons = ['Character', 'Notification', 'Store'];
const animationVariants = {
  buttons: {
    rest: {opacity: 0, x: 50},
    show: {opacity: 1, x: 0, transition: {damping: 50}},
  },
};

export default function MainMenu() {
  const {activePage} = useContext(ActivePageContext);
  const isInHomepage = activePage.location === 'homepage';

  return (
    <nav
      className={twMerge(
        'flex items-center justify-end fixed bottom-14 left-1/2 -translate-x-1/2 w-full max-w-screen-sm z-50'
      )}
    >
      <motion.div
        transition={{staggerChildren: 0.1, delayChildren: 0.5}}
        initial='rest'
        animate='show'
        key={activePage.location}
        className={twMerge(
          'flex gap-8 w-max relative pr-4 sm:pr-0',
          isInHomepage ? 'flex-col pb-20' : 'flex-row xl:translate-x-[100%]'
        )}
      >
        {buttons.map((btn) => (
          <motion.button
            variants={animationVariants.buttons}
            key={btn}
            title={btn}
            className='block w-9 h-9 bg-primary/40'
          ></motion.button>
        ))}
      </motion.div>
    </nav>
  );
}
