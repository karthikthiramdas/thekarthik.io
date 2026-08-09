import Link from "next/link";
import Folio from "./Folio";
import Statement from "./Statement";
import Frame from "./Frame";
import SpecRow from "./SpecRow";
import PendingSlot from "./PendingSlot";
import CollabCTA from "./CollabCTA";

type Spec = { label: string; value: string };
type Pending = { label: string; note: string };

type TextSection = {
  headline: string[];
  paragraphs?: string[];
  facts?: Spec[] | null;
  specs?: Spec[];
  items?: string[];
  intro?: string;
  pending?: Pending;
};

type CaseStudyData = {
  slug: string;
  client: string;
  category: string;
  status: string;
  hero: { title: string[]; subtitle: string; image: string | null };
  brief: TextSection;
  direction: TextSection;
  story: TextSection;
  production: TextSection;
  deliverables: TextSection;
  finalWork: {
    headline: string[];
    pending?: Pending;
    images?: { src: string; caption?: string }[];
    reels?: { label: string; url: string }[];
  };
  testimonial: { headline: string[]; pending?: Pending };
  closingFrame: { line: string };
  nextSlug: string;
};

const order: { key: keyof CaseStudyData; index: string }[] = [
  { key: "brief", index: "01" },
  { key: "direction", index: "02" },
  { key: "story", index: "03" },
  { key: "production", index: "04" },
  { key: "deliverables", index: "05" },
];

export default function CaseStudy({
  data,
  nextClient,
}: {
  data: CaseStudyData;
  nextClient: { name: string; href: string };
}) {
  return (
    <main id="main-content">
      {/* Hero */}
      <section className="relative bg-ink text-paper min-h-[80vh] flex flex-col justify-end overflow-hidden">
        {data.hero.image ? (
          <Frame
            label={data.client}
            ratio="full"
            src={data.hero.image}
            priority
            className="absolute inset-0 h-full [&>div]:h-full [&>div]:aspect-auto [&>div]:rounded-none"
          />
        ) : (
          <div className="absolute inset-0 frame-study bg-gradient-to-br from-[#241f18] via-[#171410] to-[#0b0d0f]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        <div className="container-page relative z-10 pb-20 pt-40">
          <Folio index="—" label={data.status} context={data.category} dark />
          <h1 className="font-display text-balance mt-8 text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.98]">
            {data.hero.title.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-md text-paper/60 text-lg leading-relaxed">
            {data.hero.subtitle}
          </p>
        </div>
      </section>

      {order.map(({ key, index }) => {
        const section = data[key] as TextSection;
        const alt = index === "02" || index === "04";
        return (
          <section key={key} className={`${alt ? "bg-paper-dim" : "bg-paper"} section-y`}>
            <div className="container-page">
              <Folio index={index} label={section.headline[0]} />
              {section.headline.length > 1 && (
                <Statement lines={section.headline.slice(1)} className="mt-8 max-w-2xl" />
              )}

              {section.pending ? (
                <div className="mt-10 max-w-md">
                  <PendingSlot label={section.pending.label} note={section.pending.note} />
                </div>
              ) : (
                <div className="mt-8 grid md:grid-cols-2 gap-12 items-start">
                  <div className="space-y-5 text-ink/70 leading-relaxed max-w-lg">
                    {section.intro && <p className="text-ink/80">{section.intro}</p>}
                    {section.paragraphs?.map((p, i) => <p key={i}>{p}</p>)}
                    {section.items && (
                      <ul className="space-y-3 pt-2">
                        {section.items.map((item) => (
                          <li key={item} className="flex items-baseline gap-3">
                            <span className="h-1 w-1 rounded-full bg-brass shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  {(section.facts || section.specs) && (
                    <SpecRow items={(section.facts ?? section.specs) as Spec[]} />
                  )}
                </div>
              )}
            </div>
          </section>
        );
      })}

      {/* Final Work */}
      <section className="bg-ink text-paper section-y">
        <div className="container-page">
          <Folio index="06" label={data.finalWork.headline[0]} dark />
          {data.finalWork.pending && (
            <div className="mt-10 max-w-md">
              <div className="border border-dashed border-paper/20 rounded-sm px-6 py-8 text-center">
                <span className="field-label text-paper/40">{data.finalWork.pending.label}</span>
                <p className="mt-3 text-paper/50 text-sm max-w-sm mx-auto">
                  {data.finalWork.pending.note}
                </p>
              </div>
            </div>
          )}
          {data.finalWork.images && data.finalWork.images.length > 0 && (
            <div className="mt-14 grid md:grid-cols-3 gap-8">
              {data.finalWork.images.map((img) => (
                <figure key={img.src}>
                  <Frame label={data.client} caption={img.caption} tone="oxblood" ratio="portrait" src={img.src} className="[&_figcaption]:hidden" />
                  {img.caption && (
                    <figcaption className="mt-3 text-sm italic text-paper/50">{img.caption}</figcaption>
                  )}
                </figure>
              ))}
            </div>
          )}
          {data.finalWork.reels && data.finalWork.reels.length > 0 && (
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
              {data.finalWork.reels.map((reel) => (
                <a
                  key={reel.url}
                  href={reel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="field-label !text-brass-bright hover:!text-paper transition-colors inline-flex items-center gap-2"
                >
                  {reel.label.toUpperCase()} &rarr;
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Testimonial */}
      {data.testimonial.pending && (
        <section className="bg-paper section-y">
          <div className="container-page max-w-lg">
            <Folio index="07" label={data.testimonial.headline[0]} />
            <div className="mt-10">
              <PendingSlot
                label={data.testimonial.pending.label}
                note={data.testimonial.pending.note}
              />
            </div>
          </div>
        </section>
      )}

      {/* Closing Frame */}
      <section className="bg-ink text-paper py-28 flex items-center justify-center">
        <p className="font-display italic text-2xl md:text-3xl text-brass-bright">
          {data.closingFrame.line}
        </p>
      </section>

      {/* Next Case Study / Contact */}
      <section className="bg-paper section-y border-t border-ink/10">
        <div className="container-page flex flex-wrap items-center justify-between gap-8">
          <div>
            <span className="field-label text-ink/40">Next Case Study</span>
            <Link
              href={nextClient.href}
              className="block mt-3 font-display text-3xl hover:text-oxblood transition-colors"
            >
              {nextClient.name} &rarr;
            </Link>
          </div>
          <Link
            href="/thekarthik.io/contact/"
            className="field-label !text-ink/50 hover:!text-ink transition-colors"
          >
            Or start a conversation &rarr;
          </Link>
        </div>
      </section>

      <CollabCTA
        index="08"
        label="Let's Work Together"
        headline="See how this same discipline applies to your brand."
        primaryLabel="View Industries"
        primaryHref="/industries"
      />
    </main>
  );
}
