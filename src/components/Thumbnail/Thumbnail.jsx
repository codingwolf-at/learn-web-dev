import { Link } from "react-router-dom";
import "./Thumbnail.css";

export const Thumbnail = ({ video }) => {
  return (
    <Link to={`/video/${video.videoId}`} className="thumbnail-link">
      <div key={video.videoId}>
        <img src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`} alt="thumbnail" className="img-thumbnail" />
        <div className="thumbnail-content">
          <span>{video.title}</span>
        </div>
      </div>
    </Link>
  );
};
