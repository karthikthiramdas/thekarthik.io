type Spec = {
  label: string;
  value: string;
};

type Props = {
  items: Spec[];
  dark?: boolean;
  columns?: 1 | 2 | 3;
};

/**
 * Label/value rows presented with product-data-sheet confidence — the
 * Rimowa/Porsche move. Powers gear specs, workflow steps expressed as data,
 * and any place a number should read as a fact rather than a decoration.
 */
export default function SpecRow({ items, dark = false, columns = 1 }: Props) {
  const border = dark ? "border-paper/10" : "border-ink/10";
  const labelColor = dark ? "text-paper/40" : "text-ink/40";
  const valueColor = dark ? "text-paper/85" : "text-ink/85";
  const gridCols =
    columns === 3 ? "sm:grid-cols-3" : columns === 2 ? "sm:grid-cols-2" : "grid-cols-1";

  return (
    <dl className={`grid ${gridCols} gap-x-10`}>
      {items.map((item) => (
        <div key={item.label} className={`flex items-baseline justify-between gap-6 border-b ${border} py-4`}>
          <dt className={`field-label ${labelColor}`}>{item.label}</dt>
          <dd className={`font-mono text-sm text-right ${valueColor}`}>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
