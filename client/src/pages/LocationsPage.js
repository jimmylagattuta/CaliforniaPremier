import React, { useState, useEffect, useCallback } from "react";
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

  // Ensure reCAPTCHA key is properly set
  const recaptchaKey = window.env?.RECAPTCHA_KEY || "your-default-recaptcha-key";

  // Debugging: Log reCAPTCHA key
  console.log("Using reCAPTCHA key:", recaptchaKey);

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
  };

  // Function to execute reCAPTCHA
  const executeRecaptcha = useCallback(async () => {
    if (!window.grecaptcha || !window.grecaptcha.enterprise) {
      console.error("reCAPTCHA not available.");
      return null;
    }
    try {
      const token = await window.grecaptcha.enterprise.execute(recaptchaKey, { action: "submit_form" });
      console.log("reCAPTCHA token received:", token);
      return token;
    } catch (error) {
      console.error("reCAPTCHA execution error:", error);
      return null;
    }
  }, [recaptchaKey]);

  // Load reCAPTCHA script
  useEffect(() => {
    const loadRecaptchaScript = () => {
      if (!recaptchaKey) {
        console.error("reCAPTCHA key is missing.");
        return;
      }

      const script = document.createElement("script");
      script.src = `https://www.google.com/recaptcha/enterprise.js?render=${recaptchaKey}`;
      script.async = true;
      script.defer = true;
      script.onload = async () => {
        console.log("reCAPTCHA script loaded.");
        const token = await executeRecaptcha();
        if (token) setRecaptchaToken(token);
      };
      script.onerror = () => console.error("Failed to load reCAPTCHA script.");
      document.head.appendChild(script);
    };

    loadRecaptchaScript();
  }, [recaptchaKey, executeRecaptcha]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    console.log("Submitting form with data:", formData);

    try {
      const freshToken = await executeRecaptcha();
      if (!freshToken) throw new Error("Failed to acquire reCAPTCHA token.");

      const payload = { ...formData, recaptchaToken: freshToken };
      console.log("Payload being sent:", payload);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      console.log("Backend response:", response.status, response.statusText);

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      } else {
        const errorData = await response.json();
        console.error("Error response from backend:", errorData);
        setStatus("Error sending message.");
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      setStatus("Error sending message.");
    }
  };

  return (
    <div className="locations-page-container">
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
        <div className="contact-left">
          <div className="form-row">
            <div className="form-group">
              <input id="firstName" name="firstName" type="text" value={formData.firstName} onChange={handleChange} required />
              <label htmlFor="firstName" className={formData.firstName ? "float-label label-active" : "float-label"}>
                First Name
              </label>
            </div>
            <div className="form-group">
              <input id="lastName" name="lastName" type="text" value={formData.lastName} onChange={handleChange} required />
              <label htmlFor="lastName" className={formData.lastName ? "float-label label-active" : "float-label"}>
                Last Name
              </label>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
              <label htmlFor="email" className={formData.email ? "float-label label-active" : "float-label"}>
                Email Address
              </label>
            </div>
            <div className="form-group">
              <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
              <label htmlFor="phone" className={formData.phone ? "float-label label-active" : "float-label"}>
                Phone Number
              </label>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group full-width">
              <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required />
              <label htmlFor="message" className={formData.message ? "float-label label-active" : "float-label"}>
                How can we help you?
              </label>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <p className="disclaimer-text">
            By clicking SEND, I understand and agree that any information submitted will be forwarded to the CPPC office by email and is not a secure messaging system.
            This form should not be used to transmit private health information. We only treat personal injury patients (patients on liens).
          </p>

          <div className="button-row">
            <button type="submit" className="submit-button">
              SEND
            </button>
          </div>
          {status && <p className="form-status">{status}</p>}
        </div>
      </form>

      <LocationsSection />
    </div>
  );
}

export default LocationsPage;
