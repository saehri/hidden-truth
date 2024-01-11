import {motion} from 'framer-motion';

import BackButton from '../components/ui/BackButton';
import StoryTypeCard from '../components/ui/StoryTypeCard';
import storyTypes from '../database/volume/storyTypes';
import FullscreenBackground from '../components/ui/FullscreenBackground';

export default function StoryTypeSelectionPage() {
  return (
    <>
      <div
        className='w-full h-full bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950 backdrop-blur-sm relative z-50 py-2 sm:py-4 lg:py-8 3xl:py-10'
        style={{WebkitBackdropFilter: 'blur(4px)'}}
      >
        <section className='pb-0 flex items-center max-w-[92%] h-full mx-auto'>
          <div className='w-full h-full flex flex-col'>
            <BackButton
              buttonName='Halaman utama'
              goBackTo={{location: 'home'}}
            />

            <div className='w-[90%] mx-auto grid grid-cols-[1fr,_max-content,_1fr] gap-1 mb-2 lg:mb-4 mt-6 lg:mt-10'>
              <LineDecoration />

              <h1
                className='text-yellow-500 upppercase text-xs border p-1 px-3 pt-2 border-yellow-900 rounded-full lg:text-base uppercase 3xl:text-base font-[500] text-center block'
                style={{
                  clipPath:
                    'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                }}
              >
                Pilih cerita
              </h1>

              <LineDecoration />
            </div>

            <motion.div
              variants={{
                rest: {opacity: 1},
                show: {
                  opacity: 1,
                  transition: {staggerChildren: 0.1, delayChildren: 0.6},
                },
              }}
              initial='rest'
              animate='show'
              className='grid grid-cols-3 gap-2 h-full'
            >
              {storyTypes.map((st) => (
                <StoryTypeCard
                  key={st.type}
                  name={st.name}
                  description={st.description}
                  type={st.type}
                  background={st.background}
                  locked={st.locked}
                />
              ))}
            </motion.div>

            <div className='w-[50%] mx-auto grid grid-cols-[1fr,_max-content,_1fr] gap-4 mt-3 lg:mt-6'>
              <LineDecoration />

              <motion.div
                animate={{
                  rotate: [45, 405],
                  transition: {
                    repeat: Infinity,
                    repeatDelay: 2,
                    delay: 1,
                    duration: 0.8,
                  },
                }}
                className='w-2 h-2 lg:w-3 lg:h-3 bg-yellow-500 rotate-45'
              ></motion.div>

              <LineDecoration />
            </div>
          </div>
        </section>
      </div>

      <FullscreenBackground
        imageLink='/background/gamepage-big.webp'
        placeholderLink='/background/gamepage-big.webp'
      />
    </>
  );
}

function LineDecoration() {
  return (
    <div className='flex items-center justify-center'>
      <motion.div
        initial={{width: 0}}
        animate={{width: '100%'}}
        className='h-[1px] rounded-full bg-yellow-700'
      ></motion.div>
    </div>
  );
}
