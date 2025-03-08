// src/pages/Services.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { servicesData } from "../data";
import FooterComponent from "../sections/FooterComponent";
import "./Services.css";

const Services = () => {
  const { serviceId } = useParams();
  const service = servicesData[serviceId];


  if (!service) {
    return (
      <div className="service-page">
        <p className="small-heading">CALIFORNIA PREMIER PAIN CLINICS</p>
        <h1>Service Not Found</h1>
        <p>We couldn’t find the service you’re looking for.</p>
        <Link to="/services">Go back to all services</Link>
      </div>
    );
  }

  return (
    <div className="service-page">
      {/* HERO SECTION */}
      <div
        className="service-hero"
        style={{ backgroundImage: `url(${service.images.hero})` }}
      >
        <div className="services-hero-overlay">
          <div className="services-hero-content-title">
            <div className="line"></div>
            <h1 className="company-name-services">
              CALIFORNIA PREMIER PAIN CLINICS
            </h1>
            <div className="line"></div>
          </div>
          <h1>{service.title}</h1>
          <p>{service.shortDescription}</p>
          <Link to="/contact" className="cta-button">
            Book an Appointment
          </Link>
        </div>
      </div>

      {/* OVERLAY IMAGES bridging hero & next content */}
      <div className="overlay-images">
        <img src={service.images.overlay1} alt="Overlay 1" className="image1" />
        <img src={service.images.overlay2} alt="Overlay 2" className="image2" />
      </div>

      {/* MAIN CONTENT SECTION */}
      <div className="service-content">
        <div className="content-section">
          <img
            src={service.images.section}
            alt={service.title}
            className="content-image"
          />
          <h1 id="services-title-small">{service.title}</h1>
          <div className="content-text">
            {service.mainContent
              .split("\n\n")
              .filter((paragraph) => paragraph.trim() !== "")
              .map((paragraph, index) => (
                <p key={index}>{paragraph.trim()}</p>
              ))}
          </div>
        </div>
      </div>

      {/* INFO SECTION with background image + dark overlay */}
      <div
        className="info-section"
        style={{
          backgroundImage: `url(${service.whyChooseBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="info-overlay">
          <h2 className="info-title">{service.whyChooseTitle}</h2>
          <p className="info-text">{service.whyChooseContent}</p>

          <h3 className="info-subtitle">{service.helpTitle}</h3>
          <ul className="info-list">
            {service.helpList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <Link to="/about-us">
  <h3 className="info-subtitle">{service.providerTitle}</h3>
</Link>          <div className="provider-container">
      {/* Text on the left */}
      <div className="provider-text">
        <p className="info-text">{service.providerContent}</p>
      </div>
      {/* Image on the right */}
      <div className="provider-image">
        <img
          src="https://i.postimg.cc/tRW060nV/Screenshot-2025-03-08-132625-1-1.webp"
          alt="Our Provider"
        />
      </div>
    </div>
              <Link to="/contact" className="cta-button" style={{ margin: "20px" }}>
                Book an Appointment
              </Link>
        </div>
      </div>

      {/* FOOTER */}
      <FooterComponent />
    </div>
  );
};

export default Services;
