type StatementProps = {
  lines: string[];
  /** Index of the single line allowed to italicize, e.g. for one emotional
   *  turn in the statement. Omit entirely on most Statements — italic means
   *  nothing if it appears on every headline on the site. */
  emphasisIndex?: number;
  size?: "lg" | "xl";
  className?: string;
  as?: "h1" | "h2" | "p";
  /** Set true on dark (ink) backgrounds so the emphasis line stays legible —
   *  oxblood reads as the "Leica red" mark on paper, but needs brass-bright
   *  to hold contrast against ink. */
  dark?: boolean;
};

/**
 * The site's large declarative headline block. One component, used on every
 * page, so type scale and italic discipline stay consistent instead of being
 * hand-tuned per section.
 */
export default function Statement({
  lines,
  emphasisIndex,
  size = "lg",
  className = "",
  as: Tag = "h2",
  dark = false,
}: StatementProps) {
  const scale =
    size === "xl"
      ? "text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.98]"
      : "text-[clamp(2rem,4vw,3.25rem)] leading-[1.05]";
  const emphasisColor = dark ? "text-brass-bright" : "text-oxblood";

  return (
    <Tag className={`font-display text-balance font-normal ${scale} ${className}`}>
      {lines.map((line, i) => (
        <span key={i} className="block">
          {i === emphasisIndex ? (
            <em className={`italic ${emphasisColor}`}>{line}</em>
          ) : (
            line
          )}
        </span>
      ))}
    </Tag>
  );
}
