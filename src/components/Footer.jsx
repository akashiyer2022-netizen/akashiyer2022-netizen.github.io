import React from "react";
import { NavLink } from "react-router-dom";
import SocialBar from "./SocialBar.jsx";

function FooterLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className="text-sm text-paper/75 hover:text-paper transition-colors"
    >
      {children}
    </NavLink>
  );
}

export default function Footer() {
  return (
    <footer className="mt-0">
      {/* “Black bar under that” (Ursa socials only) */}
      <SocialBar />

      {/* Bottom footer: Ursa text, Ri-like styling */}
      <div className="bg-ink-900 text-paper">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-base font-semibold tracking-tight">
                The Ursa Majors Group
              </h3>
              <p className="mt-3 text-sm text-paper/70 max-w-prose">
                Education, mentorship, and STEM outreach—presented here in an Ri-inspired layout.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="grid gap-2">
                <FooterLink to="/about-us">About Us</FooterLink>
                <FooterLink to="/governance">Governance</FooterLink>
                <FooterLink to="/projects-team">Projects Team</FooterLink>
                <FooterLink to="/learning">Allied Scholars</FooterLink>
                <FooterLink to="/explore-science">Team</FooterLink>
              </div>

              <div className="grid gap-2">
                <FooterLink to="/visit">Subjects Offered</FooterLink>
                <FooterLink to="/support-us">Propose a Project</FooterLink>
                <FooterLink to="/support-us">Careers</FooterLink>
                <FooterLink to="/support-us">Contact Us</FooterLink>
                <FooterLink to="/support-us">Ursa Sparx</FooterLink>
                <FooterLink to="/support-us">Ursa Cortex</FooterLink>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-paper/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-paper/60">
              © {new Date().getFullYear()} The Ursa Majors Group
            </p>
            <p className="text-xs text-paper/60">
              Built with React + Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
