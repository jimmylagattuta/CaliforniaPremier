// App.js
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./utilities/Navbar";
import ScrollToTop from "./utilities/ScrollToTop"; // Import the ScrollToTop component

// Lazy load your routes/components as needed
const Home = lazy(() => import("./utilities/Home"));
const LocationsPage = lazy(() => import("./pages/LocationsPage"));
const Services = lazy(() => import("./pages/Services"));
const PrivacyPolicy = lazy(() => import("./sections/PrivacyPolicy"));
const Faqs = lazy(() => import("./sections/Faqs"));
const AboutUs = lazy(() => import("./pages/AboutUs")); // Import AboutUs

// Add more routes as needed

function App() {
  
  console.log(process.env.REACT_APP_RECAPTCHA);

  return (
    <div className="container">
      <Navbar />
      <ScrollToTop />
      <main className="content">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/locations/:locationId" element={<LocationsPage />} />


            <Route path="/contact" element={<LocationsPage />} />
            <Route path="/services/:serviceId?" element={<Services />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<PrivacyPolicy />} />
            <Route path="/faq" element={<Faqs />} />
            <Route path="/about-us" element={<AboutUs />} /> 

            {/* Other routes */}
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
