import { Outlet } from "react-router-dom"
import Footer from "./footer/Footer"
import { NavBarContainer } from "./navbar/NavBarContainer"

const Layout = () => {
  return (
    <div>
        
    <NavBarContainer />
    <Outlet />
    <Footer />


    </div>
  )
}

export default Layout