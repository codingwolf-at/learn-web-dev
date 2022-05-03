import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import YouTubePlayer from "react-player/youtube";
import { useParams } from "react-router-dom";
import { useLibrary } from "../../hooks";
import "./VideoPage.css";
import { BackButton } from "../../components";

export const VideoPage = () => {
  const { videoId } = useParams();
  const { library, dispatch } = useLibrary();
  const video = library.find(video => video.videoId === videoId);

  const likeHandler = (videoId) => dispatch({ type: "LIKE_VIDEO", payload: videoId }); 

  return (
    <div className="video-page">
      <BackButton />
      <div className="player-wrapper">
        <YouTubePlayer
          className="react-player"
          controls
          url={`https://www.youtube.com/watch?v=${video.videoId}`}
          width="100%"
          height="100%"
        />
      </div>
      <div className="video-page-content">
        <button className={video.liked ? "btn btn-danger" : "btn"} onClick={() => likeHandler(video.videoId)}>
          <FontAwesomeIcon icon={faHeart} size="lg" />
          <span>{video.liked ? "Liked" : "Like"}</span>
        </button>
        <h1 className="display-5">{video.title}</h1>
        <h2>
          By: <a href={`https://www.youtube.com/channel/${video.channel.channelId}`} target="_blank" rel="noreferrer">{video.channel.name}</a>
        </h2>
        <p className="lead">{video.description}</p>
      </div>
    </div>
  );
};
