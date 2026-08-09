import type { Metadata } from "next";
import Link from "next/link";
import { getMediaKit, getStats, getWork } from "@/lib/data";
import { formatAsOf } from "@/lib/format";
import PageHero from "@/components/PageHero";
import Folio from "@/components/Folio";
import Statement from "@/components/Statement";
import Frame from "@/components/Frame";
import SpecRow from "@/components/SpecRow";
import StatStrip from "@/components/StatStrip";
import PendingSlot from "@/components/PendingSlot";
import CollabCTA from "@/components/CollabCTA";

export const metadata: Metadata = {
  title: "Media Kit — thekarthik.io",
  description:
    "The media kit for Karthik Thiramdas — positioning, audience, performance, content capabilities, industries, selected work, real collaborations, services and partnership structures.",
  alternates: { canonical: "/media-kit" },
  openGraph: {
    title: "Media Kit — thekarthik.io",
    description: "Who is Karthik. Who watches. What can he create. How to work with him.",
    url: "/media-kit",
  },
  twitter: {
    card: "summary_large_image",
    title: "Media Kit — thekarthik.io",
    description: "Who is Karthik. Who watches. What can he create. How to work with him.",
  },
};

export default function MediaKitPage() {
  const mk = getMediaKit();
  const stats = getStats();
  const work = getWork();

  return (
    <main id="main-content">
      <PageHero
        index="—"
        label={mk.hero.label}
        context={mk.hero.context}
        title={mk.hero.title}
        intro={mk.hero.intro}
      />

      {/* 01 — Positioning */}
      <section className="bg-paper section-y">
        <div className="container-page max-w-2xl">
          <Folio index={mk.positioning.index} label={mk.positioning.label} />
          <Statement lines={mk.positioning.headline} emphasisIndex={1} className="mt-8" />
          <div className="mt-8 space-y-5 text-ink/70 leading-relaxed text-lg">
            {mk.positioning.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 02 — About Karthik */}
      <section className="bg-paper-dim section-y">
        <div className="container-page grid md:grid-cols-2 gap-16 items-start">
          <div>
            <Folio index={mk.about.index} label={mk.about.label} />
            <Statement lines={mk.about.headline} className="mt-8" />
          </div>
          <div>
            <div className="space-y-5 text-ink/70 leading-relaxed">
              {mk.about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <Link
              href={mk.about.href}
              className="field-label !text-ink/50 hover:!text-ink transition-colors mt-6 inline-block"
            >
              {mk.about.linkLabel} &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 03 — Audience */}
      <StatStrip index="03" label="Audience" />

      {/* 04 — Performance */}
      <section className="bg-paper section-y">
        <div className="container-page">
          <Folio index="04" label="Performance" context={`As of ${formatAsOf(stats.asOf)}`} />
          <Statement lines={[stats.performanceSection.headline]} className="mt-8 max-w-2xl" />
          <div className="mt-12 max-w-3xl">
            <SpecRow
              items={stats.performance.map((p) => ({
                label: p.label,
                value: `${p.value.toLocaleString("en-IN")}${p.suffix}`,
              }))}
              columns={2}
            />
          </div>
          <p className="mt-8 max-w-2xl text-ink/50 text-sm leading-relaxed italic">
            {stats.previousResults.note}
          </p>
        </div>
      </section>

      {/* 05 — Audience Demographics & Geography */}
      <section className="bg-paper section-y">
        <div className="container-page">
          <Folio
            index={mk.demographicsGeography.index}
            label={mk.demographicsGeography.label}
            context={`As of ${formatAsOf(stats.asOf)}`}
          />
          <Statement lines={mk.demographicsGeography.headline} emphasisIndex={1} className="mt-8 max-w-2xl" />

          <div className="mt-12 grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="field-label text-ink/50 mb-4">Age & Gender</h3>
              <SpecRow
                items={[
                  ...stats.demographics.topAgeGroups.map((g) => ({
                    label: g.range,
                    value: `${g.value}%`,
                  })),
                  { label: "Women / Men", value: `${stats.demographics.genderSplit.women}% / ${stats.demographics.genderSplit.men}%` },
                ]}
              />
            </div>
            <div>
              <h3 className="field-label text-ink/50 mb-4">Geography</h3>
              <SpecRow
                items={[
                  { label: "India (Country)", value: `${stats.locations.indiaPercent}%` },
                  ...stats.locations.topCities.slice(0, 4).map((city) => ({
                    label: city.name,
                    value: `${city.value}%`,
                  })),
                ]}
              />
            </div>
          </div>
          <p className="mt-8 max-w-2xl text-ink/50 text-sm leading-relaxed italic">
            {stats.demographics.whyThisMatters}
          </p>
        </div>
      </section>

      {/* 06 — Content Capabilities */}
      <section className="bg-paper-dim section-y">
        <div className="container-page">
          <Folio index={mk.contentCapabilities.index} label={mk.contentCapabilities.label} />
          <Statement lines={mk.contentCapabilities.headline} className="mt-8" />
          <p className="mt-6 max-w-lg text-ink/60 leading-relaxed">
            {mk.contentCapabilities.intro}
          </p>
          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {mk.contentCapabilities.items.map((c) => (
              <div
                key={c}
                className="border border-ink/10 px-6 py-8 hover:border-brass/60 transition-colors"
              >
                <span className="font-display text-lg">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 — Industries (summary only, no named brands) */}
      <section className="bg-paper section-y">
        <div className="container-page max-w-2xl">
          <Folio index={mk.industriesSummary.index} label={mk.industriesSummary.label} />
          <Statement lines={mk.industriesSummary.headline} className="mt-8" />
          <p className="mt-6 text-ink/60 leading-relaxed">{mk.industriesSummary.intro}</p>
          <Link
            href={mk.industriesSummary.href}
            className="field-label !text-ink/50 hover:!text-ink transition-colors mt-6 inline-block"
          >
            {mk.industriesSummary.linkLabel} &rarr;
          </Link>
        </div>
      </section>

      {/* 08 — Selected Work (real photography) */}
      <section className="bg-paper-dim section-y">
        <div className="container-page">
          <Folio index="08" label="Selected Work" />
          <Statement lines={work.selectedWork.headline} className="mt-8" />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {work.selectedWork.items.map((item) => (
              <Frame
                key={item.id}
                label={item.category}
                caption={item.caption}
                tone="brass"
                ratio="square"
                src={item.image ?? undefined}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 09 — Real Collaborations */}
      <section className="bg-paper section-y">
        <div className="container-page">
          <Folio index="09" label="Collaborations" />
          <Statement lines={work.collaborations.headline} className="mt-8" />
          <p className="mt-6 max-w-lg text-ink/60 leading-relaxed">{work.collaborations.intro}</p>
          <div className="mt-12 grid md:grid-cols-2 gap-10">
            {work.collaborations.items.map((collab) => (
              <Link key={collab.slug} href={collab.href} className="group block">
                <Frame
                  label={collab.category}
                  tone="oxblood"
                  ratio="cinematic"
                  src={collab.image ?? undefined}
                />
                <div className="mt-5">
                  <span className="field-label text-oxblood">{collab.status}</span>
                  <h3 className="font-display text-xl mt-2 group-hover:text-oxblood transition-colors">
                    {collab.name}
                  </h3>
                  <p className="mt-2 text-ink/60 leading-relaxed text-sm">{collab.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 10 — Services & Deliverables */}
      <section className="bg-ink text-paper section-y">
        <div className="container-page">
          <Folio index={mk.servicesDeliverables.index} label={mk.servicesDeliverables.label} dark />
          <Statement lines={mk.servicesDeliverables.headline} dark className="mt-8" />
          <p className="mt-6 max-w-lg text-paper/50 leading-relaxed">
            {mk.servicesDeliverables.intro}
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-16">
            <div className="divide-y divide-paper/10">
              {mk.servicesDeliverables.deliverables.map((d) => (
                <div key={d.name} className="py-5">
                  <h3 className="font-display text-lg">{d.name}</h3>
                  <p className="mt-2 text-paper/50 text-sm leading-relaxed">{d.description}</p>
                </div>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 content-start">
              {mk.servicesDeliverables.services.map((s) => (
                <div key={s} className="flex items-center gap-3 border-b border-paper/10 pb-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-brass-bright shrink-0" />
                  <span className="text-paper/75">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11 — Testimonials */}
      <section className="bg-paper section-y">
        <div className="container-page max-w-lg">
          <Folio index={mk.testimonials.index} label={mk.testimonials.label} />
          <Statement lines={mk.testimonials.headline} className="mt-8" />
          <div className="mt-10">
            <PendingSlot label={mk.testimonials.pending.label} note={mk.testimonials.pending.note} />
          </div>
        </div>
      </section>

      {/* 12 — Partnership Opportunities */}
      <section className="bg-paper-dim section-y">
        <div className="container-page">
          <Folio index={mk.partnershipOpportunities.index} label={mk.partnershipOpportunities.label} />
          <Statement lines={mk.partnershipOpportunities.headline} className="mt-8" />
          <p className="mt-6 max-w-lg text-ink/60 leading-relaxed">
            {mk.partnershipOpportunities.intro}
          </p>
          <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {mk.partnershipOpportunities.packages.map((pkg) => (
              <div
                key={pkg.tier}
                className={`p-8 flex flex-col justify-between min-h-[260px] ${
                  pkg.featured ? "bg-ink text-paper" : "bg-paper border border-ink/10"
                }`}
              >
                <div>
                  <p className={`field-label ${pkg.featured ? "!text-brass-bright" : "!text-brass"}`}>
                    {pkg.tier}
                  </p>
                  <p className={`mt-6 leading-relaxed ${pkg.featured ? "text-paper/80" : "text-ink/70"}`}>
                    {pkg.description}
                  </p>
                </div>
                <p className={`mt-8 italic text-sm ${pkg.featured ? "text-paper/40" : "text-ink/40"}`}>
                  {pkg.pricing}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13 — Contact */}
      <CollabCTA
        index={mk.cta.index}
        label={mk.cta.label}
        headline={mk.cta.headline}
        subtext={mk.cta.subtext}
        primaryLabel={mk.cta.primaryLabel}
        primaryHref={mk.cta.primaryHref}
      />
    </main>
  );
}
