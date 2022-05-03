import "./Roadmaps.css";
import { Link } from "react-router-dom";
import { roadmapList } from "../../constants";

export const Roadmaps = () => {
  return (
    <main className='roadmaps-main'>
      <span className="display-3 roadmap-heading center">Roadmaps</span>
      <div className="roadmap-list">
        {
          roadmapList.map((roadmap, index) => (
              <Link to={`/roadmaps/${index}`} key={index}>
                <button className="btn">
                  { roadmap.title }
                </button>
              </Link>
          ))
        }
      </div>
      <p className="lead center">
        More to come ...
      </p>
    </main>
  )
}