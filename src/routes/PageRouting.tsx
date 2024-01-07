import {useContext} from 'react';
import {
  ActivePageContext,
  ViewablePageTypes,
} from '../services/API/pageViewingManagerAPI';

import AppLayout from '../layouts/AppLayout';
import Homepage from '../pages/Homepage';
import ChapterDetail from '../pages/ChapterDetail';
import GamePage from '../pages/GamePage';
import ChapterSelectionPage from '../pages/ChapterSelectionPage';

export default function PageRouting() {
  return (
    <AppLayout>
      <PageViewer />
    </AppLayout>
  );
}

function PageViewer() {
  const {activePage} = useContext(ActivePageContext);
  const pageName = activePage.location;

  const PAGES: Record<ViewablePageTypes, React.ReactNode> = {
    home: <Homepage />,
    chapterSelection: <ChapterSelectionPage />,
    chapterDetail: <ChapterDetail />,
    game: <GamePage />,
    dialog: <div>Dialog Page</div>,
    auth: <div>Dialog Page</div>,
    logout: <div>Dialog Page</div>,
    settings: <div>Dialog Page</div>,
  };

  return PAGES[pageName];
}
