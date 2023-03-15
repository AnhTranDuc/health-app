import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import ScrollToTop from './ScrollToTop'

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <ScrollToTop/>
      <Footer />
    </div>
  )
}

export default MainLayout
