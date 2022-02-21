import "./Header.css";

export const Header = () => {
  return (
    <header className="nav nav-dark">
      <span className="nav-brand">WebTube</span>
      <div className="nav-link-container">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Contact</a>
          <a href="#" className="nav-link">Services</a>
      </div>
    </header>
  );
}