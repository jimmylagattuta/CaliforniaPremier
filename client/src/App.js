// App.js
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./utilities/Navbar";

// Lazy load your routes/components as needed
const Home = lazy(() => import("./utilities/Home"));
const FooterComponent = lazy(() => import("./sections/FooterComponent"));

// Add more routes as needed

function App() {
  return (
    <div className="container">
      <Navbar />
      <main className="content">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Other routes */}
          </Routes>
        </Suspense>
      </main>
      <Suspense fallback={<div>Loading FooterComponent...</div>}>
        <FooterComponent />
      </Suspense>
    </div>
  );
}

export default App;
