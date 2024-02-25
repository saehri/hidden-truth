import BackButton from '../components/ui/BackButton';
import StorylineSlider from '../components/slider/StorylineSlider';

export default function StorylineSelectionPage() {
  return (
    <section className='relative w-full h-full'>
      <PageTitle />

      <BackButton
        buttonName='Tipe alur cerita'
        goBackTo={{location: 'homepage'}}
        iconType='back'
      />

      <StorylineSlider />
    </section>
  );
}

function PageTitle() {
  return (
    <div className='absolute bottom-12 right-0 z-50 bg-white font-semibold p-5 px-12 pr-16 -rotate-12'>
      <h1>PILIH KASUS</h1>
    </div>
  );
}
