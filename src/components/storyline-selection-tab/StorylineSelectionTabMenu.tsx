import {motion} from 'framer-motion';

import {StorylineTypes} from '../../services/utils/types';

type TabButtonTypes = {
  id: StorylineTypes;
  label: string;
  isClickable: boolean;
};

const storylineTypes: TabButtonTypes[] = [
  {id: 'mainStoryline', label: 'MAIN MISSION', isClickable: false},
  {id: 'specialStoryline', label: 'SPECIAL MISSION', isClickable: true},
];

export default function StorylineTypeTabMenu() {
  return (
    <TabMenuHeader>
      <h4 className='hidden text-lg font-semibold text-slate-100 items-center gap-2 bg-gradient-to-r from-primary/50 to-transparent mb-4'>
        <span className='w-1 h-10 bg-slate-400/60 inline-block'></span>

        <span>MISSION</span>
      </h4>

      <motion.div
        transition={{staggerChildren: 0.1, delayChildren: 2}}
        animate='show'
        initial='rest'
        className='w-full grid grid-cols-2 max-w-screen-sm mx-auto px-4 lg:px-0'
      >
        {storylineTypes.map((btn) => (
          <TabButton
            key={btn.id}
            id={btn.id}
            isClickable={btn.isClickable}
            label={btn.label}
          />
        ))}
      </motion.div>
    </TabMenuHeader>
  );
}

function TabMenuHeader({children}: {children: React.ReactNode}) {
  const isOnDesktop = window.innerWidth >= 1280;

  return (
    <motion.header
      initial={isOnDesktop && {x: -200, opacity: 0}}
      animate={
        isOnDesktop && {
          x: 0,
          opacity: [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
          transition: {damping: 50, delay: 0.5, opacity: {delay: 0.5}},
        }
      }
      style={{
        backgroundImage:
          'repeating-linear-gradient(45deg, rgba(210, 210, 210, 0.1) 0, rgba(210, 210, 210, 0.1) 1px, rgba(229,229,247,0) 0, rgba(229,229,247,0) 50%)',
        backgroundSize: '10px 10px',
      }}
      className='lineGradient absolute top-[70px] left-0 w-full z-40 border-slate-400/40'
    >
      {children}
    </motion.header>
  );
}

function TabButton({isClickable, id, label}: TabButtonTypes) {
  const isOnDesktop = window.innerWidth >= 1280;

  return (
    <motion.button
      variants={{
        rest: {x: isOnDesktop ? -100 : 0, opacity: 0},
        show: {x: 0, opacity: isClickable ? 1 : 0.5, transition: {damping: 50}},
      }}
      className='group bg-primary font-semibold text-slate-100 disabled:bg-slate-50 disabled:text-slate-600 border-y border-blue-950 text-xs sm:text-sm grid grid-cols-[max-content,_1fr] relative py-3 px-1 sm:py-0 sm:px-0'
      disabled={!isClickable}
    >
      <span className='hidden sm:block p-1 pr-0 bg-blue-950/50 group-disabled:bg-slate-50'>
        <span className='w-7 h-7 sm:w-9 sm:h-9 block border-r border-dashed border-slate-50 group-disabled:border-slate-600'></span>
      </span>

      <span className='self-center text-left ml-4'>{label}</span>

      {isClickable && (
        <motion.span
          animate={{
            y: '-50%',
            scale: [1, 0.8, 1],
            transition: {
              scale: {
                repeat: Infinity,
                duration: 1.5,
              },
            },
          }}
          className='block w-2 h-2 outline-2 outline-slate-50 outline outline-offset-4 bg-slate-50 rounded-full z-20 absolute top-1/2 right-4'
        />
      )}
    </motion.button>
  );
}
