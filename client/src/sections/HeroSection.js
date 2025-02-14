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
        <h1 className="company-name">PURE HEALTH & WELLNESS</h1>
        <div className="line left"></div>
        <div className="line right"></div>
      </div>
    </section>
  );
}

export default HeroSection;
