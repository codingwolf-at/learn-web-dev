import "./Header.css";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="nav nav-dark">
      <span className="nav-brand">WebTube</span>
      <div className="nav-link-container">
        <NavLink to="/login">
          Login
        </NavLink>
      </div>
    </header>
  );
}