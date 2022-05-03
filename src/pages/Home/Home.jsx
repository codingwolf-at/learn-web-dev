import "./Home.css"
import { Header } from "../../components"
import { Outlet } from "react-router-dom"

export const Home = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}