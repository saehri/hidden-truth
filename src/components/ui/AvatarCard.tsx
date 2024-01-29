import {Dispatch, memo, useEffect, useState} from 'react';
import {SetStateAction} from 'jotai';
import {AnimatePresence, motion} from 'framer-motion';

import Icons from './Icons';
import useCharacterController, {
  CharacterTypes,
} from '../../services/controller/characterController';

interface AvatarCard {
  isHidden: boolean;
}

const AvatarCard = memo(function ({isHidden}: AvatarCard) {
  const [isCardOpen, setCardOpen] = useState<boolean>(false);
  const [data, setData] = useState<CharacterTypes | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await useCharacterController()
        .getItem()
        .then((data) => JSON.parse(data));
      setData(data);
    }

    fetchData();
  }, []);

  return (
    <>
      <button
        className='flex translate-y-[-2px] lg:translate-y-[-8px] w-full'
        disabled={isHidden}
        onClick={() => setCardOpen(!isCardOpen)}
      >
        <div className='w-full max-w-14 sm:max-w-16 lg:max-w-20 xl:max-w-28 relative shrink-0'>
          <div className='absolute w-full top-0 left-0 pt-[100%]'>
            <Icons.AvatarBackground />
            <div className='absolute top-0 left-0 p-2 lg:p-3 w-full h-full'>
              <img
                src={data?.avatar.now_used.avatar_image}
                alt=''
                className='block w-full h-full object-cover bg-red-800'
              />
            </div>
          </div>
        </div>

        <div className='bg-primary/70 shrink-0 px-2 border border-border border-l-0 flex-1 h-5 lg:h-6 3xl:h-9 overflow-hidden overflow-ellipsis text-xs sm:text-sm xl:text-base 3xl:text-2xl grid place-items-center text-white translate-y-[5px] lg:translate-y-[10px] -translate-x-[1.5px] text-nowrap'>
          {data?.character_name ?? 'Undefined'}
        </div>
      </button>

      <AnimatePresence>
        {isCardOpen && <Card setCardOpen={setCardOpen} data={data!} />}
      </AnimatePresence>
    </>
  );
});

export default AvatarCard;

function Card({
  setCardOpen,
  data,
}: {
  setCardOpen: Dispatch<SetStateAction<boolean>>;
  data?: CharacterTypes;
}) {
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
            {data && <CardContent {...data} />}
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

function CardContent({character_name, avatar, current_rank}: CharacterTypes) {
  return (
    <>
      <div className='h-full flex flex-col gap-4'>
        <div className='w-full h-full relative flex-1'>
          <img
            src={avatar.now_used.avatar_image}
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
