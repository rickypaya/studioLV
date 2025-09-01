import Nav from "./nav";
import Slider from "react-slick";
import Footer from "./footer";

import { Link } from "react-router-dom";

export default function Home() {
  let options = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        //tablet
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        //mobile
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <Nav />
      <div id="hero" className="content-container">
        <img src="./16_9-Michael.png" alt="Headshot" id="headshot" />
        <img id="hero-title" src="./MLV-name.svg" alt="Michael Leyte-Vidal" />
      </div>
      <div id="meet" className="content-container">
        <div id="meet-left">
          <h2>Meet Michael</h2>
          <p>
            <b>Michael Leyte-Vidal</b> is a Miami-born, Cuban-American performer
            and voice teacher based in Jersey City, NJ.
          </p>
          <Link to="/about" id="btnToAbout" className="navBtn">
            READ MORE ABOUT MICHAEL HERE
          </Link>
        </div>

        <div id="meet-right">
          <img src="./Meet.jpg" id="meet-pic" alt="" />
        </div>
      </div>
      <div id="performances" className="content-container">
        <h2>Projects & Performances</h2>
        <Slider {...options} className="slider">
          <div className="show-item">
            <img src="./carousel/Visit.JPG" className="showItemImg" alt="" />
            <div className="bottom">
              <h6 className="time">Mayor Pete Dummermut</h6>
              <h5 className="title">The Visit</h5>
              <p className="description">Lenfest Center for the Arts</p>
            </div>
          </div>

          <div className="show-item">
            <img
              src="./carousel/Belcanto_bootcamp.jpg"
              className="showItemImg"
              alt=""
            />
            <div className="bottom">
              <h6 className="time">Recital with Lisette Opresa</h6>
              <h5 className="title">Bel Canto Boot Camp</h5>
              <p className="description">Guild Hall of East Hampton</p>
            </div>
          </div>

          <div className="show-item">
            <img src="./carousel/naked.jpg" className="showItemImg" alt="" />
            <div className="bottom">
              <h6 className="time">Cabaret with Karetina McCrimmon</h6>
              <h5 className="title">Naked</h5>
              <p className="description">Joe's Pub</p>
            </div>
          </div>

          <div className="show-item">
            <img src="./carousel/Capuleti.png" className="showItemImg" alt="" />
            <div className="bottom">
              <h6 className="time">Capellio</h6>
              <h5 className="title">I Capuleti e i Montecchi</h5>
              <p className="description">Teatro Nuovo</p>
            </div>
          </div>

          <div className="show-item">
            <img
              src="./carousel/Magic_flute.png"
              className="showItemImg"
              alt=""
            />
            <div className="bottom">
              <h6 className="time">Sarastro</h6>
              <h5 className="title">Die Zauberflöte</h5>
              <p className="description">Hawaii Performing Arts Festival</p>
            </div>
          </div>

          <div className="show-item">
            <img src="./carousel/Pirates.jpg" className="showItemImg" alt="" />
            <div className="bottom">
              <h6 className="time">Sergent of Police</h6>
              <h5 className="title">Pirates of Penzance</h5>
              <p className="description">Opera Colorado</p>
            </div>
          </div>
        </Slider>
        <Link id="btnToResume" className="navBtn">
          CLICK FOR MICHAEL'S FULL RESUME
        </Link>
      </div>
      <Footer />
    </>
  );
}
