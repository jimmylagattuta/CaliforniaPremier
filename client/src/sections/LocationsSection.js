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

  // Handler to open the address in Google Maps
  const openMap = (address, e) => {
    e.stopPropagation();
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${address.replace(/ /g, "+")}`,
      "_blank"
    );
  };

  // Handler for calling the phone number
  const callPhone = (phone, e) => {
    e.stopPropagation();
    window.location.href = `tel:${phone.replace(/[^0-9]/g, "")}`;
  };

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
                style={{
                  backgroundImage: `url(${location.image || location.heroImage})`,
                }}
              ></div>
              <div className="location-info">
                <h2 className="location-city">{location.name}</h2>
                <p className="location-address">
                  {location.address ? (
                    <span
                      onClick={(e) => openMap(location.address, e)}
                      className="map-link"
                      style={{ cursor: "pointer" }}
                    >
                      <img
                        src="https://i.postimg.cc/HLxtkzZm/map-pin-1-1.webp"
                        alt="Map icon"
                        className="map-icon"
                        height="16"
                        width="16"
                      />
                      {location.address}
                    </span>
                  ) : (
                    "Address coming soon"
                  )}
                </p>
                {location.phone && (
                  <p className="location-address">
                    <strong>Phone:</strong>
                    <span
                      onClick={(e) => callPhone(location.phone, e)}
                      className="phone-link"
                      style={{ cursor: "pointer", marginLeft: "5px" }}
                    >
                      {location.phone}
                    </span>
                  </p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
      {showButton && (
        <div
          className="button-container"
          style={{ textAlign: "center", marginTop: "20px" }}
        >
          <Link to="/locations" className="location-section-button">
            View All Locations
          </Link>
        </div>
      )}
    </section>
  );
}

export default LocationsSection;
