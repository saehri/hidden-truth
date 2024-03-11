import {useState} from 'react';

import StorylineSlider from '../slider/StorylineSlider';
import StorylineTypeTabMenu from './StorylineSelectionTabMenu';

import {StorylineTypes} from '../../services/utils/types';

export default function StorylineSelectionTab() {
  const [selectedStorylineCategory, setStorylineSelectedCategory] =
    useState<StorylineTypes>('specialStoryline');

  return (
    <div className='absolute w-full h-full flex flex-col z-30'>
      <div className='relative'>
        <StorylineTypeTabMenu
          setStorylineSelectedCategory={setStorylineSelectedCategory}
        />
      </div>

      <MissionContainerWrapper>
        <StorylineSlider
          selectedStorylineCategory={selectedStorylineCategory}
        />
      </MissionContainerWrapper>
    </div>
  );
}

function MissionContainerWrapper({children}: {children: React.ReactNode}) {
  return <div className='h-full pt-8'>{children}</div>;
}
