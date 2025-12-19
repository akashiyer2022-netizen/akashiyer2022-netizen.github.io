import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import About from "./pages/About.jsx";
import Placeholder from "./pages/Placeholder.jsx";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Placeholder title="Home" />} />
          <Route path="/about-us" element={<About />} />

          <Route path="/allied-scholars" element={<Placeholder title="Allied Scholars" />} />
          <Route path="/sparx" element={<Placeholder title="Sparx" />} />
          <Route path="/cortex" element={<Placeholder title="Cortex" />} />
          <Route path="/careers" element={<Placeholder title="Careers" />} />
          <Route path="/contact" element={<Placeholder title="Contact Us" />} />
          <Route path="/get-involved" element={<Placeholder title="Get Involved" />} />

          <Route path="*" element={<Placeholder title="Not found" />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
