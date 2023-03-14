import MainLayout from 'common/layouts/MainLayout'
import HomePage from 'pages/home'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <>404</>,
    children: [
      {
        path: '/',
        index: true,
        element: <HomePage />,
      },
    ],
  },
])

export default router
