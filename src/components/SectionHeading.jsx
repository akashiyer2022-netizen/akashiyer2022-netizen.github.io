export default function SectionHeading({ kicker, title, className = "" }) {
  return (
    <div className={className}>
      {kicker ? (
        <div className="text-xs uppercase tracking-[0.22em] text-ink/70">
          {kicker}
        </div>
      ) : null}
      <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tightest">
        {title}
      </h2>
    </div>
  );
}
