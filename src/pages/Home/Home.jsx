import "./Home.css"
import { Header, SideBar } from "../../components"
import { useContext } from "react"
import { LibraryContext } from "../../contexts"

export const Home = () => {
  const { videoList } = useContext(LibraryContext);
  console.log(videoList)
  return (
    <div>
      <Header />
      <SideBar />
      <main>
        <h1 className="display-1">Home</h1>
      </main>
    </div>
  )
}