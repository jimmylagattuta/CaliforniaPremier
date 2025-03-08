// src/pages/LocationsPage.jsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { locationsData } from "../data";
import LocationsSection from "../sections/LocationsSection"; // Your office list component
import SingleLocation from "../sections/SingleLocation";
import FooterComponent from "../sections/FooterComponent";
import "./LocationsPage.css";

function LocationsPage() {
  const { locationId } = useParams();
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

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("🚀 Form submission started!", formData);

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      console.log("❌ Form errors detected:", formErrors);
      setErrors(formErrors);
      return;
    }

    setErrors({});
    setSubmitted(false);

    try {
      const csrfToken = document
        .querySelector('meta[name="csrf-token"]')
        ?.getAttribute("content");
      const response = await fetch(
        "https://californiapremier-5591e4325563.herokuapp.com/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": csrfToken,
          },
          body: JSON.stringify({ contact: formData }),
        }
      );

      console.log("Backend response:", response.status, response.statusText);

      if (response.ok) {
        setSubmitted(true);
        console.log("✅ Message sent successfully!");
      } else {
        console.error(
          "❌ Error response from backend:",
          await response.json()
        );
        setErrors({
          form: "There was an error sending your message. Try again later.",
        });
      }
    } catch (error) {
      console.error("❌ Error during form submission:", error);
      setErrors({
        form: "There was an error sending your message. Try again later.",
      });
    }
  };

  // Determine what to render under the contact form:
  // If a locationId exists, show that office's detail. Otherwise, show the list of locations.
  let officeContent = null;
  if (locationId) {
    const office = locationsData[locationId];
    if (office) {
      officeContent = <SingleLocation office={office} />

    } else {
      officeContent = (
        <div className="office-detail not-found">
          <h2>Office Not Found</h2>
          <p>Please select a valid location.</p>
        </div>
      );
    }
  } else {
    officeContent = <LocationsSection showButton={false} />;
  }

  return (
    <div>
      <div className="locations-page-container">
        <div className="contact-header">
          <p className="small-heading">CALIFORNIA PREMIER PAIN CLINICS</p>
          <h2 className="main-heading">Finding Paths to Relief</h2>
          <p className="sub-text">
            Our mission is to work with you in reducing your level of pain and
            suffering, getting you back to your highest level of independence and
            functioning, and improving the quality of your life.
          </p>
          <p className="sub-text">
            For personal injury patients, your lawyer may suggest that you visit
            CPPC for an assessment or continuous care. We offer a variety of
            treatments individually tailored to your needs.
          </p>
        </div>

        {!submitted ? (
          <form className="contact-container" onSubmit={handleSubmit}>
            <div className="contact-left">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
                {errors.firstName && (
                  <span className="error-message">{errors.firstName}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
                {errors.lastName && (
                  <span className="error-message">{errors.lastName}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
                {errors.phone && (
                  <span className="error-message">{errors.phone}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
                {errors.message && (
                  <span className="error-message">{errors.message}</span>
                )}
              </div>
              <div className="form-group">
                  <input
                    id="checkbox-agree"
                    type="checkbox"
                    name="agreement"
                    checked={formData.agreement}
                    onChange={handleInputChange}
                    required
                  />
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                  <label htmlFor="agreement">
                    By checking this box, I acknowledge and agree that any
                    information submitted will be forwarded to the CPPC office via
                    email and is not a secure messaging system. This form should
                    not be used to transmit private health information. We
                    exclusively provide treatment for personal injury patients
                    (patients on liens).
                  </label>
                </div>
                {errors.agreement && (
                  <span className="error-message">{errors.agreement}</span>
                )}
              </div>
            </div>
            <button type="submit" className="submit-button">
              SEND
            </button>
          </form>
        ) : (
          <div className="contact-submitted-message">
            <h3>Thank You!</h3>
            <p>
              Your message has been sent successfully. We will get back to you
              shortly.
            </p>
          </div>
        )}

        {/* Render office details or the full locations list */}
        {officeContent}
      </div>
      
      <FooterComponent />
    </div>
  );
}

export default LocationsPage;
