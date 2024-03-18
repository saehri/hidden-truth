import {motion} from 'framer-motion';
import {createPortal} from 'react-dom';
import {Dispatch, SetStateAction, memo} from 'react';

import {CharacterTypes} from '../../../services/utils/types';
import PlayerMenuTab from '../player-menu-tab/PlayerMenuTab';
import Icons from '../../ui/Icons';

/* Assets */
import {barCode} from '../../../assets/images/barCode';
import {characterPicBackground} from '../../../assets/images/characterPicBackground';

const PlayerMenuModal = memo(
  ({
    setCardOpen,
    character,
  }: {
    setCardOpen: Dispatch<SetStateAction<boolean>>;
    character: any;
  }) => {
    return (
      <>
        {createPortal(
          <div className='fixed top-0 left-0 w-full h-full z-[100] p-6 px-12 xl:p-8 xl:px-8'>
            <motion.div
              initial={{opacity: 0, y: 50}}
              animate={{opacity: 1, y: 0, transition: {delay: 0.3}}}
              exit={{opacity: 1, y: '100%'}}
              transition={{ease: 'easeInOut', duration: 0.3}}
              className='w-full h-full bg-white rounded-xl lg:rounded-2xl xl:rounded-3xl p-6 pr-10 mx-auto relative z-20'
            >
              <button
                onClick={() => setCardOpen(false)}
                className='absolute z-50 -top-2 -right-2'
              >
                <Icons.CloseCircled className='w-4 h-4 lg:w-5 lg:h-5 3xl:w-8 3xl:h-8' />
              </button>

              <div className='relative w-full h-full'>
                <div className='absolute top-0 left-0 w-full h-full grid grid-cols-[40%,_1fr] gap-5'>
                  <CardContent {...character} />
                </div>

                <img
                  src=''
                  alt=''
                  className='absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-10'
                  draggable={false}
                  aria-hidden='true'
                />
              </div>
            </motion.div>

            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              onClick={() => setCardOpen(false)}
              className='absolute w-full h-full bg-slate-950/50 left-0 top-0 xl:backdrop-blur-sm'
            ></motion.div>
          </div>,
          document.getElementById('emtris__dialog') as
            | Element
            | DocumentFragment
        )}
      </>
    );
  }
);

export default PlayerMenuModal;

function CardContent({name, currentAvatar, currentRank}: CharacterTypes) {
  return (
    <>
      <div className='h-full flex flex-col gap-4'>
        <div className='w-full flex-1 relative'>
          <img
            src={currentAvatar.avatar_image}
            alt=''
            className='absolute top-0 left-0 w-full h-full object-cover object-bottom z-20'
            draggable={false}
            aria-hidden='true'
          />

          <img
            src={characterPicBackground}
            alt=''
            className='absolute top-0 left-0 w-full h-full object-cover brightness-200 opacity-90'
            draggable={false}
            aria-hidden='true'
          />
        </div>

        <div className='grid grid-cols-[_1fr,_1fr] gap-3'>
          <div>
            <div className='grid grid-cols-[max-content,_5px,_1fr] gap-3 gap-y-0 text-slate-950 text-xs lg:text-base xl:text-xl mb-3'>
              <span>Name</span>
              <span>:</span>
              <span className='block w-max'>{name}</span>

              <span>Rank</span>
              <span>:</span>
              <span className='capitalize'>{currentRank}</span>
            </div>
          </div>

          <div className='relative'>
            <img
              className='absolute top-0 left-0 w-full h-full object-cover object-center'
              src={barCode}
              alt=''
              draggable={false}
              aria-hidden='true'
            />
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-6 overflow-hidden relative after:absolute after:w-full after:h-1/5 after:bottom-0 after:left-0 after:bg-gradient-to-t after:from-white after:to-transparent'>
        <PlayerMenuTab />
      </div>
    </>
  );
}
