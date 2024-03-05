import {useContext} from 'react';
import {ActivePageContext} from '../services/API/pageViewingManagerAPI';
import {GameTypes} from '../services/utils/types';

import ImageGuesser from '../components/games/ImageGuesser';
import GuessThePerson from '../components/games/GuessThePerson';
import MultipleChoice from '../components/games/MultipleChoice';
import ReportDisinformationGame from '../components/games/report-disinformation/ReportDisinformationGame';

export default function GamePage() {
  return (
    <div className='relative w-full h-full'>
      <div className='absolute top-0 left-0 z-40 w-full h-full bg-slate-950/70'>
        <GameRouting />
      </div>
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
