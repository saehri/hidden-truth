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
import FullscreenBackground from '../components/ui/FullscreenBackground';
import {homepageBackground} from '../assets/backgrounds/homepageBackground';

const defaultAnimaitonEasing = [0.7, 0.35, 0.33, 0.8];

export default function PageRouting() {
  return (
    <>
      <MotionConfig transition={{ease: defaultAnimaitonEasing, duration: 0.3}}>
        <AppLayout>
          <ErrorBoundary fallback={<ErrorBoundaryComponent />}>
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

function ErrorBoundaryComponent() {
  return (
    <div className='w-full h-full p-6 relative'>
      <div className='bg-background p-4 border border-border max-w-96 z-50 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
        <h1 className='text-sm lg:text-base text-yellow-500 font-medium mb-8'>
          Oh tidak sepertinya ada kesalahan saat kami mencoba merender halaman
          ini.
        </h1>

        <button
          onClick={() => location.reload()}
          className='bg-gradient-to-t mb-4 uppercase text-xs lg:text-sm from-yellow-700 to-yellow-200 block p-1 pt-2 w-full text-yellow-950'
        >
          Kembali ke halaman utama
        </button>

        <p className='text-xs lg:text-sm text-yellow-700'>
          Jika masalah ini terus berulang silahkan hubungi customer service
          kami.
        </p>
      </div>

      <FullscreenBackground
        imageLink={homepageBackground}
        placeholderLink={
          'https://utfs.io/f/9e30c3bc-3310-4497-a0d1-793a1ac62ae8-e5s95w.webp'
        }
      />
    </div>
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
