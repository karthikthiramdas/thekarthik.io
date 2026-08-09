"use client";

import Link from "next/link";
import type { ReactNode } from "react";

type SiteLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export default function SiteLink({
  href,
  children,
  className,
}: SiteLinkProps) {
  const normalized =
    href.startsWith("/thekarthik.io/")
      ? href.replace("/thekarthik.io", "")
      : href;

  return (
    <Link href={normalized} className={className}>
      {children}
    </Link>
  );
}