import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      <h1 className="logo">anime list</h1>
      <div className="menuItems">
        <Link to="/">Anasayfa</Link>
        <Link to="/randomanime">Rastgele Anime</Link>
        <Link to="/aboutme">Hakkımda</Link>
      </div>
    </nav>
  );
}
export default Navbar;
