import {motion} from 'framer-motion';
import {useContext} from 'react';
import {ActivePageContext} from '../../services/API/pageViewingManagerAPI';

import {GameTypes} from '../../services/utils/types';
import Icons from '../ui/Icons';

interface StorylineDetailChapterCard {
  games: any;
  title: string;
  chapterIndex: number;
}

export default function StorylineDetailChapterCard({
  games,
  title,
  chapterIndex,
}: StorylineDetailChapterCard) {
  return (
    <section className='flex gap-5 ml-12'>
      <ChapterSeparator>{title}</ChapterSeparator>

      <motion.div transition={{staggerChildren: 0.1}} className='flex gap-2'>
        {games.map((game: any, index: number) => (
          <CardWrapper key={game.gameId} index={index}>
            <CardHeader />
            <CardContent>
              <CardDescription
                chapterIndex={chapterIndex}
                index={index + 1}
                gameType={game.gameType}
              />

              <div className='flex justify-between items-end p-2'>
                <CardRewardGrid />
                <CardCTA gameId={game.gameId} gameType={game.gameType} />
              </div>
            </CardContent>
          </CardWrapper>
        ))}
      </motion.div>
    </section>
  );
}

function CardDescription({
  gameType,
  index,
  chapterIndex,
}: {
  gameType: GameTypes;
  index: number;
  chapterIndex: number;
}) {
  const gameTypes: Record<GameTypes, string> = {
    MC: 'PILIHAN GANDA',
    RD: 'LAPOR DISINFORMASI',
    SK: 'SUSUN KATA',
    TG: 'TEBAK GAMBAR',
    TN: 'TEBAK NADA',
    TO: 'CARI ORANG',
  };

  return (
    <div className='p-2 flex-1'>
      <div className='grid grid-cols-[32px,_1fr] gap-2'>
        <div className='w-full aspect-square bg-green-400 flex justify-center pt-1'>
          <Icons.GameController className='w-7 h-6' />
        </div>

        <div className='w-full'>
          <span className='bg-green-800 font-body text-xs px-1 text-slate-50 block w-max mb-1'>
            GAME
          </span>

          <p className='font-body text-slate-800'>{gameTypes[gameType]}</p>
        </div>
      </div>

      <div className='grid grid-cols-[32px,_1fr] gap-2 h-[60%]'>
        <div className='w-full h-full bg-green-400 flex items-start justify-center pt-2'>
          <span
            className='font-body text-slate-50 text-xl leading-3'
            style={{
              WebkitWritingMode: 'vertical-rl',
            }}
          >
            {chapterIndex} - {index}
          </span>
        </div>

        <div className='w-full pt-3'>
          <span className='bg-green-800 font-body text-xs px-1 text-slate-50 block w-max mb-1'>
            SYNOPSIS
          </span>

          <p className='font-body text-slate-800'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, earum!
          </p>
        </div>
      </div>
    </div>
  );
}

function CardWrapper({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) {
  return (
    <motion.div
      initial={{opacity: 0, y: 40, rotate: 15}}
      whileInView={{
        opacity: 1,
        y: 0,
        rotate: 0,
        transition: {delay: index / 10},
      }}
      viewport={{once: true, amount: 'some'}}
      className='w-72 xs:w-[340px]'
    >
      <div className='pt-[calc((4/3)*100%)] relative'>
        <div className='absolute w-full h-full top-0 left-0 bg-slate-50 rounded-md flex flex-col'>
          {children}
        </div>
      </div>
    </motion.div>
  );
}

function CardContent({children}: {children: React.ReactNode}) {
  return <div className='flex flex-col justify-between flex-1'>{children}</div>;
}

function CardCTA({gameId, gameType}: {gameId: string; gameType: GameTypes}) {
  const {activePage, setActivePage} = useContext(ActivePageContext);

  function goToGamePage() {
    setActivePage({
      location: 'gamePage',
      state: {gameId, gameType, ...activePage.state},
    });
  }

  return (
    <button
      onClick={goToGamePage}
      className='text-yellow-50 p-2 pr-6 rounded-full font-medium text-sm flex gap-2 items-center bg-gradient-to-l from-green-950 to-green-800 hover:from-green-800 hover:to-green-700 transition-all h-max'
    >
      <span className='w-3 h-3 rounded-full border-4 border-yellow-200'></span>
      <span className='leading-3'>Selidiki</span>
    </button>
  );
}

function CardRewardGrid() {
  return (
    <div className='flex gap-2'>
      <div className='w-12 h-12 bg-slate-300'></div>
      <div className='w-12 h-12 bg-slate-300'></div>
    </div>
  );
}

function CardHeader() {
  return (
    <div className='p-2 border-b border-background border-dashed'>
      <div className='flex justify-between mb-2'>
        <div className='w-2 h-2 rounded-full bg-background'></div>
        <div className='w-1/4 h-2 rounded-full bg-background'></div>
        <div className='w-2 h-2 rounded-full bg-background'></div>
      </div>

      <div className='flex gap-2'>
        <div className='bg-green-800 w-8 h-8'></div>
        <div className='font-body text-slate-50 bg-green-800 flex-1 flex items-center px-3'>
          KARTU TUGAS
        </div>
      </div>
    </div>
  );
}

function ChapterSeparator({children}: {children: React.ReactNode}) {
  return (
    <div className='w-16 rotate-180 grid place-items-center'>
      <div className='h-[85%] grid place-items-center bg-slate-50 p-2 py-4'>
        <h4
          className='uppercase w-max font-body font-bold text-sm text-green-950'
          style={{
            WebkitWritingMode: 'vertical-rl',
          }}
        >
          {children}
        </h4>
      </div>
    </div>
  );
}
