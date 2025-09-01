import Footer from "./footer";
import Nav from "./nav";
import "./styles/connectStyles.css";

export default function Connect() {
  return (
    <>
      <Nav />
      <div className="page">
        <div id="resume">
          <h2>Resume & Headshots</h2>
          <div id="downloadables">
            <div className="card">
              <img src="./headshots/Leyte-Vidal-Headshot1.jpg" alt="" />
              <a download="./headshots/Leyte-Vidal-Headshot1.jpg">
                Download Headshot
              </a>
            </div>

            <div className="card">
              <img src="./headshots/Leyte-Vidal-Headshot2.jpg" alt="" />
              <a download="./headshots/Leyte-Vidal-Headshot2.jpg">
                Download Headshot
              </a>
            </div>

            <div className="card">
              <img src="./headshots/leyte-vidal-resume.png" alt="" />
              <a download="./headshots/leyte-vidal-resume.pdf">
                Download Resume
              </a>
            </div>
          </div>
        </div>

        <div id="connects">
          <div id="connect-left">
            <img src="./headshots/looking-up.jpg" alt="Michael Looking Up" />
          </div>
          <div id="connect-right">
            <h3>Connect with Michael</h3>
            <p>Contact Michael directly via email at:</p>
            <a href="mailto:bassbari.mlv@gmail.com">bassbari.mlv@gmail.com</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
