import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  className,
  children,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "border-b border-border bg-surface-elevated px-6 py-16 md:py-24",
        className,
      )}
    >
      <div className="mx-auto max-w-6xl">
        {eyebrow && (
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-ink text-balance md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted md:text-xl">
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
