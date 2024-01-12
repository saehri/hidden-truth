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
      className={twMerge(
        'w-full h-full p-2 pr-4 md:p-4 bg-background flex justify-end flex-col text-left text-base border-[1.5px] border-border relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-yellow-600 after:pointer-events-none after:blur-md after:opacity-0 after:hover:opacity-20 disabled:after:hover:opacity-0 after:transition-opacity',
        locked ? 'brightness-50' : 'brightness-100'
      )}
    >
      <span className='uppercase text-xs lg:text-base xl:text-lg 3xl:text-2xl text-slate-50'>
        {name}
      </span>
      <span className='leading-4 text-[10px] lg:text-sm 3xl:text-base text-yellow-600'>
        {description}
      </span>
    </motion.button>
  );
}
