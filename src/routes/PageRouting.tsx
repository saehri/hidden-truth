import {useContext, useLayoutEffect} from 'react';
import {MotionConfig} from 'framer-motion';
import {ToastContainer} from 'react-toastify';
import {
  ActivePageContext,
  ViewablePageTypes,
} from '../services/API/pageViewingManagerAPI';
import 'react-toastify/dist/ReactToastify.css';
import {ErrorBoundary} from 'react-error-boundary';

import AppLayout from '../layouts/AppLayout';
import Homepage from '../pages/Homepage';
import GamePage from '../pages/GamePage';
import EpisodeTypeSelectionPage from '../pages/StorylineTypeSelectionPage';
import StorylineSelectionPage from '../pages/StorylineSelectionPage';
import StorylineDetailPage from '../pages/StorylineDetailPage';
import DialogPage from '../pages/DialogPage';
import SignupPage from '../pages/SignupPage';
import SigninPage from '../pages/SigninPage';
import useUserController from '../services/controller/userController';
import GlobalErrorBoundary from '../components/ui/GlobalErrorBoundary';

const defaultAnimaitonEasing = [0.7, 0.35, 0.33, 0.8];

export default function PageRouting() {
  return (
    <>
      <MotionConfig transition={{ease: defaultAnimaitonEasing, duration: 0.3}}>
        <AppLayout>
          <ErrorBoundary FallbackComponent={GlobalErrorBoundary}>
            <PageViewer />
          </ErrorBoundary>
        </AppLayout>
      </MotionConfig>

      <ToastContainer
        autoClose={3000}
        bodyClassName='font-overpass'
        icon={false}
        position='top-center'
      />
    </>
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
  const userController = useUserController();

  /* Everytime the user navigate to a differen route, we check wether:
   - Are they about to visit secure route? If so check for the user data in local storage
     and redirect them to sign in page if user data is null || undefined
   - Else if they visit the sigin || signup page but they are already logged in
     redirect them to homepage
     
    **This operation is done inside useLayoutEffect to avoid weird page rendering behavior
  */
  useLayoutEffect(() => {
    const userData = userController.getUserDataFromSessionStorage();

    // Check if the user requested route is a secure route
    /* 
    WARNING: Do not simplify this conditonal logics. I already tried it and it resulted on infinity loop.
    */

    if (securePages.includes(activePage.location)) {
      if (!userData) {
        setActivePage({location: 'signinPage'});
      }
    } else {
      if (userData) {
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
