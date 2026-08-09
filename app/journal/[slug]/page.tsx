import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getJournalArticles, getJournalArticle } from "@/lib/data";
import Folio from "@/components/Folio";
import Frame from "@/components/Frame";
import CollabCTA from "@/components/CollabCTA";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getJournalArticles().map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const article = getJournalArticle(slug);

  if (!article) return {};

  return {
    title: `${article.title} — Journal — thekarthik.io`,
    description: article.excerpt,
    alternates: {
      canonical: `/journal/${article.slug}`,
    },
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

export default async function JournalArticlePage({ params }: Props) {
  const { slug } = await params;

  const article = getJournalArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <main>
      <section className="bg-paper section-y">
        <div className="container-page max-w-2xl">
          <Folio index="—" label="Journal" />

          <h1 className="font-display text-4xl md:text-6xl text-ink mt-6">
            {article.title}
          </h1>

          <p className="mt-6 text-ink/60 text-lg leading-relaxed">
            {article.excerpt}
          </p>

          <Frame
            label={article.category}
            tone="stone"
            ratio="cinematic"
            src={article.coverImage}
            className="mt-12 mb-14"
          />

          <div className="space-y-6 text-ink/70 leading-relaxed text-lg">
            {article.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-16">
            <Link
              href="/journal"
              className="font-display text-2xl inline-block hover:text-brass transition-colors"
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