import type { Metadata } from "next";
import { getStudio } from "@/lib/data";
import StudioHero from "@/components/StudioHero";
import Folio from "@/components/Folio";
import Statement from "@/components/Statement";
import Frame from "@/components/Frame";
import SpecRow from "@/components/SpecRow";
import PhilosophyGrid from "@/components/PhilosophyGrid";
import PendingSlot from "@/components/PendingSlot";
import CollabCTA from "@/components/CollabCTA";

export const metadata: Metadata = {
  title: "Studio — thekarthik.io",
  description:
    "The director's statement: who Karthik Thiramdas is, how he thinks, how he works, and what he shoots and edits with.",
  alternates: { canonical: "/studio" },
  openGraph: {
    title: "Studio — thekarthik.io",
    description: "One creator. Every frame his own.",
    url: "/studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio — thekarthik.io",
    description: "One creator. Every frame his own.",
  },
};

export default function StudioPage() {
  const studio = getStudio();

  return (
    <main id="main-content">
      <StudioHero />

      {/* 01 — Who I Am */}
      <section className="bg-paper section-y">
        <div className="container-page max-w-2xl">
          <Folio index={studio.whoIAm.index} label={studio.whoIAm.label} />
          <Statement lines={studio.whoIAm.headline} emphasisIndex={0} className="mt-8" />
          <div className="mt-8 space-y-5 text-ink/70 leading-relaxed text-lg">
            {studio.whoIAm.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 02 — How I Think */}
      <PhilosophyGrid index={studio.howIThink.index} label={studio.howIThink.label} />

      {/* 03 — How I Approach Storytelling */}
      <section className="bg-paper section-y">
        <div className="container-page">
          <Folio index={studio.storytelling.index} label={studio.storytelling.label} />
          <div className="mt-8 grid md:grid-cols-2 gap-12 items-start">
            <Statement lines={studio.storytelling.headline} emphasisIndex={1} />
            <div className="space-y-5 text-ink/70 leading-relaxed">
              {studio.storytelling.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div className="mt-16 grid md:grid-cols-3 gap-x-12 gap-y-10">
            {studio.storytelling.pillars.map((pillar, i) => (
              <div key={pillar.title} className="border-t border-ink/15 pt-6">
                <span className="folio-index">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-xl mt-3">{pillar.title}</h3>
                <p className="mt-3 text-ink/60 leading-relaxed text-sm">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — How I Work */}
      <section className="bg-paper-dim section-y">
        <div className="container-page grid md:grid-cols-2 gap-16">
          <div>
            <Folio index={studio.workflow.index} label={studio.workflow.label} />
            <Statement lines={studio.workflow.headline} className="mt-8" />
            <p className="mt-6 text-ink/60 leading-relaxed max-w-sm">{studio.workflow.intro}</p>
          </div>
          <div className="flex items-center">
            <SpecRow items={studio.workflow.steps} />
          </div>
        </div>
      </section>

      {/* 05 — Gear */}
      <section className="bg-paper section-y">
        <div className="container-page">
          <Folio index={studio.gear.index} label={studio.gear.label} />
          <Statement lines={studio.gear.headline} emphasisIndex={0} className="mt-8" />
          <p className="mt-6 max-w-lg text-ink/60 leading-relaxed">{studio.gear.intro}</p>

          <div className="mt-14 grid md:grid-cols-3 gap-x-12 gap-y-12">
  {studio.gear.categories.map((category) =>
    category.items.length > 0 ? (
      <div
        key={category.name}
        className={
          category.name === "Camera / Mobile"
            ? "md:col-start-1 md:row-start-1"
            : category.name === "Stabilization"
            ? "md:col-start-2 md:row-start-1"
            : category.name === "Audio"
            ? "md:col-start-3 md:row-start-1"
            : category.name === "Lighting"
            ? "md:col-start-1 md:row-start-2"
            : category.name === "Storage"
            ? "md:col-start-3 md:row-start-2"
            : category.name === "Editing & Post"
            ? "md:col-start-3 md:row-start-3"
            : ""
        }
      >
        <h3 className="field-label text-ink/50 mb-4">
          {category.name}
        </h3>
        <SpecRow items={category.items} />
      </div>
    ) : (
      <div key={category.name}>
        <h3 className="field-label text-ink/50 mb-4">
          {category.name}
        </h3>
        <PendingSlot
          label="Not Yet Confirmed"
          note="Reserved for confirmed gear in this category — nothing invented in the meantime."
        />
      </div>
    )
  )}
</div>
        </div>
      </section>

      {/* 06 — What's In My Bag */}
      <section className="bg-paper-dim section-y">
        <div className="container-page max-w-2xl">
          <Folio index={studio.travelBag.index} label={studio.travelBag.label} />
          <Statement lines={studio.travelBag.headline} emphasisIndex={1} className="mt-8" />
          <p className="mt-6 text-ink/60 leading-relaxed">{studio.travelBag.intro}</p>
          <div className="mt-10">
            {studio.travelBag.items.length > 0 ? (
              <SpecRow items={studio.travelBag.items} />
            ) : (
              <PendingSlot
                label="Packing List Pending"
                note="A confirmed bag list will populate this section as backpack, luggage and accessory items — nothing filled in yet."
              />
            )}
          </div>
        </div>
      </section>

      {/* 07 — Behind the Work */}
      <section className="bg-paper section-y">
        <div className="container-page">
          <Folio index={studio.behindTheScenes.index} label={studio.behindTheScenes.label} />
          <Statement lines={studio.behindTheScenes.headline} className="mt-8 max-w-xl" />
          <p className="mt-6 max-w-lg text-ink/60 leading-relaxed">
            {studio.behindTheScenes.intro}
          </p>
          <div className="mt-14 grid md:grid-cols-3 gap-8">
            <Frame
              label="On Location"
              caption="Field, unedited."
              tone="stone"
              ratio="square"
              src="/thekarthik.io/images/studio/behind-work-01-temp.jpg"
            />
            <Frame
              label="At the Cut"
              caption="Premiere Pro, mid-edit."
              tone="brass"
              ratio="square"
              src="/thekarthik.io/images/studio/behind-work-02-temp.jpg"
            />
            <Frame
              label="Color & Sound"
              caption="Grade and score pass."
              tone="oxblood"
              ratio="square"
              src="/thekarthik.io/images/studio/behind-work-03-temp.jpg"
            />
          </div>
        </div>
      </section>

      <CollabCTA
        index="08"
        label={studio.cta.label}
        headline={studio.cta.headline}
        subtext={studio.cta.subtext}
        primaryLabel={studio.cta.primaryLabel}
        primaryHref={studio.cta.primaryHref}
        secondaryLabel={studio.cta.secondaryLabel}
        secondaryHref={studio.cta.secondaryHref}
      />
    </main>
  );
}
