import React from "react";
import "./PatientEducationGuide.css";

const PDF_URL =
  "https://res.cloudinary.com/djtsuktwb/image/upload/v1786070337/PRP_Education_Flyer_Spanish_oxeoxc.pdf";

const PDF_DOWNLOAD_URL =
  "https://res.cloudinary.com/djtsuktwb/image/upload/fl_attachment:PRP-Education-Flyer-Spanish/v1786070337/PRP_Education_Flyer_Spanish_oxeoxc.pdf";

function PRPEducationFlyerSpanish() {
  return (
    <div className="patient-guide-page">
      <section className="patient-guide-container">
        <header className="patient-guide-header">
          <p className="patient-guide-eyebrow">Educación para Pacientes</p>

          <h1>Folleto Educativo sobre PRP</h1>

          <p className="patient-guide-description">
            Conozca más sobre la terapia con plasma rico en plaquetas, cómo
            funciona el tratamiento con PRP, sus posibles beneficios y qué
            puede esperar durante el procedimiento.
          </p>

          <div className="patient-guide-actions">
            <a
              className="patient-guide-button patient-guide-button-primary"
              href={PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir Folleto Educativo
            </a>

            <a
              className="patient-guide-button patient-guide-button-secondary"
              href={PDF_DOWNLOAD_URL}
            >
              Descargar PDF
            </a>
          </div>
        </header>

        <div className="patient-guide-viewer-container">
          <iframe
            className="patient-guide-viewer"
            src={PDF_URL}
            title="Folleto educativo sobre PRP en español"
          />
        </div>

        <p className="patient-guide-mobile-note">
          ¿Tiene problemas para ver el documento? Use el botón Abrir Folleto
          Educativo para verlo directamente en su navegador.
        </p>

        <p className="patient-guide-disclaimer">
          Este folleto se proporciona únicamente con fines educativos. Consulte
          con su proveedor de atención médica para determinar si el tratamiento
          con PRP es adecuado para usted.
        </p>
      </section>
    </div>
  );
}

export default PRPEducationFlyerSpanish;