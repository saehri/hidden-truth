import {useContext} from 'react';
import {ActivePageContext} from '../services/API/pageViewingManagerAPI';
import {StorylineIdTypes, StorylineTypes} from '../services/utils/types';
import {motion} from 'framer-motion';

import {PrologWrapper} from '../components/ui/Prolog';
import FullscreenBackground from '../components/ui/FullscreenBackground';
import StorylineDetailChapterCard from '../components/ui/StorylineDetailChapterCard';
import Icons from '../components/ui/Icons';
import Marquee from 'react-fast-marquee';

export default function StorylineDetailPage() {
  const {activePage} = useContext(ActivePageContext);

  return (
    <>
      <Navigation />

      <div className='relative w-full h-full z-40'>
        <div className='absolute right-0 top-0 pt-[13%] z-50 w-full h-full p-10 overflow-y-auto hideScrollbar bg-slate-950/70'>
          <div className='w-max h-[calc((100%-13%)-_4rem)]'>
            <StorylineDetailChapterCard
              storylineId={activePage.state?.storylineId as StorylineIdTypes}
              storylineType={activePage.state?.storylineType as StorylineTypes}
            />
          </div>
        </div>
      </div>

      <FullscreenBackground
        imageLink={
          'https://utfs.io/f/1f6ec64e-2de0-45ef-93f3-1b27a37c0db3-gpa8vq.webp'
        }
        placeholderLink={
          'https://utfs.io/f/9e30c3bc-3310-4497-a0d1-793a1ac62ae8-e5s95w.webp'
        }
        animate={false}
      />

      <PrologWrapper
        storylineId={activePage.state?.storylineId as StorylineIdTypes}
      />
    </>
  );
}

function Navigation() {
  const {activePage, setActivePage} = useContext(ActivePageContext);

  return (
    <motion.div
      initial={{opacity: 0, y: '-50%', x: '-50%'}}
      animate={{opacity: 1, y: 0, x: '-50%'}}
      className='absolute top-0 left-1/2 z-50 p-2 lg:p-4 px-5 lg:px-10 bg-background flex items-center gap-6 lg:gap-12 text-yellow-400 w-max'
      style={{clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)'}}
    >
      <button
        onClick={() => setActivePage({location: 'homepage'})}
        title='Halaman utama'
      >
        <Icons.Home />
        <span className='sr-only'>Kembali ke halaman utama</span>
      </button>

      <div className='max-w-16 lg:max-w-44 overflow-hidden relative after:absolute after:right-0 after:top-0 after:w-1/6 after:h-full after:bg-gradient-to-l after:from-background after:via-background/10 after:to-transparent after:z-10 before:absolute before:left-0 before:top-0 before:w-1/6 before:h-full before:bg-gradient-to-r before:from-background before:via-background/10 before:to-transparent before:z-10'>
        <Marquee
          className='overflow-hidden flex gap-3 text-xs lg:text-base'
          delay={3}
        >
          {activePage.state?.storylineTitle as string}
        </Marquee>
      </div>

      <button
        title='Pemilihan alur cerita'
        onClick={() =>
          setActivePage({
            location: 'storylineSelectionPage',
            state: {
              storylineType: activePage.state?.storylineType as StorylineTypes,
            },
          })
        }
      >
        <Icons.CloseCircled className='w-4 h-4' />
        <span className='sr-only'>
          Kembali ke halaman pemilihan alur cerita
        </span>
      </button>
    </motion.div>
  );
}
