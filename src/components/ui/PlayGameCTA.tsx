import {useSearchParams} from 'react-router-dom';
import {useEffect, useState} from 'react';

import Icons from './Icons';
import Modal from '../modal/ModalGeneric';
import Button from './Button';
import ChapterSelectionTab from './ChapterSelectionTab';

export default function PlayGameCTA() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [state] = useState(searchParams.get('chapterSelection') === 'open');

  useEffect(() => {
    function closeModal() {
      setSearchParams({chapterSelection: 'close'});
    }

    window.addEventListener('keyup', (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    });

    return window.removeEventListener('keyup', closeModal);
  }, []);

  return (
    <>
      <Modal.Wrapper initialState={state}>
        <button
          onClick={() =>
            setSearchParams({chapterSelection: 'open'}, {replace: true})
          }
          className='absolute w-[11.25%] -top-[130%] left-1/2 -translate-x-1/2 p-2 3xl:p-4 group border-none outline-none'
        >
          <span className='sr-only'>Play game</span>

          <span className='block w-full pt-[100%] relative'>
            <span className='yellow--layer block absolute top-0 left-0 w-full h-full p-2 3xl:p-3 rounded-full bg-gradient-to-t from-[#453B06] via-[#BFA622] to-[#FFF8D1] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-yellow-600 after:rounded-full after:pointer-events-none after:blur-md after:opacity-0 after:group-hover:opacity-20 after:transition-opacity'>
              <span className='dark-blue--layer block rounded-full w-full h-full bg-[#002534] p-1 3xl:p-2'>
                <span className='relative blue-layer grid place-items-center overflow-hidden rounded-full w-full h-full bg-gradient-to-t from-transparent via-[#22A2D3]/50 to-[#D8F4FF] border-2 border-[#3988A7]'>
                  <span className='relative z-10 text-4xl 3xl:text-6xl font-normal pointer-events-none text-white translate-y-1'>
                    PLAY
                  </span>
                </span>
              </span>
            </span>
          </span>

          <Icons.PlayButtonRing />
        </button>

        <Modal.Content
          initialState={searchParams.get('chapterSelection') === 'open'}
          className='pb-0 grid grid-cols-[33.375%,_1fr] gap-10 max-w-[92%] left-1/2 -translate-x-1/2'
        >
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
              onClick={() =>
                setSearchParams({chapterSelection: 'close'}, {replace: true})
              }
              className='ml-auto relative before:content-["[Esc]"] before:absolute before:top-[-50%] before:text-xs before:text-yellow-600'
            >
              <Icons.CloseCircled className='w-6 h-6 3xl:w-10 3xl:h-10' />
            </Button>

            <ChapterSelectionTab />
          </div>
        </Modal.Content>
      </Modal.Wrapper>
    </>
  );
}
