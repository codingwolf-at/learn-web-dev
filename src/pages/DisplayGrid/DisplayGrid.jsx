import "./DisplayGrid.css";
import { useLibrary } from "../../hooks"
import { Chip, Thumbnail, FloatingButton } from "../../components";
import { sortDataByTopic } from "../../utils";

export const DisplayGrid = () => {

  const { library, sortBy } = useLibrary();

  const sortedData = sortDataByTopic(library, sortBy);

  return (
    <main className="display-container"> 
      <FloatingButton text="Scroll To Top ⬆️" />
      <div className="chip-container bg-light">
        {
          ["All", "HTML", "CSS", "JavaScript", "React", "Angular"].map((topic) => (
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