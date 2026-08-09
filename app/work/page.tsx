import type { Metadata } from "next";
import Link from "next/link";
import { getWork } from "@/lib/data";
import PageHero from "@/components/PageHero";
import Folio from "@/components/Folio";
import Statement from "@/components/Statement";
import Frame from "@/components/Frame";
import CollabCTA from "@/components/CollabCTA";

export const metadata: Metadata = {
  title: "Work — thekarthik.io",
  description:
    "Selected work and real collaborations across aviation, hospitality and destination filmmaking — proof, not a pitch.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Work — thekarthik.io",
    description: "Proof, not a pitch.",
    url: "/work",
  },
};

const statusStyle: Record<string, { dot: string; label: string }> = {
  work: { dot: "bg-brass", label: "Completed Work" },
  collaboration: { dot: "bg-oxblood", label: "Completed Collaboration" },
  open: { dot: "bg-stone", label: "Open Category" },
};

export default function WorkPage() {
  const work = getWork();

  return (
    <main id="main-content">
      <PageHero
        index="—"
        label={work.hero.label}
        context={work.hero.context}
        title={work.hero.title}
        intro={work.hero.intro}
      />

      {/* 01 — Breadth map */}
      <section className="bg-paper section-y">
        <div className="container-page">
          <Folio index="01" label="Breadth" />
          <Statement lines={work.breadth.headline} className="mt-8 max-w-2xl" />
          <p className="mt-6 max-w-lg text-ink/60 leading-relaxed">{work.breadth.intro}</p>

          <div className="mt-14 grid md:grid-cols-3 gap-x-10 gap-y-12">
            {work.breadth.categories.map((cat) => {
              const style = statusStyle[cat.status];
              return (
                <div key={cat.name} className="border-t border-ink/15 pt-6">
                  <div className="flex items-center gap-2.5">
                    <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
                    <span className="field-label text-ink/40">{style.label}</span>
                  </div>
                  <h3 className="font-display text-2xl mt-3">{cat.name}</h3>
                  <p className="mt-3 text-ink/60 leading-relaxed text-sm max-w-xs">{cat.note}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 02 — Selected work (real aviation photography) */}
      <section className="bg-paper-dim section-y">
        <div className="container-page">
          <Folio index="02" label="Selected Work" />
          <Statement lines={work.selectedWork.headline} className="mt-8" />
          <p className="mt-6 max-w-lg text-ink/60 leading-relaxed">{work.selectedWork.intro}</p>

          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {work.selectedWork.items.map((item) => (
              <Frame
                key={item.id}
                label={item.category}
                caption={item.caption}
                tone="brass"
                ratio="portrait"
                src={item.image ?? undefined}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 03 — Collaborations (the two real case studies) */}
      <section className="bg-paper section-y">
        <div className="container-page">
          <Folio index="03" label="Collaborations" />
          <Statement lines={work.collaborations.headline} className="mt-8" />
          <p className="mt-6 max-w-lg text-ink/60 leading-relaxed">{work.collaborations.intro}</p>

          <div className="mt-14 grid md:grid-cols-2 gap-10">
            {work.collaborations.items.map((collab) => (
              <Link key={collab.slug} href={collab.href} className="group block">
                <Frame
                  label={collab.category}
                  tone="oxblood"
                  ratio="cinematic"
                  src={collab.image ?? undefined}
                  className="transition-opacity group-hover:opacity-90"
                />
                <div className="mt-6 flex items-start justify-between gap-4">
                  <div>
                    <span className="field-label text-oxblood">{collab.status}</span>
                    <h3 className="font-display text-2xl mt-2 group-hover:text-oxblood transition-colors">
                      {collab.name}
                    </h3>
                    <p className="mt-2 text-ink/60 leading-relaxed text-sm max-w-sm">
                      {collab.summary}
                    </p>
                  </div>
                  <span className="field-label text-ink/40 shrink-0 mt-1 group-hover:text-ink transition-colors">
                    View &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CollabCTA
        index="04"
        label={work.cta.label}
        headline={work.cta.headline}
        subtext={work.cta.subtext}
        primaryLabel={work.cta.primaryLabel}
        primaryHref={work.cta.primaryHref}
        secondaryLabel={work.cta.secondaryLabel}
        secondaryHref={work.cta.secondaryHref}
      />
    </main>
  );
}
