import React, { Suspense, lazy } from "react";
import HeroSection from "../sections/HeroSection";
const AboutUsComponent = lazy(() => import("../sections/AboutUsComponent"));
const PlaquesComponent = lazy(() => import("../sections/PlaquesComponent"));
const OurServicesComponent = lazy(() => import("../sections/OurServicesComponent"));
const HowItWorksComponent = lazy(() => import("../sections/HowItWorksComponent")); // <-- NEW

function Home() {
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
    </div>
  );
}

export default Home;
