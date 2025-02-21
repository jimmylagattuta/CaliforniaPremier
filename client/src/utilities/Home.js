import React, { Suspense, lazy } from "react";
import HeroSection from "../sections/HeroSection";
const AboutUsComponent = lazy(() => import("../sections/AboutUsComponent"));
const PlaquesComponent = lazy(() => import("../sections/PlaquesComponent"));

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
    </div>
  );
}

export default Home;
