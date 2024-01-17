import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import {motion} from 'framer-motion';
import {twMerge} from 'tailwind-merge';
import {GameStateTypes} from '../../services/utils/types';

import Icons from './Icons';
import Button from './Button';
import Countdown, {CountdownApi} from 'react-countdown';
import PauseGameModal from '../modal/PauseGameModal';

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

  const isPaused = (): boolean => {
    return countdownApiRef.current?.isPaused() ?? false;
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
    if (gameState === 'paused' || gameState === 'completed') {
      pauseCountdown();
    }
  }, [gameState, date]);

  return (
    <>
      <motion.div
        initial={{y: 100, opacity: 0}}
        animate={{
          opacity: 1,
          y: 0,
          transition: {delay: 2.5},
        }}
        className='w-full relative'
      >
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
          onComplete={() => setGameState('completed')}
        />

        <div className='absolute -top-12 left-1/2 -translate-x-1/2 z-30 bg-gradient-to-t from-[#6e6122] via-[#BFA622] to-[#FFF8D1] p-1 rounded-full overflow-hidden'>
          <div className='bg-background rounded-full w-8 h-8 grid place-items-center'>
            {gameState === 'start' && (
              <Button
                onClick={() => setGameState('paused')}
                disabled={isCompleted()}
              >
                <Icons.Pause />
              </Button>
            )}

            {gameState === 'paused' && (
              <Button
                onClick={() => setGameState('start')}
                disabled={isCompleted()}
              >
                <Icons.Play />
              </Button>
            )}
          </div>
        </div>
      </motion.div>

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
          <CountdownClockDisplay>0{minutes}</CountdownClockDisplay>
          <CountdownClockDisplay>
            {seconds < 10 && '0'}
            {seconds}
          </CountdownClockDisplay>
        </CountdownClockWrapper>
      );

    return (
      <CountdownClockWrapper>
        <CountdownClockDisplay>0{minutes}</CountdownClockDisplay>

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
    <div
      className={twMerge(
        'p-2 rounded-2xl bg-gradient-to-t from-[#453B06] via-[#BFA622] to-[#FFF8D1] border-border h-max text-4xl text-center w-full relative z-30',
        className
      )}
    >
      <div className='bg-background p-2 rounded-xl grid grid-cols-2 gap-1'>
        {children}
      </div>
    </div>
  );
}

interface CountdownClockDisplay extends React.HTMLAttributes<HTMLDivElement> {}

function CountdownClockDisplay({children}: CountdownClockDisplay) {
  return (
    <div className='bg-gradient-to-t py-12 shadow-md shadow-slate-950 rounded-lg border border-slate-800 from-slate-400 via-slate-50 to-slate-200'>
      {children}
    </div>
  );
}
