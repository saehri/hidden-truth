import {useState} from 'react';
import {motion} from 'framer-motion';

import Icons from './Icons';
import Modal from '../modal/ModalGeneric';

export default function PlayGameCTA() {
  return (
    <>
      <Modal.Wrapper>
        <Modal.Trigger className='absolute w-[11.25%] -top-[130%] left-1/2 -translate-x-1/2 p-2 3xl:p-4 group border-none outline-none'>
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
        </Modal.Trigger>

        <Modal.Content className='pb-0 grid grid-cols-[33.375%,_1fr] gap-10 max-w-[92%] left-1/2 -translate-x-1/2'>
          <div className='w-full h-full flex items-end'>
            <div className='w-full pt-[calc((4/3)*100%)] relative'>
              <img
                className='absolute top-0 left-0 w-full h-full object-cover'
                src='/avatar/wijayadefacto/regular/wijaya defacto.webp'
                alt=''
              />
            </div>
          </div>

          <div className='w-full h-full'>This is the content</div>
        </Modal.Content>
      </Modal.Wrapper>
    </>
  );
}
