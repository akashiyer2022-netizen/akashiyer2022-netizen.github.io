import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
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
          <Route path="/" element={<Navigate to="/about-us" replace />} />
          <Route path="/about-us" element={<About />} />

          {/* Placeholder routes so nav items don’t 404 */}
          <Route path="/whats-on" element={<Placeholder title="What's on" />} />
          <Route path="/learning" element={<Placeholder title="Learning" />} />
          <Route path="/explore-science" element={<Placeholder title="Explore science" />} />
          <Route path="/christmas-lectures" element={<Placeholder title="Christmas Lectures" />} />
          <Route path="/visit" element={<Placeholder title="Visit" />} />
          <Route path="/support-us" element={<Placeholder title="Support us" />} />

          {/* “Read more” destinations from the Ursa “Our Teams” cards */}
          <Route path="/governance" element={<Placeholder title="The Governance" />} />
          <Route path="/education-team" element={<Placeholder title="The Education Team" />} />
          <Route path="/projects-team" element={<Placeholder title="The Projects Team" />} />
          <Route path="/advisors" element={<Placeholder title="The Advisors" />} />

          <Route path="*" element={<Placeholder title="Not found" />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
