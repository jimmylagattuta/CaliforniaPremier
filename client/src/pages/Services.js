// src/pages/Services.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { servicesData } from "../data";
import "./Services.css"; // Optional styling

const Services = () => {
  const { serviceId } = useParams();

  // If no serviceId, display a list of all services
  if (!serviceId) {
    return (
      <div className="services-list">
        <h1>Our Services</h1>
        <ul>
          {Object.entries(servicesData).map(([key, service]) => (
            <li key={key}>
              <Link to={`/services/${key}`}>
                <strong>{service.title}</strong>
              </Link>
              <p>{service.shortDescription}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // If we do have a serviceId, show the detail view
  const service = servicesData[serviceId];

  // If the serviceId doesn't match anything in servicesData, show "Not Found"
  if (!service) {
    return (
      <div className="service-page">
        <h1>Service Not Found</h1>
        <p>We couldn’t find the service you’re looking for.</p>
        <Link to="/services">Go back to all services</Link>
      </div>
    );
  }

  // Otherwise, we have a valid service. Show its details.
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
          <Link to="/contact" className="cta-button">
            Book an Appointment
          </Link>
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
