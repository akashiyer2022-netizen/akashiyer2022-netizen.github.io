import React from "react";
import { NavLink } from "react-router-dom";
import Section from "../components/Section.jsx";

const subjects = ["Biology", "Chemistry", "Computer Science", "Engineering", "Physics"];

function SubjectCard({ title }) {
  return (
    <div className="rounded-2xl border border-line bg-paper p-6 shadow-soft flex flex-col items-center">
      <h3 className="text-lg font-semibold text-ink-950 text-center">{title}</h3>
      <div className="mt-4">
        <button
          type="button"
          className="inline-flex rounded-full bg-ink-950 text-paper px-5 py-2 text-sm font-bold hover:bg-ink-900 transition"
        >
          Explore
        </button>
      </div>
    </div>
  );
}

export default function SubjectsOffered() {
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
            <span className="text-ink-900">Subjects Offered</span>
          </nav>
        </div>
      </div>

      <Section title="Subjects" eyebrow="Ursa Allied Scholars">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((s) => (
            <SubjectCard key={s} title={s} />
          ))}
        </div>
      </Section>
    </div>
  );
}
