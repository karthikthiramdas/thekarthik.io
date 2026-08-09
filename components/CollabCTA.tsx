import { getContact } from "@/lib/data";
import { sitePath } from "@/lib/paths";
import Folio from "./Folio";

type Props = {
  index?: string;
  label?: string;
  headline?: string;
  subtext?: string;
  primaryLabel?: string;
  primaryHref?: string;
  /** Optional second link — a quiet text link beside the primary CTA.
   *  Falls back to a mailto of the site email when omitted, matching the
   *  original Home behavior. */
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function CollabCTA({
  index = "05",
  label = "Let's Work Together",
  headline,
  subtext,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: Props) {
  const contact = getContact();
  const resolvedSecondaryLabel = secondaryLabel ?? contact.email;
  const resolvedSecondaryHref = secondaryHref ?? `mailto:${contact.email}`;

  return (
    <section className="bg-ink text-paper section-y-lg">
      <div className="container-page text-center flex flex-col items-center">
        <Folio index={index} label={label} dark />
        <h2 className="font-display text-balance mt-10 text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.02] max-w-3xl">
          {headline ?? contact.cta.headline}
        </h2>
        <p className="mt-6 text-paper/50 max-w-md">{subtext ?? contact.cta.subtext}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <a
            href={sitePath(primaryHref ?? contact.cta.primaryHref)}
            className="border border-brass/60 text-brass-bright px-7 py-3 field-label hover:bg-brass hover:text-ink hover:border-brass transition-colors"
          >
            {primaryLabel ?? contact.cta.primaryLabel}
          </a>
          <a
            href={sitePath(resolvedSecondaryHref)}
            className="field-label !text-paper/50 hover:!text-paper transition-colors self-center"
          >
            {resolvedSecondaryLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
