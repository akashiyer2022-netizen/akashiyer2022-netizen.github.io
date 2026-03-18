import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { getArticle } from "../data/cortexArticles.js";

function renderBlock(block, i) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          key={i}
          className="mt-10 mb-3 text-2xl font-semibold tracking-tight text-ink-950"
        >
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3
          key={i}
          className="mt-7 mb-2 text-lg font-semibold tracking-tight text-ink-950"
        >
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p key={i} className="mt-4 text-[15px] leading-7 text-ink-900/90">
          {block.text}
        </p>
      );
    case "source":
      return (
        <p key={i} className="mt-2 text-xs font-semibold tracking-wide text-muted italic">
          {block.text}
        </p>
      );
    case "funfact":
      return (
        <div
          key={i}
          className="mt-8 rounded-2xl border border-line bg-ink-950 px-6 py-5"
        >
          <p className="text-xs font-semibold tracking-[0.16em] uppercase text-paper/60 mb-2">
            Fun Fact
          </p>
          <p className="text-sm leading-6 text-paper/90">{block.text}</p>
        </div>
      );
    case "bullets":
      return (
        <ul key={i} className="mt-4 space-y-2 pl-5 list-disc marker:text-muted">
          {block.items.map((item, j) => (
            <li key={j} className="text-[15px] leading-7 text-ink-900/90">
              {item}
            </li>
          ))}
        </ul>
      );
    default:
      return null;
  }
}

export default function ArticlePage() {
  const { slug } = useParams();
  const article = getArticle(slug);

  if (!article) {
    return (
      <div className="pt-16">
        <div className="border-b border-line">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4">
            <nav className="text-xs text-muted flex items-center gap-2">
              <NavLink to="/" className="hover:text-ink-950">Home</NavLink>
              <span>/</span>
              <NavLink to="/cortex" className="hover:text-ink-950">Cortex</NavLink>
              <span>/</span>
              <span className="text-ink-900">Not Found</span>
            </nav>
          </div>
        </div>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <p className="text-2xl font-semibold text-ink-950">Article not found</p>
          <NavLink
            to="/cortex"
            className="mt-6 inline-flex rounded-full bg-ink-950 text-paper px-7 py-3 text-sm font-bold hover:bg-ink-900 transition"
          >
            Back to Cortex
          </NavLink>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Breadcrumb */}
      <div className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-xs text-muted flex items-center gap-2">
            <NavLink to="/" className="hover:text-ink-950">Home</NavLink>
            <span>/</span>
            <NavLink to="/cortex" className="hover:text-ink-950">Cortex</NavLink>
            <span>/</span>
            <span className="text-ink-900 truncate max-w-[200px]">{article.title}</span>
          </nav>
        </div>
      </div>

      {/* Article header */}
      <div className="bg-gradient-to-b from-ink-950 to-ink-800 py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-paper/60 text-xs font-semibold tracking-[0.18em] uppercase">
            Ursa Cortex
          </p>
          <h1 className="mt-4 text-paper text-3xl sm:text-4xl font-semibold tracking-tight">
            {article.title}
          </h1>
          <p className="mt-3 text-paper/80 text-lg">{article.subtitle}</p>
          <div className="mt-6 flex items-center justify-center gap-4 text-xs font-semibold tracking-wide text-paper/50 uppercase">
            <span>{article.date}</span>
            <span aria-hidden="true">·</span>
            <span>By {article.author}</span>
          </div>
        </div>
      </div>

      {/* Article body */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {article.content.map((block, i) => renderBlock(block, i))}

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-line">
          <NavLink
            to="/cortex"
            className="inline-flex items-center gap-2 rounded-full bg-ink-950 text-paper px-6 py-3 text-sm font-bold hover:bg-ink-900 transition"
          >
            ← Back to Cortex
          </NavLink>
        </div>
      </div>
    </div>
  );
}
