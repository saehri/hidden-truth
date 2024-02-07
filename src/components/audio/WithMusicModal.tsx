import {useContext, useState} from 'react';
import {createPortal} from 'react-dom';
import {AudioContext} from './AudioWrapper';

export default function WithMusicModal() {
  const [isOpen, setOpen] = useState<boolean>(true);
  const audioContext = useContext(AudioContext);

  return (
    <>
      {isOpen &&
        createPortal(
          <div className='fixed top-0 left-0 w-full h-full z-50 bg-slate-950/80 xl:backdrop-blur-sm grid place-items-center p-8'>
            <div className='bg-background border border-border p-4 text-yellow-500 max-w-96'>
              <h4 className='text-base lg:text-lg font-medium mb-3'>
                Nyalakan musik untuk pengalaman bermain yang lebih seru.
              </h4>

              <p className='text-yellow-600 text-xs lg:text-sm mb-5'>
                Kamu juga bisa mengatur musik di menu settings.
              </p>

              <div className='flex gap-4'>
                <button
                  onClick={() => setOpen(false)}
                  className='w-full bg-gradient-to-tl from-red-900 via-red-800 to-red-500 border border-border p-2 px-4 pt-3 shadow-md text-xs lg:text-sm hover:opacity-80 transition-opacity'
                >
                  Tidak, matikan
                </button>

                <button
                  onClick={() => {
                    audioContext.musicRef.play();
                    setOpen(false);
                  }}
                  className='w-full bg-gradient-to-tl from-green-900 via-green-800 to-green-500 border border-border p-2 px-4 pt-3 shadow-md text-xs lg:text-sm hover:opacity-80 transition-opacity'
                >
                  Ya, nyalakan
                </button>
              </div>
            </div>
          </div>,
          document.getElementById('emtris__dialog') as
            | Element
            | DocumentFragment
        )}
    </>
  );
}
