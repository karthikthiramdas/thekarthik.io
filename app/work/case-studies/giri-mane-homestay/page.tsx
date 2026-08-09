import type { Metadata } from "next";
import { getCaseStudy, getCaseStudies } from "@/lib/data";
import CaseStudy from "@/components/CaseStudy";

const data = getCaseStudy("giri-mane-homestay")!;
const next = getCaseStudies().find((cs) => cs.slug === data.nextSlug)!;

export const metadata: Metadata = {
  title: `${data.client} — thekarthik.io`,
  description: data.hero.subtitle,
  alternates: { canonical: "/work/case-studies/giri-mane-homestay" },
  openGraph: { title: `${data.client} — thekarthik.io`, description: data.hero.subtitle },
};

export default function GiriManeHomestayPage() {
  return (
    <CaseStudy
      data={data}
      nextClient={{ name: next.client, href: `/work/case-studies/${next.slug}` }}
    />
  );
}
