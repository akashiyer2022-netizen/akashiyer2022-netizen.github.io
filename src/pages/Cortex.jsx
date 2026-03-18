import React from "react";
import { NavLink } from "react-router-dom";
import heroImg from "../assets/hero.jpg";
import Section from "../components/Section.jsx";
import { articles } from "../data/cortexArticles.js";

function ArticleCard({ slug, title, subtitle, date }) {
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
          <NavLink
            to={`/cortex/${slug}`}
            className="inline-flex items-center rounded-full bg-ink-950 text-paper px-5 py-2 text-sm font-bold hover:bg-ink-900 transition"
          >
            Read More
          </NavLink>
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
            <ArticleCard key={article.slug} {...article} />
          ))}
        </div>
      </Section>
    </div>
  );
}
