import React from "react";
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-section">
      <picture>
        {/* Mobile Image (Default) */}
        <source
          srcSet="https://www.imghippo.com/i/bWgu8669KvI.webp"
          media="(max-width: 480px)"
          type="image/webp"
        />

        {/* Tablet Image */}
        <source
          srcSet="https://www.imghippo.com/i/bWgu8669KvITablet.webp"
          media="(max-width: 768px)"
          type="image/webp"
        />

        {/* Desktop Image */}
        <source
          srcSet="https://www.imghippo.com/i/bWgu8669KvIDesktop.webp"
          media="(min-width: 769px)"
          type="image/webp"
        />

        {/* Fallback */}
        <img
          src="https://www.imghippo.com/i/bWgu8669KvI.webp"
          alt="Hero"
          width="100%"
          height="auto"
          loading="eager"
        />
      </picture>

      <div className="hero-content">
        <h1 className="company-name">PURE HEALTH & WELLNESS</h1>
        <div className="line left"></div>
        <div className="line right"></div>
      </div>
    </section>
  );
}

export default HeroSection;
