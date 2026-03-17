import React from "react";
import { NavLink } from "react-router-dom";
import heroImg from "../assets/hero.jpg";
import Section from "../components/Section.jsx";

const articles = [
  {
    title: "Robotic Bronchoscopy Is Moving Earlier",
    subtitle: "How precision tools are reshaping lung cancer diagnosis",
    date: "February 10, 2026",
    href: "https://www.theursamajorsgroup.org/robotic-bronchoscopy-is-moving-earlier",
  },
  {
    title: "Commercial Space Stations Are Getting Real",
    subtitle: "How CLD is moving from concepts to execution",
    date: "January 29, 2026",
    href: "https://www.theursamajorsgroup.org/commercial-space-stations-are-getting-real",
  },
  {
    title: "Robots Are Leaving the Lab",
    subtitle: "How unstructured work is reshaping autonomy",
    date: "January 12, 2026",
    href: "https://www.theursamajorsgroup.org/robots-are-leaving-the-lab",
  },
  {
    title: "Robotaxis Are Not Just a Tech Story",
    subtitle: "They are a trust, policy, and street-level reality check",
    date: "January 5, 2026",
    href: "https://www.theursamajorsgroup.org/robotaxis-are-not-just-a-tech-story",
  },
  {
    title: "What College Doesn't Teach Engineers",
    subtitle: "What is expected of engineers",
    date: "December 29, 2024",
    href: "https://www.theursamajorsgroup.org/what-college-doesnt-teach-engineers",
  },
  {
    title: "Satellite Megaconstellations",
    subtitle: "Connectivity in orbit reshapes astronomy and sustainability",
    date: "December 2025",
    href: "https://www.theursamajorsgroup.org/satellite-megaconstellations",
  },
  {
    title: "AI & Robotics in Space",
    subtitle: "Autonomy Moves From the Lab to the ISS",
    date: "December 15, 2025",
    href: "https://www.theursamajorsgroup.org/ai-robotics-in-space",
  },
  {
    title: "New Minds, New Machines",
    subtitle: "How brain–computer interfaces are redefining what it means to think, feel, and do",
    date: "November 2, 2025",
    href: "https://www.theursamajorsgroup.org/new-minds-new-machines",
  },
  {
    title: "Saving Low Earth Orbit",
    subtitle: "Why debris threatens space—and how we fix it",
    date: "October 31, 2025",
    href: "https://www.theursamajorsgroup.org/saving-low-earth-orbit",
  },
  {
    title: "New Space Age",
    subtitle: "Companies like SpaceX and Axiom are changing how we reach orbit",
    date: "October 30, 2025",
    href: "https://www.theursamajorsgroup.org/new-space-age",
  },
  {
    title: "The Power of Renewal",
    subtitle: "Past, Present, and Future of Renewable Energy",
    date: "October 28, 2025",
    href: "https://www.theursamajorsgroup.org/the-power-of-renewal",
  },
  {
    title: "Mars in Houston",
    subtitle: "NASA's Year-Long Habitat Simulation",
    date: "September 10, 2025",
    href: "https://www.theursamajorsgroup.org/mars-in-houston",
  },
  {
    title: "Aging Among the Stars",
    subtitle: "Long spaceflights can accelerate how cells age",
    date: "September 8, 2025",
    href: "https://www.theursamajorsgroup.org/aging-among-the-stars",
  },
];

function ArticleCard({ title, subtitle, date, href }) {
  return (
    <div className="rounded-2xl border border-line bg-paper shadow-soft overflow-hidden flex flex-col">
      <div className="h-40 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950" />
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold tracking-tight text-ink-950">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-muted flex-1">{subtitle}</p>
        <p className="mt-4 text-xs font-semibold tracking-[0.14em] uppercase text-muted">
          {date}
        </p>
        <div className="mt-5">
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full bg-ink-950 text-paper px-5 py-2 text-sm font-bold hover:bg-ink-900 transition"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Cortex() {
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
            <span className="text-ink-900">Cortex</span>
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
                  The Ursa Majors Group Blog Hub
                </p>

                <h1 className="mt-3 text-paper text-3xl sm:text-5xl font-semibold tracking-tight">
                  Ursa Cortex
                </h1>

                <p className="mt-3 text-paper/90 text-lg sm:text-xl font-medium">
                  Exploring Ideas at the Core of STEM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <Section title="Articles" eyebrow="Ursa Cortex">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.href} {...article} />
          ))}
        </div>
      </Section>
    </div>
  );
}
