import {useContext, useLayoutEffect} from 'react';
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

const securePages = [
  'homepage',
  'storylineTypeSelectionPage',
  'storylineSelectionPage',
  'storylineDetailPage',
  'gamePage',
  'dialogPage',
];

function PageViewer() {
  const {activePage, setActivePage} = useContext(ActivePageContext);
  const pageName = activePage.location;

  useLayoutEffect(() => {
    // Redirect the user from secure route
    const USER_STORAGE_KEY = 'USER_DATA';
    if (securePages.includes(activePage.location)) {
      if (!localStorage.getItem('USER_DATA')) {
        setActivePage({location: 'signinPage'});
      }
    } else {
      if (localStorage.getItem('USER_DATA')) {
        setActivePage({location: 'homepage'});
      }
    }
  }, [activePage.location]);

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
