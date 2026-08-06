import React from "react";
import "./PatientEducationGuide.css";

const PDF_URL = "/documents/prp-steroid-injections-guide.pdf";

function PatientEducationGuide() {
  return (
    <div className="patient-guide-page">
      <section className="patient-guide-container">
        <header className="patient-guide-header">
          <p className="patient-guide-eyebrow">Patient Education</p>

          <h1>PRP &amp; Steroid Injection Patient Guide</h1>

          <p className="patient-guide-description">
            Review important information about your procedure, preparation,
            recovery, aftercare, and when to contact your healthcare provider.
          </p>

          <div className="patient-guide-actions">
            <a
              className="patient-guide-button patient-guide-button-primary"
              href={PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Patient Guide
            </a>

            <a
              className="patient-guide-button patient-guide-button-secondary"
              href={PDF_URL}
              download="California-Premier-Pain-Clinics-Patient-Guide.pdf"
            >
              Download PDF
            </a>
          </div>
        </header>

        <div className="patient-guide-viewer-container">
          <iframe
            className="patient-guide-viewer"
            src={PDF_URL}
            title="PRP and Steroid Injection Patient Guide"
          />
        </div>

        <p className="patient-guide-mobile-note">
          Having trouble viewing the document? Use the Open Patient Guide button
          above to view it in your browser.
        </p>

        <p className="patient-guide-disclaimer">
          This guide is provided for educational purposes. Please follow the
          specific instructions given to you by your healthcare provider.
        </p>
      </section>
    </div>
  );
}

export default PatientEducationGuide;