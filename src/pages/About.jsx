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
      {/* Breadcrumb */}
      <div className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-xs text-muted flex items-center gap-2">
            <NavLink to="/" className="hover:text-ink-950">
              Home
            </NavLink>
            <span aria-hidden="true">/</span>
            <span className="text-ink-900">About us</span>
          </nav>
        </div>
      </div>

      {/* Hero: LEFT aligned text like Ri */}
      <section className="relative">
        <div className="relative h-[380px] sm:h-[460px] overflow-hidden">
          <img
            src={heroImg}
            alt="Space background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/75 via-ink-950/35 to-transparent" />

          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto max-w-6xl w-full px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14">
              <div className="max-w-3xl text-left">
                <h1 className="text-paper text-3xl sm:text-5xl font-semibold tracking-tight">
                  Education comes through infinite mediums,
                </h1>
                <p className="mt-3 text-paper/90 text-lg sm:text-xl font-medium">
                  We hope to provide at least a few of those at the highest
                  quality
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story (centered paragraphs) */}
      <Section eyebrow="About" title="Our story">
        <div className="mx-auto max-w-3xl text-center text-[15px] leading-7 text-ink-900/90 space-y-4">
          <p>
            Founded in 2020, The Ursa Majors Group is a beacon of innovation and
            inspiration in the realm of education and beyond. What began as a
            humble endeavor within the Education Division has blossomed into a
            dynamic organization with a multifaceted approach to learning and
            engagement.
          </p>
          <p>
            At our core, we are driven by a singular mission: to empower students
            of all ages with meaningful and enriching learning experiences. With
            a focus on aerospace, physics, and astronomy, our Education Division
            seeks to instill a lifelong love for these disciplines through
            imaginative storytelling, interactive lessons, and hands-on
            exploration.
          </p>
          <p>
            As we continue to expand our horizons, we have established additional
            avenues for learning and growth. Our Projects Division provides
            middle and high school students with the opportunity to pursue their
            passions and explore career interests under the guidance of expert
            mentors. Beyond astronomy, physics, and aerospace, our Projects
            Division encompasses all STEM fields, ensuring that students have the
            opportunity to delve into a wide range of disciplines and interests.
          </p>
          <p>
            Through real-world projects and technical experiences, we aim to
            equip students with the skills and confidence to thrive in higher
            education and beyond.
          </p>
          <p>
            In our Podcast Center, we invite listeners to embark on a journey of
            discovery, engaging with industry and academia leaders in STEM fields
            through insightful conversations and thought-provoking discussions.
            Our podcasts serve as a platform for deepening understanding,
            fostering dialogue, and igniting curiosity across a diverse range of
            topics.
          </p>
          <p>
            Complementing our podcast endeavors, our Blogger division keeps our
            community informed and inspired with the latest developments in STEM
            fields. Through engaging content and thoughtfully curated resources,
            we strive to cultivate a vibrant ecosystem of learning and
            collaboration.
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

      {/* Rushil section: bio card vertically centered with the image */}
      <Section
        eyebrow="Founder"
        title="Rushil Sharan"
        className="bg-slate-50 border-y border-line"
      >
        <div className="grid gap-8 lg:grid-cols-12 items-stretch">
          {/* Image */}
          <div className="lg:col-span-5 flex">
            <div className="relative w-full rounded-2xl overflow-hidden border border-line shadow-soft bg-paper">
              <img
                src={rushilImg}
                alt="Rushil Sharan"
                className="w-full aspect-[4/5] object-cover object-top"
              />

              {/* Caption overlay so it doesn't change column height */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4">
                <p className="text-sm font-semibold text-white">
                  Rushil Sharan{" "}
                  <span className="font-normal text-white/80">
                    · Founder and CEO
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Bio card - vertically centered */}
          <div className="lg:col-span-7 flex">
            <div className="w-full rounded-2xl border border-line bg-paper p-6 sm:p-8 shadow-soft flex flex-col justify-center">
              <p className="text-sm font-semibold text-ink-950 text-center">
                Founder and Chief Executive Officer
                <span className="text-muted font-medium">
                  {" "}
                  · rushil.sharan@gmail.com
                </span>
              </p>

              <div className="mt-5 space-y-4 text-[15px] leading-7 text-ink-900/90 text-center">
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

              <div className="mt-7 flex flex-wrap gap-3 justify-center">
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
                  to="/get-involved"
                >
                  Get involved
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Our Teams */}
      <Section eyebrow="Our teams" title="Our teams">
        <CardGrid cards={teamCards} />
      </Section>
    </div>
  );
}
