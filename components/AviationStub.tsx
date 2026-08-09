type AviationStubProps = {
  seq: string;
  from: string;
  to: string;
  dark?: boolean;
};

/**
 * The boarding-pass "FROM → TO" device — preserved intentionally, but no
 * longer the site's universal system. It appears only inside the Aviation
 * industry vertical, where the metaphor is authentic rather than borrowed.
 * Everywhere else on the site, use <Folio /> instead.
 */
export default function AviationStub({ seq, from, to, dark }: AviationStubProps) {
  const color = dark ? "text-paper/60" : "text-ink/50";
  const accent = dark ? "text-brass-bright" : "text-brass";
  return (
    <div className={`flex items-center gap-6 ${color}`}>
      <span className={`field-label ${accent}`}>{seq}</span>
      <span className="h-px w-8 bg-current opacity-30" />
      <span className="field-label">{from}</span>
      <span aria-hidden className={`font-mono text-xs ${accent}`}>
        &rarr;
      </span>
      <span className="field-label">{to}</span>
    </div>
  );
}
