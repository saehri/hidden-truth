import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import {motion} from 'framer-motion';
import {GameStateTypes} from '../../services/utils/types';

import Countdown, {CountdownApi} from 'react-countdown';
import PauseGameModal from '../modal/pause-game-modal/PauseGameModal';
import Icons from './Icons';

interface InGameCountdown {
  countdownDuration?: number;
  autoStart?: boolean;
  gameState: GameStateTypes;
  setGameState: Dispatch<SetStateAction<GameStateTypes>>;
}

export default function InGameCountdown({
  countdownDuration,
  gameState,
  setGameState,
}: InGameCountdown) {
  const duration = countdownDuration ?? 180;

  const [date] = useState(Date.now() + duration * 1000);
  const countdownApiRef = useRef<CountdownApi | null>(null);

  const startCountdown = (): void => {
    countdownApiRef.current?.start();
  };

  const pauseCountdown = (): void => {
    countdownApiRef.current?.pause();
  };

  const isCompleted = (): boolean => {
    return countdownApiRef.current?.isCompleted() ?? false;
  };

  // Effect to update the component whenever the date changes
  useEffect(() => {
    // This function would be equivalent to the handleUpdate method
    // but since we don't have a direct equivalent to forceUpdate in functional components,
    // we rely on the change of state or props to trigger a re-render.
    if (gameState === 'start') {
      startCountdown();
    }
    if (
      gameState === 'paused' ||
      gameState === 'gameOver' ||
      gameState === 'preparation'
    ) {
      pauseCountdown();
    }
    if (gameState === 'completed') {
      pauseCountdown();
    }
  }, [gameState, date]);

  return (
    <>
      <Countdown
        key={date}
        ref={(countdown) => {
          if (countdown) {
            countdownApiRef.current = countdown.getApi();
          }
        }}
        date={date}
        autoStart={false}
        renderer={customRenderer({children: <span>Hello world</span>})}
        onComplete={() => setGameState('gameOver')}
      />

      <motion.button
        initial={{y: 50, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{damping: 50, delay: 1}}
        onClick={() => setGameState('paused')}
        disabled={isCompleted()}
        className='absolute bottom-20 sm:bottom-32 right-4 sm:right-5 xl:right-auto
         xl:left-5 xl:bottom-auto xl:top-32 z-[80] w-8 h-8 bg-orange-400/50 border border-orange-500 grid place-items-center hover:opacity-50'
      >
        <Icons.TimerPause fill='rgb(254 215 170)' />
      </motion.button>

      <PauseGameModal
        modalState={gameState === 'paused'}
        setGameState={setGameState}
      />
    </>
  );
}

// Renderer callback with condition
function customRenderer({children}: {children: React.ReactNode}) {
  return ({minutes, seconds, completed}: any) => {
    if (completed)
      return (
        <CountdownClockWrapper>
          <CountdownClockDisplay>
            {minutes < 10 && '0'}
            {minutes}
          </CountdownClockDisplay>
          <span>:</span>
          <CountdownClockDisplay>
            {seconds < 10 && '0'}
            {seconds}
          </CountdownClockDisplay>
        </CountdownClockWrapper>
      );

    return (
      <CountdownClockWrapper>
        <CountdownClockDisplay>
          {minutes < 10 && '0'}
          {minutes}
        </CountdownClockDisplay>
        <span>:</span>
        <CountdownClockDisplay>
          {seconds < 10 && '0'}
          {seconds}
        </CountdownClockDisplay>
      </CountdownClockWrapper>
    );
  };
}

interface CountdownClockWrapper extends React.HTMLAttributes<HTMLDivElement> {
  dontAnimate?: boolean;
}

function CountdownClockWrapper({children, className}: CountdownClockWrapper) {
  return (
    <div className='pt-0 p-1 absolute bottom-4 sm:bottom-16 right-4 xl:bottom-auto xl:top-16 xl:right-auto xl:left-4 z-50 w-32 h-max text-xl lg:text-2xl font-medium flex justify-center'>
      <div className='bg-primary/50 text-slate-50 border border-slate-50/50 grid grid-cols-[_1fr,_1fr,max-content,_1fr] w-full font-body'>
        <div className='grid place-items-center mr-2'>
          <Icons.Timer fill='rgb(248, 250, 252)' className='w-4 h-[19px]' />
        </div>

        {children}
      </div>
    </div>
  );
}

interface CountdownClockDisplay extends React.HTMLAttributes<HTMLDivElement> {}

function CountdownClockDisplay({children}: CountdownClockDisplay) {
  return (
    <div className='h-full w-full grid place-items-center'>{children}</div>
  );
}
