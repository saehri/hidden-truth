import {Dispatch, Fragment, SetStateAction, useContext, useState} from 'react';
import {motion} from 'framer-motion';
import {twMerge} from 'tailwind-merge';
import {DialogChoiceTypes, DialogTypes} from '../../database/dialogs';
import {ActivePageContext} from '../../services/API/pageViewingManagerAPI';
import useCharacterController from '../../services/controller/characterController';

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
        className='absolute left-0 top-0 z-20 w-full h-[10%] bg-slate-950 pointer-events-none'
      ></motion.div>

      <motion.div
        initial={{y: '100%'}}
        animate={{y: 0}}
        transition={{delay: 0.8, damping: 8}}
        className='absolute left-0 bottom-0 z-20 w-full h-[10%] bg-slate-950 pointer-events-none'
      ></motion.div>
    </div>
  );
}

interface DialogSequenceRenderer {
  dialogSequences: Record<string, DialogTypes[]>;
}

const continerBgGradAppearance = (index: number, isActive: boolean) => {
  let classes: string = '';

  if (index === 0) {
    classes += 'bg-gradient-to-r from-blue-600 to-transparent left-0 text-left';
  } else {
    classes +=
      'bg-gradient-to-l from-blue-600 to-transparent right-0 text-right';
  }

  if (isActive) {
    classes += ' opacity-100 z-40 ';
  } else {
    classes += ' opacity-0 pointer-events-none';
  }

  return classes;
};

function DialogSequenceRenderer({dialogSequences}: DialogSequenceRenderer) {
  const [currentDialogId, setCurrentDialogId] = useState<string>('sequence1');
  const dialogSequenceToRender = dialogSequences[currentDialogId];
  const characterController = useCharacterController();

  const characterName = characterController.character?.character_name || '';

  return (
    <>
      {dialogSequenceToRender.map((ds, index) => (
        <Fragment key={ds.name}>
          <CharacterImageRendrer
            imageLink={ds.image}
            isActive={ds.isSpeaking}
            position={index === 0 ? 'left' : 'right'}
          />

          <div
            className={twMerge(
              'w-full absolute z-50 bottom-4 lg:bottom-[10%] min-h-16 lg:min-h-28 p-2 pt-5 lg:p-4 lg:pt-10 border-t border-b border-blue-400',
              continerBgGradAppearance(index, ds.isSpeaking)
            )}
          >
            <CharacterNameIndicator
              charaterName={ds.name.replaceAll('username', characterName)}
              position={index === 0 ? 'left' : 'right'}
            />

            <DialogSequenceTextRenderer
              charName={ds.name}
              hasMultiDialogChoice={ds.hasMultiDialogChoice}
              isSpeaking={ds.isSpeaking}
              dialogChoice={ds.dialogChoice}
              dialogChoices={ds.dialogChoices}
              setCurrentDialogId={setCurrentDialogId}
              characterName={characterName}
            />
          </div>
        </Fragment>
      ))}
    </>
  );
}

type CharacterNameIndicatorProps = {
  charaterName: string;
  position: 'left' | 'right';
};

function CharacterNameIndicator({
  charaterName,
  position,
}: CharacterNameIndicatorProps) {
  const pos = position === 'left' ? 'left-4' : 'right-4';

  return (
    <h6
      className={twMerge(
        'mb-4 absolute bg-blue-600 -top-6 text-yellow-400 text-sm lg:text-lg z-50 p-1 px-2 border border-blue-50',
        pos
      )}
    >
      {charaterName}
    </h6>
  );
}

type CharacterImageRendrerProps = {
  isActive: boolean;
  imageLink: string;
  position: 'left' | 'right';
};

function CharacterImageRendrer({
  imageLink,
  isActive,
  position,
}: CharacterImageRendrerProps) {
  return (
    <div
      className={twMerge(
        'absolute bottom-[10%] w-full max-w-52 lg:max-w-[450px] pointer-events-none bg-blue-600',
        isActive ? 'brightness-100 z-30' : 'brightness-50',
        position === 'left' ? 'left-0' : 'right-0'
      )}
    >
      <div className='absolute bottom-0 left-0 w-full pt-[calc((4/3)*100%)]'>
        <img
          src={imageLink}
          alt=''
          className='absolute top-0 left-0 w-full h-full object-contain object-bottom'
        />
      </div>
    </div>
  );
}

interface DialogSequenceTextRenderer {
  charName: string;
  isSpeaking: boolean;
  hasMultiDialogChoice: boolean;
  dialogChoices?: DialogChoiceTypes[];
  dialogChoice?: DialogChoiceTypes;
  setCurrentDialogId: Dispatch<SetStateAction<string>>;
  characterName: string;
}

function DialogSequenceTextRenderer({
  isSpeaking,
  hasMultiDialogChoice,
  dialogChoice,
  dialogChoices,
  setCurrentDialogId,
  characterName,
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
      <div className='flex flex-col xl:flex-col gap-2 lg:gap-4 text-blue-50 xl:ml-auto'>
        {dialogChoices?.map((dc) => (
          <button
            onClick={() => handleClick(dc.isEnding as boolean, dc.nextSequence)}
            key={dc.text}
            className='lg:w-max text-right ml-auto p-2 pb-1 border border-blue-200 hover:bg-blue-500 flex gap-3 text-xs sm:text-sm'
          >
            <span>{dc.text.replaceAll('username', characterName)}</span>
            <span>-</span>
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className='flex flex-col gap-4 text-blue-50 text-xs sm:text-sm'>
      <p>{dialogChoice?.text.replaceAll('username', characterName)}</p>

      <button
        onClick={() =>
          handleClick(
            dialogChoice?.isEnding as boolean,
            dialogChoice?.nextSequence
          )
        }
        className='w-max ml-auto p-2'
      >
        Selanjutnya
      </button>
    </div>
  );
}
