import "./Home.css"
import { Header, SideBar } from "../../components"
import { Outlet } from "react-router-dom"

export const Home = () => {
  return (
    <div>
      <Header />
      <SideBar />
      <Outlet />
    </div>
  )
}