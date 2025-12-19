import React, { useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/ursa_logo.webp";

function TopLink({ to, children }) {
  return (
    <NavLink
      to={to}
      end={to === "/"}
      className={({ isActive }) =>
        [
          "relative inline-flex items-center h-16",
          "text-[14px] font-semibold tracking-wide text-white/90",
          "hover:text-white transition-colors",
          // blue underline on hover + active
          "after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0",
          "after:h-[3px] after:bg-blue-600",
          "after:origin-left after:scale-x-0 after:transition-transform after:duration-200",
          "hover:after:scale-x-100",
          isActive ? "after:scale-x-100" : "",
        ].join(" ")
      }
    >
      {children}
    </NavLink>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const items = useMemo(
    () => [
      { label: "About Us", to: "/about-us" },
      { label: "Allied Scholars", to: "/allied-scholars" },
      { label: "Sparx", to: "/sparx" },
      { label: "Cortex", to: "/cortex" },
      { label: "Careers", to: "/careers" },
      { label: "Contact Us", to: "/contact" },
    ],
    []
  );

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-slate-950 border-b border-white/10">
      <div className="w-full px-6 sm:px-8">
        <div className="h-16 flex items-center gap-6">
          {/* Left: logo (hard constrained) */}
          <NavLink to="/" className="shrink-0 flex items-center">
            <div className="h-10 w-10 rounded-lg overflow-hidden bg-white/5 flex items-center justify-center">
              <img
                src={logo}
                alt="Ursa Majors"
                className="h-10 w-10 object-cover"
              />
            </div>
          </NavLink>

          {/* Center: tabs */}
          <nav className="hidden lg:flex flex-1 justify-center gap-8">
            {items.map((it) => (
              <TopLink key={it.to} to={it.to}>
                {it.label}
              </TopLink>
            ))}
          </nav>

          {/* Right: Search + CTA */}
          <div className="hidden lg:flex items-center gap-5 shrink-0">
            <div className="relative">
              <button
                type="button"
                className="inline-flex items-center gap-2 text-[14px] font-semibold text-white/90 hover:text-white transition"
                onClick={() => setSearchOpen((v) => !v)}
                aria-label="Search"
              >
                <span>Search</span>
                <FiSearch className="text-lg" />
              </button>

              {searchOpen && (
                <div className="absolute right-0 mt-3 w-[300px] rounded-xl border border-white/10 bg-slate-950 shadow-soft p-3">
                  <input
                    type="search"
                    placeholder="Search…"
                    className="h-10 w-full rounded-lg border border-white/10 bg-white/5 px-3 text-sm text-white placeholder:text-white/50
                               focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                    autoFocus
                  />
                  <button
                    className="mt-2 w-full h-10 rounded-lg bg-white text-slate-950 text-sm font-bold hover:bg-white/90 transition"
                    onClick={() => setSearchOpen(false)}
                    type="button"
                  >
                    Search
                  </button>
                </div>
              )}
            </div>

            <NavLink
              to="/get-involved"
              className="h-10 inline-flex items-center rounded-full bg-white px-5
                         text-sm font-bold text-slate-950 hover:bg-white/90 transition"
            >
              Get Involved
            </NavLink>
          </div>

          {/* Mobile controls */}
          <div className="lg:hidden ml-auto flex items-center gap-2">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-white/10 transition text-white"
              onClick={() => setSearchOpen((v) => !v)}
              aria-label="Search"
            >
              <FiSearch className="text-xl" />
            </button>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-white/10 transition text-white"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <FiMenu className="text-xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile search */}
      {searchOpen && (
        <div className="lg:hidden border-t border-white/10 bg-slate-950">
          <div className="w-full px-6 sm:px-8 py-3">
            <input
              type="search"
              placeholder="Search…"
              className="h-10 w-full rounded-lg border border-white/10 bg-white/5 px-3 text-sm text-white placeholder:text-white/50
                         focus:outline-none focus:ring-2 focus:ring-blue-600/30"
            />
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-white/10 bg-slate-950">
          <div className="w-full px-6 sm:px-8 py-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-white">Menu</p>
              <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-white/10 transition text-white"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <FiX className="text-xl" />
              </button>
            </div>

            <div className="mt-3 grid gap-2">
              {items.map((it) => (
                <NavLink
                  key={it.to}
                  to={it.to}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    [
                      "py-2 text-[14px] font-semibold",
                      isActive ? "text-white" : "text-white/80",
                    ].join(" ")
                  }
                >
                  {it.label}
                </NavLink>
              ))}

              <NavLink
                to="/get-involved"
                onClick={() => setMobileOpen(false)}
                className="mt-3 inline-flex h-10 items-center justify-center rounded-full bg-white px-5 text-sm font-bold text-slate-950 hover:bg-white/90 transition"
              >
                Get Involved
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
