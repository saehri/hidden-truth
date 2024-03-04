import {motion} from 'framer-motion';
import {StorylineCardTypes} from '../../services/utils/types';

import {barCode} from '../../assets/images/barCode';

interface Props extends StorylineCardTypes {
  isActive: boolean;
  onClick: any;
}

export default function StorylineCard({
  storylineTitle,
  difficulty,
  isActive,
  storylineCardBackground,
  onClick,
}: Props) {
  return (
    <CardWrapper isActive={isActive}>
      <CardImageWrapper>
        <span className='bg-slate-50/20 text-slate-50 text-[10px] px-1 block w-max absolute top-1 left-1 z-30'>
          SPECIAL CHAPTER
        </span>

        <Progress />
        <CardDetail onClick={onClick} storylineTitle={storylineTitle} />

        <img
          src={storylineCardBackground}
          className='w-full h-full object-cover opacity-75 grayscale group-hover:grayscale-0 transition-all'
          alt=''
        />
      </CardImageWrapper>
    </CardWrapper>
  );
}

function Progress() {
  return (
    <div className='absolute top-1 right-1 z-40 w-1/3'>
      <p className='text-slate-50 text-[10px] text-right'>PROGRESS</p>

      <div className='w-full h-4 relative flex items-center justify-center bg-slate-50/10'>
        <span className='text-[10px] relative z-30 text-slate-50'>50%</span>
        <div className='absolute top-0 right-0 bg-slate-50/40 h-full w-1/2' />
      </div>
    </div>
  );
}

function CardDetail({
  storylineTitle,
  onClick,
}: {
  storylineTitle: string;
  onClick: any;
}) {
  return (
    <div className='absolute z-30 bottom-4 left-1/2 -translate-x-1/2 w-full max-w-[450px]'>
      <div className='px-4'>
        <h4 className='uppercase font-medium text-slate-50 text-left leading-6 bg-primary/20 border border-primary/50 w-max px-2 mb-2'>
          {storylineTitle}
        </h4>

        <p className='text-slate-50/50 text-[10px] leading-tight uppercase'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, ullam
          ipsa tenetur autem iusto possimus, nesciunt provident maxime nobis
          officia, nemo saepe et minus voluptates.
        </p>
      </div>

      <div className='mt-2 px-4'>
        <p className='text-xs text-slate-50/70'>REWARDS</p>

        <div className='flex items-center gap-1'>
          <div className='w-12 h-12 border border-primary/40 bg-primary/20'></div>
          <div className='w-12 h-12 border border-primary/40 bg-primary/20'></div>
          <div className='w-12 h-12 border border-primary/40 bg-primary/20'></div>
        </div>
      </div>

      <button
        onClick={onClick}
        className='block mt-6 px-4 p-1 font-medium text-sm ml-auto mr-4 border-x border-primary/40 bg-primary/20 hover:bg-primary/50 text-slate-50'
      >
        <span>SELIDIKI</span>
      </button>
    </div>
  );
}

function CardWrapper({
  children,
  isActive,
}: {
  children: React.ReactNode;
  isActive: boolean;
}) {
  return (
    <motion.div
      initial={{y: 100, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{delay: 1.4}}
      className='w-full h-max grid place-items-center relative group'
    >
      {children}

      <motion.div
        initial={{scale: 0.9, opacity: 0}}
        animate={{scale: 1, opacity: 1}}
        transition={{delay: 1.8}}
        className='pointer-events-none absolute top-0 left-0 w-full h-full z-20 hidden lg:block'
      >
        <span className='topLeft block absolute top-0 left-0 w-10 h-10 border-l border-t border-slate-50/30' />
        <span className='topRight block absolute top-0 right-0 w-10 h-10 border-r border-t border-slate-50/30' />
        <span className='bottomLeft block absolute bottom-0 left-0 w-10 h-10 border-l border-b border-slate-50/30' />
        <span className='bottomRight block absolute bottom-0 right-0 w-10 h-10 border-r border-b border-slate-50/30' />
      </motion.div>
    </motion.div>
  );
}

function CardImageWrapper({children}: {children: React.ReactNode}) {
  return (
    <div className='w-80 sm:w-[350px]'>
      <div className='pt-[calc((4/3)*100%)] relative border border-yellow-500'>
        <div className='absolute top-0 left-0 w-full h-full p-[2px]'>
          {children}

          <div className='absolute bottom-[2px] w-[calc(100%-4px)] h-[calc(100%-4px)] z-20 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/10' />
        </div>
      </div>
    </div>
  );
}
