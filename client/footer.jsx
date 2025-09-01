import { Link } from "react-router-dom";
import "./styles/footerStyles.css";

export default function Footer() {
  return (
    <footer id="footer" role="contentinfo" aria-label="Site Footer">
      <div id="section1">
        <h6 id="designedBy">
          Designed by <a href="https://payares-dev.com/">Fulcrum DGTL.</a>
        </h6>
      </div>
      <div id="section2">
        <img src="MLV-name.svg" alt="MLV logo" id="logo" />
        <nav id="footer-links" className="links" aria-label="Footer navigation">
          <Link to="/about" className="linkTo">
            About
          </Link>
          <Link to="/teaching" className="linkTo">
            Learn
          </Link>
          <Link to="/connect" className="linkTo">
            Connect
          </Link>
        </nav>
      </div>
      <div id="section3">
        <a
          href="https://www.instagram.com/mlvbassbari/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow on Instagram"
        >
          <img src="ig-icon.png" alt="Instagram icon" />
          <h6>Follow</h6>
        </a>
      </div>
    </footer>
  );
}
