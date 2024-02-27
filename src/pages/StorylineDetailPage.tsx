import BackButton from '../components/ui/BackButton';
import StorylineDetailChapterCardSlider from '../components/slider/StorylineDetailChapterCardSlider';

export default function StorylineDetailPage() {
  return (
    <section className='relative w-full h-full max-w-screen-sm mx-auto'>
      <BackButton
        goBackTo={{location: 'storylineSelectionPage'}}
        iconType='back'
      />

      <StorylineDetailChapterCardSlider />
    </section>
  );
}
