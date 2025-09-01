import Nav from "./nav";
import Footer from "./footer";
import Contact from "./contact";
import "./styles/teachingStyles.css";

export default function Teaching() {
  return (
    <>
      <Nav />
      <div id="teaching">
        <div className="main-content">
          <div className="header">
            <img src="./teaching/studio-LV.png" alt="" />
            <h2>Lessons and Technical Training</h2>
          </div>

          <div className="body">
            <p>
              With a Master's degree in Classical Voice, Michael is passionate
              about helping students discover the power and beauty of their own
              voice. His teaching draws on years of rigorous classical training
              while embracing the versatility needed to sing across a wide range
              of styles—from the nuance of opera to the energy of pop and
              everything in between.
              <br />
              <br />
              Michael's lessons go beyond just hitting the right notes. He works
              with each student to build a healthy vocal foundation, focusing on
              breath support, resonance, and clarity of tone. At the same time,
              he emphasizes musicality, expression, and the confidence to
              perform with authenticity. Whether you are a beginner taking your
              first steps, a developing singer looking to expand your range, or
              an advanced performer preparing for auditions and recitals,
              Michael tailors his approach to meet your individual goals.
              <br />
              <br />
              Students can expect a supportive, encouraging environment where
              exploration and growth are at the center of the learning process.
              Michael's mission is not only to strengthen voices but also to
              inspire singers to connect deeply with the music they love and to
              share it with confidence.
            </p>

            <img src="./teaching/stage2.png" alt="" />
          </div>
        </div>

        <div className="testimonials">
          <h3>Hear what some of Michael's previous students have to say!</h3>
          <div className="quotes">
            <div id="quote1" className="quote">
              <p>
                "In just three short months, I've not only seen so much
                improvement in my voice, but I've felt more confident in myself.
                Michael creates a safe, fun, and productive space; an artist's
                dream. I'm so thankful to have him on my team, and you will be
                too!"
              </p>
              <div className="person">
                <h5>Remi</h5>
                <h6>Recent Performance</h6>
              </div>
            </div>

            <div id="quote2" className="quote">
              <p>
                "Working with Michael has completely changed the way I see
                myself as a singer. I had no prior technical training so Michael
                took me through the basic mechanics of my voice and explained
                how to utilize them across musical genres. He is so knowledgable
                and encouraging, and he goes above and beyond to provide support
                to his students. I absolutely love his energy as a teacher, and
                the confidence he has instilled in me has changed the way I
                audition and reherse."
              </p>
              <div className="person">
                <h5>Kathy</h5>
                <h6>Recent Performance</h6>
              </div>
            </div>

            <div id="quote3" className="quote">
              <p>"Third Testimonial"</p>
              <div className="person">
                <h5>Kathy</h5>
                <h6>Recent Performance</h6>
              </div>
            </div>
          </div>
        </div>
        <Contact />
      </div>
      <Footer />
    </>
  );
}
