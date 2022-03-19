import "./DisplayGrid.css";
import { useLibrary } from "../../hooks"
import { Thumbnail } from "../../components";

export const DisplayGrid = () => {

  const { library } = useLibrary();

  return (
    <main className="display-container"> 
      <div className="chip-container bg-light">
        Chip
      </div>
      <div className="display-grid">
        {library.map((video) => {
          return <Thumbnail key={video.videoId} video={video} />;
        })}
      </div>
    </main>
  )
}