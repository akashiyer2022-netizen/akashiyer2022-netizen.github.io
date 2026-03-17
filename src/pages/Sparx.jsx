import React from "react";
import { NavLink } from "react-router-dom";
import heroImg from "../assets/hero.jpg";
import Section from "../components/Section.jsx";

export default function Sparx() {
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
            <span className="text-ink-900">Sparx</span>
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
                  The Ursa Majors Group Podcast Collection
                </p>

                <h1 className="mt-3 text-paper text-3xl sm:text-5xl font-semibold tracking-tight">
                  Ursa Sparx
                </h1>

                <p className="mt-3 text-paper/90 text-lg sm:text-xl font-medium">
                  Where Bright Minds Spark Brighter Futures
                </p>

                <div className="mt-6">
                  <a
                    href="https://www.youtube.com/@UrsaSparx"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full bg-paper text-ink-950 px-6 py-2.5 text-sm font-bold hover:bg-paper/90 transition"
                  >
                    Visit Our Youtube Channel!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Sparx */}
      <Section title="About Ursa Sparx" eyebrow="Ursa Sparx">
        <div className="mx-auto max-w-4xl text-center text-[15px] leading-7 text-ink-900/90">
          <p className="font-semibold">
            Ursa Sparx is The Ursa Majors Group's podcast collection — a
            platform where bright minds come together to explore the ideas,
            stories, and conversations shaping the future of STEM.
          </p>
          <p className="mt-4">
            Through in-depth discussions on STEM
            with scientists and engineers, Ursa Sparx
            brings you thought-provoking content designed to inspire, educate,
            and ignite curiosity.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="https://www.youtube.com/@UrsaSparx"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-ink-950 text-paper px-7 py-3 text-sm font-bold hover:bg-ink-900 transition"
            >
              Visit Our Youtube Channel!
            </a>
          </div>
        </div>
      </Section>

      {/* Episodes */}
      <Section title="Latest Episodes">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-muted font-semibold">Coming Soon!</p>
        </div>
      </Section>
    </div>
  );
}
