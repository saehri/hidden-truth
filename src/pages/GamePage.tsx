import {useContext} from 'react';
import {ActivePageContext} from '../services/API/pageViewingManagerAPI';
import {GameTypes} from '../services/utils/types';

import ImageGuesser from '../components/games/image-guesser/ImageGuesser';
import GuessThePerson from '../components/games/GuessThePerson';
import MultipleChoice from '../components/games/MultipleChoice';
import ReportDisinformationGame from '../components/games/report-disinformation/ReportDisinformationGame';
import {homepageBackground} from '../assets/backgrounds/homepageBackground';
import {Lines} from './Homepage';

export default function GamePage() {
  return (
    <div className='relative w-full h-full'>
      <div className='absolute top-0 left-0 z-40 w-full h-full'>
        <GameRouting />
      </div>

      {/* DECORATION */}
      <Boxes />
      <Lines />
      <img
        src={homepageBackground}
        className='w-full h-full object-cover brightness-[.2]'
        alt=''
      />
    </div>
  );
}

function GameRouting() {
  const {activePage} = useContext(ActivePageContext);

  const GAMES: Record<GameTypes, React.ReactNode> = {
    TG: <ImageGuesser />,
    TO: <GuessThePerson />,
    MC: <MultipleChoice />,
    RD: <ReportDisinformationGame />,
  };

  return GAMES[activePage?.state?.gameType as GameTypes];
}

function Boxes() {
  return (
    <div className='absolute justify-between items-center top-0 left-0 w-full h-full z-10 gap-96 hidden lg:flex pointer-events-none'>
      <div className='w-[100vh] h-[100vh] rotate-45 border-slate-50/10 border-t border-r'></div>
      <div className='w-[100vh] h-[100vh] rotate-45 border-slate-50/10 border-l border-b'></div>
    </div>
  );
}
