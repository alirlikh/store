import { Header, Navbar } from "@/components"
import { Outlet } from "react-router-dom"

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="align-element py-20"></div>
      <Outlet />
    </>
  )
}

export default HomeLayout
