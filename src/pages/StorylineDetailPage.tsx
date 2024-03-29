import {motion} from 'framer-motion';
import {useContext, useState} from 'react';
import {ActivePageContext} from '../services/API/pageViewingManagerAPI';

import BackButton from '../components/ui/BackButton';
import StorylineDetailChapterCardSlider from '../components/slider/StorylineDetailChapterCardSlider';
import {Lines} from './Homepage';

import {homepageBackground} from '../assets/backgrounds/homepageBackground';
import useCharacterProgressController from '../services/controller/characterProgressController';
import {StorylineIdTypes} from '../services/utils/types';

export default function StorylineDetailPage() {
  return (
    <section className='relative w-full h-full'>
      <div className='relative z-10 h-full w-full max-w-screen-sm mx-auto'>
        <BackButton
          goBackTo={{location: 'storylineSelectionPage'}}
          iconType='back'
        />

        <GameInformationBar />
        <StorylineDetailChapterCardSlider />
      </div>

      <div
        className='absolute top-4 left-4 hidden lg:block p-2 text-[10px] max-w-52 z-50 border-l border-slate-50 text-white bg-slate-600/40'
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 93%, 93% 100%, 0 100%, 0% 50%)',
        }}
      >
        <p className='mb-3 font-semibold text-xs'>Kontrol Navigasi:</p>

        <p className='text-slate-50/60'>
          Gunakanan "Shift" + "Mousewheel" atau tekan "Panah Kiri" atau "Panah
          Kanan" untuk bernavigasi
        </p>
      </div>

      {/* DECORATION */}
      <Lines />

      <motion.img
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        src={homepageBackground}
        className='w-full h-full object-cover brightness-[.1] absolute top-0 left-0 z-0'
        alt=''
      />
    </section>
  );
}

function GameInformationBar() {
  const {activePage} = useContext(ActivePageContext);
  const [isMaximize, setMaximize] = useState<boolean>(true);
  const gameProgress = useCharacterProgressController();
  const currentProgress = gameProgress.getStorylineProgress(
    activePage.state?.storylineId as StorylineIdTypes
  );

  return (
    <motion.div
      animate={{top: isMaximize ? '56px' : '-4px'}}
      className='absolute left-0 w-full px-4 z-50'
    >
      <button
        onClick={() => setMaximize(!isMaximize)}
        className='absolute -bottom-4 outline-none border-none left-1/2 -translate-x-1/2 h-4 w-20 bg-slate-50/10 grid place-items-center lg:backdrop-blur-sm'
        style={{
          clipPath: 'polygon(0 0, 100% 0, 79% 100%, 23% 100%)',
        }}
      >
        <span className='block w-1/2 h-[1px] bg-slate-50/70' />
        <span className='sr-only'>Toggle hud</span>
      </button>

      <motion.div
        initial={false}
        animate={{opacity: isMaximize ? 1 : 0}}
        className='flex justify-between p-2 bg-slate-50/10 text-sm text-slate-50 lg:backdrop-blur-sm'
      >
        <div>
          <span className='text-[10px] text-slate-300 bg-slate-50/10 px-2 mb-1 w-max block border-x border-slate-50'>
            KASUS
          </span>

          <div className='overflow-hidden max-w-36 sm:max-w-96'>
            <p className='uppercase block w-max overflow-ellipsis'>
              {activePage.state?.storylineTitle as string}
            </p>
          </div>
        </div>

        <div>
          <div className='text-[10px] text-slate-300 bg-slate-50/10 px-2 mb-1 w-max border-x border-slate-50 flex'>
            <span>COMPLETED</span>
            <span className='hidden sm:block ml-1'>CHAPTER</span>
            <span>/</span>
            <span>TOTAL</span>
            <span className='hidden sm:block ml-1'>CHAPTER</span>
          </div>
          <p className='text-right'>
            {currentProgress?.finishedChapterCount}/
            {currentProgress?.totalChapter}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
