import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./utilities/Navbar";
import HeroSection from "./utilities/HeroSection";
import './App.css';

function App() {
  return (
    <div className="container">
      <Navbar />
      <main className="content">
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/services" element={<h1>Services</h1>} />
          <Route path="/about" element={<h1>About Us</h1>} />
          <Route path="/patient" element={<h1>Become a Patient</h1>} />
          <Route path="/portal" element={<h1>Patient Portal</h1>} />
          <Route path="/appointment" element={<h1>Book Appointment</h1>} />
        </Routes>
      </main>
      <HeroSection />
    </div>
  );
}

export default App;
