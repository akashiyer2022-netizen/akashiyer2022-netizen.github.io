import React from "react";
import { NavLink } from "react-router-dom";
import Section from "../components/Section.jsx";

export default function MentorshipApplication() {
  return (
    <div className="pt-16">
      <div className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-xs text-muted flex items-center gap-2">
            <NavLink to="/" className="hover:text-ink-950">
              Home
            </NavLink>
            <span>/</span>
            <NavLink to="/allied-scholars" className="hover:text-ink-950">
              Allied Scholars
            </NavLink>
            <span>/</span>
            <span className="text-ink-900">Apply for Mentorship</span>
          </nav>
        </div>
      </div>

      <Section title="Apply for Mentorship" eyebrow="Ursa Allied Scholars">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-muted">Application form coming soon!</p>

          <div className="mt-6 flex justify-center">
            <a
              className="inline-flex rounded-full bg-ink-950 text-paper px-6 py-3 text-sm font-bold hover:bg-ink-900 transition"
              href="https://www.theursamajorsgroup.org/allied-scholars"
              target="_blank"
              rel="noreferrer"
            >
              View the program page
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
