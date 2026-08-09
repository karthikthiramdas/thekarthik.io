import Hero from "@/components/Hero";
import BrandStory from "@/components/BrandStory";
import PortfolioPreview from "@/components/PortfolioPreview";
import IndustriesTeaser from "@/components/IndustriesTeaser";
import CollabCTA from "@/components/CollabCTA";

// Home is deliberately a trailer, not the full portfolio — StatStrip and
// PhilosophyGrid now live on /media-kit and /studio respectively, where
// their depth belongs. Keep this page to five sections.
export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <BrandStory />
      <PortfolioPreview />
      <IndustriesTeaser />
      <CollabCTA />
    </main>
  );
}
