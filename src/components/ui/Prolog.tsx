import {
  Dispatch,
  Fragment,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
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

export function PrologWrapper() {
  const [watchedProlog, setWatchedProlog] = useAtom(watchedPrologData);
  const {activePage} = useContext(ActivePageContext);
  const storylineId = activePage.state?.storylineId as StorylineIdTypes;

  // Check first if the prolog id is in the local storage
  const [isOpen, setOpen] = useState<boolean>(
    !(watchedProlog.indexOf(storylineId as never) >= 0)
  );

  const prologSequences = getProlog(storylineId).prologSequences;
  function storePrologToWatchedList() {
    setWatchedProlog(
      activePage.state?.storylineId as StorylineIdTypes as never
    );
  }

  return (
    <>
      {isOpen && (
        <Prolog
          setOpen={setOpen}
          prologSequences={prologSequences}
          storePrologToWatchedList={storePrologToWatchedList}
        />
      )}
    </>
  );
}

interface Prolog {
  storePrologToWatchedList: any;
  setOpen: Dispatch<SetStateAction<boolean>>;
  prologSequences: PrologSequenceTypes[];
}

export function Prolog({
  setOpen,
  prologSequences,
  storePrologToWatchedList,
}: Prolog) {
  const [currentSequence, setCurrentSequence] = useState<number>(0);

  useEffect(() => {
    function handleTimeout() {
      if (currentSequence + 1 > prologSequences.length - 1) {
        storePrologToWatchedList();
        setOpen(false);
      } else {
        setCurrentSequence((prev) => prev + 1);
      }
    }

    const time = setTimeout(handleTimeout, PROLOG_DURATION * 1000);
    return () => clearTimeout(time);
  }, [currentSequence]);

  const textSequence = prologSequences[currentSequence]?.text ?? '';

  return (
    <>
      <motion.div
        exit={{opacity: 0}}
        transition={{duration: 1}}
        className='absolute top-0 left-0 z-[90] w-full h-full'
      >
        <div className='absolute top-0 left-0 z-50 w-full h-full bg-slate-950 overflow-hidden'>
          <AnimatePresence mode='popLayout'>
            {currentSequence < prologSequences.length && (
              <Fragment
                key={prologSequences[currentSequence]?.imageCover ?? ''}
              >
                <motion.img
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

                <TypingAnimation text={textSequence} />
              </Fragment>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
}
