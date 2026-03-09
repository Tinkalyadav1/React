import "./Services.css";
import { FaCouch, FaHome, FaPaintRoller } from "react-icons/fa";

function Services() {
  return (
    <section id="services" className="services">

      <h2 className="services-title">Our Services</h2>

      <div className="services-container">

        <div className="service-card">
          <FaHome className="service-icon" />
          <h3>Interior Design</h3>
          <p>We create modern and beautiful interior spaces for homes and offices.</p>
        </div>

        <div className="service-card">
          <FaCouch className="service-icon" />
          <h3>Furniture Design</h3>
          <p>Custom furniture design that perfectly fits your interior style.</p>
        </div>

        <div className="service-card">
          <FaPaintRoller className="service-icon" />
          <h3>Wall Decoration</h3>
          <p>Stylish wall designs, wallpapers, and color combinations.</p>
        </div>

      </div>

    </section>
  );
}

export default Services;


