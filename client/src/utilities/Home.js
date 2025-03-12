import React, { Suspense, lazy } from "react";
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
  
  if (location.pathname === "/locations") {
    return (
      <Suspense fallback={<div>Loading Locations...</div>}>
        <LocationsSection />
      </Suspense>
    );
  }

  return (
    <div>
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
