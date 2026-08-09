import type { Metadata, Viewport } from "next";
import "./globals.css";
import { fraunces, instrument, plexMono } from "./fonts";
import { MotionConfig } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getCreator, getContact, getActiveSocials } from "@/lib/data";

export const viewport: Viewport = {
  themeColor: "#0B0D0F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Karthik Thiramdas — Traveller, Filmmaker & Storyteller",
  description:
    "Travel is the stage. Stories are the product. A traveller and filmmaker telling cinematic stories across aviation, hotels, technology and travel — every frame shot and cut with production-level craft.",
  metadataBase: new URL("https://thekarthik.io"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Karthik Thiramdas — Traveller, Filmmaker & Storyteller",
    description: "Travel is the stage. Stories are the product.",
    url: "https://thekarthik.io",
    siteName: "thekarthik.io",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karthik Thiramdas — Traveller, Filmmaker & Storyteller",
    description: "Travel is the stage. Stories are the product.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const creator = getCreator();
  const contact = getContact();
  const socials = getActiveSocials();

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: creator.name,
    jobTitle: creator.titles.join(", "),
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: creator.location,
    },
    url: "https://thekarthik.io",
    sameAs: socials.map((s) => s.url),
  };

  return (
    <html lang="en" className={`${fraunces.variable} ${instrument.variable} ${plexMono.variable}`}>
      <body className="font-body bg-paper text-ink antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-paper focus:text-ink focus:px-4 focus:py-2 focus:field-label"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Nav />
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
        <Footer />
      </body>
    </html>
  );
}
