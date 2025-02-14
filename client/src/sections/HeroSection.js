import React from "react";
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-section">
      <picture>
        {/* Mobile Image (Default) */}
        <source
          srcSet="https://i.postimg.cc/Gm8z43zH/i-Stock-1069988650-1-3.webp"
          media="(max-width: 480px)"
          type="image/webp"
        />

        {/* Tablet Image */}
        <source
          srcSet="https://i.postimg.cc/Gm8z43zH/i-Stock-1069988650-1-3.webp"
          media="(max-width: 768px)"
          type="image/webp"
        />

        {/* Desktop Image */}
        <source
          srcSet="https://i.postimg.cc/Gm8z43zH/i-Stock-1069988650-1-3.webp"
          media="(min-width: 769px)"
          type="image/webp"
        />

        {/* Fallback */}
        <img
          src="https://i.postimg.cc/Gm8z43zH/i-Stock-1069988650-1-3.webp"
          alt="Hero"
          width="auto"
          height="100$"
          loading="eager"
        />
      </picture>

      <div className="hero-content">
        <div className="hero-content-title">
          <div className="line"></div>
          <h1 className="company-name">CALIFORNIA PREMIER PAIN CLINICS</h1>
          <div className="line"></div>
        </div>  
        <h1 className="slogan">Relieve. Restore. Renew.</h1>
        <p className="hero-paragraph">
          At California Premier Pain Clinics, our mission is to help you find relief and regain your quality of life. Our experts craft personalized treatment plans using advanced therapies to ensure the best outcomes for your recovery.
        </p>
        <h1 className="subslogan">Your Path to a Pain-Free Life Begins Here.</h1>

        <a href="#appointment" className="cta-button">Book an Appointment</a>
      </div>
    </section>
  );
}

export default HeroSection;
