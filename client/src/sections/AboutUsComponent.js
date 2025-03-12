import React from "react";
import { Link } from "react-router-dom";
import "./AboutUsComponent.css";

function AboutUsComponent() {
  return (
    <section className="about-section">
      {/* Image Container */}
      <div className="about-image-container">
        <img
          src="https://i.postimg.cc/NjWGC1nK/i-Stock-1443170756-1-2.webp"
          alt="About Us"
          loading="lazy"
          className="about-image"
          height="56"
          width="56"
        />
      </div>

      {/* Text Container */}
      <div className="about-content">
        <div className="about-us-content-title">
          <div className="about-us-line"></div>
          <h1 className="about-us-name">ABOUT US</h1>
        </div>
        <p className="about-us-company-name">
          California Premier Pain Clinics
        </p>
        <p className="about-us-paragraph">
          At California Premier Pain Clinics, we specialize in delivering advanced, individualized
          pain management solutions designed to restore mobility, reduce pain, and enhance overall
          quality of life. Our expert team uses state-of-the-art treatments...
        </p>
        <p className="about-us-paragraph">
          Proudly serving communities across California, our clinics are strategically located in
          Santa Rosa, Sacramento, Stockton, Modesto, Hayward, Salinas, San Jose, Fresno, Hanford,
          and Bakersfield—with exciting new locations coming soon in Napa and San Francisco in 2025...
        </p>
        <Link to="/about-us" className="about-us-button">
          Learn More About California Premier Pain Clinics
        </Link>
      </div>
    </section>
  );
}

export default AboutUsComponent;
