import type { Metadata } from "next";
import { getContact, getActiveSocials, getFaq } from "@/lib/data";
import PageHero from "@/components/PageHero";
import Folio from "@/components/Folio";
import Statement from "@/components/Statement";
import Frame from "@/components/Frame";
import FaqAccordion from "@/components/FaqAccordion";
import CollabCTA from "@/components/CollabCTA";

export const metadata: Metadata = {
  title: "Contact — thekarthik.io",
  description:
    "Get in touch directly for destination campaigns, hotel and homestay features, product collaborations and long-term partnerships.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — thekarthik.io",
    description:
      "Get in touch directly for destination campaigns, hotel and homestay features, product collaborations and long-term partnerships.",
    url: "/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — thekarthik.io",
    description:
      "Get in touch directly for destination campaigns, hotel and homestay features, product collaborations and long-term partnerships.",
  },
};

export default function ContactPage() {
  const contact = getContact();
  const faq = getFaq();
  const socials = getActiveSocials();
  const whatsappDigits = contact.whatsapp.replace(/[^\d]/g, "");

  return (
    <main id="main-content">
      <PageHero
        index="—"
        label={contact.hero.label}
        context={contact.hero.context}
        title={contact.hero.title}
        intro={contact.hero.intro}
      />

      {/* 01 — Get In Touch */}
      <section className="bg-paper section-y">
        <div className="container-page grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Folio index={contact.direct.index} label={contact.direct.label} />
            <Statement lines={contact.direct.headline} emphasisIndex={1} className="mt-8" />
            <p className="mt-6 max-w-sm text-ink/60 leading-relaxed">{contact.direct.intro}</p>

            <div className="mt-10 space-y-8">
              <div>
                <p className="field-label !text-ink/40">Email</p>
                <a
                  href={`mailto:${contact.email}`}
                  className="font-display text-2xl md:text-3xl mt-2 inline-block hover:text-brass transition-colors"
                >
                  {contact.email}
                </a>
              </div>
              {socials.map((s) => (
                <div key={s.name}>
                  <p className="field-label !text-ink/40">{s.name}</p>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-2xl md:text-3xl mt-2 inline-block hover:text-brass transition-colors"
                  >
                    {s.handle || s.name}
                  </a>
                </div>
              ))}
              {whatsappDigits && (
                <div>
                  <p className="field-label !text-ink/40">WhatsApp</p>
                  <a
                    href={`https://wa.me/${whatsappDigits}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-2xl md:text-3xl mt-2 inline-block hover:text-brass transition-colors"
                  >
                    {contact.whatsapp}
                  </a>
                </div>
              )}
              <div>
                <p className="field-label !text-ink/40">Based In</p>
                <p className="font-display text-2xl md:text-3xl mt-2">{contact.location}</p>
              </div>
            </div>
          </div>
          <Frame
  label="Karthik"
  tone="stone"
  ratio="portrait"
  src="/thekarthik.io/images/real/portrait-camera.jpeg"
/>
        </div>
      </section>

      {/* 02 — FAQ */}
      <section className="bg-ink text-paper section-y">
        <div className="container-page max-w-3xl">
          <Folio index={contact.faq.index} label={contact.faq.label} dark />
          <Statement lines={[faq.headline]} dark className="mt-8" />
          <div className="mt-12">
            <FaqAccordion items={faq.items} />
          </div>
        </div>
      </section>

      <CollabCTA
        index={contact.cta.index}
        label="Let's Work Together"
        headline={contact.cta.headline}
        subtext={contact.cta.subtext}
        primaryLabel={contact.cta.primaryLabel}
        primaryHref={contact.cta.primaryHref}
      />
    </main>
  );
}
