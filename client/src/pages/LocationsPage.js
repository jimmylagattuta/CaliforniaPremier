import React, { useState, useEffect, useCallback } from "react";
import "./LocationsPage.css";
import LocationsSection from "../sections/LocationsSection"; // Recycled office list component

function LocationsPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    agreement: false,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const recaptchaKey = window.env?.RECAPTCHA_KEY || "your-default-recaptcha-key";

  console.log("Using reCAPTCHA key:", recaptchaKey);

  // Handle Input Changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Form Validation Function
  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required.";
    if (!formData.lastName) newErrors.lastName = "Last Name is required.";
    if (!formData.email) {
      newErrors.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\+?[1-9]\d{1,14}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number. Include country code.";
    }
    if (!formData.message) newErrors.message = "Message is required.";
    if (!formData.agreement) newErrors.agreement = "You must agree to the terms.";

    return newErrors;
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
    console.log("🚀 Form submission started!", formData);
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

      {!submitted ? (
        <form className="contact-container" onSubmit={handleSubmit}>
          <div className="contact-left">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
              {errors.firstName && <span className="error-message">{errors.firstName}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
              {errors.lastName && <span className="error-message">{errors.lastName}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required />
              {errors.phone && <span className="error-message">{errors.phone}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea name="message" value={formData.message} onChange={handleInputChange} required />
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>
            <div className="form-group">
              <input type="checkbox" name="agreement" checked={formData.agreement} onChange={handleInputChange} required />
              <label htmlFor="agreement">I agree to the terms</label>
              {errors.agreement && <span className="error-message">{errors.agreement}</span>}
            </div>
          </div>
          <button type="submit" className="submit-button">SEND</button>
        </form>
      ) : (
        <div className="contact-submitted-message">
          <h3>Thank You!</h3>
          <p>Your message has been sent successfully. We will get back to you shortly.</p>
        </div>
      )}

      <LocationsSection />
    </div>
  );
}

export default LocationsPage;
