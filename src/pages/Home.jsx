import React from "react";
import heroImg from "../assets/hero.jpg";
import Section from "../components/Section.jsx";

function CortexCard({ title, subtitle, date, href, cta }) {
  return (
    <div className="rounded-2xl border border-line bg-paper shadow-soft overflow-hidden flex flex-col">
      <div className="h-40 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950" />
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold tracking-tight text-ink-950 text-center">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-muted text-center">{subtitle}</p>

        <p className="mt-4 text-xs font-semibold tracking-[0.14em] uppercase text-muted text-center">
          {date}
        </p>

        <div className="mt-6 flex justify-center">
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full bg-ink-950 text-paper px-5 py-2 text-sm font-bold hover:bg-ink-900 transition"
          >
            {cta}
          </a>
        </div>
      </div>
    </div>
  );
}

function PartnerCard({ name, href }) {
  return (
    <div className="rounded-2xl border border-line bg-paper shadow-soft p-6 flex flex-col">
      <div className="h-16 rounded-xl bg-ink-900/5" />
      <h3 className="mt-4 text-base font-semibold text-ink-950 text-center">{name}</h3>
      <div className="mt-5 flex justify-center">
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex rounded-full border border-line px-5 py-2 text-sm font-semibold hover:bg-ink-900/5 transition"
        >
          Visit Them
        </a>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative">
        <div className="relative h-[420px] sm:h-[520px] overflow-hidden">
          <img
            src={heroImg}
            alt="Space background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/35 to-transparent" />

          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto max-w-6xl w-full px-4 sm:px-6 lg:px-8 pb-14 sm:pb-20">
              <div className="max-w-3xl text-left">
                <h1 className="text-paper text-4xl sm:text-6xl font-semibold tracking-tight">
                  The Ursa Majors Group
                </h1>
                <p className="mt-4 text-paper/90 text-lg sm:text-2xl font-medium">
                  Educating everyone, everywhere
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Podcasts */}
      <Section title="Our latest podcasts from the Podcast Center">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-muted font-semibold">Coming Soon!</p>
        </div>
      </Section>

      {/* Latest from Ursa Cortex */}
      <Section title="Latest From Ursa Cortex">
        <div className="grid gap-6 md:grid-cols-3">
          <CortexCard
            title="New Minds, New Machines"
            subtitle="How brain–computer interfaces are redefining what it means to think, feel, and do"
            date="November 2, 2025"
            href="https://www.theursamajorsgroup.org/new-minds-new-machines"
            cta="Click Here"
          />
          <CortexCard
            title="Saving Low Earth Orbit"
            subtitle="Why debris threatens space—and how we fix it"
            date="October 31, 2025"
            href="https://www.theursamajorsgroup.org/saving-low-earth-orbit"
            cta="Read More"
          />
          <CortexCard
            title="New Space Age"
            subtitle="Companies like SpaceX and Axiom are changing how we reach orbit"
            date="October 30, 2025"
            href="https://www.theursamajorsgroup.org/new-space-age"
            cta="Read More"
          />
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="https://www.theursamajorsgroup.org/cortex"
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full bg-ink-950 text-paper px-7 py-3 text-sm font-bold hover:bg-ink-900 transition"
          >
            Visit Ursa Cortex
          </a>
        </div>
      </Section>

      {/* Partners */}
      <Section title="Our partners">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <PartnerCard name="Young Women's Prep Network" href="https://youngwomensprep.org" />
          <PartnerCard
            name="The Steminist Movement at Cornell University"
            href="https://steministmovement.wixsite.com"
          />
          <PartnerCard
            name="Catholic Charities Tompkins/Tioga"
            href="https://www.catholiccharitiestt.org"
          />
          <PartnerCard
            name="Ithaca City School District"
            href="https://www.ithacacityschools.org"
          />
        </div>
      </Section>

      {/* Quote */}
      <Section>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink-950">
            Live as if you were to die tomorrow, learn as if you were to live forever
          </p>
          <p className="mt-4 text-sm font-semibold text-muted">~ Mahatma Gandhi</p>
        </div>
      </Section>
    </div>
  );
}
