import {motion} from 'framer-motion';
import {useContext} from 'react';
import {ActivePageContext} from '../../services/API/pageViewingManagerAPI';

import {
  GameCardTypes,
  GameDifficultyTypes,
  GameTypes,
  RewardTypes,
  StorylineIdTypes,
} from '../../services/utils/types';
import useCharacterProgressController from '../../services/controller/characterProgressController';
import {twMerge} from 'tailwind-merge';
import useCharacterController from '../../services/controller/characterController';

interface StorylineDetailChapterCard {
  games: GameCardTypes[];
  title: string;
  chapterIndex: number;
  chapterId: string;
}

export default function StorylineDetailChapterCard({
  games,
  title,
  chapterIndex,
  chapterId,
}: StorylineDetailChapterCard) {
  return (
    <section className='flex gap-5 ml-12'>
      <ChapterSeparator>{title}</ChapterSeparator>

      <motion.div transition={{staggerChildren: 0.1}} className='flex gap-2'>
        {games.map((game, index: number) => (
          <CardWrapper
            key={game.id}
            index={index}
            gameId={game.id}
            gamePosition={game.gamePosition}
          >
            <CardHeader gameName={game.gameName} />

            <CardContent>
              <CardDescription
                chapterIndex={chapterIndex}
                index={index + 1}
                gameType={game.type}
                synopsis={game.synopsis}
                difficulty={game.difficulty}
              />

              <div className='flex justify-between items-end p-2 border-b border-primary/50'>
                <CardRewardGrid rewards={game.rewards} />
                <CardCTA
                  gameId={game.id}
                  gameType={game.type}
                  gameDifficulty={game.difficulty}
                  gameName={game.gameName}
                  hasOpeningDialog={game.hasOpeningDialog}
                  isFinalGame={game.isFinalGame}
                  chapterId={chapterId}
                />
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
type CardDescriptionTypes = {
  gameType: GameTypes;
  index: number;
  chapterIndex: number;
  synopsis: string;
  difficulty: 'easy' | 'medium' | 'hard';
};
function CardDescription({
  gameType,
  index,
  chapterIndex,
  synopsis,
  difficulty,
}: CardDescriptionTypes) {
  const gameTypes: Record<GameTypes, string> = {
    RD: 'LAPOR DISINFORMASI',
    TG: 'TEBAK GAMBAR',
  };

  return (
    <div className='p-2 flex-1'>
      <div className='grid grid-cols-[32px,_1fr] gap-2'>
        <div className='w-full aspect-square bg-primary flex justify-center pt-1'></div>

        <div className='w-full grid grid-cols-[1fr,_max-content]'>
          <span className='bg-slate-50/20 font-body text-xs px-1 text-slate-50 block w-max mb-1'>
            GAME
          </span>

          <span className='bg-slate-50/20 font-body text-xs px-1 text-slate-50 block w-max mb-1'>
            DIFFICULTY
          </span>

          <p className='font-body text-slate-300 text-sm tracking-tight'>
            {gameTypes[gameType]}
          </p>

          <p className='font-body text-slate-300 text-sm uppercase tracking-tight'>
            {difficulty}
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
          {synopsis.length ? (
            <span className='bg-slate-50/20 font-body text-xs px-1 text-slate-50 block w-max mb-1'>
              REPORT
            </span>
          ) : (
            <></>
          )}

          <p className='font-body text-xs text-slate-300 uppercase group-[.hide]:hidden'>
            {synopsis}
          </p>

          <p className='font-body text-xs text-slate-300 uppercase group-[.show]:hidden'>
            (selesaikan tugas untuk melihat laporan)
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
  gameId: string;
  gamePosition: number;
};

const cardWrapperAnimation = (index: number) => ({
  initial: {opacity: 0, y: 40, rotate: 15},
  whileInView: {opacity: 1, y: 0, rotate: 0, transition: {delay: index / 10}},
});

function CardWrapper({
  children,
  index,
  gameId,
  gamePosition,
}: CardWrapperTypes) {
  const animation = cardWrapperAnimation(index);
  const clipPath = 'polygon(0 0, 100% 0, 100% 93%, 93% 100%, 0 100%, 0% 50%)';

  const {activePage} = useContext(ActivePageContext);
  const characterProgress = useCharacterProgressController();
  const charProgress = characterProgress.getStorylineProgress(
    activePage.state?.storylineId as StorylineIdTypes
  );

  // shows wether the player already played the game or not
  // const isCompleted = charProgress?.gamePlayedList.includes(gameId);
  // shows wether the game is ready to be played or not
  // const isUnlocked = isCompleted
  //   ? true
  //   : charProgress?.gamePlayedList.length === gamePosition;
  const isUnlocked = true;
  const isCompleted = true;

  return (
    <motion.div
      initial={animation.initial}
      whileInView={animation.whileInView}
      viewport={{once: true, amount: 'some'}}
      className={twMerge(
        'w-[300px] group',
        isUnlocked ? 'brightness-100' : 'brightness-50 pointer-events-none',
        isCompleted ? 'show' : 'hide'
      )}
    >
      <div className='pt-[calc((4/3)*100%)] relative'>
        <div
          className='absolute w-full h-full top-0 left-0 bg-primary/60 flex flex-col border-x border-primary sm:backdrop-blur-sm'
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

type CardCTATypes = {
  gameId: string;
  gameType: GameTypes;
  gameDifficulty: GameDifficultyTypes;
  gameName: string;
  hasOpeningDialog: boolean;
  dialogId?: string;
  isFinalGame: boolean;
  chapterId: string;
};

function CardCTA({
  gameId,
  gameType,
  gameDifficulty,
  gameName,
  hasOpeningDialog,
  isFinalGame,
  chapterId,
}: CardCTATypes) {
  const characterController = useCharacterController();
  const {activePage, setActivePage} = useContext(ActivePageContext);

  function goToGamePage() {
    characterController.reduceEnergy(1);

    setActivePage({
      location: hasOpeningDialog ? 'dialogPage' : 'gamePage',
      state: {
        gameId,
        gameType,
        isFinalGame,
        gameDifficulty,
        gameName,
        chapterId,
        ...activePage.state,
      },
    });
  }

  return (
    <button
      disabled={(characterController.character?.energy.current as number) === 0}
      onClick={goToGamePage}
      className='text-yellow-300 bg-yellow-600/20 hover:bg-yellow-600/40 font-medium disabled:opacity-50 disabled:pointer-events-none text-sm py-1 w-20 hover:w-24 transition-[width] border-x border-yellow-600'
      style={{
        clipPath: 'polygon(100% 0, 100% 78%, 94% 100%, 0 100%, 0 0)',
      }}
    >
      <span className='leading-3'>MAIN</span>
    </button>
  );
}

/* ----------------- TASK REWARD GRID */
type CardRewardGridTypes = {rewards: RewardTypes[]};

function CardRewardGrid({rewards}: CardRewardGridTypes) {
  return (
    <div>
      {rewards.length > 0 && (
        <p className='text-xs text-slate-50/70'>REWARDS</p>
      )}

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

/* ----------------- CARD HEADER */
type CardHeaderProps = {gameName: string};

function CardHeader({gameName}: CardHeaderProps) {
  return (
    <div className='p-2 border-b border-slate-50/40 border-dashed'>
      <div className='flex justify-between mb-2'>
        <div className='w-2 h-2 rounded-full bg-slate-50/10'></div>
        <div className='w-1/4 h-2 rounded-full bg-slate-50/10'></div>
        <div className='w-2 h-2 rounded-full bg-slate-50/10'></div>
      </div>

      <div className='flex gap-2'>
        <div className='bg-primary w-8 h-8'></div>
        <div className='font-body text-slate-50 bg-primary flex-1 flex items-center px-2 text-sm overflow-hidden'>
          <span className='w-max whitespace-nowrap tracking-tight'>
            {gameName}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ----------------- CARD SEPARATOR */
function ChapterSeparator({children}: {children: React.ReactNode}) {
  return (
    <div className='w-16 rotate-180 grid place-items-center'>
      <div className='h-full grid place-items-center bg-slate-50/10 hover:bg-slate-50/20 p-2 py-4 border-y border-slate-50/60'>
        <h4
          className='uppercase w-max whitespace-nowrap font-body font-bold text-sm text-slate-50'
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
