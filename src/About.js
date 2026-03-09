import "./About.css";
import aboutImage from "./about.jpg";

function About() {
  return (
    <section id ="about"className="about">

      <div className="about-image">
        <img src={aboutImage} alt="Interior Design"/>
      </div>

      <div className="about-text">
        <h2>About Us</h2>
        <p>
          We are a creative interior design studio focused on creating
          beautiful and functional spaces. Our team combines modern
          design ideas with comfort to transform homes and offices
          into inspiring environments.
        </p>

        <p>
          With years of experience, we deliver high-quality designs
          that match our clients' style and personality.
        </p>

        <button>Learn More</button>
      </div>

    </section>
  ); 
}

export default About;