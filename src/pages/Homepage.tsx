import {motion} from 'framer-motion';

import HomepageCTA from '../components/ui/HomepageCTA';
import NewUserDialog from '../components/dialog/NewUserDialog';

import {homepageBackground} from '../assets/backgrounds/homepageBackground';
import {homepageCharacter} from '../assets/backgrounds/homepageCharacter';

export default function Homepage() {
  return (
    <>
      <NewUserDialog />

      <motion.div
        initial={{scale: 1.2, opacity: 0.1, filter: 'blur(4px)'}}
        animate={{scale: 1, opacity: 1, filter: 'blur(0px)'}}
        className='w-full h-full -z-0 overflow-hidden p-4 sm:p-8 pt-4 pb-8 relative'
      >
        <div className='bg-yellow-100 p-4 w-full h-full relative'>
          <HomepageCTA />

          <div className='w-full h-full overflow-hidden'>
            <img
              src={homepageBackground}
              className='w-full h-full object-cover brightness-75 blur-[1.5px]'
              alt=''
            />
          </div>

          <div className='absolute bg-[#061922] top-0 left-0 -z-10 w-full h-full -rotate-3'></div>

          <div className='absolute -top-8 left-10 bg-white/80 backdrop-blur-[1.5px] w-7 lg:w-8 h-16 border border-white/50 z-30 pointer-events-none -rotate-2'></div>
          <div className='absolute -top-8 right-10 rotate-3 bg-white/80 backdrop-blur-[1.5px] w-7 lg:w-8 h-20 border border-white/50 z-30 pointer-events-none'></div>
        </div>

        <CharacterImages />

        <div className='absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-background via-background/90 to-transparent pointer-events-none'></div>
      </motion.div>
    </>
  );
}

function CharacterImages() {
  return (
    <div className='w-full absolute bottom-8 left-0 pointer-events-none'>
      <div className='pb-[calc((4/4)*100%)] relative'>
        <img
          src={homepageCharacter}
          className='absolute top-0 left-0 w-full h-full object-cover sm:object-contain object-bottom brightness-90'
          alt=''
        />
      </div>
    </div>
  );
}
