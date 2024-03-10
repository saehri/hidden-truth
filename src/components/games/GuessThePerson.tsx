import {memo, useContext, useEffect, useState} from 'react';
import {motion} from 'framer-motion';

import InGameCountdown from '../ui/InGameCountdown';
import {
  GameStateTypes,
  GameTypes,
  GuessThePersonGameDataTypes,
  StorylineIdTypes,
} from '../../services/utils/types';
import {ActivePageContext} from '../../services/API/pageViewingManagerAPI';
import {AnimatePresence} from 'framer-motion';
import GameEndingModal from '../modal/game-ending-modal/GameEndingModal';
import {thumbStackImage} from '../../assets/images/thumbStackImage';
import {twMerge} from 'tailwind-merge';
import {getGameData} from '../../database/gameData';

const GuessThePerson = memo(() => {
  const [gameState, setGameState] = useState<GameStateTypes>('start');
  const {activePage} = useContext(ActivePageContext);
  const data: GuessThePersonGameDataTypes = getGameData({
    gameId: activePage.state?.gameId as string,
    gameType: activePage.state?.gameType as GameTypes,
    storylineId: activePage.state?.storylineId as StorylineIdTypes,
  });

  const gameDuration =
    data.difficulty === 'easy' ? 180 : data.difficulty === 'medium' ? 150 : 120;
  const isOver = gameState === 'completed' || gameState === 'over';

  return (
    <section className='w-full h-full max-w-[92%] flex mx-auto'>
      <InGameCountdown
        gameState={gameState}
        setGameState={setGameState}
        countdownDuration={gameDuration}
      />

      <div className='relative h-full flex w-full flex-col justify-between pt-16 gap-4'>
        <GuessThePersonGame setGameState={setGameState} data={data} />

        <div
          className='bg-slate-100 p-2 lg:p-4 border border-border border-b-0 mx-auto w-full max-w-[90%] lg:max-w-[50%] text-slate-950'
          style={{
            clipPath: 'polygon(10% 0%, 90% 0, 100% 100%, 0% 100%)',
          }}
        >
          <div className='max-w-[80%] mx-auto flex items-center gap-4'>
            <h6 className='bg-gradient-to-t rounded-full from-yellow-700 to-yellow-600 text-yellow-300 p-1 px-2 pt-2 w-max mb-2 lg:mb-4 text-xs lg:text-base'>
              Clue
            </h6>

            <p className='text-slate-700 text-sm lg:text-base'>
              Pilih orang - orang yang memiliki karakteristik berikut:{' '}
              {data.clue}
            </p>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOver && (
          <GameEndingModal
            status={gameState === 'completed' ? 'win' : 'over'}
          />
        )}
      </AnimatePresence>
    </section>
  );
});

export default GuessThePerson;

const persons = [1, 2, 3, 4, 5, 6];

interface GuessThePersonGame {
  setGameState: React.Dispatch<React.SetStateAction<GameStateTypes>>;
  data: GuessThePersonGameDataTypes;
}

const GuessThePersonGame = memo(({setGameState, data}: GuessThePersonGame) => {
  const [selectedPerson, setSelectedPerson] = useState<number[]>([]);

  function handleSelection(personId: number) {
    if (selectedPerson.indexOf(personId) === -1) {
      setSelectedPerson((prevState) => [personId, ...prevState]);
    } else {
      setSelectedPerson((prev) => [...prev].filter((x) => x !== personId));
    }
  }

  useEffect(() => {
    const isAllConvictSelected = selectedPerson.filter((entry) =>
      data.convictsId.includes(entry)
    );

    if (isAllConvictSelected.length === data.convictsId.length) {
      if (isAllConvictSelected) {
        setTimeout(() => {
          setGameState('completed');
        }, 300);
      }
    }
  }, [selectedPerson]);

  return (
    <motion.div
      transition={{staggerChildren: 0.1, delayChildren: 0.8}}
      initial='initial'
      animate='animate'
      className='w-full h-full flex flex-wrap justify-center items-center gap-2 gap-y-1'
    >
      {data.suspects.map((suspect, index) => (
        <PersonCard
          key={suspect.id}
          index={index}
          personId={suspect.id}
          handleSelection={handleSelection}
          selectedPerson={selectedPerson}
          cardSize={persons.length <= 6 ? 'medium' : 'small'}
        />
      ))}
    </motion.div>
  );
});

interface PersonCard {
  handleSelection: (personId: number) => void;
  personId: number;
  selectedPerson: number[];
  cardSize: 'medium' | 'small';
  index: number;
}

const PersonCard = memo(
  ({
    handleSelection,
    personId,
    selectedPerson,
    cardSize,
    index,
  }: PersonCard) => {
    const isSelected = selectedPerson.indexOf(personId) !== -1;

    return (
      <motion.div
        className={twMerge(
          'w-full h-max block relative',
          cardSize === 'medium'
            ? 'max-w-24 lg:max-w-52'
            : 'max-w-20 lg:max-w-52'
        )}
        variants={{
          initial: {opacity: 0, y: 200},
          animate: {opacity: 1, y: 0},
        }}
      >
        <motion.img
          src={thumbStackImage}
          alt=''
          className='w-5 h-5 lg:w-8 lg:h-8 absolute top-1 left-1/2 -translate-x-1/2 z-50'
          initial={{
            opacity: 0,
            y: -100,
            x: 100,
            scale: 2,
            backdropFilter: 'blur(4px)',
          }}
          animate={{
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            backdropFilter: 'blur(1px)',
          }}
          transition={{delay: 1.5 + (index / 100) * 10}}
        />

        <motion.button
          animate={{rotate: isSelected ? 7 : 0}}
          onClick={() => handleSelection(personId)}
          className='pt-[calc((4/3)*100%)] relative block w-full origin-top shadow-md'
        >
          <div className='absolute top-0 left-0 w-full h-full p-1 lg:p-2 pb-3 lg:pb-6 bg-slate-50 border border-slate-300'>
            <div className='bg-slate-300 h-full'>{personId}</div>
          </div>

          {isSelected && (
            <div className='lg:p-1 px-2 lg:pt-2 lg:px-4 text-[5px] lg:text-sm absolute lg:bottom-4 bottom-1 left-1 lg:left-4 z-50 border lg:border-4 font-semibold border-red-800 text-red-800 rounded-full'>
              TERSANGKA
            </div>
          )}
        </motion.button>
      </motion.div>
    );
  }
);
