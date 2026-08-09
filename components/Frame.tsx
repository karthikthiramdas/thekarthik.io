import Image from "next/image";

type Ratio = "cinematic" | "portrait" | "square" | "full";

type Props = {
  /** Short line naming what belongs in this slot once shot — shown only in
   *  the unphotographed "study" state, never over a real photograph. */
  label: string;
  caption?: string;
  tone?: "brass" | "oxblood" | "stone";
  ratio?: Ratio;
  className?: string;
  src?: string;
  priority?: boolean;
  sizes?: string;
};

const ratioClass: Record<Ratio, string> = {
  cinematic: "aspect-[21/9]",
  portrait: "aspect-[4/5]",
  square: "aspect-square",
  full: "aspect-auto h-full",
};

const tones: Record<string, string> = {
  brass: "from-[#241f18] via-[#171410] to-[#0b0d0f]",
  oxblood: "from-[#221012] via-[#180d0e] to-[#0b0d0f]",
  stone: "from-[#1c1b18] via-[#151412] to-[#0b0d0f]",
};

/**
 * The site's single photography module — three fixed editorial ratios used
 * consistently everywhere an image appears. Given real photography, it
 * renders through next/image. Given none yet, it renders as a deliberately
 * considered "study" (a quiet toned gradient with a folio-style corner
 * label) rather than an empty placeholder box — the frame should read as
 * "photograph reserved here," not "unfinished."
 */
export default function Frame({
  label,
  caption,
  tone = "stone",
  ratio = "portrait",
  className = "",
  src,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
}: Props) {
  return (
    <figure className={className}>
      <div
        role={src ? undefined : "img"}
        aria-label={src ? undefined : caption ? `${caption} — reserved for photography` : `${label} — reserved for photography`}
        className={`relative w-full overflow-hidden rounded-sm ${ratioClass[ratio]} ${
          src ? "bg-ink" : `frame-study bg-gradient-to-br ${tones[tone]}`
        }`}
      >
        {src ? (
          <Image
            src={src}
            alt={caption || label}
            fill
            sizes={sizes}
            priority={priority}
            loading={priority ? undefined : "lazy"}
            className="object-cover"
          />
        ) : (
          <span
            aria-hidden
            className="field-label absolute bottom-4 left-4 !text-paper/25 normal-case tracking-widest"
          >
            {label}
          </span>
        )}
        <div className="absolute inset-0 border border-paper/10 pointer-events-none" />
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm italic text-ink/60">{caption}</figcaption>
      )}
    </figure>
  );
}
