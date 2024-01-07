import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import AppPageViewingManagerAPI from './services/API/pageViewingManagerAPI';
import PageRouting from './routes/PageRouting';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <AppPageViewingManagerAPI>
          <PageRouting />
        </AppPageViewingManagerAPI>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}
