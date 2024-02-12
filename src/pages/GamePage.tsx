import {useContext} from 'react';
import {ActivePageContext} from '../services/API/pageViewingManagerAPI';
import {GameTypes} from '../services/utils/types';

import ImageGuesser from '../components/games/ImageGuesser';
import FullscreenBackground from '../components/ui/FullscreenBackground';
import ArrangeLetters from '../components/games/ArrangeLetters';
import GuessThePerson from '../components/games/GuessThePerson';
import {homepageBackground} from '../assets/backgrounds/homepageBackground';
import MultipleChoice from '../components/games/MultipleChoice';
import ReportDisinformation from '../components/games/ReportDisinformation';

export default function GamePage() {
  return (
    <div className='relative w-full h-full'>
      <div className='absolute top-0 left-0 z-40 w-full h-full bg-slate-950/70'>
        <GameRouting />
      </div>

      <FullscreenBackground
        imageLink={homepageBackground}
        placeholderLink='https://utfs.io/f/8fd6d47e-e2a4-4842-acf7-cd88a2d78bb4-4ik1dj.webp'
        animate={false}
      />
    </div>
  );
}

function GameRouting() {
  const {activePage} = useContext(ActivePageContext);

  const GAMES: Record<GameTypes, React.ReactNode> = {
    TG: <ImageGuesser />,
    SK: <ArrangeLetters />,
    TO: <GuessThePerson />,
    MC: <MultipleChoice />,
    RD: <ReportDisinformation />,
  };

  return GAMES[activePage?.state?.gameType as GameTypes];
}
