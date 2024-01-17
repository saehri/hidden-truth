import {useContext} from 'react';
import {ActivePageContext} from '../services/API/pageViewingManagerAPI';
import {StorylineIdTypes, StorylineTypes} from '../services/utils/types';

import {PrologWrapper} from '../components/ui/Prolog';
import LoadingScreen from '../components/splashScreen/LoadingScreen';
import FullscreenBackground from '../components/ui/FullscreenBackground';
import StorylineDetailChapterCard from '../components/ui/StorylineDetailChapterCard';
import BackButton from '../components/ui/BackButton';

export default function StorylineDetailPage() {
  const {activePage} = useContext(ActivePageContext);

  return (
    <>
      <BackButton
        buttonName='Pilih alur cerita'
        goBackTo={{
          location: 'storylineSelectionPage',
          state: {...activePage.state},
        }}
      />

      <div className='relative w-full h-full z-40'>
        <div className='absolute right-0 top-0 pt-[13%] z-50 w-full h-full p-10 overflow-y-auto hideScrollbar bg-green-800'>
          <div className='w-max h-[calc((100%-13%)-_4rem)]'>
            <StorylineDetailChapterCard
              storylineId={activePage.state?.storylineId as StorylineIdTypes}
              storylineType={activePage.state?.storylineType as StorylineTypes}
            />
          </div>
        </div>
      </div>

      <FullscreenBackground
        imageLink={'/background/homescreen-big.webp'}
        placeholderLink={'/background/placeholder/homescreen-placeholder.webp'}
      />
      <LoadingScreen />

      <PrologWrapper />
    </>
  );
}
