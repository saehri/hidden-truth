import {Dispatch, memo, useEffect, useState} from 'react';
import {SetStateAction} from 'jotai';
import {AnimatePresence, motion} from 'framer-motion';

import Icons from './Icons';
import useCharacterController from '../../services/controller/characterController';
import {CharacterTypes} from '../../services/utils/types';
import Button from './Button';
import useUserController from '../../services/controller/userController';

const PlayerMenu = memo(function () {
  const [isCardOpen, setCardOpen] = useState<boolean>(false);
  const buttonIconSizes = 'w-4 h-4 lg:w-5 lg:h-5 3xl:w-8 3xl:h-8';

  return (
    <>
      <Button onClick={() => setCardOpen(!isCardOpen)}>
        <Icons.User className={buttonIconSizes} />
      </Button>

      <AnimatePresence>
        {isCardOpen && <Card setCardOpen={setCardOpen} />}
      </AnimatePresence>
    </>
  );
});

export default PlayerMenu;

function Card({setCardOpen}: {setCardOpen: Dispatch<SetStateAction<boolean>>}) {
  const characterController = useCharacterController();
  const userController = useUserController();

  useEffect(() => {
    characterController.getCharacter(userController.user?._id!);
  }, []);

  return (
    <div className='fixed top-0 left-0 w-full h-full z-50 p-8'>
      <motion.div
        initial={{opacity: 0, y: 50}}
        animate={{opacity: 1, y: 0, transition: {delay: 0.3}}}
        exit={{opacity: 1, y: '100%'}}
        transition={{ease: 'easeInOut', duration: 0.3}}
        className='w-full max-w-[80%] bg-white rounded-3xl p-6 pr-10 mx-auto relative z-20 polka'
      >
        <div className='pt-[calc((9/16)*100%)] relative'>
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
            className='absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-30'
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
        className='absolute w-full h-full bg-slate-950/90 left-0 top-0'
      ></motion.div>
    </div>
  );
}

function CardContent({
  character_name,
  current_avatar,
  current_rank,
}: CharacterTypes) {
  return (
    <>
      <div className='h-full flex flex-col gap-4'>
        <div className='w-full h-full relative flex-1'>
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

        <div className='grid grid-cols-2'>
          <div>
            <InputSwitch initialValue={character_name} />

            <p className='text-slate-700 uppercase'>Rank - {current_rank}</p>
          </div>

          <div className='relative w-full h-full'>
            <img
              className='absolute top-0 left-0 w-full h-full object-fill'
              src='https://utfs.io/f/d179a575-f62b-4c7e-81c5-7a50771a35d0-m35xnk.webp'
              alt=''
              draggable={false}
              aria-hidden='true'
            />
          </div>
        </div>
      </div>

      <div className='flex items-end'>
        <p className='text-justify'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
          delectus, placeat, eos reprehenderit voluptate reiciendis repellat
          aliquam ratione expedita laboriosam blanditiis aliquid commodi ut odit
          accusamus voluptas mollitia, neque et. Optio voluptatum numquam
          asperiores sequi eligendi repudiandae? Facere error, corporis ratione
          laboriosam ipsa aliquid soluta ab quibusdam voluptate unde nesciunt!
        </p>
      </div>
    </>
  );
}

function InputSwitch({initialValue}: {initialValue: string}) {
  const [isEditing, setEditing] = useState<boolean>(false);
  const [inputData, setInputData] = useState<string>(initialValue);
  const characterController = useCharacterController();

  return (
    <div className='relative'>
      <button
        onClick={() => setEditing(!isEditing)}
        className='absolute right-0 -top-9 w-9 h-9 bg-background grid place-items-center z-50 border border-yellow-500'
      >
        {isEditing ? <Icons.CheckSmall /> : <Icons.Bolt />}
      </button>

      {isEditing ? (
        <input
          value={inputData}
          onChange={(ev) => setInputData(ev.target.value)}
          maxLength={20}
          className='font-semibold text-2xl mb-4 w-max text-slate-950'
          autoFocus
        />
      ) : (
        <p className='font-semibold text-2xl mb-4 w-max text-slate-950'>
          {inputData}
        </p>
      )}
    </div>
  );
}
