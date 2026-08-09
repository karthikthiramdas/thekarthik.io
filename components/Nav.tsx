"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { getNav } from "@/lib/data";

export default function Nav() {
  const { brand, brandAccent, links } = getNav();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock background scroll while the mobile menu is open, and let Escape close it.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  // Single source of truth: whenever the header has its solid paper
  // background (scrolled past the hero, or the mobile menu is open),
  // text should be ink. Otherwise the header is transparent over a dark
  // section (Hero / PageHero), so text should be light/paper instead.
  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid
          ? "bg-paper/90 backdrop-blur-md border-b border-ink/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <Link
          href="/"
          className={`font-display text-lg tracking-tight shrink-0 leading-none transition-colors duration-500 ${
            solid ? "text-ink" : "text-paper"
          }`}
        >
          {brand}
          <span className="text-brass">{brandAccent}</span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden lg:flex items-center gap-6 xl:gap-9"
        >
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`field-label whitespace-nowrap py-2 transition-colors duration-500 border-b ${
                  solid
                    ? active
                      ? "!text-ink border-brass"
                      : "!text-ink/60 border-transparent hover:!text-ink hover:border-ink/20"
                    : active
                    ? "!text-paper border-brass-bright"
                    : "!text-paper/70 border-transparent hover:!text-paper hover:border-paper/40"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <button
          ref={toggleRef}
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden field-label -mr-2 flex h-11 items-center px-2 transition-colors duration-500 ${
            solid ? "!text-ink" : "!text-paper"
          }`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Mobile"
        aria-hidden={!open}
        inert={!open ? true : undefined}
        className={`lg:hidden overflow-hidden transition-[grid-template-rows] duration-300 ease-out grid ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <div className="container-page pb-8 pt-2 flex flex-col gap-1 border-t border-ink/10">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  tabIndex={open ? undefined : -1}
                  aria-current={active ? "page" : undefined}
                  className={`font-display text-2xl py-3 transition-colors ${
                    active ? "text-brass" : "text-ink hover:text-brass"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
