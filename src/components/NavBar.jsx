import "../css/Navbar.css"
import { Link } from "react-router-dom";
import Gif from "./gif";
function NavBar(){
  return (
  <nav className="navbar">
    <div className="navbar-brand">
       <Link to="/" className="movieApp"> MovieTrends
       <Gif />
       </Link>
    </div>
    <div className="navbar-links">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/"></Link>
      <Link to="/favorites" className="nav-link" >Favorites</Link>
    </div>
  </nav>
  );
}
export default NavBar