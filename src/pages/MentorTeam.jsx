import React from "react";
import { NavLink } from "react-router-dom";
import Section from "../components/Section.jsx";

const mentors = [
  { name: "Zubin Bhaumik", school: "Cornell University ‘26", major: "Mechanical Engineering and Computer Science" },
  { name: "Avi Bhuyan", school: "Rutgers University ‘26", major: "Biomedical Engineering" },
  { name: "Nikhil Chandrasekar", school: "University of Illinois Urbana-Champaign ‘27", major: "Computer Science" },
  { name: "Elvin Fu", school: "Cornell University ‘26", major: "Mechanical Engineering" },
  { name: "Julius Goldberg", school: "Cornell University ‘26", major: "Mechanical Engineering" },
  { name: "Marissa Hayes", school: "Cornell University ‘26", major: "Neurobiology and Behavior" },
  { name: "Beatrice Hungate", school: "Cornell University ‘26", major: "Biological Engineering" },
  { name: "Nikhil Kamineni", school: "Rutgers University ‘26", major: "Biomedical Engineering" },
  { name: "Aniket Martins", school: "Cornell University ‘27", major: "Mechanical Engineering" },
  { name: "Cathy Miao", school: "Cornell University ‘26", major: "Computer Science" },
  { name: "Ashley Padres", school: "Cornell University ‘26", major: "Mechanical Engineering" },
  { name: "Hannah Schneider", school: "Cornell University ‘26", major: "Neurobiology and Behavior" },
  { name: "Aarnav Vyas", school: "University of Illinois Urbana-Champagne ‘26", major: "Physics" },
  { name: "Mei Ling Wood", school: "Cornell University ‘26", major: "Biomedical Engineering" },
  { name: "Amanda Xu", school: "Cornell University ‘26", major: "Molecular and Cellular Biology" },
];

function MentorCard({ name, school, major }) {
  return (
    <div className="rounded-2xl border border-line bg-paper p-5 shadow-soft">
      <h3 className="text-base font-semibold text-ink-950 text-center">{name}</h3>
      <p className="mt-2 text-sm text-muted text-center">{school}</p>
      <p className="mt-1 text-sm text-ink-900/90 text-center">{major}</p>
      <div className="mt-4 flex justify-center">
        <button
          type="button"
          className="inline-flex rounded-full border border-line px-4 py-2 text-sm font-semibold hover:bg-ink-900/5 transition"
        >
          Read Bio
        </button>
      </div>
    </div>
  );
}

export default function MentorTeam() {
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
            <span className="text-ink-900">Mentor Team</span>
          </nav>
        </div>
      </div>

      <Section title="Meet the Mentors" eyebrow="Ursa Allied Scholars">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {mentors.map((m) => (
            <MentorCard key={m.name} {...m} />
          ))}
        </div>
      </Section>
    </div>
  );
}
