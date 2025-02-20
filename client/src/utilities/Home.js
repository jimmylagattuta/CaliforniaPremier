import React, { Suspense, lazy } from "react";
import HeroSection from "../sections/HeroSection";
import './Home.css';
const AboutUsComponent = lazy(() => import("../sections/AboutUsComponent"));

function Home() {
  return (
    <div>
      <HeroSection />
      <Suspense fallback={<div>Loading...</div>}>
          <AboutUsComponent />
      </Suspense>
    </div>
  );
}

export default Home;
