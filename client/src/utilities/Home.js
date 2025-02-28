import React, { Suspense, lazy } from "react";
import { useLocation } from "react-router-dom"; // Using react-router to check current path
import HeroSection from "../sections/HeroSection";
const AboutUsComponent = lazy(() => import("../sections/AboutUsComponent"));
const PlaquesComponent = lazy(() => import("../sections/PlaquesComponent"));
const OurServicesComponent = lazy(() => import("../sections/OurServicesComponent"));
const HowItWorksComponent = lazy(() => import("../sections/HowItWorksComponent"));
const LocationsSection = lazy(() => import("../sections/LocationsSection"));
const LocationsPage = lazy(() => import("../pages/LocationsPage"));
const FooterComponent = lazy(() => import("../sections/FooterComponent"));

function Home() {
  const location = useLocation();
  // When the route is exactly '/locations', render only the LocationsSection
  console.log('location', location);
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
      <Suspense fallback={<div>Loading...</div>}>
          <AboutUsComponent />
      </Suspense>
      <Suspense fallback={<div>Loading Features...</div>}>
        <PlaquesComponent />
      </Suspense>
      <Suspense fallback={<div>Loading Features...</div>}>
        <OurServicesComponent />
      </Suspense>
      <Suspense fallback={<div>Loading Steps...</div>}>
        <HowItWorksComponent />
      </Suspense>
      <Suspense fallback={<div>Loading Locations...</div>}>
        <LocationsSection />
      </Suspense>
      <Suspense fallback={<div>Loading FooterComponent...</div>}>
        <FooterComponent />
      </Suspense>
    </div>
  );
}

export default Home;
