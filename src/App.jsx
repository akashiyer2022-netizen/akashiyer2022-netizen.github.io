import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import AlliedScholars from "./pages/AlliedScholars.jsx";
import MentorTeam from "./pages/MentorTeam.jsx";
import SubjectsOffered from "./pages/SubjectsOffered.jsx";
import MentorshipApplication from "./pages/MentorshipApplication.jsx";

import Placeholder from "./pages/Placeholder.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink-900 flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Core */}
          <Route path="/about-us" element={<About />} />
          <Route path="/allied-scholars" element={<AlliedScholars />} />

          {/* Allied Scholars subpages */}
          <Route path="/mentor-team" element={<MentorTeam />} />
          <Route path="/subjects-offered" element={<SubjectsOffered />} />
          <Route path="/mentorship-application" element={<MentorshipApplication />} />

          {/* Other nav items (placeholders for now) */}
          <Route path="/sparx" element={<Placeholder title="Sparx" />} />
          <Route path="/cortex" element={<Placeholder title="Cortex" />} />
          <Route path="/careers" element={<Placeholder title="Careers" />} />
          <Route path="/contact" element={<Placeholder title="Contact Us" />} />
          <Route path="/get-involved" element={<Placeholder title="Get Involved" />} />

          {/* Catch-all */}
          <Route path="*" element={<Placeholder title="Page not found" />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
