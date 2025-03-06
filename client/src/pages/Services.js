// src/pages/Services.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { servicesData } from "../data";
import "./Services.css"; // Optional styling

const Services = () => {
  const { serviceId } = useParams();
  const service = servicesData[serviceId];

  if (!service) {
    return (
      <div className="service-page">
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
        <div className="hero-overlay">
          <h1>{service.title}</h1>
          <p>{service.shortDescription}</p>
          <Link to="/contact" className="cta-button">Book an Appointment</Link>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="service-content">
        <div className="content-section">
          <img 
            src={service.images.section} 
            alt={service.title} 
            className="content-image" 
          />
          <div className="content-text">
            {service.mainContent.split("\n").map((paragraph, index) => (
              <p key={index}>{paragraph.trim()}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;