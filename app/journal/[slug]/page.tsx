import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getJournalArticles, getJournalArticle } from "@/lib/data";
import PageHero from "@/components/PageHero";
import Folio from "@/components/Folio";
import Frame from "@/components/Frame";
import CollabCTA from "@/components/CollabCTA";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getJournalArticles().map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const article = getJournalArticle(params.slug);
  if (!article) return {};

  return {
    title: `${article.title} — Journal — thekarthik.io`,
    description: article.excerpt,
    alternates: { canonical: `/journal/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `/journal/${article.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
    },
  };
}

export default function JournalArticlePage({ params }: Props) {
  const article = getJournalArticle(params.slug);
  if (!article) {
    notFound();
    return null;
  }

  return (
    <main id="main-content">
      <PageHero
        index="—"
        label={article.category}
        context={article.publishedAt}
        title={[article.title]}
        intro={article.excerpt}
      />

      <section className="bg-paper section-y">
        <div className="container-page max-w-2xl">
          <Frame
            label={article.category}
            tone="stone"
            ratio="cinematic"
            src={article.coverImage}
            className="mb-14"
          />
          <div className="space-y-6 text-ink/70 leading-relaxed text-lg">
            {article.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-16">
            <Folio index="—" label="Journal" />
            <Link
              href="/journal"
              className="font-display text-2xl mt-4 inline-block hover:text-brass transition-colors"
            >
              &larr; Back to Journal
            </Link>
          </div>
        </div>
      </section>

      <CollabCTA />
    </main>
  );
}
