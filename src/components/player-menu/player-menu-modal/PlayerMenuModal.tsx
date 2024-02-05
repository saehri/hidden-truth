import {motion} from 'framer-motion';
import {Dispatch, SetStateAction, memo, useEffect} from 'react';
import useCharacterController from '../../../services/controller/characterController';
import useUserController from '../../../services/controller/userController';
import {createPortal} from 'react-dom';
import {CharacterTypes} from '../../../services/utils/types';
import PlayerMenuTab from '../player-menu-tab/PlayerMenuTab';
import Icons from '../../ui/Icons';

const PlayerMenuModal = memo(
  ({setCardOpen}: {setCardOpen: Dispatch<SetStateAction<boolean>>}) => {
    const characterController = useCharacterController();
    const userController = useUserController();

    useEffect(() => {
      characterController.getCharacter(userController.user?._id!);
    }, []);

    return (
      <>
        {createPortal(
          <div className='fixed top-0 left-0 w-full h-full z-[100] p-4 lg:p-6 xl:p-8'>
            <button
              onClick={() => setCardOpen(false)}
              className='absolute z-50 top-2 right-2 lg:top-4 lg:right-4 xl:top-6 xl:right-6'
            >
              <Icons.CloseCircled className='w-4 h-4 lg:w-5 lg:h-5 3xl:w-8 3xl:h-8' />
            </button>

            <motion.div
              initial={{opacity: 0, y: 50}}
              animate={{opacity: 1, y: 0, transition: {delay: 0.3}}}
              exit={{opacity: 1, y: '100%'}}
              transition={{ease: 'easeInOut', duration: 0.3}}
              className='w-full h-full bg-white rounded-xl lg:rounded-2xl xl:rounded-3xl p-6 pr-10 mx-auto relative z-20'
            >
              <div className='relative w-full h-full'>
                <div className='absolute top-0 left-0 w-full h-full grid grid-cols-[40%,_1fr] gap-5'>
                  {Object.keys(characterController.character!).length ? (
                    <CardContent {...characterController.character!} />
                  ) : (
                    <>
                      <div className='w-full h-full bg-slate-300 animate-pulse'></div>
                      <div className='w-full h-full bg-slate-300 animate-pulse'></div>
                    </>
                  )}
                </div>

                <img
                  src='https://utfs.io/f/14a43689-bfc8-42b5-ab0d-5571a9b747fb-eaifiz.webp'
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

function CardContent({
  character_name,
  current_avatar,
  current_rank,
}: CharacterTypes) {
  return (
    <>
      <div className='h-full flex flex-col gap-4'>
        <div className='w-full flex-1 relative'>
          <img
            src={current_avatar.avatar_image}
            alt=''
            className='absolute top-0 left-0 w-full h-full object-cover object-bottom z-20'
            draggable={false}
            aria-hidden='true'
          />

          <img
            src='https://utfs.io/f/77aa27d9-dcd0-4c90-aa33-637c4eae55cb-wowshz.webp'
            alt=''
            className='absolute top-0 left-0 w-full h-full object-cover brightness-200 opacity-90'
            draggable={false}
            aria-hidden='true'
          />
        </div>

        <div className='grid grid-cols-2 gap-5'>
          <div>
            <div className='grid grid-cols-[max-content,_5px,_1fr] gap-3 gap-y-0 text-slate-950 text-xs lg:text-base xl:text-xl mb-3'>
              <span>Name</span>
              <span>:</span>
              <span>{character_name}</span>

              <span>Rank</span>
              <span>:</span>
              <span className='capitalize'>{current_rank}</span>
            </div>
          </div>

          <div className='relative w-full h-full'>
            <img
              className='absolute top-0 left-0 w-full h-full object-fill object-center'
              src='https://utfs.io/f/d179a575-f62b-4c7e-81c5-7a50771a35d0-m35xnk.webp'
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
