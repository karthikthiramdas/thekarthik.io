"use client";

import { useState } from "react";

type Item = { q: string; a: string };

export default function FaqAccordion({ items }: { items: Item[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-paper/15">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const panelId = `faq-panel-${i}`;
        const buttonId = `faq-button-${i}`;
        return (
          <div key={item.q}>
            <h3>
              <button
                id={buttonId}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-6 py-6 text-left"
                aria-expanded={isOpen}
                aria-controls={panelId}
              >
                <span className="font-display text-xl md:text-2xl">{item.q}</span>
                <span aria-hidden className="font-mono text-brass-bright text-lg shrink-0">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h3>
            {isOpen && (
              <p
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="pb-6 text-paper/60 leading-relaxed max-w-2xl"
              >
                {item.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
