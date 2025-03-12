import React, { Suspense, lazy } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom"; 
import HeroSection from "../sections/HeroSection";

const AboutUsComponent = lazy(() => import("../sections/AboutUsComponent"));
const PlaquesComponent = lazy(() => import("../sections/PlaquesComponent"));
const OurServicesComponent = lazy(() => import("../sections/OurServicesComponent"));
const HowItWorksComponent = lazy(() => import("../sections/HowItWorksComponent"));
const LocationsSection = lazy(() => import("../sections/LocationsSection"));
const FooterComponent = lazy(() => import("../sections/FooterComponent"));

function Home() {
  const location = useLocation();

  // Build the rich snippet using Schema.org types
  const richSnippet = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "California Premier Pain Clinics",
    "url": "https://californiapremierpainclinics.com/",
    "logo": "https://i.postimg.cc/xTGxVvsV/i-Stock-1262682182-1.webp",
    "description": "At California Premier Pain Clinics, our mission is to help you find relief and regain your quality of life. Our experts craft personalized treatment plans using advanced therapies to ensure the best outcomes for your recovery. Your path to a pain-free life begins here.",
    "founder": {
      "@type": "Person",
      "name": "Stephen Sudekum, DO",
      "jobTitle": "Fellowship-Trained Physician",
      "affiliation": "California Premier Pain Clinics"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "(877) 271-0203",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": ["English"]
    },
    "areaServed": {
      "@type": "State",
      "name": "California"
    },
    "medicalSpecialty": [
      "Pain Management",
      "Interventional Pain Management",
      "Regenerative Medicine"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Pain Management Services",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "MedicalProcedure",
            "name": "New Patient Consultations",
            "description": "Begin your journey to lasting relief with consultations that tailor a treatment plan—medication, injections, or therapy—to your unique needs.",
            "url": "https://californiapremierpainclinics.com/services/new-patient-consultations"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "MedicalProcedure",
            "name": "Platelet Rich Plasma",
            "description": "A revolutionary treatment that promotes long-lasting healing of musculoskeletal conditions using the healing power of your own blood.",
            "url": "https://californiapremierpainclinics.com/services/platelet-rich-plasma"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "MedicalProcedure",
            "name": "Facet Joint Injections",
            "description": "Targeted injections that relieve debilitating neck and back pain by addressing the underlying cause at the facet joints.",
            "url": "https://californiapremierpainclinics.com/services/facet-joint-injections"
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "MedicalProcedure",
            "name": "Epidural Injections",
            "description": "Steroid injections designed to reduce pain and inflammation in the neck and back.",
            "url": "https://californiapremierpainclinics.com/services/epidural-injections"
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "MedicalProcedure",
            "name": "Botox Injections",
            "description": "Patient-friendly Botox injections that provide relief from migraines in a comfortable setting.",
            "url": "https://californiapremierpainclinics.com/services/botox-injections"
          }
        },
        {
          "@type": "ListItem",
          "position": 6,
          "item": {
            "@type": "MedicalProcedure",
            "name": "Steroid Injections",
            "description": "Cortisone shots that speed up recovery from sports injuries, ligament strains, and arthritis flare-ups.",
            "url": "https://californiapremierpainclinics.com/services/steroid-injections"
          }
        },
        {
          "@type": "ListItem",
          "position": 7,
          "item": {
            "@type": "MedicalProcedure",
            "name": "SI Joint Injections",
            "description": "Injections to diagnose and treat sacroiliac joint dysfunction for lower back pain relief.",
            "url": "https://californiapremierpainclinics.com/services/si-joint-injections"
          }
        },
        {
          "@type": "ListItem",
          "position": 8,
          "item": {
            "@type": "MedicalProcedure",
            "name": "Trigger Point Injections",
            "description": "Targeted injections to relieve muscle knots and enhance the effectiveness of physical therapy.",
            "url": "https://californiapremierpainclinics.com/services/trigger-point-injections"
          }
        },
        {
          "@type": "ListItem",
          "position": 9,
          "item": {
            "@type": "MedicalTest",
            "name": "Electromyography (EMG) Testing",
            "description": "Tests that assess nerve and muscle function to pinpoint causes of pain and weakness.",
            "url": "https://californiapremierpainclinics.com/services/emg-testing"
          }
        }
      ]
    }
  };

  return (
    <div>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(richSnippet)}
        </script>
      </Helmet>
      <HeroSection />
      <Suspense fallback={<div>Loading content...</div>}>
        <>
          <AboutUsComponent />
          <PlaquesComponent />
          <OurServicesComponent />
          <HowItWorksComponent />
          <LocationsSection />
          <FooterComponent />
        </>
      </Suspense>
    </div>
  );
}

export default Home;
