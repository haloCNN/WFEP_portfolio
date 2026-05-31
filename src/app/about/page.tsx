import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${site.name} — background, process, and design philosophy.`,
};

const timeline = [
  {
    year: "2023 — Present",
    title: "Customer Service Centre Assistant · MTR Corporation",
    detail: "Frontline support for daily operations at Hong Kong’s largest transport network, with a focus on passenger experience and problem solving.",
  },
  {
    year: "2019 — 2023",
    title: "Freelance Private Tutor",
    detail: "Provided one-on-one tutoring for a foreign student with special educational needs (SEN), tailoring learning strategies to support personal growth and academic development.",
  },
  {
    year: "2016 — 2017",
    title: "Teaching Assistant · SEN student",
    detail: "Supported a student with special educational needs (SEN), adapting teaching methods and providing individualized guidance in academic and daily tasks.",
  },
  {
    year: "2015 — 2016",
    title: "Health Education Officer",
    detail: "Promoted wellness and public health through campaigns, workshops, and personalized guidance; collaborated with teams to create accessible educational resources.",
  },
];

const principles = [
  {
    title: "以認知共鳴取代裝飾",
    body: "運用心理學與包容性思維，將複雜資訊轉為清晰、易用的體驗，令用戶快速抓住重點。",
  },
  {
    title: "數據為骨，人性為肉",
    body: "定性洞察與定量數據共同驅動決策，知其然也知其所以然，團隊快速對齊的同時，踏出的每一步也更有人情味。",
  },
  {
    title: "會說故事的系統",
    body: "好的系統像說書人，讓每個畫面、元件、流程都能說出自己的故事，在系統化之外加入「敘事與表達彈性」，將複雜轉為清晰。",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={`Hi, I'm ${site.name.split(" ")[0]}.`}
        description="擁有工程師的腦，藝術家的心，占星師的直覺，還有一顆永遠好奇、永遠想嘗試新身份的靈魂。"
   
      />

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[280px_1fr]">
          <div
            className="aspect-[4/5] max-w-sm rounded-2xl border border-border lg:max-w-none"
            style={{
              background:
                "linear-gradient(160deg, var(--color-accent-soft), var(--color-accent-soft-secondary), var(--color-accent-soft-tertiary))",
            }}
            aria-hidden
          />
          <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-ink-muted">
            <p>
              我的構造可能有點特別：腦子裝著『生醫工程與環境科學』的理科魂、把關安全的『職安健教育主任』，以及看透人心的『應用心理學與NLP教練』資格；內心則住著感性的『音樂劇演員』、神秘的『占星師』與『動物傳心師』，還有充滿愛心的『SEN兒童導師』。
         
            </p>
            <p>
               你問我現在主要在做什麼？我目前正戴著『客戶服務助理』和『菜鳥UI設計師』的帽子，偶爾兼職做個美感爆棚的『海報與PPT設計師』。
         
        
            </p>
            <p>
              從科學到玄學，從人類到動物，從理智到藝術，認識我一個，等於認識了一個團隊！
         
            </p>
            <Button href="/contact" className="!mt-4">
              聯絡我
            </Button>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface-elevated px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-semibold text-ink">How I Work</h2>
     
          <ul className="mt-12 grid gap-8 md:grid-cols-3">
            {principles.map((p, i) => {
              const styles = [
                { bg: "bg-accent-soft", border: "border-accent/20", dot: "border-accent" },
                { bg: "bg-accent-soft-secondary", border: "border-accent-secondary/20", dot: "border-accent-secondary" },
                { bg: "bg-accent-soft-tertiary", border: "border-accent-tertiary/20", dot: "border-accent-tertiary" },
              ][i % 3];
              return (
              <li key={p.title} className={`rounded-2xl border ${styles.border} ${styles.bg} p-8`}>
                <span className={`mb-4 inline-block h-2 w-2 rounded-full border-2 ${styles.dot} bg-surface-elevated`} />
                <h3 className="font-display text-lg font-semibold text-ink">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{p.body}</p>
              </li>
            );
            })}
          </ul>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-semibold text-ink">Background</h2>
          <ol className="mt-12 space-y-0 border-l border-border pl-8">
            {timeline.map((item) => (
              <li key={item.year} className="relative pb-12 last:pb-0">
                <span className="absolute -left-[33px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-surface" />
                <p className="text-sm font-medium text-accent">{item.year}</p>
                <h3 className="mt-2 font-display text-lg font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-muted">
                  {item.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl rounded-2xl border border-accent-secondary/20 bg-accent-soft-secondary p-8 md:p-10">
          <h2 className="font-display text-xl font-semibold text-ink">Toolbox</h2>
          <p className="mt-4 text-ink-muted">
            Figma · Cursor · Canva · Blender · PowerPoint 
          </p>
        </div>
      </section>
    </>
  );
}
