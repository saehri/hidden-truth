import {useContext} from 'react';
import ImageGuesser from '../components/games/ImageGuesser';
import FullscreenBackground from '../components/ui/FullscreenBackground';
import {ActivePageContext} from '../services/API/pageViewingManagerAPI';
import {GameTypes} from '../services/utils/types';

export default function GamePage() {
  return (
    <div className='relative w-full h-full'>
      <div className='absolute top-0 left-0 z-40 w-full h-full bg-slate-950/70'>
        <GameRouting />
      </div>

      <FullscreenBackground
        imageLink='/background/gamepage-big.webp'
        placeholderLink='/background/gamepage-big.webp'
      />
    </div>
  );
}

function GameRouting() {
  const {activePage} = useContext(ActivePageContext);

  const GAMES: Record<GameTypes, React.ReactNode> = {
    tg: <ImageGuesser />,
  };

  return GAMES[activePage?.state?.gameType as GameTypes];
}
