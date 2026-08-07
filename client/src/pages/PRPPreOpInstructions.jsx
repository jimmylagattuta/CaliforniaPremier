import React from "react";
import "./PatientEducationGuide.css";

const PDF_URL =
  "https://res.cloudinary.com/djtsuktwb/image/upload/v1786070087/California_Premier_Pain_Clinics_PRP_Pre-op_Instructions_English_Spanish_enokkf.pdf";

const PDF_DOWNLOAD_URL =
  "https://res.cloudinary.com/djtsuktwb/image/upload/fl_attachment:California-Premier-Pain-Clinics-PRP-Pre-op-Instructions-English-Spanish/v1786070087/California_Premier_Pain_Clinics_PRP_Pre-op_Instructions_English_Spanish_enokkf.pdf";

function PRPPreOpInstructions() {
  return (
    <div className="patient-guide-page">
      <section className="patient-guide-container">
        <header className="patient-guide-header">
          <p className="patient-guide-eyebrow">Patient Education</p>

          <h1>PRP Pre-Op Instructions</h1>

          <p className="patient-guide-description">
            Review important instructions to help you prepare for your PRP
            procedure. This document includes information in English and
            Spanish.
          </p>

          <div className="patient-guide-actions">
            <a
              className="patient-guide-button patient-guide-button-primary"
              href={PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Pre-Op Instructions
            </a>

            <a
              className="patient-guide-button patient-guide-button-secondary"
              href={PDF_DOWNLOAD_URL}
            >
              Download PDF
            </a>
          </div>
        </header>

        <div className="patient-guide-viewer-container">
          <iframe
            className="patient-guide-viewer"
            src={PDF_URL}
            title="PRP Pre-Op Instructions in English and Spanish"
          />
        </div>

        <p className="patient-guide-mobile-note">
          Having trouble viewing the document? Use the Open Pre-Op Instructions
          button above to view it directly in your browser.
        </p>

        <p className="patient-guide-disclaimer">
          These instructions are provided for educational purposes. Please
          follow the specific instructions given to you by your healthcare
          provider.
        </p>
      </section>
    </div>
  );
}

export default PRPPreOpInstructions;