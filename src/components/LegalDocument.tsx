import type { LegalSection } from "@/lib/legal";

type LegalDocumentProps = {
  title: string;
  intro: string;
  sections: LegalSection[];
};

export function LegalDocument({ title, intro, sections }: LegalDocumentProps) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <header className="border-b border-border pb-10">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">
          Legal
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-muted">{intro}</p>
      </header>

      <div className="mt-12 space-y-12">
        {sections.map((section) => (
          <section key={section.id} id={section.id}>
            <h2 className="font-display text-xl font-semibold text-ink">
              {section.title}
            </h2>
            <div className="mt-4 space-y-4">
              {section.paragraphs.map((p, i) => (
                <p key={i} className="leading-relaxed text-ink-muted">
                  {p}
                </p>
              ))}
            </div>
            {section.list && (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-ink-muted">
                {section.list.map((item) => (
                  <li key={item} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </article>
  );
}
