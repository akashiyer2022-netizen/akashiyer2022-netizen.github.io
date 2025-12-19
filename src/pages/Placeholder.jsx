import React from "react";

export default function Placeholder({ title }) {
  return (
    <div className="pt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14">
        <p className="text-sm text-muted">Placeholder page</p>
        <h1 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-muted">
          Hook this route up to real content when you’re ready.
        </p>
      </div>
    </div>
  );
}
