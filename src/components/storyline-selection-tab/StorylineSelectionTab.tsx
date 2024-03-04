import StorylineSlider from '../slider/StorylineSlider';
import StorylineTypeTabMenu from './StorylineSelectionTabMenu';

export default function StorylineSelectionTab() {
  return (
    <div className='absolute w-full h-full flex flex-col z-30'>
      <div className='relative'>
        <StorylineTypeTabMenu />
      </div>

      <MissionContainerWrapper>
        <StorylineSlider />
      </MissionContainerWrapper>
    </div>
  );
}

function MissionContainerWrapper({children}: {children: React.ReactNode}) {
  return <div className='h-full pt-8'>{children}</div>;
}
