import BackButton from '../components/ui/BackButton';
import StorylineSlider from '../components/slider/StorylineSlider';

export default function StorylineSelectionPage() {
  return (
    <section className='relative w-full h-full max-w-screen-sm mx-auto'>
      <div className='absolute top-16 left-1/2 -translate-x-1/2 z-50 w-full bg-gradient-to-r from-transparent via-slate-950 to-transparent'>
        <h1 className='font-normal z-30 w-max mx-auto p-2 px-6 text-slate-50 text-base font-sans'>
          Pilih Kasus
        </h1>
      </div>

      <BackButton
        buttonName='Tipe alur cerita'
        goBackTo={{location: 'homepage'}}
        iconType='back'
      />

      <StorylineSlider />
    </section>
  );
}
