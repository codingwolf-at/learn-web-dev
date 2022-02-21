import "./Home.css"
import { Header } from "../../components"
import { useContext } from "react"
import { LibraryContext } from "../../contexts"

export const Home = () => {
  const { videoList } = useContext(LibraryContext);
  console.log(videoList)
  return (
    <div>
      <Header />
      <h1>Home</h1>
    </div>
  )
}