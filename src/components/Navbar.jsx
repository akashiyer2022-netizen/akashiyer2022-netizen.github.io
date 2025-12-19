// src/components/Navbar.jsx
import { useMemo, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function IconLink({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="text-ink/65 hover:text-ink transition"
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

function SimpleXIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.8-6.6L6.3 22H2l7.3-8.4L1 2h6.3l4.4 6.1L18.9 2Zm-1.1 18h1.7L6.2 3.9H4.4L17.8 20Z" />
    </svg>
  );
}

function SimpleLinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM.5 8h4V24h-4V8Zm7 0h3.8v2.2h.1c.5-1 1.9-2.2 4-2.2 4.3 0 5.1 2.8 5.1 6.4V24h-4v-7.5c0-1.8 0-4-2.5-4s-2.9 1.9-2.9 3.9V24h-4V8Z" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = useMemo(
    () => [
      { label: "About Us", to: "/about-us" },
      { label: "Allied Scholars", to: "/allied-scholars" },
      { label: "Sparx", to: "/sparx" },
      { label: "Cortex", to: "/cortex" },
      { label: "Careers", to: "/careers" },
      { label: "Contact Us", to: "/contact-us" },
    ],
    []
  );

  return (
    <header className="sticky top-0 z-50 bg-paper border-b border-rule">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link
            to="/"
            className="text-ink font-semibold tracking-tightest hover:text-accent transition"
          >
            The Ursa Majors Group
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  [
                    "text-sm tracking-[0.08em] uppercase",
                    "transition",
                    isActive
                      ? "text-ink underline decoration-accent underline-offset-8"
                      : "text-ink/70 hover:text-ink hover:underline hover:decoration-rule hover:underline-offset-8",
                  ].join(" ")
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop socials */}
          <div className="hidden md:flex items-center gap-4">
            <IconLink href="https://x.com" label="X">
              <SimpleXIcon />
            </IconLink>
            <IconLink href="https://www.linkedin.com" label="LinkedIn">
              <SimpleLinkedInIcon />
            </IconLink>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden inline-flex items-center justify-center border border-rule bg-paper px-3 py-2 text-sm text-ink hover:border-ink/40 transition"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-1 pt-2">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 text-sm uppercase tracking-[0.08em] text-ink/80 hover:text-ink hover:bg-ink/[0.03] transition"
                >
                  {l.label}
                </Link>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-4 px-3">
              <IconLink href="https://x.com" label="X">
                <SimpleXIcon />
              </IconLink>
              <IconLink href="https://www.linkedin.com" label="LinkedIn">
                <SimpleLinkedInIcon />
              </IconLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
