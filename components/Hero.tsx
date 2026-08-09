"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Folio from "./Folio";
import Frame from "./Frame";
import { getHero } from "@/lib/data";

export default function Hero() {
  const hero = getHero();
  return (
    <section className="relative min-h-screen bg-ink text-paper overflow-hidden grid md:grid-cols-2">
      <div className="container-page md:pr-0 flex flex-col justify-center py-32 md:py-0 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <Folio index="01" label="Karthik Thiramdas" context="Hyderabad" dark />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-balance mt-8 text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.98] font-normal"
        >
          {hero.headlineLines.map((line, i) => (
            <span key={i}>
              {i === hero.highlightLineIndex ? (
                <em className="italic text-brass-bright">{line}</em>
              ) : (
                line
              )}
              {i < hero.headlineLines.length - 1 && <br />}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8 max-w-md text-paper/60 text-lg leading-relaxed"
        >
          {hero.subtext}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-12 flex items-center gap-6"
        >
          <Link
            href={hero.primaryCta.href}
            className="inline-flex items-center gap-3 border border-brass/60 text-brass-bright px-6 py-3 field-label hover:bg-brass hover:text-ink hover:border-brass transition-colors"
          >
            {hero.primaryCta.label}
          </Link>
          <Link
            href={hero.secondaryCta.href}
            className="field-label !text-paper/50 hover:!text-paper transition-colors"
          >
            {hero.secondaryCta.label}
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative min-h-[50vh] md:min-h-screen"
      >
        <Frame
          label="Wing Study, Golden Hour"
          tone="oxblood"
          ratio="full"
          src="/thekarthik.io/images/real/wing-sunset.jpeg"
          priority
          sizes="50vw"
          className="h-full [&>div]:h-full [&>div]:aspect-auto [&>div]:rounded-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-transparent to-transparent md:bg-gradient-to-l" />
      </motion.div>
    </section>
  );
}
