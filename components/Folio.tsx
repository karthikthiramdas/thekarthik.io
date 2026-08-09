type FolioProps = {
  /** Running index, e.g. "04" or "04 / 06". Reads like a magazine folio number. */
  index: string;
  /** The section's name, e.g. "INDUSTRIES" — what this section is, not a metaphor for it. */
  label: string;
  /** Optional short context line — used sparingly, only when it adds real information. */
  context?: string;
  dark?: boolean;
};

/**
 * The site's universal section marker, replacing the boarding-pass
 * "FROM → TO" device everywhere except the Aviation vertical. A folio
 * number is the one accent allowed to carry brass here — everything else
 * stays quiet, so the mark reads as wayfinding, not decoration.
 */
export default function Folio({ index, label, context, dark }: FolioProps) {
  const bodyColor = dark ? "text-paper/50" : "text-ink/45";
  return (
    <div className={`flex items-center gap-4 ${bodyColor}`}>
      <span className="folio-index">{index}</span>
      <span className="h-px w-6 bg-current opacity-30" />
      <span className="field-label">{label}</span>
      {context && (
        <>
          <span aria-hidden className="opacity-30">
            &middot;
          </span>
          <span className="field-label opacity-70 normal-case tracking-normal font-body text-sm">
            {context}
          </span>
        </>
      )}
    </div>
  );
}
