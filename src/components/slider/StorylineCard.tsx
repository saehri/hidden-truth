import {motion} from 'framer-motion';
import {RewardTypes, StorylineCardTypes} from '../../services/utils/types';

interface Props extends StorylineCardTypes {
  isActive: boolean;
  onClick: any;
}

export default function StorylineCard({
  isActive,
  onClick,
  title,
  background,
  rewards,
  synopsis,
  types,
}: Props) {
  const storylineTypes =
    types === 'mainStoryline' ? 'MAIN CHAPTER' : 'SPECIAL CHAPTER';

  return (
    <CardWrapper>
      <CardImageWrapper>
        <span className='bg-slate-50/20 text-slate-50 text-[10px] px-1 block w-max absolute top-1 left-1 z-30'>
          {storylineTypes}
        </span>

        <Progress />
        <CardDetail
          rewards={rewards}
          onClick={onClick}
          storylineTitle={title}
          synopsis={synopsis}
        />

        <img
          src={background}
          className='w-full h-full object-cover opacity-75 grayscale group-hover:grayscale-0 transition-all'
          alt=''
        />
      </CardImageWrapper>
    </CardWrapper>
  );
}

function Progress() {
  const progress = 50;

  return (
    <div className='absolute top-1 right-1 z-40 w-1/3'>
      <p className='text-slate-50 text-[10px] text-right'>PROGRESS</p>

      <div className='w-full h-4 relative flex items-center justify-center bg-slate-50/10'>
        <span className='text-[10px] relative z-30 text-slate-50'>
          {progress}%
        </span>

        <motion.div
          initial={{width: 0}}
          animate={{width: `${progress}%`}}
          className='absolute top-0 right-0 bg-slate-50/40 h-full'
        />
      </div>
    </div>
  );
}

type CardDetailTypes = {
  storylineTitle: string;
  onClick: () => void;
  rewards: RewardTypes[];
  synopsis: string;
};

function CardDetail({
  storylineTitle,
  onClick,
  rewards,
  synopsis,
}: CardDetailTypes) {
  return (
    <div className='absolute z-30 bottom-4 left-1/2 -translate-x-1/2 w-full max-w-[450px]'>
      <div className='px-4'>
        <h4 className='uppercase font-medium text-sm text-slate-50 text-left leading-6 bg-primary/20 border border-primary/50 w-max px-2 mb-2'>
          {storylineTitle}
        </h4>

        <p className='text-slate-50/50 text-[10px] leading-tight uppercase'>
          {synopsis}
        </p>
      </div>

      <RewardsBox rewards={rewards} />

      <button
        onClick={onClick}
        className='block mt-6 w-24 hover:w-28 transition-[width] p-1 font-medium text-sm ml-auto mr-4 border-x border-primary/40 hover:border-primary bg-primary/20 hover:bg-primary/50 text-slate-50'
      >
        <span>SELIDIKI</span>
      </button>
    </div>
  );
}

type RewardsBoxTypes = {rewards: RewardTypes[]};
function RewardsBox({rewards}: RewardsBoxTypes) {
  return (
    <div className='mt-2 px-4'>
      <p className='text-xs text-slate-50/70'>REWARDS</p>

      <div className='flex items-center gap-1'>
        {rewards.map((reward) => (
          <div
            key={reward.id}
            className='w-12 h-12 border border-primary/40 bg-primary/20 hover:bg-primary/40 hover:border-primary'
            title={reward.label}
          ></div>
        ))}
      </div>
    </div>
  );
}

const cardWrapperAnimation = {
  initial: {y: 100, opacity: 0},
  animate: {y: 0, opacity: 1},
};

function CardWrapper({children}: {children: React.ReactNode}) {
  return (
    <motion.div
      variants={{...cardWrapperAnimation}}
      initial='initial'
      animate='animate'
      whileHover='whileHover'
      className='w-full h-max grid place-items-center relative group'
    >
      {children}

      <CrossHair />
    </motion.div>
  );
}

const crossHairAnimations = {
  initial: {scaleX: 0.9, opacity: 0},
  animate: {scaleX: 1, opacity: 1},
  whileHover: {scale: 0.9},
};

function CrossHair() {
  return (
    <motion.div
      variants={{...crossHairAnimations}}
      className='pointer-events-none absolute top-0 left-0 w-full h-full z-20 hidden lg:block'
    >
      <span className='topLeft block absolute top-0 left-0 w-10 h-10 border-l border-t border-slate-50/30' />
      <span className='topRight block absolute top-0 right-0 w-10 h-10 border-r border-t border-slate-50/30' />
      <span className='bottomLeft block absolute bottom-0 left-0 w-10 h-10 border-l border-b border-slate-50/30' />
      <span className='bottomRight block absolute bottom-0 right-0 w-10 h-10 border-r border-b border-slate-50/30' />

      <div className='crossHair absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 group-hover:opacity-0'>
        <span className='w-[1px] h-full bg-slate-50/20 absolute left-1/2 -translate-x-1/2' />
        <span className='h-[1px] w-full bg-slate-50/20 absolute top-1/2 -translate-y-1/2' />
      </div>
    </motion.div>
  );
}

function CardImageWrapper({children}: {children: React.ReactNode}) {
  return (
    <div className='w-72 xs:w-80 2xl:w-96'>
      <div className='pt-[calc((4/3)*100%)] relative border border-yellow-500'>
        <div className='absolute top-0 left-0 w-full h-full p-[2px]'>
          {children}

          <div className='absolute bottom-[2px] w-[calc(100%-4px)] h-[calc(100%-4px)] z-20 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/10' />
        </div>
      </div>
    </div>
  );
}
