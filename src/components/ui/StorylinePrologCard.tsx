import {useContext} from 'react';
import {ActivePageContext} from '../../services/API/pageViewingManagerAPI';

import {tornNewspaper1} from '../../assets/images/tornNewspaper1';
import {tornNewspaper2} from '../../assets/images/tornNewspaper2';
import {barCode} from '../../assets/images/barCode';

export default function StorylinePrologCard() {
  return (
    <div className='w-80 xs:w-96 group'>
      <div className='w-full pt-[calc((4/3)*100%)] relative'>
        <div className='bg-yellow-100 absolute z-40 top-0 left-0 w-full h-full p-4 shadow-sm shadow-slate-950/30'>
          <div className='border border-dotted border-yellow-800/20 h-full relative flex flex-col justify-between px-2'>
            <h2 className='m-4 font-semibold text-yellow-950 border-b border-slate-600/30 block pb-1'>
              Serangan Cyber di Ibu Kota
            </h2>

            <StorylinePrologPolaroid />

            <div className='p-2 pr-4'>
              <img src={barCode} className='w-24 block ml-auto' alt='' />
            </div>
          </div>
        </div>

        <StorylinePrologNewspaper />
      </div>
    </div>
  );
}

function StorylinePrologNewspaper() {
  const {setActivePage} = useContext(ActivePageContext);

  return (
    <button
      onClick={() => setActivePage({location: 'prologPage'})}
      className='cursor-pointer block absolute top-0 left-0 w-full h-full bg-slate-100 rotate-6 group-hover:rotate-3 transition-transform brightness-95 z-30'
    >
      <div className='absolute top-0 left-0 w-36 h-24'>
        <img
          src={tornNewspaper1}
          className='w-full h-full object-fill'
          alt=''
        />
      </div>

      <div className='absolute bottom-0 left-0 w-36 h-24'>
        <img
          src={tornNewspaper1}
          className='w-full h-full object-fill'
          alt=''
        />
      </div>

      <div className='absolute -bottom-4 right-0 w-36 h-24'>
        <img
          src={tornNewspaper2}
          className='w-full h-full object-fill'
          alt=''
        />
      </div>
    </button>
  );
}

function StorylinePrologPolaroid() {
  return (
    <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-64 h-72 p-2 pb-8 bg-slate-50 border border-r-slate-100 shadow-sm shadow-slate-950/30'>
      <div className='w-full h-full bg-slate-200'></div>

      <StorylinePrologPolaroidTape />
    </div>
  );
}

function StorylinePrologPolaroidTape() {
  return (
    <>
      <div
        id='top__left'
        className='w-10 h-10 bg-slate-800 absolute -top-1 -left-1'
        style={{clipPath: 'polygon(0 0, 0 99%, 100% 0)'}}
      ></div>

      <div
        id='top__right'
        className='w-10 h-10 bg-slate-800 absolute -top-1 -right-1'
        style={{clipPath: 'polygon(0 0, 100% 100%, 100% 0)'}}
      ></div>

      <div
        id='bottom__right'
        className='w-10 h-10 bg-slate-800 absolute -bottom-1 -right-1'
        style={{clipPath: 'polygon(0 100%, 100% 100%, 100% 0)'}}
      ></div>

      <div
        id='bottom__left'
        className='w-10 h-10 bg-slate-800 absolute -bottom-1 -left-1'
        style={{clipPath: 'polygon(0 0, 100% 100%, 0 100%)'}}
      ></div>
    </>
  );
}
