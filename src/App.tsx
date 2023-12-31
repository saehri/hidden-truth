import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

/* --- LAYOUTS */
import RootLayout from './layouts/RootLayout';
import AuthLayout from './layouts/AuthLayout';
import SecureLayout from './layouts/SecureLayout';
/* --- LAYOUTS */

/* --- PAGES */
import Homepage from './pages/Homepage';
/* --- PAGES */

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route element={<AuthLayout />}>
          <Route path='auth' element={<div>Auth page</div>} />
        </Route>

        <Route element={<SecureLayout />}>
          <Route path='/' element={<Homepage />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
