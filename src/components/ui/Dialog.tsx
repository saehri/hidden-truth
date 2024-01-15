import {Dispatch, Fragment, SetStateAction, useContext, useState} from 'react';
import {motion} from 'framer-motion';
import {twMerge} from 'tailwind-merge';
import {DialogChoiceTypes, DialogTypes} from '../../database/dialogs';
import {ActivePageContext} from '../../services/API/pageViewingManagerAPI';

import FullscreenBackground from './FullscreenBackground';

interface Dialog {
  dialogSquences: Record<string, DialogTypes[]>;
}

export default function Dialog({dialogSquences}: Dialog) {
  return (
    <div className='absolute top-0 left-0 z-[90] w-full h-full'>
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.8, delay: 0.5}}
        className='absolute top-0 left-0 z-50 w-full h-full bg-slate-950/40 flex items-center'
      >
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 1.5}}
          className='w-full h-[80%] flex justify-between'
        >
          <DialogSequenceRenderer dialogSequences={dialogSquences} />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{y: '-100%'}}
        animate={{y: 0}}
        transition={{delay: 0.8, damping: 8}}
        className='absolute left-0 top-0 z-50 w-full h-[10%] bg-slate-950'
      ></motion.div>

      <motion.div
        initial={{y: '100%'}}
        animate={{y: 0}}
        transition={{delay: 0.8, damping: 8}}
        className='absolute left-0 bottom-0 z-50 w-full h-[10%] bg-slate-950'
      ></motion.div>

      <FullscreenBackground
        imageLink={'/background/homescreen-big.webp'}
        placeholderLink={'/background/placeholder/homescreen-placeholder.webp'}
      />
    </div>
  );
}

interface DialogSequenceRenderer {
  dialogSequences: Record<string, DialogTypes[]>;
}

function DialogSequenceRenderer({dialogSequences}: DialogSequenceRenderer) {
  const [currentDialogId, setCurrentDialogId] = useState<string>('sequence1');
  const dialogSequenceToRender = dialogSequences[currentDialogId];

  return (
    <>
      {dialogSequenceToRender.map((ds, index) => (
        <Fragment key={ds.name}>
          <div
            className={twMerge(
              'w-full max-w-[450px] relative',
              !ds.isSpeaking ? 'brightness-[.1]' : 'brightness-100 z-30'
            )}
          >
            <div className='absolute bottom-0 left-0 w-full pt-[calc((4/3)*100%)] bg-yellow-800'></div>
          </div>

          <div
            className={twMerge(
              'w-full absolute bottom-[10%] min-h-28 p-4 pt-10 border-t border-b border-blue-400',
              index === 0
                ? 'bg-gradient-to-r from-blue-600 to-transparent left-0'
                : 'bg-gradient-to-l from-blue-600 to-transparent right-0',
              !ds.isSpeaking ? 'opacity-0' : 'opacity-100 z-40',
              index === 0 ? 'text-left' : 'text-right'
            )}
          >
            <h6
              className={twMerge(
                'mb-4 absolute bg-blue-600 -top-8 uppercase text-yellow-400 text-lg z-50 p-2 border border-blue-50',
                index === 0 ? 'left-4' : 'right-4'
              )}
            >
              {ds.name.replaceAll('username', 'Nissan')}
            </h6>

            <DialogSequenceTextRenderer
              charName={ds.name}
              hasMultiDialogChoice={ds.hasMultiDialogChoice}
              isSpeaking={ds.isSpeaking}
              dialogChoice={ds.dialogChoice}
              dialogChoices={ds.dialogChoices}
              setCurrentDialogId={setCurrentDialogId}
            />
          </div>
        </Fragment>
      ))}
    </>
  );
}

interface DialogSequenceTextRenderer {
  charName: string;
  isSpeaking: boolean;
  hasMultiDialogChoice: boolean;
  dialogChoices?: DialogChoiceTypes[];
  dialogChoice?: DialogChoiceTypes;
  setCurrentDialogId: Dispatch<SetStateAction<string>>;
}

function DialogSequenceTextRenderer({
  isSpeaking,
  hasMultiDialogChoice,
  dialogChoice,
  dialogChoices,
  setCurrentDialogId,
}: DialogSequenceTextRenderer) {
  const {activePage, setActivePage} = useContext(ActivePageContext);

  function handleClick(onDialogEnd: boolean, nextSequenceId?: string) {
    if (onDialogEnd) {
      setActivePage({location: 'gamePage', state: {...activePage.state}});
    } else {
      setCurrentDialogId(nextSequenceId as string);
    }
  }

  if (!isSpeaking) return <></>;

  if (hasMultiDialogChoice) {
    return (
      <div className='flex flex-col gap-4 text-blue-50'>
        {dialogChoices?.map((dc) => (
          <button
            onClick={() => handleClick(dc.isEnding as boolean, dc.nextSequence)}
            key={dc.text}
            className='w-max ml-auto p-2 pb-1 border border-blue-200 hover:bg-blue-500 flex gap-3'
          >
            <span>{dc.text.replaceAll('username', 'Nissan')}</span>
            <span>-</span>
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className='flex flex-col gap-4 text-blue-50'>
      <p>{dialogChoice?.text.replaceAll('username', 'Nissan')}</p>

      <button
        onClick={() =>
          handleClick(
            dialogChoice?.isEnding as boolean,
            dialogChoice?.nextSequence
          )
        }
        className='mt-8 w-max ml-auto'
      >
        Selanjutnya
      </button>
    </div>
  );
}
