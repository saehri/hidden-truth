import BackButton from '../components/ui/BackButton';
import StorystoryVolumeSelectionTab from '../components/ui/StoryVolumeSelectionTab';

export default function StorystoryVolumeSelectionPage() {
  return (
    <>
      <div className='w-full h-full bg-slate-950 relative z-50 py-2 sm:py-4 md:py-8 3xl:py-10'>
        <section className='pb-0 flex items-center max-w-[92%] h-full mx-auto'>
          <div className='w-full h-[70%] flex flex-col gap-4'>
            <BackButton
              buttonName='Tipe cerita'
              goBackTo={{location: 'storyTypes'}}
            />

            <StorystoryVolumeSelectionTab />
          </div>
        </section>
      </div>
    </>
  );
}
