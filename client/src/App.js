// App.js
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./utilities/Navbar";

// Lazy load your routes/components as needed
const Home = lazy(() => import("./utilities/Home"));
const LocationsPage = lazy(() => import("./pages/LocationsPage"));
// Add more routes as needed

function App() {
  
  console.log("process:", typeof process);
  console.log("process.env:", process?.env);
  console.log("REACT_APP_RECAPTCHA:", process?.env?.REACT_APP_RECAPTCHA);
  return (
    <div className="container">
      <Navbar />
      <main className="content">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/locations" element={<LocationsPage />} />
            {/* Other routes */}
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
