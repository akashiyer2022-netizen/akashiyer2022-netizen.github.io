import { Link } from "react-router-dom";

export default function FeatureCard({ title, blurb, to }) {
  return (
    <Link
      to={to}
      className="group block rounded-none border border-rule bg-paper p-6 transition hover:border-ink/40"
    >
      <div className="flex items-start justify-between gap-6">
        <div>
          <h3 className="text-lg font-semibold tracking-tightest group-hover:text-accent">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink/75">{blurb}</p>
        </div>
        <span className="text-sm text-ink/55 group-hover:text-ink">→</span>
      </div>
    </Link>
  );
}
