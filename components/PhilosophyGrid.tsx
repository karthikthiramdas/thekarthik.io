import { getCreator } from "@/lib/data";
import Folio from "./Folio";
import Statement from "./Statement";

type Props = {
  index?: string;
  label?: string;
};

export default function PhilosophyGrid({ index = "02", label = "How I Think" }: Props) {
  const { philosophy } = getCreator();
  return (
    <section className="bg-paper-dim section-y">
      <div className="container-page">
        <Folio index={index} label={label} />
        <Statement lines={philosophy.headline} className="mt-8 max-w-xl" />

        <div className="mt-16 grid md:grid-cols-2 gap-x-16 gap-y-12">
          {philosophy.pillars.map((pillar, i) => (
            <div key={pillar.title} className="border-t border-ink/15 pt-6">
              <span className="folio-index">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display text-2xl mt-3">{pillar.title}</h3>
              <p className="mt-3 text-ink/60 leading-relaxed max-w-md">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
