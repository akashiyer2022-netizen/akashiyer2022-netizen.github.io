import React from "react";
import { FiYoutube } from "react-icons/fi";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

export default function SocialBar() {
  return (
    <section className="bg-ink-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 flex items-center justify-between gap-6 flex-wrap">
        <div className="text-paper">
          <p className="text-sm font-semibold tracking-tight">
            Follow The Ursa Majors Group
          </p>
          <p className="text-xs text-paper/70 mt-1">
            YouTube • X • LinkedIn
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-paper/10 text-paper hover:bg-paper/15 transition"
            aria-label="YouTube"
          >
            <FiYoutube className="text-xl" />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-paper/10 text-paper hover:bg-paper/15 transition"
            aria-label="X"
          >
            <FaXTwitter className="text-lg" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-paper/10 text-paper hover:bg-paper/15 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="text-lg" />
          </a>
        </div>
      </div>
    </section>
  );
}
