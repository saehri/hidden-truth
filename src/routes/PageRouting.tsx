import {useContext} from 'react';
import {MotionConfig} from 'framer-motion';
import {
  ActivePageContext,
  ViewablePageTypes,
} from '../services/API/pageViewingManagerAPI';

import AppLayout from '../layouts/AppLayout';
import Homepage from '../pages/Homepage';
import GamePage from '../pages/GamePage';
import StorystoryVolumeSelectionPage from '../pages/StoryVolumeSelectionPage';
import StorystoryVolumeDetail from '../pages/StoryVolumeDetail';
import StoryTypeSelectionPage from '../pages/StoryTypesSelection';

const defaultAnimaitonEasing = [0.7, 0.35, 0.33, 0.8];

export default function PageRouting() {
  return (
    <AppLayout>
      <MotionConfig transition={{ease: defaultAnimaitonEasing, duration: 0.5}}>
        <PageViewer />
      </MotionConfig>
    </AppLayout>
  );
}

function PageViewer() {
  const {activePage} = useContext(ActivePageContext);
  const pageName = activePage.location;

  const PAGES: Record<ViewablePageTypes, React.ReactNode> = {
    home: <Homepage />,
    storyTypes: <StoryTypeSelectionPage />,
    storyVolumeSelection: <StorystoryVolumeSelectionPage />,
    storyVolumeDetail: <StorystoryVolumeDetail />,
    game: <GamePage />,
    dialog: <div>Dialog Page</div>,
    auth: <div>Dialog Page</div>,
    logout: <div>Dialog Page</div>,
    settings: <div>Dialog Page</div>,
  };

  return PAGES[pageName];
}
