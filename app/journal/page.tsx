import type { Metadata } from "next";
import Link from "next/link";
import { getJournal, getJournalArticles } from "@/lib/data";
import PageHero from "@/components/PageHero";
import Folio from "@/components/Folio";
import Statement from "@/components/Statement";
import Frame from "@/components/Frame";
import PendingSlot from "@/components/PendingSlot";
import CollabCTA from "@/components/CollabCTA";
import { sitePath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Journal — thekarthik.io",
  description:
    "Field notes on travel, aviation, photography, technology and the craft behind every shoot.",
  alternates: { canonical: "/journal" },
  openGraph: {
    title: "Journal — thekarthik.io",
    description: "Stories from the work itself.",
    url: "/journal",
  },
  twitter: {
    card: "summary_large_image",
    title: "Journal — thekarthik.io",
    description: "Stories from the work itself.",
  },
};

export default function JournalPage() {
  const journal = getJournal();
  const articles = getJournalArticles();

  return (
    <main id="main-content">
      {/* 01 — What To Expect */}
      <section className="bg-paper section-y">
        <div className="container-page max-w-2xl">
          <Folio
            index={journal.categories.index}
            label={journal.categories.label}
          />

          <Statement
            lines={journal.categories.headline}
            emphasisIndex={0}
            className="mt-8"
          />

          <p className="mt-6 text-ink/60 leading-relaxed">
            {journal.categories.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {journal.categories.names.map((name) => (
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

      {/* 02 — Latest Stories */}
      <section className="bg-paper-dim section-y">
        <div className="container-page">
          <Folio
            index={journal.latest.index}
            label={journal.latest.label}
          />

          {articles.length > 0 ? (
            <div className="mt-14 grid md:grid-cols-3 gap-10">
              {articles.map((article) => (
                <a
                  key={article.slug}
                  href={sitePath(`/journal/${article.slug}`)}
                  className="group block"
                >
                  <Frame
                    label={article.category}
                    tone="stone"
                    ratio="portrait"
                    src={article.coverImage}
                  />

                  <div className="mt-5">
                    <span className="field-label text-ink/40">
                      {article.category} &middot; {article.publishedAt}
                    </span>

                    <h3 className="font-display text-xl mt-2 group-hover:text-oxblood transition-colors">
                      {article.title}
                    </h3>

                    <p className="mt-2 text-ink/60 leading-relaxed text-sm">
                      {article.excerpt}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="mt-14 max-w-md">
              <PendingSlot
                label="First Story Publishing Soon"
                note="The Journal is built and ready — it's waiting on the first real story, not a placeholder one. Check back soon."
              />
            </div>
          )}
        </div>
      </section>

      <CollabCTA
        index={journal.cta.index}
        label={journal.cta.label}
        headline={journal.cta.headline}
        subtext={journal.cta.subtext}
        primaryLabel={journal.cta.primaryLabel}
        primaryHref={journal.cta.primaryHref}
      />
    </main>
  );
}