import {motion} from 'framer-motion';

import HomepageCTA from '../components/ui/HomepageCTA';
import NewUserDialog from '../components/dialog/NewUserDialog';

import {homepageBackground} from '../assets/backgrounds/homepageBackground';
import {homepageCharacter} from '../assets/backgrounds/homepageCharacter';

export default function Homepage() {
  return (
    <section className='w-full h-full relative'>
      <NewUserDialog />
      <HomepageCTA />
      <CharacterImages />

      {/* DECORATIONS */}

      <TriangleRight />
      <TriangleLeft />
      <Circle withColor />
      <Lines />

      <motion.img
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        src={homepageBackground}
        className='w-full h-full object-cover brightness-50 absolute top-0 left-0 z-0'
        alt=''
      />
    </section>
  );
}

export function Lines() {
  return (
    <div className='w-full h-full absolute top-0 left-0 z-40 sm:z-10 bg-blue-950/10 pointer-events-none'>
      <motion.div
        initial={{y: -100}}
        animate={{y: 0, transition: {delay: 0.5, damping: 50}}}
        className='absolute w-full h-14 bg-slate-900/10 backdrop-blur-sm border-b border-slate-300/10 flex items-center justify-between'
      >
        <motion.span
          initial={{width: 0}}
          animate={{width: '25%'}}
          transition={{delay: 0.8, damping: 50}}
          className='bg-slate-600/20 h-1 hidden sm:block'
        ></motion.span>
        <motion.span
          initial={{width: 0}}
          animate={{width: '25%'}}
          transition={{delay: 0.8, damping: 50}}
          className='bg-slate-600/20 h-1 hidden sm:block'
        ></motion.span>
      </motion.div>

      <motion.div
        initial={{y: 100}}
        animate={{y: 0, transition: {delay: 0.5, damping: 50}}}
        className='absolute hidden bottom-0 w-full h-12 bg-slate-900/10 backdrop-blur-sm sm:flex items-center justify-between border-t border-slate-300/10'
      >
        <motion.span
          initial={{width: 0}}
          animate={{width: '30%'}}
          transition={{delay: 0.8, damping: 50}}
          className='bg-slate-600/20 h-1'
        ></motion.span>
        <motion.span
          initial={{width: 0}}
          animate={{width: '30%'}}
          transition={{delay: 0.8, damping: 50}}
          className='bg-slate-600/20 h-1'
        ></motion.span>
      </motion.div>
    </div>
  );
}

export function Circle({withColor}: {withColor: boolean}) {
  return (
    <motion.div
      initial={{scale: 0.3, y: '-50%', x: '-50%', opacity: withColor ? 1 : 0}}
      animate={{
        scale: 1,
        opacity: [0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
        y: '-50%',
        x: '-50%',
        outlineOffset: ['100px', '200px'],
        transition: {
          delay: 0.8,
          damping: 50,
          outlineOffset: {delay: 1.2},
        },
      }}
      className='p-10 rounded-full absolute top-1/2 left-1/2 z-20 border-2 sm:border-4 border-yellow-500/30 outline-1 outline outline-slate-50/10'
    >
      {withColor ? (
        <div
          className='w-32 h-32 xs:w-40 xs:h-40 sm:w-52 sm:h-52 md:w lg:w-96 lg:h-96 rounded-full backdrop-blur-md outline-2 outline outline-slate-950 border border-slate-300'
          style={{
            backgroundColor: 'rgba(37, 99, 235, 0.3)',
            opacity: 0.8,
            backgroundImage:
              'radial-gradient(#444cf7 0.5px, rgba(37, 99, 235, 0.3) 0.5px)',
            backgroundSize: '10px 10px',
          }}
        ></div>
      ) : (
        <div className='w-32 h-32 xs:w-40 xs:h-40 sm:w-52 sm:h-52 md:w lg:w-96 lg:h-96 rounded-full outline-2 outline outline-slate-950 border border-slate-300'></div>
      )}
    </motion.div>
  );
}

export function TriangleRight() {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{
        opacity: [0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
        transition: {delay: 1.3},
      }}
      className='absolute bottom-0 sm:top-1/2 sm:right-0 sm:-translate-y-1/2 rotate-90 sm:rotate-0 w-screen h-[100vw] sm:w-[50vw] sm:h-[50vw] bg-slate-700/10 backdrop-blur-sm z-10 overflow-hidden flex justify-end'
      style={{
        backgroundImage:
          'repeating-linear-gradient(45deg, rgba(210, 210, 210, 0.1) 0, rgba(210, 210, 210, 0.1) 1px, rgba(229,229,247,0) 0, rgba(229,229,247,0) 50%)',
        backgroundSize: '10px 10px',
        clipPath: 'polygon(0 48%, 100% 100%, 100% 0)',
      }}
    >
      <div className='w-10 h-full border-l border-slate-50/20'></div>
    </motion.div>
  );
}

export function TriangleLeft() {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{
        opacity: [0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
        transition: {delay: 1},
      }}
      className='absolute top-0 rotate-90 sm:rotate-0 sm:top-1/2 left-0 sm:-translate-y-1/2 h-[100vw] w-screen sm:w-[50vw] sm:h-[50vw] bg-slate-700/10 backdrop-blur-sm z-20 sm:z-10'
      style={{
        backgroundImage:
          'repeating-linear-gradient(45deg, rgba(210, 210, 210, 0.1) 0, rgba(210, 210, 210, 0.1) 1px, rgba(229,229,247,0) 0, rgba(229,229,247,0) 50%)',
        backgroundSize: '10px 10px',
        clipPath: 'polygon(0 0, 0 100%, 100% 48%)',
      }}
    >
      <div className='w-10 h-full border-r border-slate-50/20'></div>
    </motion.div>
  );
}

function CharacterImages() {
  return (
    <div className='w-full max-w-2xl xl:max-w-screen-md absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none z-30'>
      <div className='pb-[calc((4/4)*100%)] relative'>
        <img
          src={homepageCharacter}
          className='absolute top-0 left-0 w-full h-full object-cover sm:object-contain object-bottom brightness-75'
          alt=''
        />
      </div>
    </div>
  );
}
