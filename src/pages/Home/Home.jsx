import "./Home.css"
import { Header, SideBar } from "../../components"
import { useContext } from "react"
import { LibraryContext } from "../../contexts"
import { Outlet } from "react-router-dom"

export const Home = () => {
  const { videoList } = useContext(LibraryContext);
  console.log(videoList)
  return (
    <div>
      <Header />
      <SideBar />
      <Outlet />
    </div>
  )
}