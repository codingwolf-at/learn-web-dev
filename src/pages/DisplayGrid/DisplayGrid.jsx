import "./DisplayGrid.css";
import { useLibrary } from "../../hooks"
import { Thumbnail } from "../../components";

export const DisplayGrid = () => {

  const { videoList } = useLibrary();

  return (
    <main className="display-container"> 
      <div className="display-grid">
        {videoList.map((video) => {
          return <Thumbnail key={video.videoId} video={video} />;
        })}
      </div>
    </main>
  )
}