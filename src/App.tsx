import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <div>Hello World</div>,
      children: [
        {
          path: 'public',
          element: <div>Public route</div>,
        },
        {
          path: 'secure',
          element: <div>Secure Root</div>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
