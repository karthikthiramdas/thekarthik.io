import Link from "next/link";
import { getPortfolio } from "@/lib/data";
import Folio from "./Folio";
import Frame from "./Frame";
import Statement from "./Statement";
import { sitePath } from "@/lib/paths";

export default function PortfolioPreview() {
  const { selected, previewHeadline, previewCtaLabel } = getPortfolio();
  const preview = selected.slice(0, 3);
  return (
    <section className="bg-paper section-y">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Folio index="03" label="The Work" />
            <Statement lines={[previewHeadline]} className="mt-8" />
          </div>
          <a
            href={sitePath("/work")}
            className="field-label !text-ink/50 hover:!text-ink transition-colors"
          >
            {previewCtaLabel} &rarr;
          </a>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {preview.map((item) => (
            <Frame
              key={item.id}
              label={item.category}
              caption={item.caption}
              tone="brass"
              ratio="cinematic"
              src={item.image ?? undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
