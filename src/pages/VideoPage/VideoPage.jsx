import YouTubePlayer from "react-player/youtube";
import { Link, useParams } from "react-router-dom";
import { useLibrary } from "../../hooks";
import "./VideoPage.css";

export const VideoPage = () => {
  const { videoId } = useParams();
  const { library } = useLibrary();
  const video = library.find(video => video.videoId === videoId);

  return (
    <div className="video-page">
      <h1>{video.title}</h1>
      <Link to="/">Go Back</Link>
      <div className="player-wrapper">
        <YouTubePlayer
          className="react-player"
          controls
          url={`https://www.youtube.com/watch?v=${video.videoId}`}
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};
