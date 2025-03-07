// src/pages/PrivacyPolicy.jsx
import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>
      <p>
        No mobile information will be shared with third parties/affiliates for marketing/promotional purposes.
        All other categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
      </p>
      <img 
        src="https://i.postimg.cc/W1b3p6Pq/i-Stock-2192932420-1.webp" 
        alt="Privacy Policy Footer" 
        className="privacy-footer-image"
      />
    </div>
  );
};

export default PrivacyPolicy;
