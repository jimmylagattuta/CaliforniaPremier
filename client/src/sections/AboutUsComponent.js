import React from "react";
import { Link } from "react-router-dom"; // Import Link for client-side navigation
import "./AboutUsComponent.css";

function AboutUsComponent() {
  return (
    <section className="about-section">
      <div className="about-content">
        <img
          src="https://i.postimg.cc/NjWGC1nK/i-Stock-1443170756-1-2.webp"
          alt="About Us"
          loading="lazy"
          className="about-image"
          width="372"
          height="auto"
        />
        <div className="about-us-content-title">
          <div className="about-us-line"></div>
          <h1 className="about-us-name">ABOUT US</h1>
        </div>  
        <p className="about-us-company-name">California Premier Pain Clinics</p>
        <p className="about-us-paragraph">
          At California Premier Pain Clinics, we specialize in delivering advanced, individualized pain management solutions designed to restore mobility, reduce pain, and enhance overall quality of life. Our expert team uses state-of-the-art treatments—from minimally invasive injections guided by ultrasound or fluoroscopy to innovative regenerative therapies—to tailor personalized care plans for each patient. With a commitment to excellence and a focus on cutting-edge procedures, we ensure that every patient receives the highest level of care to achieve lasting relief and renewed independence.
        </p>
        <p className="about-us-paragraph">
          Proudly serving communities across California, our clinics are strategically located in Santa Rosa, Sacramento, Stockton, Modesto, Hayward, Salinas, San Jose, Fresno, Hanford, and Bakersfield—with exciting new locations coming soon in Napa and San Francisco in 2025. Our extensive network enables us to offer both in-person and telemedicine appointments, ensuring convenient access to top-quality pain management services. Trust California Premier Pain Clinics for comprehensive, expert care as you begin your journey to a pain-free and healthier life.
        </p>
        {/* SEO-friendly Link to About page */}
        <Link to="/about-us" className="about-us-button">
          Learn More About California Premier Pain Clinics
        </Link>
      </div>
    </section>
  );
}

export default AboutUsComponent;
