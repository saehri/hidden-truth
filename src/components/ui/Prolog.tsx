import {Dispatch, SetStateAction, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {useAtom} from 'jotai';

import {ActivePageContext} from '../../services/API/pageViewingManagerAPI';
import {StorylineIdTypes} from '../../services/utils/types';
import {
  PrologSequenceTypes,
  getProlog,
  watchedPrologData,
} from '../../database/prolog';
import TypingAnimation from './TypingAnimation';

const PROLOG_DURATION = 4;

interface PrologWrapper {
  storylineId: StorylineIdTypes;
}

export function PrologWrapper({storylineId}: PrologWrapper) {
  const [watchedProlog, setWatchedProlog] = useAtom(watchedPrologData);

  // Check first if the prolog id is in the local storage
  const [isOpen, setOpen] = useState<boolean>(
    !(watchedProlog.indexOf(storylineId as never) >= 0)
  );

  return (
    <>{isOpen && <Prolog setOpen={setOpen} storylineId={storylineId} />}</>
  );
}

interface Prolog {
  setOpen: Dispatch<SetStateAction<boolean>>;
  storylineId: StorylineIdTypes;
}

export function Prolog({setOpen, storylineId}: Prolog) {
  const prologSequences = getProlog(storylineId).prologSequences;
  const [currentSequence, setCurrentSequence] = useState<number>(0);

  console.log(prologSequences);

  return (
    <>
      <motion.div
        exit={{opacity: 0}}
        transition={{duration: 1}}
        className='absolute top-0 left-0 z-[90] w-full h-full'
      >
        <div className='absolute top-0 left-0 z-50 w-full h-full bg-slate-950 overflow-hidden'>
          <AnimatePresence mode='popLayout'>
            <motion.img
              key={prologSequences[currentSequence]?.imageCover}
              initial={{scale: 1, opacity: 0}}
              animate={{scale: 1.1, opacity: 1}}
              exit={{opacity: 0}}
              transition={{
                duration: PROLOG_DURATION,
                opacity: {duration: 0.5},
              }}
              src={prologSequences[currentSequence]?.imageCover ?? ''}
              alt=''
              className='absolute top-0 left-0 w-full h-full object-cover'
            />
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
}

{
  /* <TypingAnimation text={textSequence} /> */
}
