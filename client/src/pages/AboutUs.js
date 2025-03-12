import React from "react";
import { servicesData } from "../data";
import FooterComponent from "../sections/FooterComponent";
import "./AboutUs.css";

const AboutUs = () => {
  // Convert servicesData object into an array for mapping.
  const servicesArray = Object.entries(servicesData).map(([key, service]) => ({
    ...service,
    id: key,
  }));

  return (
    <div className="aboutus-container">
      {/* Hero Section */}
      <section className="aboutus-hero">
        <div className="aboutus-hero-overlay">
          <h1 className="aboutus-hero-title">Finding Paths to Relief</h1>
          <p className="aboutus-hero-subtitle">Get started on recovering!</p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="aboutus-section">
        <h2 className="aboutus-heading">About Us</h2>
        <div className="aboutus-content">
          <div className="aboutus-card">
            <h3>Why Choose Us</h3>
            <p>
              Our mission is to work with you in reducing your level of pain and
              suffering, getting you back to your highest level of independence
              and functioning, and improving the quality of your life.
            </p>
          </div>
          <div className="aboutus-card">
            <h3>How We Can Help You</h3>
            <p>
              California Premier Pain Clinics experts will create a treatment
              plan that is individually tailored to your condition and degree of
              discomfort. Your treatment plan may include a single strategy or a
              mix of medical therapies, such as prescription medications,
              surgical procedures, and rehabilitation therapies.
            </p>
          </div>
          <div className="aboutus-card">
            <h3>See the Difference</h3>
            <p>
              There is no question that putting the right procedure on the right
              structures will create the best outcome. All of our injections are
              done under either ultrasound or fluoroscopic guidance. Certain
              structures are best imaged under fluoroscopy and others are best
              imaged with ultrasound. The best outcomes happen when treatments
              are performed with precision.
            </p>
          </div>
        </div>
      </section>

      <FooterComponent />
    </div>
  );
};

export default AboutUs;
