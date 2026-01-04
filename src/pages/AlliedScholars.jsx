import React from "react";
import { NavLink } from "react-router-dom";
import heroImg from "../assets/hero.jpg";
import Section from "../components/Section.jsx";

function CtaCard({ title, body, to, buttonText }) {
  return (
    <div className="rounded-2xl border border-line bg-paper p-6 shadow-soft flex flex-col">
      <h3 className="text-lg font-semibold tracking-tight text-ink-950 text-center">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-muted text-center flex-1">
        {body}
      </p>
      <div className="mt-5 flex justify-center">
        <NavLink
          to={to}
          className="inline-flex items-center rounded-full bg-ink-950 text-paper px-5 py-2 text-sm font-bold hover:bg-ink-900 transition"
        >
          {buttonText}
        </NavLink>
      </div>
    </div>
  );
}

export default function AlliedScholars() {
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
            <span className="text-ink-900">Allied Scholars</span>
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
                  The Ursa Majors Group Mentorship Program
                </p>

                <h1 className="mt-3 text-paper text-3xl sm:text-5xl font-semibold tracking-tight">
                  Ursa Allied Scholars
                </h1>

                <p className="mt-3 text-paper/90 text-lg sm:text-xl font-medium">
                  Hands-On Learning, Lifelong Guidance, Lasting Impact
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <Section title="Our Mission" eyebrow="Ursa Allied Scholars">
        <div className="mx-auto max-w-4xl text-center text-[15px] leading-7 text-ink-900/90">
          <p className="font-semibold">
            The mission of Ursa Majors’ Allied Scholars program is to empower
            middle and high school students to explore their career interests
            through active mentorship and hands-on projects. Allied Scholars
            connects learners with mentors from leading undergraduate and
            graduate programs who provide academic support and career guidance.
          </p>

          <p className="mt-4">
            Through collaborative passion projects with university experts,
            students acquire technical skills, gain real-world experience, and
            establish a strong foundation for future success.
          </p>
        </div>

        {/* CTA cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <CtaCard
            title="Our Team"
            body="Our team is made of undergraduate students focused on mentoring high school and middle students. They look forward to working with their mentees to guide the as they pursue their passion projects with us."
            to="/mentor-team"
            buttonText="Meet Us!"
          />
          <CtaCard
            title="Subjects Offered"
            body="See what subjects we offer guidance and mentoring for."
            to="/subjects-offered"
            buttonText="Explore"
          />
          <CtaCard
            title="Apply for Mentorship"
            body="Apply to become an Allied Scholar and gain mentorship, academic support, and real-world project experience. Mentors from top universities will help you build skills, explore career paths, and achieve your goals."
            to="/mentorship-application"
            buttonText="Apply"
          />
        </div>
      </Section>

      {/* Recent projects */}
      <Section title="Recent projects done at The Ursa Majors Group">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-muted">Coming Soon!</p>
        </div>
      </Section>
    </div>
  );
}
