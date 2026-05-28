import Link from "next/link";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 text-center">
      <p className="font-display text-6xl font-semibold text-ink/15">404</p>
      <h1 className="mt-4 font-display text-2xl font-semibold text-ink">Page not found</h1>
      <p className="mt-3 max-w-md text-ink-muted">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <div className="mt-8 flex gap-4">
        <Button href="/">Home</Button>
        <Link href="/projects" className="text-sm font-medium text-ink-muted hover:text-ink">
          View projects
        </Link>
      </div>
    </section>
  );
}
