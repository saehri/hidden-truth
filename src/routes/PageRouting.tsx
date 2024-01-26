import {useContext} from 'react';
import {MotionConfig} from 'framer-motion';
import {
  ActivePageContext,
  ViewablePageTypes,
} from '../services/API/pageViewingManagerAPI';

import AppLayout from '../layouts/AppLayout';
import Homepage from '../pages/Homepage';
import GamePage from '../pages/GamePage';
import EpisodeTypeSelectionPage from '../pages/StorylineTypeSelectionPage';
import StorylineSelectionPage from '../pages/StorylineSelectionPage';
import StorylineDetailPage from '../pages/StorylineDetailPage';
import DialogPage from '../pages/DialogPage';
import SignupPage from '../pages/SignupPage';
import SigninPage from '../pages/SigninPage';

const defaultAnimaitonEasing = [0.7, 0.35, 0.33, 0.8];

export default function PageRouting() {
  return (
    <AppLayout>
      <MotionConfig transition={{ease: defaultAnimaitonEasing, duration: 0.3}}>
        <PageViewer />
      </MotionConfig>
    </AppLayout>
  );
}

function PageViewer() {
  const {activePage} = useContext(ActivePageContext);
  const pageName = activePage.location;

  const PAGES: Record<ViewablePageTypes, React.ReactNode> = {
    homepage: <Homepage />,
    storylineTypeSelectionPage: <EpisodeTypeSelectionPage />,
    storylineSelectionPage: <StorylineSelectionPage />,
    storylineDetailPage: <StorylineDetailPage />,
    gamePage: <GamePage />,
    dialogPage: <DialogPage />,
    signupPage: <SignupPage />,
    signinPage: <SigninPage />,
  };

  return PAGES[pageName];
}
