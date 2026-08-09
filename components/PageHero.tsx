import Folio from "./Folio";

type Props = {
  index: string;
  label: string;
  context?: string;
  title: string[];
  intro?: string;
};

export default function PageHero({ index, label, context, title, intro }: Props) {
  return (
    <section className="bg-ink text-paper pt-40 pb-24 md:pt-52 md:pb-32">
      <div className="container-page">
        <Folio index={index} label={label} context={context} dark />
        <h1 className="font-display text-balance mt-8 text-[clamp(2.5rem,7vw,5rem)] leading-[0.98] max-w-3xl">
          {title.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h1>
        {intro && (
          <p className="mt-8 max-w-lg text-paper/50 leading-relaxed text-lg">{intro}</p>
        )}
      </div>
    </section>
  );
}
