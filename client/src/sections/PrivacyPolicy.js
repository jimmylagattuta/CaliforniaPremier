import React from "react";
import FooterComponent from "../sections/FooterComponent"; // adjust the path if needed
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div>
      <div className="privacy-policy-container">
        <div className="privacy-policy-content">
          {/* Privacy Policy Section */}
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last updated: August 04, 2022</p>
          <p>
            This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
          </p>
          <p>
            We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
          </p>
          <h2>Interpretation and Definitions</h2>
          <h3>Interpretation</h3>
          <p>
            The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
          </p>
          <h3>Definitions</h3>
          <p>For the purposes of this Privacy Policy:</p>
          <ul>
            <li>
              <strong>Account:</strong> A unique account created for You to access our Service or parts of our Service.
            </li>
            <li>
              <strong>Business:</strong> For the purpose of the CCPA, this refers to California Premier Pain Clinics Inc., the legal entity that collects consumers’ personal information and determines the purposes and means of processing that information.
            </li>
            <li>
              <strong>Company:</strong> Refers to California Premier Pain Clinics Inc., 5371 Belgrave Garden Grove, CA 92845.
            </li>
            {/* Include additional definitions as needed */}
          </ul>
          {/* --- Insert the remainder of the Privacy Policy content here --- */}
          <p>
            ... (Privacy Policy content continues) ...
          </p>

          {/* Terms & Conditions Section */}
          <h1>Terms and Conditions</h1>
          <p className="last-updated">Last updated: August 04, 2022</p>
          <p>
            Please read these terms and conditions carefully before using Our Service.
          </p>
          <h2>Interpretation and Definitions</h2>
          <h3>Interpretation</h3>
          <p>
            The words of which the initial letter is capitalized have meanings defined under the following conditions. These definitions shall have the same meaning regardless of whether they appear in singular or plural.
          </p>
          <h3>Definitions</h3>
          <ul>
            <li>
              <strong>Affiliate:</strong> An entity that controls, is controlled by, or is under common control with a party.
            </li>
            <li>
              <strong>Account:</strong> A unique account created for You to access our Service.
            </li>
            <li>
              <strong>Country:</strong> Refers to California, United States.
            </li>
            <li>
              <strong>Company:</strong> Refers to California Premier Pain Clinics Inc., 5371 Belgrave Garden Grove, CA 92845.
            </li>
            {/* Include additional definitions as needed */}
          </ul>
          {/* --- Insert the remainder of the Terms & Conditions content here --- */}
          <p>
            ... (Terms & Conditions content continues) ...
          </p>
          <p>
            If you have any questions about these Terms and Conditions, You can contact us:
          </p>
          <p>
            By email:{" "}
            <a href="mailto:californiapremierpainclinics@gmail.com">
              californiapremierpainclinics@gmail.com
            </a>
          </p>
        </div>

      </div>
      <FooterComponent />
    </div>
  );
};

export default PrivacyPolicy;
