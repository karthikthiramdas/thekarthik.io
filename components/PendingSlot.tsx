type Props = {
  label: string;
  note: string;
};

/**
 * Marks a content slot that's structurally ready but waiting on real input
 * (gear list, bag contents, testimonials) — visually related to Frame's
 * "study" placeholder, but for text/data rather than photography. Never
 * fills the gap with an invented value.
 */
export default function PendingSlot({ label, note }: Props) {
  return (
    <div className="border border-dashed border-ink/20 rounded-sm px-6 py-8 text-center">
      <span className="field-label text-ink/40">{label}</span>
      <p className="mt-3 text-ink/50 text-sm max-w-sm mx-auto">{note}</p>
    </div>
  );
}
