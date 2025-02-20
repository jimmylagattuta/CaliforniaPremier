import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./utilities/Navbar";

// Lazy load each route
const Home = lazy(() => import("./utilities/Home"));


function App() {
  return (
    <div className="container">
      <Navbar />
      <main className="content">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />


            {/* etc. */}
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
