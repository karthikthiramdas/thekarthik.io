import { getPortfolio } from "@/lib/data";
import Folio from "./Folio";
import Frame from "./Frame";
import { sitePath } from "@/lib/paths";

export default function PortfolioPreview() {
  const { selected, previewHeadline, previewCtaLabel } = getPortfolio();

  return (
    <section className="bg-paper section-y">
      <div className="container-page">
        <Folio index="03" label="The Work" />

        <div className="mt-8 flex items-end justify-between gap-8">
          <h2 className="font-display text-balance text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95]">
            {previewHeadline}
          </h2>

          <a
            href={sitePath("/work")}
            className="field-label !text-ink/50 hover:!text-ink transition-colors shrink-0"
          >
            {previewCtaLabel} →
          </a>
        </div>

        {/* Portfolio carousel */}
        <div className="relative mt-16">
          <div
            className="
              flex gap-8
              overflow-x-auto
              snap-x snap-mandatory
              scroll-smooth
              pb-6
              [scrollbar-width:none]
              [-ms-overflow-style:none]
            "
          >
            {selected.map((item) => (
              <div
                key={item.id}
                className="
                  shrink-0
                  w-[82vw]
                  md:w-[calc((100%-2rem)/2)]
                  snap-start
                "
              >
                <Frame
                  label={item.category}
                  caption={item.caption}
                  tone="brass"
                  ratio="cinematic"
                  src={item.image ?? undefined}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}