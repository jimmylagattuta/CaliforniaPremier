// src/sections/LocationsPage.jsx

import React, { useState, useEffect } from "react";
import "./LocationsPage.css";

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

  // Load the reCAPTCHA script and fetch a token
  useEffect(() => {
    const loadRecaptchaScript = () => {
      const script = document.createElement("script");
      script.src = `https://www.google.com/recaptcha/enterprise.js?render=${process.env.REACT_APP_RECAPTCHA}`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        // Initialize reCAPTCHA
        if (window.grecaptcha && window.grecaptcha.enterprise) {
          window.grecaptcha.enterprise.ready(() => {
            // The action "submit_form" is arbitrary, but recommended for analytics
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
      // Optionally, get a fresh token right before submission (recommended):
      const freshToken = await window.grecaptcha.enterprise.execute(
        process.env.REACT_APP_RECAPTCHA,
        { action: "submit_form" }
      );

      // Merge freshToken into form submission
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          recaptchaToken: freshToken
        })
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Error sending message.");
      }
    } catch (error) {
      setStatus("Error sending message.");
    }
  };

  // Updated offices data
  const offices = [
    { city: "Santa Rosa", address: "864 2nd Street Suite B, Santa Rosa, CA 95404" },
    { city: "Sacramento", address: "7275 E. Southgate Drive Suite 306, Sacramento, CA 95823" },
    { city: "Stockton", address: "420 Acacia Street Suite 19, Stockton, CA 95203" },
    { city: "Modesto", address: "1130 Coffee Road BLDG 2B, Modesto, CA 95355" },
    { city: "Hayward", address: "24700 Calaroga Ave Suite 103, Hayward, CA 94545" },
    { city: "Salinas", address: "945 N. Blanco Suite A, Salinas, CA 93901" },
    { city: "San Jose", address: "2375 Montpelier Drive Suite 10, San Jose, CA 95116" },
    { city: "Fresno", address: "349 E. Bullard Ave Suite 105, Fresno, CA 93710" },
    { city: "Hanford", address: "1004 N. Douty Street, Hanford, CA 93230" },
    { city: "Bakersfield", address: "3550 Q. Street Suite 105, Bakersfield, CA 93301" }
  ];

  return (
    <div className="locations-page-container">
      {/* Top heading section */}
      <div className="contact-header">
        <p className="small-heading">CALIFORNIA PREMIER PAIN CLINICS</p>
        <h2 className="main-heading">Finding Paths to Relief</h2>
        <p className="sub-text">
          Our mission is to work with you in reducing your level of pain and suffering, 
          getting you back to your highest level of independence and functioning, and 
          improving the quality of your life. Contact us today! 
        </p>
      </div>

      {/* Contact form section */}
      <form className="contact-container" onSubmit={handleSubmit}>
        {/* Left column: form fields */}
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

        {/* Right column: disclaimers, reCAPTCHA, and button */}
        <div className="contact-right">
          <p className="disclaimer-text">
            By clicking SEND, I understand and agree that any information submitted 
            will be forwarded to the CPPC office by email and is not a secure messaging system. 
            This form should not be used to transmit private health information. 
            We only treat personal injury patients (patients on liens). 
            If you have any questions, call us at <strong>877.271.0203</strong>.
          </p>

          {/* 
            Because we are using the "invisible" reCAPTCHA approach, 
            the reCAPTCHA widget won't be visible. 
            You can remove this box or keep it if you want some placeholder.
          */}
          <div className="recaptcha-box">
            <p>[ Invisible reCAPTCHA Enterprise Initialized ]</p>
          </div>

          <div className="button-row">
            <button type="submit" className="submit-button">SEND</button>
          </div>
          {status && <p className="form-status">{status}</p>}
        </div>
      </form>

      {/* Offices list */}
      <h2 className="offices-heading">Our Locations</h2>
      <div className="offices-list">
        {offices.map((office, index) => (
          <div key={index} className="office-card">
            <h3>{office.city}</h3>
            <p>{office.address}</p>
          </div>
        ))}
      </div>

      <p className="coming-soon">
        <em>Exciting News!!! Napa and San Francisco locations coming soon in 2025!</em>
      </p>
    </div>
  );
}

export default LocationsPage;
