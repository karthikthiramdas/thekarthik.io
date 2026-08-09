import { getStats } from "@/lib/data";
import { formatAsOf } from "@/lib/format";
import Folio from "./Folio";
import Statement from "./Statement";
import SpecRow from "./SpecRow";

type Props = {
  index?: string;
  label?: string;
};

export default function StatStrip({ index = "03", label = "Audience" }: Props) {
  const stats = getStats();
  const audienceValues: Record<string, number | undefined> = stats.audience;

  // accountsReached is not guaranteed to be present in the data contract —
  // the latest Instagram Insights export did not include a confirmed
  // current value. Render everything else normally and simply omit this
  // metric rather than showing 0 or a stale/invented number.
  const accountsReached = audienceValues.accountsReached;
  const note = stats.audienceSection.noteTemplate
    .replace("{views90d}", stats.audience.views90d.toLocaleString("en-IN"))
    .replace(
      "{accountsReached}",
      typeof accountsReached === "number" ? accountsReached.toLocaleString("en-IN") : ""
    );

  const items = stats.audienceHighlights
    .filter((h) => typeof audienceValues[h.key] === "number")
    .map((h) => ({
      label: h.label,
      value: (audienceValues[h.key] as number).toLocaleString("en-IN"),
    }));

  return (
    <section className="bg-ink text-paper section-y">
      <div className="container-page">
        <Folio index={index} label={label} context={`As of ${formatAsOf(stats.asOf)}`} dark />
        <Statement lines={[stats.audienceSection.headline]} dark className="mt-8 max-w-2xl" />

        <div className="mt-14 max-w-2xl">
          <SpecRow items={items} dark columns={2} />
        </div>

        <p className="mt-10 max-w-2xl text-paper/50 leading-relaxed">{note}</p>
        <p className="mt-4 field-label !text-paper/30">
          Figures reflect platform analytics as of {formatAsOf(stats.asOf)} — not a live feed.
        </p>
      </div>
    </section>
  );
}
