
import React from "react";
import { locationsData, servicesData } from "../data";
import "./FooterComponent.css";

const MAP_ICON =
  "https://i.postimg.cc/Sx95BsW6/inverted-image-1.webp";

const LOGO =
  "https://res.cloudinary.com/djtsuktwb/image/upload/v1743741228/IMG_4918_1_cqjbuy.webp";

const INSTAGRAM_ICON =
  "https://i.postimg.cc/j5G6vJHJ/Screenshot-2025-02-22-181601-bg-removed-png.webp";

const INSTAGRAM_URL =
  "https://www.instagram.com/californiapremierpainclinics/";

const BUSINESS_PHONE = "(877) 271-0203";
const BUSINESS_FAX = "(800) 887-1723";

function FooterComponent() {
  const currentYear = new Date().getFullYear();

  const clinicLocations = Object.entries(locationsData)
    .filter(([slug, clinic]) => {
      return (
        clinic &&
        clinic.name &&
        clinic.address &&
        clinic.address.trim() !== ""
      );
    })
    .sort((a, b) =>
      a[1].name.localeCompare(b[1].name)
    );

  const services = Object.entries(servicesData);

  const getGoogleMapsUrl = (address) => {
    return (
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent(address)
    );
  };

  return (
    <footer className="footer-container">
      <div className="footer-top-grid">

        <div className="footer-col brand-col">
          <div className="fancy-brand-row">
            <img
              src={LOGO}
              alt="California Premier Pain Clinics"
              className="fancy-brand-logo"
              height="180"
              width="220"
            />
          </div>

          <div className="footer-tagline-container">
            <p className="fancy-brand-slogan">
              Personalized Treatments for Lasting Relief,
              Restored Independence, and a Life Beyond Pain.
            </p>

            <div className="footer-social-icons">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="social-circle"
                aria-label="California Premier Pain Clinics on Instagram"
              >
                <img
                  src={INSTAGRAM_ICON}
                  alt="Instagram"
                  className="social-icon-img"
                  height="24"
                  width="24"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-col footer-section nav-col">
          <h3>Navigation</h3>

          <ul>
            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <a href="/about-us">About Us</a>
            </li>

            <li>
              <a href="/locations">Become A Patient</a>
            </li>

            <li>
              <a href="/locations">Book Appointment</a>
            </li>

            <li>
              <a href="/faqs">FAQs</a>
            </li>

            <li>
              <a href="/contact-us">Contact Us</a>
            </li>

            <li>
              <a href="/blog">Blog</a>
            </li>
          </ul>
        </div>

        <div className="footer-col footer-section services-col">
          <h3>Services</h3>

          <ul>
            {services.map(([slug, service]) => (
              <li key={slug}>
                <a href={`/services/${slug}`}>
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col footer-section contact-col">
          <h3>Get In Touch</h3>

          <ul className="address-list">
            {clinicLocations.map(([slug, clinic]) => {
              const mapUrl = getGoogleMapsUrl(
                clinic.address
              );

              return (
                <li key={slug}>
                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${clinic.name} on Google Maps`}
                  >
                    <img
                      src={MAP_ICON}
                      className="map-icon"
                      alt=""
                      height="16"
                      width="16"
                      aria-hidden="true"
                    />

                    {clinic.name.replace(
                      /\s+Clinic$/,
                      ""
                    )}{" "}
                    - {clinic.address}
                  </a>
                </li>
              );
            })}

            <li>
              <strong>Phone: </strong>
              <a href="tel:+18772710203">
                &nbsp;{BUSINESS_PHONE}
              </a>
            </li>

            <li>
              <strong>Fax:</strong>
              &nbsp;{BUSINESS_FAX}
            </li>
          </ul>

          <p className="book-appointment-p">
            <a
              href="/locations#contactForm"
              className="book-appointment-link"
            >
              Book Appointment
            </a>
          </p>

          <p className="footer-disclaimer-text">
            *All testimonials on our website are verified
            customers and none have been compensated
            monetarily or provided product in exchange
            for their testimonials.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {currentYear} California Premier Pain Clinics.
          All Rights Reserved.
        </p>

        <ul className="footer-bottom-links">
          <li>
            <a href="/privacy-policy">
              Privacy Policy
            </a>
          </li>

          <li>
            <a href="/terms-and-conditions">
              Terms &amp; Conditions
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default FooterComponent;
