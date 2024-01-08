import {useContext, useEffect} from 'react';
import {ActivePageContext} from '../services/API/pageViewingManagerAPI';

import Icons from '../components/ui/Icons';
import Button from '../components/ui/Button';
import FullscreenBackground from '../components/ui/FullscreenBackground';
import StorystoryVolumeSelectionTab from '../components/ui/StoryVolumeSelectionTab';

export default function StorystoryVolumeSelectionPage() {
  const {setActivePage} = useContext(ActivePageContext);

  useEffect(() => {
    function handleEscapeKeyPressed(ev: KeyboardEvent) {
      if (ev.key === 'Escape') {
        setActivePage({location: 'home'});
      }
    }

    window.addEventListener('keyup', handleEscapeKeyPressed);
    return () => window.removeEventListener('keyup', handleEscapeKeyPressed);
  }, []);

  return (
    <>
      <div className='w-full h-full bg-slate-950/95 relative z-20 pt-6'>
        <section className='pb-0 grid grid-cols-[33.375%,_1fr] gap-10 max-w-[92%] mx-auto'>
          <div className='w-full h-full flex items-end'>
            <div className='w-full pt-[calc((350/257)*100%)] relative'>
              <img
                className='absolute bottom-0 left-0 w-full h-full object-contain object-bottom'
                src='/avatar/wijayadefacto/regular/wijaya defacto.webp'
                alt=''
              />
            </div>
          </div>

          <div className='w-full h-full flex flex-col gap-8 justify-end'>
            <Button
              onClick={() => setActivePage({location: 'home'})}
              className='ml-auto relative before:content-["[Esc]"] before:absolute before:top-[-50%] before:text-xs before:text-yellow-600'
            >
              <Icons.CloseCircled className='w-6 h-6 3xl:w-10 3xl:h-10' />
            </Button>

            <StorystoryVolumeSelectionTab />
          </div>
        </section>
      </div>

      <FullscreenBackground
        imageLink={'/background/homescreen-big.webp'}
        placeholderLink={'/background/placeholder/homescreen-placeholder.webp'}
      />
    </>
  );
}
