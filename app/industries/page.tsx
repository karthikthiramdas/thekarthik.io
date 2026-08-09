import type { Metadata } from "next";
import Link from "next/link";
import { getIndustries } from "@/lib/data";
import PageHero from "@/components/PageHero";
import Folio from "@/components/Folio";
import Statement from "@/components/Statement";
import Frame from "@/components/Frame";
import AviationStub from "@/components/AviationStub";
import CollabCTA from "@/components/CollabCTA";

export const metadata: Metadata = {
  title: "Industries — thekarthik.io",
  description:
    "Can Karthik create something relevant to your industry? Travel, technology, travel gear and lifestyle — organized honestly by what's positioned, proven, or genuinely open.",
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "Industries — thekarthik.io",
    description: "Can Karthik create something for your industry?",
    url: "/industries",
  },
};

export default function IndustriesPage() {
  const industries = getIndustries();

  return (
    <main id="main-content">
      <PageHero
        index="—"
        label={industries.hero.label}
        context={industries.hero.context}
        title={industries.hero.title}
        intro={industries.hero.intro}
      />

      {/* 01 — Industries I Work Across */}
      <section className="bg-paper section-y">
        <div className="container-page">
          <Folio index="01" label="Industries I Work Across" />
          <Statement lines={[industries.categoriesIntro]} className="mt-8" />
          <p className="mt-6 max-w-lg text-ink/60 leading-relaxed">
            {industries.categoriesSubIntro}
          </p>

          <div className="mt-14 grid md:grid-cols-2 gap-x-12 gap-y-14">
            {industries.categories.map((cat) => (
              <div key={cat.name} className="border-t border-ink/15 pt-6">
                <h3 className="font-display text-2xl">{cat.name}</h3>
                <p className="mt-3 text-ink/60 leading-relaxed text-sm max-w-sm">
                  {cat.description}
                </p>
                <p className="mt-5 text-ink/45 text-sm leading-relaxed">{cat.items.join(" · ")}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {cat.creates.map((c) => (
                    <span
                      key={c}
                      className="field-label !normal-case !tracking-normal !text-[0.7rem] text-brass border border-brass/30 rounded-full px-3 py-1"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Aviation spotlight — the one place the boarding-pass device is intentionally allowed */}
          <div className="mt-16 bg-ink text-paper rounded-sm p-8 md:p-12">
            <AviationStub
              seq={industries.aviationSpotlight.seq}
              from={industries.aviationSpotlight.from}
              to={industries.aviationSpotlight.to}
              dark
            />
            <div className="mt-8 grid md:grid-cols-2 gap-10 items-start">
              <Statement
                lines={industries.aviationSpotlight.headline}
                emphasisIndex={1}
                dark
                size="lg"
              />
              <p className="text-paper/60 leading-relaxed">
                {industries.aviationSpotlight.paragraph}
              </p>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-2 sm:gap-4">
              {industries.aviationSpotlight.images.map((src) => (
                <Frame key={src} label="Aviation" tone="brass" ratio="square" src={src} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 02 — Completed Work */}
      <section className="bg-paper-dim section-y">
        <div className="container-page">
          <Folio index="02" label={industries.completedWork.label} />
          <Statement lines={industries.completedWork.headline} className="mt-8" />
          <div className="mt-6 flex flex-wrap items-end justify-between gap-6 max-w-2xl">
            <p className="text-ink/60 leading-relaxed max-w-md">
              {industries.completedWork.intro}
            </p>
            <Link
              href={industries.completedWork.href}
              className="field-label !text-ink/50 hover:!text-ink transition-colors shrink-0"
            >
              {industries.completedWork.linkLabel} &rarr;
            </Link>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <Frame label="Aviation" caption="Wing Study, Golden Hour" tone="brass" ratio="square" src="/images/real/wing-sunset.jpeg" />
            <Frame label="Aviation" caption="Tarmac, Ladakh" tone="brass" ratio="square" src="/images/real/tarmac-aircraft.jpeg" />
            <Frame label="Aviation" caption="Cabin Detail" tone="brass" ratio="square" src="/images/real/cabin-tray.jpeg" />
          </div>
        </div>
      </section>

      {/* 03 — Collaborations */}
      <section className="bg-paper section-y">
        <div className="container-page">
          <Folio index="03" label="Collaborations" />
          <Statement lines={[industries.collaborationsIntro]} className="mt-8" />
          <p className="mt-6 max-w-lg text-ink/60 leading-relaxed">
            {industries.collaborationsSubIntro}
          </p>

          <div className="mt-14 grid md:grid-cols-2 gap-10">
            {industries.collaborations.map((collab) => (
              <Link key={collab.name} href={collab.href} className="group block">
                <Frame label={collab.category} tone="oxblood" ratio="cinematic" src={collab.image} />
                <div className="mt-6">
                  <span className="field-label text-oxblood">{collab.category}</span>
                  <h3 className="font-display text-2xl mt-2 group-hover:text-oxblood transition-colors">
                    {collab.name}
                  </h3>
                  <p className="mt-2 text-ink/60 leading-relaxed text-sm max-w-sm">
                    {collab.summary}
                  </p>
                  <span className="field-label text-ink/40 mt-3 inline-block group-hover:text-ink transition-colors">
                    View Case Study &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — Open Categories */}
      <section className="bg-paper-dim section-y">
        <div className="container-page max-w-2xl">
          <Folio index="04" label={industries.openCategories.label} />
          <Statement lines={industries.openCategories.headline} emphasisIndex={0} className="mt-8" />
          <p className="mt-6 text-ink/60 leading-relaxed">{industries.openCategories.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {industries.openCategories.names.map((name) => (
              <span
                key={name}
                className="flex items-center gap-2.5 border border-ink/15 rounded-full px-4 py-2"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-stone" />
                <span className="field-label text-ink/60">{name}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <CollabCTA
        index="05"
        label={industries.cta.label}
        headline={industries.cta.headline}
        subtext={industries.cta.subtext}
        primaryLabel={industries.cta.primaryLabel}
        primaryHref={industries.cta.primaryHref}
        secondaryLabel={industries.cta.secondaryLabel}
        secondaryHref={industries.cta.secondaryHref}
      />
    </main>
  );
}
