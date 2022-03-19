import YouTubePlayer from "react-player/youtube";
import { Link, useParams } from "react-router-dom";
import { videoList } from "../../data/mockDB";
import "./VideoPage.css";

export const VideoPage = () => {
  const { videoId } = useParams();
  const video = videoList.find(video => video.videoId === videoId);

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
