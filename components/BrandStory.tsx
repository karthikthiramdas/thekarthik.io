import { getCreator } from "@/lib/data";
import Folio from "./Folio";
import Frame from "./Frame";
import Statement from "./Statement";

export default function BrandStory() {
  const { brandStory } = getCreator();
  return (
    <section className="bg-paper section-y">
      <div className="container-page grid md:grid-cols-2 gap-16 items-center">
        <div>
          <Folio index="02" label={brandStory.eyebrow} />
          <Statement
            lines={brandStory.headline}
            emphasisIndex={brandStory.headline.length - 1}
            className="mt-8"
          />
          <div className="mt-8 space-y-5 text-ink/70 leading-relaxed max-w-lg">
            {brandStory.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
        <Frame
          label="Behind the Lens"
          caption="Karthik, on location."
          tone="stone"
          ratio="portrait"
          src="/thekarthik.io/images/real/portrait-camera.jpeg"
        />
      </div>
    </section>
  );
}
