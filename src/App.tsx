import {createBrowserRouter, RouterProvider} from 'react-router-dom';

/* --- LAYOUTS */
import SecureLayout from './layouts/SecureLayout';
/* --- LAYOUTS */

/* --- PAGES */
import Homepage from './pages/Homepage';
import GamePage from './pages/GamePage';
import ChapterDetail from './pages/ChapterDetail';
/* --- PAGES */

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <SecureLayout />,
      children: [
        {path: '/', element: <Homepage />},
        {path: 'chapter', element: <ChapterDetail />},
        {path: 'play', element: <GamePage />},
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
