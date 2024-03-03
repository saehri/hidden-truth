import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
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

      <Button
        onClick={() => setGameState('paused')}
        disabled={isCompleted()}
        className='absolute bottom-16 right-3 z-[80]'
      ></Button>

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
    <>
      <div className='pt-0 p-1 rounded-xl absolute bottom-4 right-4 z-50 w-28 h-max text-xl lg:text-2xl font-medium flex justify-center'>
        <div className='bg-slate-50 grid grid-cols-[_1fr,max-content,_1fr] w-full font-body'>
          {children}
        </div>
      </div>

      <div className='absolute z-40 bg-gradient-to-r from-transparent via-slate-50 to-transparent w-full h-[2px] left-0'></div>
    </>
  );
}

interface CountdownClockDisplay extends React.HTMLAttributes<HTMLDivElement> {}

function CountdownClockDisplay({children}: CountdownClockDisplay) {
  return (
    <div className='h-full w-full grid place-items-center'>{children}</div>
  );
}
