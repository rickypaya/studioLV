import { NavLink } from "react-router-dom";
import "./styles/nav.css";

export default function Nav() {
  return (
    <nav id="nav-container">
      <div id="left">
        <NavLink to="/">
          <img id="name" src="/MLV-name.png" alt="Michael Leyte-Vidal" />
        </NavLink>
      </div>
      <div id="right">
        <NavLink to="/about" className="nav-link">
          <p>About</p>
        </NavLink>
        <NavLink to="/teaching" className="nav-link">
          <p>Teaching</p>
        </NavLink>
        <NavLink to="/connect" className="nav-link">
          <p>Connect</p>
        </NavLink>
      </div>
    </nav>
  );
}
