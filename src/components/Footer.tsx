import Link from "next/link";
import { footerLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-elevated">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="font-display text-xl font-semibold text-ink">{site.name}</p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-muted">
              {site.title} based in {site.location}. Available for product design
              engagements and design leadership roles.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-block text-sm font-medium text-accent hover:underline"
            >
              {site.email}
            </a>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-ink-faint">
              Explore
            </p>
            <ul className="mt-4 space-y-2">
              {footerLinks.main.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-muted transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-ink-muted transition-colors hover:text-ink"
                >
                  Let&apos;s talk
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-ink-faint">
              Legal
            </p>
            <ul className="mt-4 space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-muted transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-sm text-ink-faint">
          <p>© {site.year} {site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
