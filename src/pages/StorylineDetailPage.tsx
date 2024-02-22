import BackButton from '../components/ui/BackButton';
import StorylineDetailChapterCardSlider from '../components/slider/StorylineDetailChapterCardSlider';

export default function StorylineDetailPage() {
  return (
    <section className='relative w-full h-full'>
      <BackButton
        goBackTo={{location: 'storylineSelectionPage'}}
        iconType='back'
      />

      <StorylineDetailChapterCardSlider />
    </section>
  );
}

{
  /* <StorylineDetailChapterCard
  storylineId={activePage.state?.storylineId as StorylineIdTypes}
  storylineType={activePage.state?.storylineType as StorylineTypes}
/> */
}
