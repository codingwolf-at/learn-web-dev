import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt, faMap } from "@fortawesome/free-regular-svg-icons";
import "./SideBar.css";
import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <aside className="sidebar bg-light">
      <div className="side-nav">
        <Link to="/roadmaps" className="side-link">
          <FontAwesomeIcon icon={faMap} size="2x" fixedWidth />
          <span>Roadmaps</span>
        </Link>
        <Link to="/playlists" className="side-link">
          <FontAwesomeIcon icon={faListAlt} size="2x" fixedWidth />
          <span>Playlist</span>
        </Link>
      </div>
    </aside>
  )
}