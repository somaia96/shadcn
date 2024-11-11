import { Outlet } from "react-router-dom"
import Footer from "../components/Layout/Footer"
import Navbar from "../components/Layout/Navbar"
import Header from "../components/Layout/Header"

const Layout = () => {
  return <>
    <Navbar />
    <Header />
    <Outlet/>
    <Footer />
  </>
}

export default Layout
