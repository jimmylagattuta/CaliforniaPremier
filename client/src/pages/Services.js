// src/pages/Services.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { servicesData } from "../data";
import "./Services.css";

const Services = () => {
  const { serviceId } = useParams();
  // For now, we're using a hardcoded service.
  const service = servicesData["new-patient-consultations"];

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
      {/* Hero Section */}
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

      {/* Overlapping images bridging hero and next content */}
      <div className="overlay-images">
        <img src={service.images.overlay1} alt="Overlay 1" className="image1" />
        <img src={service.images.overlay2} alt="Overlay 2" className="image2" />
      </div>

      {/* Main Content Section */}
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
    </div>
  );
};

export default Services;
