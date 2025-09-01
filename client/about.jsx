import Nav from "./nav";
import Footer from "./footer";
import "./styles/aboutStyles.css";

export default function About() {
  return (
    <>
      <Nav />
      <div id="about">
        <div id="first">
          <img src="bio/giovanni.jpg" alt="" />
          <h3>About Michael</h3>
        </div>
        <div id="second">
          <img src="bio/visit.JPG" alt="" />
          <p>
            <b>Michael Leyte-Vidal</b> is a Miami-born, Cuban-American performer
            and voice teacher based in Jersey City, NJ. With a Master of Music
            in Classical Voice from Manhattan School of Music and a Bachelor of
            Arts in Theater from Florida State University, Michael brings a
            richly layered background to both his performance and pedagogy.
            <br />
            <br />
            Known for his versatility across genres, Michael has appeared in
            operatic productions nationwide, including as an Artist in Residence
            during Opera Colorado’s 40th Anniversary Season, as a recipient of
            the Encrantz Professional Fellowship at Hawaii Performing Arts
            Festival, and in recital with opera superstar Lisette Oropesa at
            Guild Hall of East Hampton in collaboration with Bel Canto Boot
            Camp.
            <br />
            <br />
            Now based in the New York Metropolitan area, Michael has returned to
            his roots in musical theater, appearing at Joe’s Pub alongside
            Katerina McCrimmon in her debut cabaret Naked, in The Visit at
            Lenfest Center for the Arts—the first production since the 2015
            Broadway revival—and in a reading of the new musical Face to Face at
            the New York Public Library for the Performing Arts.
            <br />
            <br />
            In addition to his work on stage, Michael maintains a growing
            private voice studio, working with singers at every level—from
            beginners to seasoned professionals with credits in regional
            productions, National Tours, and on Broadway.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
