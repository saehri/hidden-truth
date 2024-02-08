import {createContext, useEffect, useRef, useState} from 'react';

type AudioContextType = {
  musicRef: HTMLAudioElement;
};

export const AudioContext = createContext<AudioContextType>({
  musicRef: undefined as unknown as HTMLAudioElement,
});

export default function AudioWrapper({children}: {children: React.ReactNode}) {
  const [apiValue, setApiValue] = useState<any>();
  const musicRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setApiValue({musicRef: musicRef.current});
  }, [musicRef.current]);

  return (
    <AudioContext.Provider value={{...apiValue}}>
      {children}

      <audio src='/audio/afx-lounge.mp3' ref={musicRef} loop></audio>
    </AudioContext.Provider>
  );
}
