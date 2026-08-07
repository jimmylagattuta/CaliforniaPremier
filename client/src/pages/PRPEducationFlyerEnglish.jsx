import React from "react";
import "./PatientEducationGuide.css";

const PDF_URL =
  "https://res.cloudinary.com/djtsuktwb/image/upload/v1786070228/PRP_Education_Flyer_English_xomiva.pdf";

const PDF_DOWNLOAD_URL =
  "https://res.cloudinary.com/djtsuktwb/image/upload/fl_attachment:PRP-Education-Flyer-English/v1786070228/PRP_Education_Flyer_English_xomiva.pdf";

function PRPEducationFlyerEnglish() {
  return (
    <div className="patient-guide-page">
      <section className="patient-guide-container">
        <header className="patient-guide-header">
          <p className="patient-guide-eyebrow">Patient Education</p>

          <h1>PRP Education Flyer</h1>

          <p className="patient-guide-description">
            Learn about platelet-rich plasma therapy, how PRP treatments work,
            potential benefits, and what patients can expect from the
            procedure.
          </p>

          <div className="patient-guide-actions">
            <a
              className="patient-guide-button patient-guide-button-primary"
              href={PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Education Flyer
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
            title="PRP Education Flyer in English"
          />
        </div>

        <p className="patient-guide-mobile-note">
          Having trouble viewing the document? Use the Open Education Flyer
          button above to view it directly in your browser.
        </p>

        <p className="patient-guide-disclaimer">
          This flyer is provided for educational purposes. Please speak with
          your healthcare provider to determine whether PRP treatment is
          appropriate for you.
        </p>
      </section>
    </div>
  );
}

export default PRPEducationFlyerEnglish;