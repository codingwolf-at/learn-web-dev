import "./DisplayGrid.css";
import { useLibrary } from "../../hooks"
import { Chip, Thumbnail, FloatingButton } from "../../components";
import { sortDataByTopic } from "../../utils";
import { chipList } from "../../constants";

export const DisplayGrid = () => {

  const { library, sortBy } = useLibrary();

  const sortedData = sortDataByTopic(library, sortBy);

  return (
    <main className="display-container"> 
      <FloatingButton text="Scroll To Top ⬆️" />
      <div className="chip-container bg-light">
        {
          chipList.map((topic, index) => (
            <Chip text={topic} key={index} />
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