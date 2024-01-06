import React, {useEffect, useRef, useState} from 'react';
import {motion} from 'framer-motion';
import {twMerge} from 'tailwind-merge';

import Countdown, {CountdownApi} from 'react-countdown';

interface InGameCountdown {
  countdownDuration?: number;
  autoStart?: boolean;
  countdownState: 'start' | 'pause';
}

export default function InGameCountdown({
  countdownDuration,
  countdownState,
}: InGameCountdown) {
  const duration = countdownDuration ?? 180;

  const [date, setDate] = useState(Date.now() + duration * 1000);
  const countdownApiRef = useRef<CountdownApi | null>(null);

  const startCountdown = (): void => {
    countdownApiRef.current?.start();
  };

  const handlePauseClick = (): void => {
    countdownApiRef.current?.pause();
  };

  const handleResetClick = (): void => {
    setDate(Date.now() + 10000);
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
    if (countdownState === 'start') {
      startCountdown();
    }
  }, [countdownState, date]);

  return (
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
    />
  );
}

// Renderer callback with condition
function customRenderer({children}: {children: React.ReactNode}) {
  return ({minutes, seconds, completed}: any) => {
    if (completed)
      return (
        <CountdownClockWrapper dontAnimate>
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

function CountdownClockWrapper({
  children,
  className,
  dontAnimate,
}: CountdownClockWrapper) {
  return (
    <motion.div
      initial={!dontAnimate && {y: 100, opacity: 0}}
      animate={
        !dontAnimate && {
          opacity: 1,
          y: 0,
          rotate: 3,
          transition: {rotate: {delay: 1}},
        }
      }
      className={twMerge(
        'border-8 p-2 rounded-xl bg-background border-border grid grid-cols-2 gap-1 h-max text-4xl text-center w-full relative z-50',
        className
      )}
    >
      {children}
    </motion.div>
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
