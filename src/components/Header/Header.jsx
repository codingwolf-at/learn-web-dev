import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag, faFolder } from "@fortawesome/free-regular-svg-icons";

export const Header = () => {
  return (
    <header className="nav nav-dark">
      <Link to="/" className="heading-link">
        <span className="nav-brand">WebTube</span>
      </Link>
      <div className="nav-link-container">
        <NavLink to="/roadmaps" className="link" style={({ isActive }) => ({ borderBottom: isActive ? "2px solid white" : "" })}>
          <FontAwesomeIcon icon={faFlag} size="lg" fixedWidth />
          <span>Roadmaps</span>
        </NavLink>
        <NavLink to="/playlists" className="link" style={({ isActive }) => ({ borderBottom: isActive ? "2px solid white" : "" })}>
          <FontAwesomeIcon icon={faFolder} size="lg" fixedWidth />
          <span>Playlists</span>
        </NavLink>
        {/* <NavLink to="/login" className="link" style={({ isActive }) => ({ borderBottom: isActive ? "2px solid white" : "" })}>
          <FontAwesomeIcon icon={faCircleUser} size="lg" fixedWidth />
          <span>Login</span>
        </NavLink> */}
      </div>
    </header>
  );
}