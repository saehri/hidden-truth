import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import AppPageViewingManagerAPI from './services/API/pageViewingManagerAPI';
import PageRouting from './routes/PageRouting';
import AudioWrapper from './components/audio/AudioWrapper';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <AudioWrapper>
          <AppPageViewingManagerAPI>
            <PageRouting />
          </AppPageViewingManagerAPI>
        </AudioWrapper>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}
