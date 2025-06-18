import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../pages/shared/Footer'
import Navbar from '../pages/shared/Navbar'

export default function Main() {
  const location = useLocation()
  //option-1
  const locationPathname = location.pathname == '/login'

   //option-2
  //const locationPathname = location.pathname.includes('/login')

 // console.log(locationPathname)
  return (
    <div>
      {locationPathname || <Navbar></Navbar>}
      <Outlet></Outlet>
      {locationPathname || <Footer></Footer>}
    </div>
  )
}
