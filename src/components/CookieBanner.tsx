"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "wfep-cookie-consent";

type Consent = "essential" | "all" | null;

export function CookieBanner() {
  const [consent, setConsent] = useState<Consent>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Consent | null;
    if (stored === "essential" || stored === "all") {
      setConsent(stored);
    } else {
      setVisible(true);
    }
  }, []);

  function save(value: "essential" | "all") {
    localStorage.setItem(STORAGE_KEY, value);
    setConsent(value);
    setVisible(false);
  }

  if (!visible || consent) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-lg rounded-2xl border border-border bg-surface-elevated p-5 shadow-xl md:inset-x-auto md:right-6 md:left-auto"
    >
      <p className="text-sm font-medium text-ink">Cookies on this site</p>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
        We use essential cookies for preferences. Optional analytics help improve
        the experience.{" "}
        <Link href="/cookies" className="text-accent underline-offset-2 hover:underline">
          Cookie policy
        </Link>
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => save("essential")}
          className="rounded-full border border-border px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-surface"
        >
          Essential only
        </button>
        <button
          type="button"
          onClick={() => save("all")}
          className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-surface transition-colors hover:bg-ink/90"
        >
          Accept all
        </button>
      </div>
    </div>
  );
}
