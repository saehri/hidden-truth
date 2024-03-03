import {AnimatePresence, motion} from 'framer-motion';
import React, {useContext} from 'react';
import {ActivePageContext} from '../../services/API/pageViewingManagerAPI';

import {GameStateTypes} from '../../services/utils/types';

type DivTypes = React.HTMLAttributes<HTMLDivElement>;

export default function GameEndingModal({status}: {status: GameStateTypes}) {
  const isOpen = status === 'completed' || status === 'gameOver';

  return (
    <AnimatePresence>
      {isOpen && (
        <Wrapper>
          <Overlay />

          {status === 'completed' && <FireWorks />}

          <motion.div
            initial={{y: 200, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            exit={{y: 200, opacity: 0, transition: {delay: 0}}}
            transition={{delay: 0.8}}
            className='relative z-50 w-full max-w-[500px] min-h-52 lg:min-h-64 p-4 h-max bg-background border border-border pt-6 rounded-md flex flex-col justify-end'
          >
            <Title>
              {status === 'completed'
                ? '🎉 SELAMAT, KAMU MENANG! 🎉'
                : 'KAMU GAGAL'}
            </Title>

            <Message />

            <CloseButton />
          </motion.div>
        </Wrapper>
      )}
    </AnimatePresence>
  );
}

function Wrapper({children}: DivTypes) {
  return (
    <div className='fixed top-0 left-0 w-full h-full z-[100] grid place-items-center p-4'>
      {children}
    </div>
  );
}

function Overlay() {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0, transition: {delay: 0}}}
      transition={{delay: 0.5}}
      className='w-full h-full bg-slate-950/95 absolute top-0 left-0 -z-10'
    ></motion.div>
  );
}

function Title({children}: DivTypes) {
  return (
    <h4 className='uppercase font-semibold text-slate-950 text-sm lg:text-lg absolute -top-5 left-1/2 -translate-x-1/2 w-max bg-slate-300 p-1 pt-2 px-3 rounded-full'>
      {children}
    </h4>
  );
}

function Message() {
  return (
    <div className='max-w-[75%] lg:max-w-[70%] text-yellow-300'>
      <p className='drop-shadow-md font-normal text-xs lg:text-base'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
        magni, officiis quis vitae culpa asperiores provident hic consequuntur
        eius ipsum.
      </p>
    </div>
  );
}

function CloseButton() {
  const {activePage, setActivePage} = useContext(ActivePageContext);

  function closeModal() {
    setActivePage({
      location: 'storylineDetailPage',
      state: {
        storylineId: activePage?.state?.storylineId as string,
        storylineType: activePage?.state?.storylineType as string,
        storylineTitle: activePage.state?.storylineTitle as string,
      },
    });
  }

  return (
    <button
      onClick={closeModal}
      className='w-[25%] group border-none outline-none z-10 block mx-auto absolute -bottom-5 -right-5 lg:-bottom-8 lg:-right-8 shadow-xl shadow-slate-950 rounded-full'
    >
      KEMBALI
    </button>
  );
}

function FireWorks() {
  return (
    <>
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        className='w-full max-w-52 lg:max-w-96 absolute top-0 lg:bottom-0 right-0 lg:left-1/2 lg:-translate-x-1/2 z-50'
      >
        <div className='relative w-full pt-[100%]'>
          <img
            src='/images/fireworks.gif'
            draggable={false}
            alt=''
            className='w-full h-full absolute top-0 left-0'
          />
        </div>
      </motion.div>

      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        className='w-full max-w-52 lg:max-w-96 absolute top-0 left-0 lg:left-1/2 lg:-translate-x-1/2 z-50'
      >
        <div className='relative w-full pt-[100%]'>
          <img
            src='/images/fireworks.gif'
            draggable={false}
            alt=''
            className='w-full h-full absolute top-0 left-0'
          />
        </div>
      </motion.div>

      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        className='w-full max-w-96 absolute top-1/2 left-0 -translate-y-1/2 z-50 hidden lg:block'
      >
        <div className='relative w-full pt-[100%]'>
          <img
            src='/images/fireworks.gif'
            draggable={false}
            alt=''
            className='w-full h-full absolute top-0 left-0'
          />
        </div>
      </motion.div>

      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        className='w-full max-w-96 absolute top-1/2 right-0 -translate-y-1/2 z-50 hidden lg:block'
      >
        <div className='relative w-full pt-[100%]'>
          <img
            src='/images/fireworks.gif'
            draggable={false}
            alt=''
            className='w-full h-full absolute top-0 left-0'
          />
        </div>
      </motion.div>
    </>
  );
}
