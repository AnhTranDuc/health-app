import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

const MainLayout = () => {
  return (
    <div id="home-page">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout
