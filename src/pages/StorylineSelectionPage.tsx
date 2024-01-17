import {useContext} from 'react';
import {motion} from 'framer-motion';
import {StorylineTypes} from '../services/utils/types';
import {ActivePageContext} from '../services/API/pageViewingManagerAPI';
import {getStorylineCards} from '../database/storyline/storylines';

import BackButton from '../components/ui/BackButton';
import FullscreenBackground from '../components/ui/FullscreenBackground';
import LineDecoration from '../components/ui/LineDecoration';
import StorylineCard from '../components/ui/StorylineCard';

export default function StorylineSelectionPage() {
  return (
    <>
      <section className='backdropBlur w-full h-full bg-gradient-to-t from-slate-950 via-slate-950/30 to-slate-950 relative z-50'>
        <BackButton
          buttonName='Tipe alur cerita'
          goBackTo={{location: 'storylineTypeSelectionPage'}}
        />

        <div className='absolute z-[1] top-0 left-0 w-full h-full bg-gradient-to-r from-slate-950 to-transparent py-2 sm:py-4 md:py-8 3xl:py-10'>
          <section className='grid grid-cols-[40%,_1fr] lg:grid-cols-[35%,_1fr] gap-6 lg:-10 max-w-[92%] h-full mx-auto'>
            <div className='flex flex-col justify-between'>
              <EpisodeColumeCategoryPill />

              <div>
                <motion.h1
                  initial={{y: 20, opacity: 0}}
                  animate={{y: 0, opacity: 1}}
                  className='text uppercase font-[500] text-xs lg:text-3xl text-slate-50 mb-4 lg:mb-8'
                >
                  Temukan alur cerita spesial <br /> untuk kamu yang spesial
                </motion.h1>

                <motion.p
                  initial={{y: 20, opacity: 0}}
                  animate={{y: 0, opacity: 1}}
                  className='text-yellow-600 text-xs leading-4 text-[10px] lg:text-sm 3xl:text-base'
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  qui minus itaque, non esse totam minima mollitia dolores
                  tempora aut fugiat dolorem labore magni, quidem ratione
                  expedita. Iure, architecto id.
                </motion.p>
              </div>
            </div>

            <div className='mt-8 lg:mt-12 relative'>
              <div className='hideScrollbar absolute top-0 left-0 w-full h-full overflow-x-auto bg-gradient-to-l from-green-900/60 to-transparent p-6 pl-0 pb-0'>
                <div className='w-full h-full bg-gradient-to-bl border border-green-800/70 from-green-700/90 via-green-700/10 to-green-700/10 p-5'>
                  <Storylines />
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <FullscreenBackground
        imageLink='/background/gamepage-big.webp'
        placeholderLink='/background/gamepage-big.webp'
      />
    </>
  );
}

function Storylines() {
  const {activePage, setActivePage} = useContext(ActivePageContext);
  const storylineCards = getStorylineCards(
    activePage.state?.storylineType as StorylineTypes
  );

  return (
    <motion.div
      variants={{
        rest: {opacity: 1},
        show: {
          opacity: 1,
          transition: {staggerChildren: 0.1, delayChildren: 0.3},
        },
      }}
      initial='rest'
      animate='show'
      className='h-full flex gap-2 w-max'
    >
      {storylineCards.map((v) => (
        <StorylineCard
          key={v.storylineId}
          {...v}
          onClick={() =>
            setActivePage({
              location: 'storylineDetailPage',
              state: {
                storylineId: v.storylineId,
                storylineType: v.storylineType,
              },
            })
          }
        />
      ))}
    </motion.div>
  );
}

function EpisodeColumeCategoryPill() {
  const {activePage} = useContext(ActivePageContext);
  const selectedCategory = activePage.state?.storylineType as StorylineTypes;

  const category: Record<StorylineTypes, string> = {
    mainStoryline: 'ALUR CERITA UTAMA',
    premiumStoryline: 'ALUR CERITA PREMIUM',
    specialStoryline: 'ALUR CERITA SPESIAL',
  };

  return (
    <div className='w-full mx-auto grid grid-cols-[1fr,_max-content,_1fr] gap-1 mb-2 lg:mb-4 mt-6 lg:mt-10'>
      <LineDecoration />

      <h1
        className='text-yellow-500 upppercase text-xs border p-1 px-3 pt-2 border-yellow-900 rounded-full lg:text-base uppercase 3xl:text-base font-[500] text-center block'
        style={{
          clipPath:
            'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
        }}
      >
        {category[selectedCategory]}
      </h1>

      <LineDecoration />
    </div>
  );
}
