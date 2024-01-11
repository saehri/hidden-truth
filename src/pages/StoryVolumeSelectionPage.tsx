import {motion} from 'framer-motion';
import BackButton from '../components/ui/BackButton';
import FullscreenBackground from '../components/ui/FullscreenBackground';
import StoryVolumeSelectionTab from '../components/ui/StoryVolumeSelectionTab';
import {useContext} from 'react';
import {ActivePageContext} from '../services/API/pageViewingManagerAPI';
import {StoryVolumeTypes} from '../services/utils/types';
import LineDecoration from '../components/ui/LineDecoration';

export default function StorystoryVolumeSelectionPage() {
  return (
    <>
      <section
        className='w-full h-full bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950 relative z-50 backdrop-blur-sm'
        style={{WebkitBackdropFilter: 'blur(4px)'}}
      >
        <BackButton
          buttonName='Tipe cerita'
          goBackTo={{location: 'storyTypes'}}
        />

        <div className='absolute z-[1] top-0 left-0 w-full h-full bg-gradient-to-r from-slate-950 to-transparent py-2 sm:py-4 md:py-8 3xl:py-10'>
          <section className='grid grid-cols-[35%,_1fr] gap-10 max-w-[92%] h-full mx-auto'>
            <div className='flex flex-col justify-between'>
              <StoryColumeCategoryPill />

              <div>
                <motion.h1
                  initial={{y: 20, opacity: 0}}
                  animate={{y: 0, opacity: 1}}
                  className='text uppercase font-[500] text-3xl text-slate-50 mb-8'
                >
                  Temukan alur cerita spesial <br /> untuk kamu yang spesial
                </motion.h1>

                <motion.p
                  initial={{y: 20, opacity: 0}}
                  animate={{y: 0, opacity: 1}}
                  transition={{delay: 0.4}}
                  className='text-yellow-800'
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  qui minus itaque, non esse totam minima mollitia dolores
                  tempora aut fugiat dolorem labore magni, quidem ratione
                  expedita. Iure, architecto id.
                </motion.p>
              </div>
            </div>

            <div className='mt-8 lg:mt-12 relative'>
              <div className='absolute top-0 left-0 w-full h-full overflow-x-auto bg-background/90 p-4'>
                <StoryVolumeSelectionTab />
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

function StoryColumeCategoryPill() {
  const {activePage} = useContext(ActivePageContext);
  const selectedCategory = activePage.state?.volumeType as StoryVolumeTypes;

  const category: Record<StoryVolumeTypes, string> = {
    mainVolumes: 'CERITA UTAMA',
    specialVolumes: 'CERITA SPESIAL',
    premiumVolumes: 'CERITA PREMIUM',
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
