import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./utilities/Navbar";
import "./App.css";

// Lazy load each route
const Home = lazy(() => import("./utilities/Home"));
const Services = lazy(() => import("./pages/Services")); // create or move Services to a separate file
const About = lazy(() => import("./pages/About"));       // same idea
const Patient = lazy(() => import("./pages/Patient"));   // etc.

function App() {
  return (
    <div className="container">
      <Navbar />
      <main className="content">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/patient" element={<Patient />} />
            {/* etc. */}
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
