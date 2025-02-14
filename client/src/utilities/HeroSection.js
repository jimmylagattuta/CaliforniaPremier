import React from "react";
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-section">
      <img
        src="https://www.imghippo.com/i/bWgu8669KvI.webp"
        alt="Hero"
        width="100%"
        height="auto"
        loading="eager"
        fetchpriority="high"
      />
      <div className="hero-content">
        <h1 className="company-name">PURE HEALTH & WELLNESS</h1>
        <div className="line left"></div>
        <div className="line right"></div>
      </div>
    </section>
  );
}

export default HeroSection;
