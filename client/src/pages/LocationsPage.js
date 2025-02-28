import React, { useState, useEffect } from "react";
import "./LocationsPage.css";
import LocationsSection from "../sections/LocationsSection"; // Recycled office list component

function LocationsPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });
  const [status, setStatus] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState("");

  // Load reCAPTCHA Enterprise script and get an initial token
  useEffect(() => {
    const loadRecaptchaScript = () => {
      const script = document.createElement("script");
      console.log('process', process);
      const recaptchaKey = process.env.REACT_APP_RECAPTCHA;
      console.log('process', process);
      script.src = `https://www.google.com/recaptcha/enterprise.js?render=${recaptchaKey}`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        if (window.grecaptcha && window.grecaptcha.enterprise) {
          window.grecaptcha.enterprise.ready(() => {
            window.grecaptcha.enterprise
              .execute(process.env.REACT_APP_RECAPTCHA, { action: "submit_form" })
              .then((token) => {
                setRecaptchaToken(token);
              });
          });
        }
      };
      document.head.appendChild(script);
    };

    loadRecaptchaScript();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      // Get a fresh token right before submission
      const freshToken = await window.grecaptcha.enterprise.execute(
        process.env.REACT_APP_RECAPTCHA,
        { action: "submit_form" }
      );
      const payload = { ...formData, recaptchaToken: freshToken };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: ""
        });
      } else {
        setStatus("Error sending message.");
      }
    } catch (error) {
      setStatus("Error sending message.");
    }
  };

  return (
    <div className="locations-page-container">
      {/* Contact Form Section */}
      <div className="contact-header">
        <p className="small-heading">CALIFORNIA PREMIER PAIN CLINICS</p>
        <h2 className="main-heading">Finding Paths to Relief</h2>
        <p className="sub-text">
          Our mission is to work with you in reducing your level of pain and suffering,
          getting you back to your highest level of independence and functioning, and
          improving the quality of your life.
        </p>
        <p className="sub-text">
          For personal injury patients, your lawyer may suggest that you visit CPPC for an assessment or continuous care.
          We offer a variety of treatments individually tailored to your needs.
        </p>
      </div>

      <form className="contact-container" onSubmit={handleSubmit}>
        {/* Left Column: Contact Fields */}
        <div className="contact-left">
          <div className="form-row">
            <div className="form-group">
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                placeholder=" "
                required
              />
              <label
                htmlFor="firstName"
                className={formData.firstName ? "float-label label-active" : "float-label"}
              >
                First Name
              </label>
            </div>
            <div className="form-group">
              <input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                placeholder=" "
                required
              />
              <label
                htmlFor="lastName"
                className={formData.lastName ? "float-label label-active" : "float-label"}
              >
                Last Name
              </label>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder=" "
                required
              />
              <label
                htmlFor="email"
                className={formData.email ? "float-label label-active" : "float-label"}
              >
                Email Address
              </label>
            </div>
            <div className="form-group">
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder=" "
              />
              <label
                htmlFor="phone"
                className={formData.phone ? "float-label label-active" : "float-label"}
              >
                Phone Number
              </label>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group full-width">
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder=" "
                required
              />
              <label
                htmlFor="message"
                className={formData.message ? "float-label label-active" : "float-label"}
              >
                How can we help you?
              </label>
            </div>
          </div>
        </div>

        {/* Right Column: Disclaimer, reCAPTCHA Box, and Submit Button */}
        <div className="contact-right">
          <p className="disclaimer-text">
            By clicking SEND, I understand and agree that any information submitted will be forwarded to the CPPC office by email and is not a secure messaging system.
            This form should not be used to transmit private health information. We only treat personal injury patients (patients on liens).
          </p>

          <div className="recaptcha-box">
            {recaptchaToken ? <p>reCAPTCHA verified</p> : <p>Loading reCAPTCHA...</p>}
          </div>

          <div className="button-row">
            <button type="submit" className="submit-button">SEND</button>
          </div>
          {status && <p className="form-status">{status}</p>}
        </div>
      </form>

      {/* Recycled Office List Section from LocationsSection */}
      <LocationsSection />
    </div>
  );
}

export default LocationsPage;
