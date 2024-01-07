import {useContext} from 'react';
import {ActivePageContext} from '../services/API/pageViewingManagerAPI';

import Button from '../components/ui/Button';

export default function ChapterDetail() {
  const {setActivePage} = useContext(ActivePageContext);

  return (
    <div className='relative overflow-hidden h-full'>
      <section className='grid grid-cols-[1fr,_35%] h-full'>
        <div className='bg-blue-700'></div>
        <div className='bg-white flex justify-end items-start flex-col gap-8'>
          <Button onClick={() => setActivePage({location: 'chapterSelection'})}>
            Back button
          </Button>

          <button
            onClick={() =>
              setActivePage({
                location: 'game',
                state: {gameId: 'pemilu24-1-tg1'},
              })
            }
          >
            Chapter 1 - Kerusuhan
          </button>
        </div>
      </section>

      {/* <LoadingScreen /> */}
    </div>
  );
}
