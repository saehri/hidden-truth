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

      <Button
        onClick={() => setGameState('paused')}
        disabled={isCompleted()}
        className='fixed top-4 left-4 z-[60] bg-gradient-to-t from-[#6e6122] via-[#BFA622] to-[#FFF8D1] p-1 rounded-full overflow-hidden'
      >
        <div className='bg-background rounded-full grid place-items-center p-2'>
          <Icons.Pause className='w-4 h-4 xl:w-6 xl:h-6' />
        </div>
      </Button>

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
      <div className='bg-gradient-to-t from-[#81711f] via-[#BFA622] to-[#FFF8D1] rounded-tl-none rounded-tr-none pt-0 p-1 rounded-xl absolute top-0 left-1/2 -translate-x-1/2 z-50 w-28 h-max text-xl lg:text-2xl font-medium flex justify-center'>
        <div className='bg-slate-50 grid grid-cols-[_1fr,max-content,_1fr] rounded-tl-none rounded-tr-none rounded-lg w-full'>
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
