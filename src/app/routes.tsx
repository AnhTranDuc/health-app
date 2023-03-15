import MainLayout from 'common/layouts/MainLayout'
import HomePage from 'pages/home'
import RecordPage from 'pages/records'
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
        path: '/record',
        index: true,
        element: <RecordPage />,
      },
    ],
  },
])

export default router
