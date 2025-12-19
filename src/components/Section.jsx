import React from "react";

export default function Section({ eyebrow, title, children, className = "" }) {
  return (
    <section className={`py-12 sm:py-14 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {(eyebrow || title) && (
          <div className="text-center">
            {eyebrow ? (
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-muted">
                {eyebrow}
              </p>
            ) : null}

            {title ? (
              <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">
                {title}
              </h2>
            ) : null}
          </div>
        )}

        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}
