"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled
          ? "border-border bg-surface/90 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:h-[4.5rem]">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-ink"
        >
          {site.name.split(" ")[0]}
          <span className="text-ink-faint">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm transition-colors",
                pathname === link.href || pathname.startsWith(`${link.href}/`)
                  ? "font-medium text-ink"
                  : "text-ink-muted hover:text-ink",
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-ink px-5 py-2 text-sm font-medium text-surface transition-colors hover:bg-ink/90"
          >
            Let&apos;s talk
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-border md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden>
            <path
              d={open ? "M2 2L16 12M16 2L2 12" : "M1 1H17M1 7H17M1 13H17"}
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-border bg-surface px-6 py-6 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-lg font-medium text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="inline-block rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-surface"
              >
                Let&apos;s talk
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
