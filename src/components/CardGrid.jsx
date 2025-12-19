import React from "react";
import { NavLink } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function CardGrid({ cards }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {cards.map((c) => (
        <div
          key={c.title}
          className="group rounded-2xl border border-line bg-paper p-6 shadow-soft hover:shadow-none transition-shadow"
        >
          <h3 className="text-lg font-semibold tracking-tight">{c.title}</h3>
          <p className="mt-2 text-muted">{c.description}</p>

          <NavLink
            to={c.to}
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink-950 hover:opacity-80 transition"
          >
            Read More <FiArrowRight />
          </NavLink>
        </div>
      ))}
    </div>
  );
}
