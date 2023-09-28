import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from '../layout/Home';
import Profile from '../layout/Functions/Profile';

import NotFound from './NotFound';

export default function Routes() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
            errorElement: <NotFound />,

            children: [
                {
                    path: '',
                    element: <Profile />
                }
            ]
        }
    ]);

    return <RouterProvider router={router} />;
}
