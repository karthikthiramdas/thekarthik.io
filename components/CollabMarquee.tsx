type Props = {
  items: string[];
  dark?: boolean;
};

/**
 * A quiet wordmark-style row — replaces bordered "category boxes" with
 * something closer to an Apple partner strip: confident, not a list the
 * reader is being asked to parse.
 */
export default function CollabMarquee({ items, dark = false }: Props) {
  const color = dark ? "text-paper/60" : "text-ink/50";
  const divider = dark ? "bg-paper/20" : "bg-ink/15";

  return (
    <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
      {items.map((item, i) => (
        <div key={item} className="flex items-center gap-8">
          <span className={`font-display text-lg md:text-xl ${color}`}>{item}</span>
          {i < items.length - 1 && <span className={`h-1 w-1 rounded-full ${divider}`} />}
        </div>
      ))}
    </div>
  );
}
