import {motion} from 'framer-motion';

import StartPageCTA from '../components/ui/StartPageCTA';
import {Circle} from './Homepage';

import {homepageBackground} from '../assets/backgrounds/homepageBackground';
import {homepageCharacter} from '../assets/backgrounds/homepageCharacter';

export default function StartPage() {
  return (
    <section className='w-full h-full relative'>
      <div className='absolute w-full h-full z-50 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent' />

      <div className='w-full h-full max-w-screen-sm mx-auto relative z-50'>
        <div className='absolute top-24 left-0 w-full text-center'>
          <h1 className='font-bold text-slate-50 text-3xl'>MR DEFACTO</h1>
        </div>

        <StartPageCTA />
      </div>

      {/* DECORATIONS */}
      <CharacterImages />
      <Circle withColor={false} />

      <motion.img
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        src={homepageBackground}
        className='w-full h-full object-cover brightness-[.3] absolute top-0 left-0 z-0'
        alt=''
      />
    </section>
  );
}

function CharacterImages() {
  return (
    <div className='w-full max-w-2xl xl:max-w-screen-md absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none z-30'>
      <div className='pb-[calc((4/4)*100%)] relative'>
        <img
          src={homepageCharacter}
          className='absolute top-0 left-0 w-full h-full object-cover sm:object-contain object-bottom'
          alt=''
        />
      </div>
    </div>
  );
}
