import MainLayout from 'common/layouts/MainLayout'
import HomePage from 'pages/home'
import ColumnPage from 'pages/column'
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
      {
        path: '/column',
        index: true,
        element: <ColumnPage />,
      },
    ],
  },
])

export default router
