import {motion} from 'framer-motion';
import {useContext} from 'react';
import {ActivePageContext} from '../../services/API/pageViewingManagerAPI';

import {GameTypes} from '../../services/utils/types';

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

              <div className='flex justify-between items-end p-2 border-b border-primary/50'>
                <CardRewardGrid />
                <CardCTA gameId={game.gameId} gameType={game.gameType} />
              </div>

              <div className='h-8 grid place-items-center'>
                <span className='block h-[1px] w-1/3 bg-slate-50/20' />
              </div>
            </CardContent>
          </CardWrapper>
        ))}
      </motion.div>
    </section>
  );
}

/* ----------------- CARD DESCRIPTION*/
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
        <div className='w-full aspect-square bg-primary flex justify-center pt-1'>
          {/* <Icons.GameController className='w-7 h-6' /> */}
        </div>

        <div className='w-full'>
          <span className='bg-slate-50/20 font-body text-xs px-1 text-slate-50 block w-max mb-1'>
            GAME
          </span>

          <p className='font-body text-slate-50 text-sm'>
            {gameTypes[gameType]}
          </p>
        </div>
      </div>

      <div className='grid grid-cols-[32px,_1fr] gap-2 h-[60%]'>
        <div className='w-full h-full bg-primary flex items-start justify-center pt-2'>
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
          <span className='bg-slate-50/20 font-body text-xs px-1 text-slate-50 block w-max mb-1'>
            SYNOPSIS
          </span>

          <p className='font-body text-slate-50 uppercase text-xs'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, earum!
          </p>
        </div>
      </div>
    </div>
  );
}

/* ----------------- CARD WRAPPER */
type CardWrapperTypes = {
  children: React.ReactNode;
  index: number;
};

const cardWrapperAnimation = (index: number) => ({
  initial: {opacity: 0, y: 40, rotate: 15},
  whileInView: {opacity: 1, y: 0, rotate: 0, transition: {delay: index / 10}},
});

function CardWrapper({children, index}: CardWrapperTypes) {
  const animation = cardWrapperAnimation(index);
  const clipPath = 'polygon(0 0, 100% 0, 100% 93%, 93% 100%, 0 100%, 0% 50%)';

  return (
    <motion.div
      initial={animation.initial}
      whileInView={animation.whileInView}
      viewport={{once: true, amount: 'some'}}
      className='w-72 xs:w-[340px]'
    >
      <div className='pt-[calc((4/3)*100%)] relative'>
        <div
          className='absolute w-full h-full top-0 left-0 bg-primary/30 flex flex-col border-x border-primary sm:backdrop-blur-sm'
          style={{clipPath}}
        >
          {children}
        </div>
      </div>
    </motion.div>
  );
}

/* ----------------- CARD CONTENT WRAPPER*/
function CardContent({children}: {children: React.ReactNode}) {
  return <div className='flex flex-col justify-between flex-1'>{children}</div>;
}

/* ----------------- CARD CTA */

type CardCTATypes = {gameId: string; gameType: GameTypes};

function CardCTA({gameId, gameType}: CardCTATypes) {
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
      className='text-yellow-300 bg-yellow-600/20 hover:bg-yellow-600/40 font-medium text-sm py-1 w-24 hover:w-28 transition-[width] border-x border-yellow-600'
    >
      <span className='leading-3'>SELIDIKI</span>
    </button>
  );
}

/* ----------------- TASK REWARD GRID */
function CardRewardGrid() {
  return (
    <div>
      <p className='text-xs text-slate-50/70'>REWARDS</p>

      <div className='flex items-center gap-1'>
        <div className='w-12 h-12 border border-primary/40 bg-primary/20 hover:bg-primary/40 hover:border-primary'></div>
        <div className='w-12 h-12 border border-primary/40 bg-primary/20 hover:bg-primary/40 hover:border-primary'></div>
        <div className='w-12 h-12 border border-primary/40 bg-primary/20 hover:bg-primary/40 hover:border-primary'></div>
      </div>
    </div>
  );
}

/* ----------------- CARD HEADER */
function CardHeader() {
  return (
    <div className='p-2 border-b border-slate-50/40 border-dashed'>
      <div className='flex justify-between mb-2'>
        <div className='w-2 h-2 rounded-full bg-slate-50/10'></div>
        <div className='w-1/4 h-2 rounded-full bg-slate-50/10'></div>
        <div className='w-2 h-2 rounded-full bg-slate-50/10'></div>
      </div>

      <div className='flex gap-2'>
        <div className='bg-primary w-8 h-8'></div>
        <div className='font-body text-slate-50 bg-primary flex-1 flex items-center px-3 text-sm'>
          KARTU TUGAS
        </div>
      </div>
    </div>
  );
}

/* ----------------- CARD SEPARATOR */
function ChapterSeparator({children}: {children: React.ReactNode}) {
  return (
    <div className='w-16 rotate-180 grid place-items-center'>
      <div className='h-[85%] grid place-items-center bg-slate-50/10 hover:bg-slate-50/20 p-2 py-4 border-y border-slate-50/60'>
        <h4
          className='uppercase w-max font-body font-bold text-sm text-slate-50'
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
