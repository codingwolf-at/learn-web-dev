import { Link } from "react-router-dom";
import "./Thumbnail.css";

export const Thumbnail = ({ video }) => {
  return (
    <Link to={`/video/${video.videoId}`}>
      <div key={video.videoId}>
        <img src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`} alt="thumbnail" className="img-thumbnail" />
      </div>
    </Link>
  );
};
