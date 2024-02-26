import BackButton from '../components/ui/BackButton';
import StorylineSlider from '../components/slider/StorylineSlider';
import {tag} from '../assets/images/tag';

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
    <div className='absolute bottom-5 right-0 z-50 w-48 rotate-12'>
      <div className='relative pt-[calc((4/6)*100%)]'>
        <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-max font-bold text-md text-yellow-900'>
          PILIH KASUS
        </h1>
        <img src={tag} alt='' className='absolute top-0 left-0' />
      </div>
    </div>
  );
}
