
import React, { Suspense, lazy } from "react";
import { Helmet } from "react-helmet";
import HeroSection from "../sections/HeroSection";
import { locationsData, servicesData } from "../data";

const AboutUsComponent = lazy(() =>
  import("../sections/AboutUsComponent")
);

const PlaquesComponent = lazy(() =>
  import("../sections/PlaquesComponent")
);

const OurServicesComponent = lazy(() =>
  import("../sections/OurServicesComponent")
);

const HowItWorksComponent = lazy(() =>
  import("../sections/HowItWorksComponent")
);

const LocationsSection = lazy(() =>
  import("../sections/LocationsSection")
);

const FooterComponent = lazy(() =>
  import("../sections/FooterComponent")
);

const SITE_URL =
  "https://www.californiapremierpainclinics.com";

const BUSINESS_NAME =
  "California Premier Pain Clinics";

const BUSINESS_PHONE =
  "+1-877-271-0203";

const BUSINESS_EMAIL =
  "referrals@californiapremierpainclinics.com";

const DEFAULT_HOURS = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    opens: "08:00",
    closes: "17:00"
  }
];

const parseClinicAddress = (address) => {
  if (!address || typeof address !== "string") {
    return null;
  }

  const match = address.trim().match(
    /^(.*),\s*([^,]+),\s*CA\s+(\d{5})(?:-\d{4})?$/
  );

  if (!match) {
    return null;
  }

  const [, streetAddress, city, postalCode] = match;

  return {
    "@type": "PostalAddress",
    streetAddress: streetAddress.trim(),
    addressLocality: city.trim(),
    addressRegion: "CA",
    postalCode,
    addressCountry: "US"
  };
};

const buildClinicSchema = (slug, clinic) => {
  const address = parseClinicAddress(clinic.address);

  if (!address) {
    return null;
  }

  const clinicUrl = `${SITE_URL}/locations/${slug}`;

  const clinicSchema = {
    "@type": "MedicalClinic",
    "@id": `${clinicUrl}#clinic`,
    name: clinic.name,
    url: clinicUrl,
    description: clinic.description,
    medicalSpecialty: "Pain Management",
    address,
    telephone: clinic.phone || BUSINESS_PHONE,
    email: clinic.email || BUSINESS_EMAIL,
    openingHoursSpecification: DEFAULT_HOURS,
    parentOrganization: {
      "@id": `${SITE_URL}/#organization`
    }
  };

  if (clinic.heroImage) {
    clinicSchema.image = clinic.heroImage;
  }

  if (clinic.fax) {
    clinicSchema.faxNumber = clinic.fax;
  }

  return clinicSchema;
};

const buildServiceSchema = (slug, service, index) => {
  const serviceUrl = `${SITE_URL}/services/${slug}`;

  const medicalType =
    slug === "emg-testing"
      ? "MedicalTest"
      : "MedicalProcedure";

  return {
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": medicalType,
      "@id": `${serviceUrl}#service`,
      name: service.title,
      description: service.shortDescription.trim(),
      url: serviceUrl
    }
  };
};

function Home() {
  const clinicLocations = Object.entries(locationsData)
    .sort(([slugA], [slugB]) => slugA.localeCompare(slugB))
    .map(([slug, clinic]) =>
      buildClinicSchema(slug, clinic)
    )
    .filter(Boolean);

  const serviceItems = Object.entries(servicesData)
    .map(([slug, service], index) =>
      buildServiceSchema(slug, service, index)
    );

  const richSnippet = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "@id": `${SITE_URL}/#organization`,
    name: BUSINESS_NAME,
    url: `${SITE_URL}/`,
    logo:
      "https://i.postimg.cc/xTGxVvsV/i-Stock-1262682182-1.webp",
    description:
      "California Premier Pain Clinics provides personalized pain management consultations, interventional procedures, and advanced treatment options at clinic locations throughout California.",
    founder: {
      "@type": "Person",
      name: "Stephen Sudekum, DO",
      jobTitle: "Fellowship-Trained Physician",
      affiliation: {
        "@id": `${SITE_URL}/#organization`
      }
    },
    telephone: BUSINESS_PHONE,
    email: BUSINESS_EMAIL,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BUSINESS_PHONE,
      contactType: "Patient Inquiries",
      areaServed: {
        "@type": "State",
        name: "California"
      },
      availableLanguage: ["English"]
    },
    areaServed: {
      "@type": "State",
      name: "California"
    },
    medicalSpecialty: [
      "Pain Management",
      "Interventional Pain Management",
      "Regenerative Medicine"
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Pain Management Services",
      itemListElement: serviceItems
    },
    location: clinicLocations
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: BUSINESS_NAME,
    url: `${SITE_URL}/`,
    inLanguage: "en-US",
    publisher: {
      "@id": `${SITE_URL}/#organization`
    }
  };

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    name:
      "California Premier Pain Clinics | Pain Management Specialists",
    url: `${SITE_URL}/`,
    description:
      "Find personalized pain management care at California Premier Pain Clinics. Explore consultations, specialized treatments, and clinic locations throughout California.",
    inLanguage: "en-US",
    isPartOf: {
      "@id": `${SITE_URL}/#website`
    },
    about: {
      "@id": `${SITE_URL}/#organization`
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      richSnippet,
      websiteSchema,
      webpageSchema
    ]
  };

  return (
    <div>
      <Helmet>
        <title>
          California Premier Pain Clinics | Pain Management Specialists
        </title>

        <meta
          name="description"
          content="California Premier Pain Clinics offers personalized pain management, consultations, injections, and advanced treatments at locations throughout California."
        />

        <link
          rel="canonical"
          href={`${SITE_URL}/`}
        />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
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
