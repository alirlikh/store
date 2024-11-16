import { Header } from "@/components"
import { Outlet } from "react-router-dom"

const HomeLayout = () => {
  return (
    <>
      <Header />
      <nav>navbar</nav>
      <div className="align-element py-20"></div>
      <Outlet />
    </>
  )
}

export default HomeLayout
