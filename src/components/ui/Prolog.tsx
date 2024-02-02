import {useLayoutEffect, useState} from 'react';
import {motion} from 'framer-motion';

import {StorylineIdTypes} from '../../services/utils/types';
import {getProlog} from '../../database/prolog';
import usePrologController from '../../services/controller/prologController';

interface PrologWrapper {
  storylineId: StorylineIdTypes;
}

export function PrologWrapper({storylineId}: PrologWrapper) {
  const prologController = usePrologController();

  useLayoutEffect(() => {
    prologController.getOpenedProlog();
  }, []);

  function storeToOpenedProlog() {
    prologController.setOpenedProlog(storylineId);
  }

  return (
    <>
      {!(prologController.openedProlog.indexOf(storylineId as never) >= 0) && (
        <Prolog
          storylineId={storylineId}
          storeToOpenedProlog={storeToOpenedProlog}
        />
      )}
    </>
  );
}

interface Prolog {
  storylineId: StorylineIdTypes;
  storeToOpenedProlog: () => void;
}

export function Prolog({storylineId, storeToOpenedProlog}: Prolog) {
  const prologSequences = getProlog(storylineId).prologSequences;
  const [currentSequence, setCurrentSequence] = useState<number>(0);

  return (
    <>
      <motion.div className='absolute top-0 left-0 z-[90] w-full h-full'>
        <div className='absolute top-0 left-0 z-50 w-full h-full bg-slate-950 overflow-hidden'>
          <motion.img
            src={prologSequences[currentSequence]?.imageCover}
            alt=''
            className='absolute top-0 left-0 w-full h-full object-cover'
          />

          <div className='absolute bottom-0 left-0 p-8 min-h-24 flex flex-col gap-3 justify-between bg-gradient-to-r from-blue-600 via-blue-400 to-transparent w-full border-t border-b border-blue-400'>
            <div className='max-w-[85ch]'>
              <h4 className='text-white'>
                {prologSequences[currentSequence]?.text}
              </h4>
            </div>

            {currentSequence < prologSequences.length - 1 ? (
              <button
                onClick={() =>
                  setCurrentSequence((prev) =>
                    prev + 1 < prologSequences.length ? prev + 1 : prev
                  )
                }
                className='w-max ml-auto p-2 pb-1 text-white border border-blue-200 hover:bg-blue-500 flex gap-3 text-xs lg:text-base'
              >
                Selanjutya
              </button>
            ) : (
              <button
                onClick={storeToOpenedProlog}
                className='w-max ml-auto p-2 pb-1 text-yellow-900 border border-yellow-600 bg-gradient-to-tr from-yellow-500 to-yellow-50 flex gap-3 text-xs lg:text-base'
              >
                Mulai petualangan
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
}
