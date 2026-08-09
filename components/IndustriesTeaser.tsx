import Link from "next/link";
import { getIndustries } from "@/lib/data";
import Folio from "./Folio";
import CollabMarquee from "./CollabMarquee";

export default function IndustriesTeaser() {
  const industries = getIndustries();
  const categoryNames = industries.categories.map((c) => c.name);

  return (
    <section className="bg-paper-dim section-y">
      <div className="container-page">
        <Folio index="04" label="Where This Work Fits" />
        <div className="mt-8 flex flex-wrap items-end justify-between gap-8">
          <p className="max-w-lg font-display text-balance text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.15]">
            {industries.hero.teaser}
          </p>
          <a
            href="/thekarthik.io/industries/"
            className="field-label !text-ink/50 hover:!text-ink transition-colors shrink-0"
          >
            View Industries &rarr;
          </a>
        </div>
        <div className="mt-12 border-t border-ink/10 pt-10">
          <CollabMarquee items={categoryNames} />
        </div>
      </div>
    </section>
  );
}
