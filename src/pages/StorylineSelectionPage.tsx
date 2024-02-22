import BackButton from '../components/ui/BackButton';
import StorylineSlider from '../components/slider/StorylineSlider';

export default function StorylineSelectionPage() {
  return (
    <section className='relative w-full h-full'>
      <BackButton
        buttonName='Tipe alur cerita'
        goBackTo={{location: 'homepage'}}
        iconType='back'
      />

      <StorylineSlider />
    </section>
  );
}
