import "./Playlists.css";
import { useLibrary } from "../../hooks";
import { Thumbnail } from "../../components";

export const Playlists = () => {
  const { library } = useLibrary();

  const likedVideos = library.filter(video => video.liked === true);

  return (
    <main className="playlists-main">
      <span className="display-3 playlists-heading">Playlists</span>
      <span className="display-5">Liked Videos</span>
      <div className="playlist-container">
        {
          likedVideos.map(video => {
            return <Thumbnail key={video.videoId} video={video} />
          })
        }
      </div>
    </main>
  )
}