import {Dispatch, Fragment, SetStateAction, useContext, useState} from 'react';
import {motion} from 'framer-motion';
import {twMerge} from 'tailwind-merge';
import {DialogChoiceTypes, DialogTypes} from '../../database/dialogs';
import {ActivePageContext} from '../../services/API/pageViewingManagerAPI';
import useCharacterController from '../../services/controller/characterController';
import TextGenerateEffect from './TextGenerateEffect';

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
          className='w-full h-[80%] flex justify-between relative'
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

const containerBgGradAppearance = (isActive: boolean) => {
  let classes: string = '';

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

  const characterName = characterController.character?.name || '';
  const characterImage =
    characterController.character?.currentAvatar.avatar_image || '';

  return (
    <>
      {dialogSequenceToRender.map((ds, index) => (
        <Fragment key={ds.name}>
          <CharacterImageRendrer
            imageLink={ds.isUser ? characterImage : ds.image}
            isActive={ds.isSpeaking}
            position={index === 0 ? 'left' : 'right'}
          />

          <div
            className={twMerge(
              'w-full bg-primary/80 lg:bg-primary/50 lg:backdrop-blur-sm max-w-[calc(100%-2em)] md:max-w-screen-sm lg:max-w-screen-md absolute left-1/2 -translate-x-1/2 -bottom-10 sm:bottom-4 p-2 px-4',
              containerBgGradAppearance(ds.isSpeaking)
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

            <CornerDots />
          </div>
        </Fragment>
      ))}
    </>
  );
}

function CornerDots() {
  return (
    <>
      {/* RECTANGLE */}
      <span className='border border-slate-50 absolute bg-slate-50 -top-1 -left-1 w-2 h-2' />
      <span className='border border-slate-50 absolute bg-slate-50 -top-1 -right-1 w-2 h-2' />
      <span className='border border-slate-50 absolute bg-slate-50 -bottom-1 -left-1 w-2 h-2' />
      <span className='border border-slate-50 absolute bg-slate-50 -bottom-1 -right-1 w-2 h-2' />

      {/* CORNER LINE */}
      <span className='border-t border-l border-slate-50 absolute top-0 left-0 w-5 h-5' />
      <span className='border-t border-r border-slate-50 absolute top-0 right-0 w-5 h-5' />
      <span className='border-b border-l border-slate-50 absolute bottom-0 left-0 w-5 h-5' />
      <span className='border-b border-r border-slate-50 absolute bottom-0 right-0 w-5 h-5' />

      {/* MIDDLE T & B LINE */}
      <span className='absolute -top-[2px] left-1/2 -translate-x-1/2 w-full max-w-[calc(40%)] h-1 bg-slate-50/50' />
      <span className='absolute -bottom-[2px] left-1/2 -translate-x-1/2 w-full max-w-[calc(40%)] h-1 bg-slate-50/50' />
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
  const pos = position === 'left' ? 'justify-start' : 'justify-end';

  return (
    <h6
      className={twMerge(
        'text-sm sm:text-base font-semibold z-50 mb-3 sm:mb-5 lg:mb-5 text-slate-50 flex gap-2 items-center h-max',
        pos
      )}
    >
      <span className='w-2 h-2 border-t border-r rotate-45 border-slate-50 bg-yellow-500' />
      <span className='border-b border-slate-50/50'>{charaterName}</span>
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
        'absolute bottom-0 w-full max-w-[70%] sm:max-w-80 md:max-w-96 lg:max-w-[450px] pointer-events-none',
        isActive
          ? 'brightness-100 z-30'
          : 'opacity-0 sm:opacity-100 brightness-[.2]',
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
      <motion.div
        initial='initial'
        animate='animate'
        transition={{staggerChildren: 0.2, damping: 50}}
        className='flex flex-col xl:flex-col gap-2 text-blue-50 xl:ml-auto'
      >
        {dialogChoices?.map((dc) => (
          <motion.button
            variants={{
              initial: {opacity: 0, y: 10},
              animate: {opacity: 1, y: 0},
            }}
            onClick={() => handleClick(dc.isEnding as boolean, dc.nextSequence)}
            key={dc.text}
            className='lg:w-max text-right ml-auto flex gap-3 items-center text-xs hover:opacity-80 sm:text-sm group tracking-tighter leading-tight'
          >
            <span>{dc.text.replaceAll('username', characterName)}</span>
            <span className='w-1 h-1 xs:w-2 xs:h-2 bg-slate-50 rotate-45 group-hover:animate-pulse shrink-0' />
          </motion.button>
        ))}
      </motion.div>
    );
  }

  return (
    <div className='flex flex-col gap-4'>
      <TextGenerateEffect
        words={
          dialogChoice?.text.replaceAll('username', characterName) as string
        }
        className='text-slate-50 text-xs sm:text-sm font-normal leading-tight'
      />

      <button
        onClick={() =>
          handleClick(
            dialogChoice?.isEnding as boolean,
            dialogChoice?.nextSequence
          )
        }
        className='w-max ml-auto flex gap-3 items-center hover:opacity-80 text-slate-50 text-xs sm:text-sm tracking-tighter leading-tight group'
      >
        <span>Selanjutnya</span>
        <span className='w-1 h-1 xs:w-2 xs:h-2 bg-slate-50 rotate-45 group-hover:animate-pulse shrink-0' />
      </button>
    </div>
  );
}
