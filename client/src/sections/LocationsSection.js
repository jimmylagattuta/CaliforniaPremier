// src/sections/LocationsSection.jsx
import React from "react";
import { Link } from "react-router-dom";
import { locationsData } from "../data"; // Import from data.js
import "./LocationsSection.css";

function LocationsSection({ showButton = true }) {
  // Convert locationsData (an object) to an array of locations with keys.
  const locations = Object.entries(locationsData).map(([key, location]) => ({
    ...location,
    id: key,
  }));

  return (
    <section className="locations-section">
      <div className="hero-content-title">
        <div className="line-locations"></div>
        <h1 className="company-name-locations">OUR LOCATIONS</h1>
        <div className="line-locations"></div>
      </div>
      <div className="locations-grid">
        {locations.map((location, index) => (
          <Link
            key={location.id}
            to={`/locations/${location.id}`}
            className="location-card-link"
          >
            <div className={`location-card ${index % 2 !== 0 ? "reverse" : ""}`}>
              <div
                className="location-image"
                style={{ backgroundImage: `url(${location.image || location.heroImage})` }}
              ></div>
              <div className="location-info">
                <h2 className="location-city">{location.name}</h2>
                <p className="location-address">
                  {location.address ? (
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${location.address.replace(/ /g, "+")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://i.postimg.cc/HLxtkzZm/map-pin-1-1.webp"
                        alt="Map icon"
                        className="map-icon"
                        height="16"
                        width="16"
                      />
                      {location.address}
                    </a>
                  ) : (
                    "Address coming soon"
                  )}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {showButton && (
        <div className="button-container" style={{ textAlign: "center", marginTop: "20px" }}>
          <Link to="/locations" className="location-section-button">
            View All Locations
          </Link>
        </div>
      )}
    </section>
  );
}

export default LocationsSection;
