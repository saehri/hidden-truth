import {useContext} from 'react';
import {motion} from 'framer-motion';
import {twMerge} from 'tailwind-merge';
import {StorylineTypes} from '../../services/utils/types';
import {ActivePageContext} from '../../services/API/pageViewingManagerAPI';

interface StorylineTypeCard extends React.HTMLAttributes<HTMLButtonElement> {
  name: string;
  type: StorylineTypes;
  locked: boolean;
  background: string;
  description: string;
}

export default function StorylineTypeCard({
  background,
  locked,
  name,
  type,
  description,
}: StorylineTypeCard) {
  const {setActivePage} = useContext(ActivePageContext);

  return (
    <motion.button
      disabled={locked}
      onClick={() =>
        setActivePage({
          location: 'storylineSelectionPage',
          state: {storylineType: type},
        })
      }
      variants={{
        rest: {opacity: 0, y: 50},
        show: {opacity: 1, y: 0},
      }}
      transition={{damping: 10}}
      className='w-full h-full bg-background border-[1.5px] border-border relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-yellow-600 after:pointer-events-none after:blur-md after:opacity-0 after:hover:opacity-20 disabled:after:hover:opacity-0 after:transition-opacity overflow-hidden'
    >
      {locked && (
        <span className='p-2 rounded-sm pointer-events-none bg-red-800 text-yellow-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 text-xs lg:text-base'>
          TERKUNCI
        </span>
      )}

      <div
        className={twMerge(
          'flex justify-end flex-col text-left text-base relative w-full h-full p-2 pr-4 md:p-4',
          locked ? 'brightness-50' : 'brightness-100'
        )}
      >
        <span className='uppercase text-xs mb-2 lg:text-base xl:text-lg 3xl:text-2xl text-slate-50 pointer-events-none'>
          {name}
        </span>
        <span className='leading-4 text-[10px] lg:text-sm 3xl:text-base text-yellow-600 pointer-events-none'>
          {description}
        </span>

        <motion.img
          variants={{
            rest: {opacity: 0, y: 50},
            show: {
              opacity: 1,
              y: 0,
            },
          }}
          whileHover={{
            scale: 1.05,
            transition: {duration: 0.3, ease: [0.7, 0.35, 0.33, 0.8]},
          }}
          draggable='false'
          src={background}
          alt=''
          className='absolute top-0 left-0 w-full h-full object-cover -z-20'
        />

        <span className='block absolute pointer-events-none bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent -z-10'></span>
      </div>
    </motion.button>
  );
}
