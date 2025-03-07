// src/sections/SingleLocation.jsx
import React from "react";
import { Link } from "react-router-dom";
import { servicesData } from "../data";
import "./SingleLocation.css";

const SingleLocation = ({ office }) => {
  // Convert servicesData into an array for mapping.
  const servicesArray = Object.entries(servicesData).map(([key, service]) => ({
    ...service,
    id: key,
  }));

  return (
    <div className="sl-location-card">
      {/* Office Card Row */}
      <div className="sl-location-cardrow">
        <div
          className="sl-location-image"
          style={{ backgroundImage: `url(${office.heroImage})` }}
        >
          <h2 className="sl-location-name">{office.name}</h2>
        </div>
        <div className="sl-location-info">
          <p className="sl-location-address">
            {office.address ? (
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${office.address.replace(/ /g, "+")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://i.postimg.cc/HLxtkzZm/map-pin-1-1.webp"
                  alt="Map icon"
                  className="sl-map-icon"
                  height="16"
                  width="16"
                />
                {office.address}
              </a>
            ) : (
              "Address coming soon"
            )}
          </p>
        </div>
      </div>

      {/* Office Description */}
      <div className="sl-office-description">
        <h3>About {office.name}</h3>
        <p>{office.description}</p>
      </div>

      {/* Services List Section */}
      <div
        className="sl-services-section"
        style={{
          backgroundImage: `url(${office.heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="sl-services-overlay">
          <h2 className="sl-services-title">Our Services</h2>
          <div className="sl-services-grid">
            {servicesArray.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="sl-service-card"
              >
                <div
                  className="sl-service-image"
                  style={{ backgroundImage: `url(${service.images.hero})` }}
                ></div>
                <div className="sl-service-info">
                  <h3 className="sl-service-name">{service.title}</h3>
                  <p className="sl-service-short">{service.shortDescription}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleLocation;
