import React, { useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          "text-sm font-medium tracking-wide",
          "hover:text-ink-950 transition-colors",
          isActive ? "text-ink-950" : "text-ink-900/90",
        ].join(" ")
      }
    >
      {children}
    </NavLink>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const items = useMemo(
    () => [
      { label: "What's on", to: "/whats-on" },
      { label: "Learning", to: "/learning" },
      { label: "Explore science", to: "/explore-science" },
      { label: "Christmas Lectures", to: "/christmas-lectures" },
      { label: "Visit", to: "/visit" },
      { label: "Support us", to: "/support-us" },
      { label: "About us", to: "/about-us" },
    ],
    []
  );

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-paper/90 backdrop-blur border-b border-line">
      {/* FULL-WIDTH container */}
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="h-16 flex items-center gap-4">
          {/* Brand (left) */}
          <NavLink to="/about-us" className="flex items-center gap-2 shrink-0">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink-950 text-paper text-sm font-semibold">
              U
            </span>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">Ursa Majors</div>
              <div className="text-[11px] text-muted -mt-0.5">Ri-style layout</div>
            </div>
          </NavLink>

          {/* Desktop nav (center, spreads) */}
          <nav className="hidden lg:flex flex-1 items-center justify-center gap-8">
            {items.map((it) => (
              <NavItem key={it.to} to={it.to}>
                {it.label}
              </NavItem>
            ))}
          </nav>

          {/* Right actions */}
          <div className="ml-auto flex items-center gap-2 shrink-0">
            <button
              type="button"
              className="hidden sm:inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm text-ink-900 hover:bg-ink-900/5 transition"
              aria-label="Search"
            >
              <FiSearch />
              <span className="hidden md:inline">Search</span>
            </button>

            <NavLink
              to="/support-us"
              className="hidden sm:inline-flex rounded-full bg-ink-950 text-paper px-4 py-2 text-sm font-semibold hover:bg-ink-900 transition"
            >
              Become a Member
            </NavLink>

            <button
              type="button"
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-ink-900/5 transition"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="lg:hidden border-t border-line bg-paper">
          <div className="w-full px-4 sm:px-6 lg:px-10 py-4">
            <div className="grid gap-3">
              {items.map((it) => (
                <NavLink
                  key={it.to}
                  to={it.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    [
                      "py-2 text-sm font-semibold",
                      isActive ? "text-ink-950" : "text-ink-900/90",
                    ].join(" ")
                  }
                >
                  {it.label}
                </NavLink>
              ))}

              <div className="pt-2">
                <NavLink
                  to="/support-us"
                  onClick={() => setOpen(false)}
                  className="inline-flex rounded-full bg-ink-950 text-paper px-4 py-2 text-sm font-semibold hover:bg-ink-900 transition"
                >
                  Become a Member
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
