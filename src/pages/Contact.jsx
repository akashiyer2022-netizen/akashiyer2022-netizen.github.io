import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import heroImg from "../assets/hero.jpg";
import Section from "../components/Section.jsx";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    organization: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
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
              <span className="text-ink-900">Contact Us</span>
            </nav>
          </div>
        </div>

        <Section>
          <div className="mx-auto max-w-xl text-center py-12">
            <p className="text-4xl font-semibold tracking-tight text-ink-950">
              Thank you!
            </p>
            <p className="mt-4 text-[15px] leading-7 text-muted">
              Your message has been received. We'll be in touch soon.
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
            <span className="text-ink-900">Contact Us</span>
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
                  Contact Us
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <Section eyebrow="Get in Touch" title="Send Us a Message">
        <div className="mx-auto max-w-2xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Name */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-ink-950 mb-1.5">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                  placeholder="First name"
                  className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink-900 placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-ink-950/20"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-ink-950 mb-1.5">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Last name"
                  className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink-900 placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-ink-950/20"
                />
              </div>
            </div>

            {/* Organization */}
            <div>
              <label className="block text-sm font-semibold text-ink-950 mb-1.5">
                Organization
              </label>
              <input
                type="text"
                name="organization"
                value={form.organization}
                onChange={handleChange}
                placeholder="Your organization (optional)"
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
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-ink-950 mb-1.5">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="How can we help you?"
                className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink-900 placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-ink-950/20 resize-none"
              />
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                className="inline-flex rounded-full bg-ink-950 text-paper px-8 py-3 text-sm font-bold hover:bg-ink-900 transition"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </Section>
    </div>
  );
}
