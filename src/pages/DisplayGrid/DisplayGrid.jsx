import "./DisplayGrid.css";
import { useLibrary } from "../../hooks"
import { Chip, Thumbnail } from "../../components";
import { sortDataByTopic } from "../../utils";

export const DisplayGrid = () => {

  const { library, sortBy } = useLibrary();

  const sortedData = sortDataByTopic(library, sortBy);

  return (
    <main className="display-container"> 
      <div className="chip-container bg-light">
        {
          ["All", "HTML", "CSS", "JavaScript", "React"].map((topic) => (
            <Chip text={topic} key={topic} />
          ))
        }
      </div>
      <div className="display-grid">
        {sortedData.map((video) => {
          return <Thumbnail key={video.videoId} video={video} />;
        })}
      </div>
    </main>
  )
};