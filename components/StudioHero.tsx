"use client";

import { motion } from "framer-motion";
import Folio from "./Folio";
import Frame from "./Frame";
import { getStudio } from "@/lib/data";

export default function StudioHero() {
  const { hero } = getStudio();
  return (
    <section className="relative min-h-screen bg-ink text-paper overflow-hidden grid md:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative min-h-[55vh] md:min-h-screen order-1 md:order-none"
      >
        <Frame
          label="Forest Study"
          tone="stone"
          ratio="full"
          src="/thekarthik.io/images/real/portrait-forest.jpeg"
          priority
          sizes="50vw"
          className="h-full [&>div]:h-full [&>div]:aspect-auto [&>div]:rounded-none"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-ink via-transparent to-transparent md:bg-gradient-to-r" />
      </motion.div>

      <div className="container-page md:pl-0 flex flex-col justify-center py-28 md:py-0 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <Folio index="—" label={hero.label} context={hero.context} dark />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-balance mt-8 text-[clamp(2.5rem,6vw,4.75rem)] leading-[0.98] font-normal"
        >
          {hero.title.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8 max-w-md text-paper/60 text-lg leading-relaxed"
        >
          {hero.intro}
        </motion.p>
      </div>
    </section>
  );
}
