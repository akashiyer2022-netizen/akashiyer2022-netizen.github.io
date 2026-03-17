import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import heroImg from "../assets/hero.jpg";
import Section from "../components/Section.jsx";

const DIVISIONS = [
  "Governance",
  "LumenEd — Education",
  "Allied Scholars — Mentorship and Projects",
  "Sparx — Podcasts",
  "Cortex — Blogs",
];

export default function Careers() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    divisions: [],
    why: "",
    files: [],
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleDivision(division) {
    setForm((prev) => {
      const already = prev.divisions.includes(division);
      return {
        ...prev,
        divisions: already
          ? prev.divisions.filter((d) => d !== division)
          : [...prev.divisions, division],
      };
    });
  }

  function handleFiles(e) {
    const selected = Array.from(e.target.files).slice(0, 2);
    setForm((prev) => ({ ...prev, files: selected }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="pt-16">
        <div className="border-b border-line">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4">
            <nav className="text-xs text-muted flex items-center gap-2">
              <NavLink to="/" className="hover:text-ink-950">
                Home
              </NavLink>
              <span aria-hidden="true">/</span>
              <span className="text-ink-900">Careers</span>
            </nav>
          </div>
        </div>

        <Section>
          <div className="mx-auto max-w-xl text-center py-12">
            <p className="text-4xl font-semibold tracking-tight text-ink-950">
              Thank you!
            </p>
            <p className="mt-4 text-[15px] leading-7 text-muted">
              Your application has been received. We will contact you shortly
              for more information.
            </p>
            <div className="mt-8">
              <NavLink
                to="/"
                className="inline-flex rounded-full bg-ink-950 text-paper px-7 py-3 text-sm font-bold hover:bg-ink-900 transition"
              >
                Back to Home
              </NavLink>
            </div>
          </div>
        </Section>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Breadcrumb */}
      <div className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-xs text-muted flex items-center gap-2">
            <NavLink to="/" className="hover:text-ink-950">
              Home
            </NavLink>
            <span aria-hidden="true">/</span>
            <span className="text-ink-900">Careers</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative">
        <div className="relative h-[360px] sm:h-[440px] overflow-hidden">
          <img
            src={heroImg}
            alt="Space background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/75 via-ink-950/35 to-transparent" />

          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto max-w-6xl w-full px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14">
              <div className="max-w-3xl text-left">
                <p className="text-paper/85 text-xs font-semibold tracking-[0.18em] uppercase">
                  The Ursa Majors Group
                </p>
                <h1 className="mt-3 text-paper text-3xl sm:text-5xl font-semibold tracking-tight">
                  Let's work together
                </h1>
                <p className="mt-3 text-paper/90 text-lg sm:text-xl font-medium">
                  Apply to The Ursa Majors Group today!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <Section eyebrow="Careers" title="Apply Now">
        <div className="mx-auto max-w-2xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-ink-950 mb-1.5">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
                className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink-900 placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-ink-950/20"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-ink-950 mb-1.5">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink-900 placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-ink-950/20"
              />
              <p className="mt-1.5 text-xs text-muted">
                We will contact you shortly for more information regarding your
                application.
              </p>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-ink-950 mb-1.5">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="Your phone number"
                className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink-900 placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-ink-950/20"
              />
            </div>

            {/* Division */}
            <div>
              <label className="block text-sm font-semibold text-ink-950 mb-3">
                Division <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-col gap-2.5">
                {DIVISIONS.map((division) => (
                  <label
                    key={division}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={form.divisions.includes(division)}
                      onChange={() => handleDivision(division)}
                      className="w-4 h-4 rounded border-line accent-ink-950 cursor-pointer"
                    />
                    <span className="text-sm text-ink-900">{division}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Why */}
            <div>
              <label className="block text-sm font-semibold text-ink-950 mb-1.5">
                Why do you want to join The Ursa Majors Group?{" "}
                <span className="text-red-500">*</span>
              </label>
              <textarea
                name="why"
                value={form.why}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell us about yourself and your motivation..."
                className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink-900 placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-ink-950/20 resize-none"
              />
            </div>

            {/* Resume */}
            <div>
              <label className="block text-sm font-semibold text-ink-950 mb-1.5">
                Resume / CV <span className="text-red-500">*</span>
              </label>
              <p className="text-xs text-muted mb-2">
                Please attach your resume and/or CV (PDF preferred, 2 files
                max).
              </p>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                multiple
                onChange={handleFiles}
                required
                className="w-full text-sm text-ink-900 file:mr-4 file:rounded-full file:border-0 file:bg-ink-950 file:text-paper file:px-4 file:py-2 file:text-sm file:font-semibold file:cursor-pointer hover:file:bg-ink-900 cursor-pointer"
              />
              {form.files.length > 0 && (
                <ul className="mt-2 flex flex-col gap-1">
                  {form.files.map((f) => (
                    <li key={f.name} className="text-xs text-muted">
                      {f.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                className="inline-flex rounded-full bg-ink-950 text-paper px-8 py-3 text-sm font-bold hover:bg-ink-900 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </Section>
    </div>
  );
}
