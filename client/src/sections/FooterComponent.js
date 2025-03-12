import React from "react";
import "./FooterComponent.css";

function FooterComponent() {
  return (
    <footer className="footer-container">
      {/* Top area with 4 columns on desktop/tablet */}
      <div className="footer-top-grid">
        {/* 1) BRAND + TAGLINE COLUMN */}
        <div className="footer-col brand-col">
          {/* Fancy Brand Row */}
          <div className="fancy-brand-row">
            <img
              src="https://i.postimg.cc/wT3CPKY5/i-Stock-1137683414-1-1-bg-removed-png.webp"
              alt="California Premier Pain Clinics"
              className="fancy-brand-logo"
              height="40"
              width="40"
            />
            <div className="fancy-text-group">
              <h1 className="fancy-brand-title">CALIFORNIA PREMIER</h1>
              <h2 className="fancy-brand-subtitle">PAIN CLINICS</h2>
            </div>
          </div>

          {/* Tagline + Social Icons */}
          <div className="footer-tagline-container">
            <p className="fancy-brand-slogan">
              Personalized Treatments for Lasting Relief, Restored Independence, and a Life Beyond Pain.
            </p>
            <div className="footer-social-icons">
              <a
                href="https://www.instagram.com/californiapremierpainclinics/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-circle"
              >
                <img
                  src="https://i.postimg.cc/j5G6vJHJ/Screenshot-2025-02-22-181601-bg-removed-png.webp"
                  alt="Instagram"
                  className="social-icon-img"
                  height="24"
                  width="24"
                />
              </a>
            </div>
          </div>
        </div>

        {/* 2) NAVIGATION COLUMN */}
        <div className="footer-col footer-section nav-col">
          <h3>Navigation</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/locations">Become A Patient</a></li>
            <li><a href="/locations">Book Appointment</a></li>
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>

        {/* 3) SERVICES COLUMN */}
        <div className="footer-col footer-section services-col">
          <h3>Services</h3>
          <ul>
            <li><a href="/services/new-patient-consultations">New Patient Consultations</a></li>
            <li><a href="/services/platelet-rich-plasma">Platelet Rich Plasma</a></li>
            <li><a href="/services/facet-joint-injections">Facet Joint Injections</a></li>
            <li><a href="/services/epidural-injections">Epidural Injections</a></li>
            <li><a href="/services/botox-injections">Botox Injections</a></li>
            <li><a href="/services/steroid-injections">Steroid Injections</a></li>
            <li><a href="/services/si-joint-injections">SI Joint Injections</a></li>
            <li><a href="/services/trigger-point-injections">Trigger Point Injections</a></li>
            <li><a href="/services/emg-testing">Electromyography (EMG) Testing</a></li>
          </ul>
        </div>

        {/* 4) GET IN TOUCH COLUMN */}
        <div className="footer-col footer-section contact-col">
          <h3>Get In Touch</h3>
          <ul className="address-list">
            <li>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Santa+Rosa+-+864+2nd+Street+Suite+B,+Santa+Rosa,+CA+95404"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://i.postimg.cc/Sx95BsW6/inverted-image-1.webp"
                  alt="Map icon"
                  className="map-icon"
                  height="16"
                  width="16"
                />
                Santa Rosa - 864 2nd Street Suite B, Santa Rosa, CA 95404
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Sacramento+-+7275+E.+Southgate+Drive+Suite+306,+Sacramento,+CA+95823"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://i.postimg.cc/Sx95BsW6/inverted-image-1.webp"
                  alt="Map icon"
                  className="map-icon"
                  height="16"
                  width="16"
                />
                Sacramento - 7275 E. Southgate Drive Suite 306, Sacramento, CA 95823
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Stockton+-+420+Acacia+Street+Suite+19,+Stockton,+CA+95203"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://i.postimg.cc/Sx95BsW6/inverted-image-1.webp"
                  alt="Map icon"
                  className="map-icon"
                  height="16"
                  width="16"
                />
                Stockton - 420 Acacia Street Suite 19, Stockton, CA 95203
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Modesto+-+1130+Coffee+Road+BLDG+2B,+Modesto,+CA+95355"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://i.postimg.cc/Sx95BsW6/inverted-image-1.webp"
                  alt="Map icon"
                  className="map-icon"
                  height="16"
                  width="16"
                />
                Modesto - 1130 Coffee Road BLDG 2B, Modesto, CA 95355
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Hayward+-+24700+Calaroga+Ave+Suite+103,+Hayward,+CA+94545"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://i.postimg.cc/Sx95BsW6/inverted-image-1.webp"
                  alt="Map icon"
                  className="map-icon"
                  height="16"
                  width="16"
                />
                Hayward - 24700 Calaroga Ave Suite 103, Hayward, CA 94545
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Salinas+-+945+N.+Blanco+Suite+A,+Salinas,+CA+93901"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://i.postimg.cc/Sx95BsW6/inverted-image-1.webp"
                  alt="Map icon"
                  className="map-icon"
                  height="16"
                  width="16"
                />
                Salinas - 945 N. Blanco Suite A, Salinas, CA 93901
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/search/?api=1&query=San+Jose+-+2375+Montpelier+Drive+Suite+10,+San+Jose,+CA+95116"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://i.postimg.cc/Sx95BsW6/inverted-image-1.webp"
                  alt="Map icon"
                  className="map-icon"
                  height="16"
                  width="16"
                />
                San Jose - 2375 Montpelier Drive Suite 10, San Jose, CA 95116
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Fresno+-+349+E.+Bullard+Ave+Suite+105,+Fresno,+CA+93710"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://i.postimg.cc/Sx95BsW6/inverted-image-1.webp"
                  alt="Map icon"
                  className="map-icon"
                  height="16"
                  width="16"
                />
                Fresno - 349 E. Bullard Ave Suite 105, Fresno, CA 93710
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Hanford+-+1004+N.+Douty+Street,+Hanford,+CA+93230"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://i.postimg.cc/Sx95BsW6/inverted-image-1.webp"
                  alt="Map icon"
                  className="map-icon"
                  height="16"
                  width="16"
                />
                Hanford - 1004 N. Douty Street, Hanford, CA 93230
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Bakersfield+-+3550+Q.+Street+Suite+105,+Bakersfield,+CA+93301"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://i.postimg.cc/Sx95BsW6/inverted-image-1.webp"
                  alt="Map icon"
                  className="map-icon"
                  height="16"
                  width="16"
                />
                Bakersfield - 3550 Q. Street Suite 105, Bakersfield, CA 93301
              </a>
            </li>

            {/* Phone, Fax, Email, Hours */}
            <li>
              <strong>Phone: </strong>
              <a href="tel:8772710203">&nbsp;(877) 271-0203</a>
            </li>
            <li>
              <strong>Fax:</strong>
              &nbsp;(800) 887-1723
            </li>
            <li>
              <strong>Email: </strong>
              <a href="mailto:referrals@californiapremierpainclinics.com">
                &nbsp;referrals@californiapremierpainclinics.com
              </a>
            </li>
            <li>
              <strong>Hours:&nbsp; </strong>
              Mon - Fri: 08:00 AM - 05:00 PM, Sat - Sun: Closed
            </li>
          </ul>

          <p className="book-appointment-p">
            <a href="/book-appointment" className="book-appointment-link">
              Book Appointment
            </a>
          </p>
          <p className="footer-disclaimer-text">
            *All testimonials on our website are verified customers and none have been compensated
            monetarily or provided product in exchange for their testimonials.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2025 California Premier Pain Clinics. All Rights Reserved.</p>
        <ul className="footer-bottom-links">
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/terms-and-conditions">Terms & Conditions</a></li>
          {/* <li><a href="/return-and-refund">Return and Refund Policy</a></li> */}
        </ul>
        <p className="footer-credit">Website by James Lagattuta</p>
      </div>
    </footer>
  );
}

export default FooterComponent;
