import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
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

  // Determine whether we are showing a single location or all locations.
  const isSingleLocation = Boolean(locationId);

  // Build the rich snippet for all locations if we're on the list page.
  let locationsRichSnippet = null;
  if (!isSingleLocation) {
    const locationsArray = Object.entries(locationsData).map(([key, loc]) => {
      // Attempt to parse the address (if comma-separated)
      const addressParts = loc.address ? loc.address.split(",").map(s => s.trim()) : [];
      let streetAddress = loc.address;
      let addressLocality = "";
      let addressRegion = "";
      let postalCode = "";
      if (addressParts.length >= 3) {
        streetAddress = addressParts[0];
        addressLocality = addressParts[1];
        const regionPostal = addressParts[2].split(" ");
        addressRegion = regionPostal[0];
        postalCode = regionPostal.slice(1).join(" ");
      }
      return {
        "@type": "MedicalClinic",
        "name": loc.name,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": streetAddress,
          "addressLocality": addressLocality,
          "addressRegion": addressRegion,
          "postalCode": postalCode,
          "addressCountry": "US"
        },
        "telephone": loc.phone,
        "url": `https://californiapremierpainclinics.com/locations/${key}`,
        "image": loc.desktopImage || loc.heroImage,
        "description": loc.description
      };
    });
    locationsRichSnippet = {
      "@context": "https://schema.org",
      "@graph": locationsArray
    };
  }

  // (Form handling code omitted for brevity – see your original code.)

  // If a locationId exists, show that office's detail. Otherwise, show the list of locations.
  let officeContent = null;
  if (locationId) {
    const office = locationsData[locationId];
    if (office) {
      officeContent = <SingleLocation office={office} />;
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
      {/* Inject the rich snippet for all locations when not on an individual location page */}
      {!isSingleLocation && locationsRichSnippet && (
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(locationsRichSnippet)}
          </script>
        </Helmet>
      )}
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
          <form className="contact-container" onSubmit={/* your handleSubmit */ () => {}}>
            {/* Form fields go here */}
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
