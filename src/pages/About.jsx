import React from "react";
import { NavLink } from "react-router-dom";
import heroImg from "../assets/hero.jpg";
import rushilImg from "../assets/rushil.jpg";
import Section from "../components/Section.jsx";
import CardGrid from "../components/CardGrid.jsx";

export default function About() {
  const teamCards = [
    {
      title: "The Governance",
      description: "Meet the leadership team at Ursa Majors!",
      to: "/governance",
    },
    {
      title: "The Education Team",
      description: "Meet the teachers from our Education Division!",
      to: "/education-team",
    },
    {
      title: "The Projects Team",
      description: "Meet the mentors from our Projects Division!",
      to: "/projects-team",
    },
    {
      title: "The Advisors",
      description: "Meet our advisors, leaders in the industry and academia",
      to: "/advisors",
    },
  ];

  return (
    <div className="pt-16">
      {/* Breadcrumb (Ri-like) */}
      <div className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-xs text-muted flex items-center gap-2">
            <NavLink to="/" className="hover:text-ink-950">Home</NavLink>
            <span aria-hidden="true">/</span>
            <span className="text-ink-900">About us</span>
          </nav>
        </div>
      </div>

      {/* Hero: Ursa image + text overlay */}
      <section className="relative">
        <div className="relative h-[380px] sm:h-[460px] overflow-hidden">
          <img
            src={heroImg}
            alt="Space background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/75 via-ink-950/35 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14">
              <h1 className="text-paper text-3xl sm:text-5xl font-semibold tracking-tight max-w-3xl">
                Education comes through infinite mediums,
              </h1>
              <p className="mt-3 text-paper/90 text-lg sm:text-xl font-medium max-w-3xl">
                We hope to provide at least a few of those at the highest quality
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Replace “charitable purpose” text with Ursa paragraphs */}
      <Section eyebrow="About" title="Our story">
        <div className="max-w-3xl text-[15px] leading-7 text-ink-900/90 space-y-4">
          <p>
            Founded in 2020, The Ursa Majors Group is a beacon of innovation and
            inspiration in the realm of education and beyond. What began as a
            humble endeavor within the Education Division has blossomed into a
            dynamic organization with a multifaceted approach to learning and
            engagement.
          </p>
          <p>
            At our core, we are driven by a singular mission: to empower
            students of all ages with meaningful and enriching learning
            experiences. With a focus on aerospace, physics, and astronomy, our
            Education Division seeks to instill a lifelong love for these
            disciplines through imaginative storytelling, interactive lessons,
            and hands-on exploration.
          </p>
          <p>
            As we continue to expand our horizons, we have established
            additional avenues for learning and growth. Our Projects Division
            provides middle and high school students with the opportunity to
            pursue their passions and explore career interests under the
            guidance of expert mentors. Beyond astronomy, physics, and
            aerospace, our Projects Division encompasses all STEM fields,
            ensuring that students have the opportunity to delve into a wide
            range of disciplines and interests.
          </p>
          <p>
            Through real-world projects and technical experiences, we aim to
            equip students with the skills and confidence to thrive in higher
            education and beyond.
          </p>
          <p>
            In our Podcast Center, we invite listeners to embark on a journey
            of discovery, engaging with industry and academia leaders in STEM
            fields through insightful conversations and thought-provoking
            discussions. Our podcasts serve as a platform for deepening
            understanding, fostering dialogue, and igniting curiosity across a
            diverse range of topics.
          </p>
          <p>
            Complementing our podcast endeavors, our Blogger division keeps our
            community informed and inspired with the latest developments in
            STEM fields. Through engaging content and thoughtfully curated
            resources, we strive to cultivate a vibrant ecosystem of learning
            and collaboration.
          </p>
          <p>
            At The Ursa Majors Group, we believe that education knows no
            boundaries. That’s why we are committed to partnering with non-profit
            organizations worldwide to extend the reach of our educational
            initiatives, particularly to underprivileged communities. Together,
            we are building a brighter future where knowledge is accessible to
            all, and the sky is truly the limit.
          </p>
          <p className="font-semibold">
            Join us on this journey of discovery and inspiration. Together,
            let’s reach for the stars.
          </p>
        </div>
      </Section>

      {/* Replace “Work with us” block with Rushil image + Rushil text */}
      <Section eyebrow="Founder" title="Rushil Sharan">
        <div className="grid gap-8 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-line shadow-soft">
              <img
                src={rushilImg}
                alt="Rushil Sharan"
                className="w-full aspect-[4/5] object-contain bg-ink-900/5"
              />
            </div>
            <p className="mt-3 text-sm text-muted">
              Rushil Sharan, Founder and CEO
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-line bg-paper p-6 sm:p-8 shadow-soft">
              <p className="text-sm font-semibold text-ink-950">
                Founder and Chief Executive Officer
                <span className="text-muted font-medium">
                  {" "}
                  · rushil.sharan@gmail.com
                </span>
              </p>

              <div className="mt-4 space-y-4 text-[15px] leading-7 text-ink-900/90">
                <p>
                  Rushil Sharan is a senior in Mechanical Engineering at Cornell
                  University and the founder of The Ursa Majors Group, a nonprofit
                  dedicated to advancing STEM education through teaching,
                  mentorship, and outreach.
                </p>
                <p>
                  Professionally, Rushil has completed three consecutive
                  internships at Collins Aerospace (RTX), supporting product
                  management and marketing initiatives across avionics,
                  predictive maintenance, and connected aviation solutions.
                </p>
                <p>
                  Beyond his engineering and business experience, Rushil leads
                  multidisciplinary projects and community initiatives that merge
                  technical learning with mentorship and outreach.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  className="inline-flex rounded-full bg-ink-950 text-paper px-4 py-2 text-sm font-semibold hover:bg-ink-900 transition"
                  href="https://www.theursamajorsgroup.org/rushil-sharan-bio"
                  target="_blank"
                  rel="noreferrer"
                >
                  Full bio
                </a>
                <NavLink
                  className="inline-flex rounded-full border border-line px-4 py-2 text-sm font-semibold hover:bg-ink-900/5 transition"
                  to="/support-us"
                >
                  Get involved
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Replace “Who we are…” with “Our Teams” */}
      <Section eyebrow="Our teams" title="Our Teams">
        <CardGrid cards={teamCards} />
      </Section>

      {/* NOTE: “Our history” removed */}
    </div>
  );
}
