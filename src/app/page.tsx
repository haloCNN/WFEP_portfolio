import { Button } from "@/components/Button";
import { HomeHeroVisuals } from "@/components/HomeHeroVisuals";
import { SectionHeading } from "@/components/SectionHeading";
import { services, site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pb-20 pt-12 md:pb-28 md:pt-20">
        <div
          className="pointer-events-none absolute -right-32 top-0 h-[480px] w-[480px] rounded-full opacity-50 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--color-accent) 45%, transparent), transparent 70%)",
          }}
        />
        <div
          className="pointer-events-none absolute -left-24 top-32 h-[360px] w-[360px] rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--color-accent-secondary) 40%, transparent), transparent 70%)",
          }}
        />
        <div
          className="pointer-events-none absolute bottom-0 right-1/4 h-[280px] w-[280px] rounded-full opacity-35 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--color-accent-tertiary) 45%, transparent), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(260px,320px)] lg:gap-16">
            <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-soft px-4 py-1.5 text-xs font-medium text-accent">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            Bonding · Modern Healing
          </p>
          <h1 className="mt-8 max-w-4xl font-display text-[2rem] font-semibold leading-[1.2] tracking-tight text-ink text-balance sm:text-[2.25rem] md:text-4xl lg:text-5xl">
     
            如果 AI 要取代人類，我大概是最後一個。因為它很難同時學會寫 Code、讀星盤，唱歌演戲和跟小孩與毛孩聊天。
          </h1>
     
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted md:text-xl">
            我是馮詩恩。一位融合科學邏輯、玄學、應用心理學洞察與 UI/UX 設計能力的體驗架構師。專注於為創新品牌提供具備情緒價值的產品與服務方案。
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/projects">View work</Button>
            <Button href="/about" variant="secondary">
              About me
            </Button>
          </div>
            </div>

            <div className="mx-auto w-full max-w-sm lg:max-w-none">
              <HomeHeroVisuals />
            </div>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-8 border-t border-border pt-10 sm:grid-cols-4">
            {[
              { label: "核心訊息", value: site.tagline },
              { label: "核心優勢", value: "共情 × 理性" },
              { label: "斜槓身份", value: "多潛力" },
              { label: "位於", value: site.location },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="text-xs uppercase tracking-[0.15em] text-ink-faint">
                  {stat.label}
                </dt>
                <dd className="mt-2 font-display text-2xl font-semibold gradient-brand-text">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-y border-border bg-surface-elevated px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="服務"
            title="我可以如何幫到你"
            description="結合設計、教育、心理探索與直覺感知的跨界服務，幫助人更清晰地表達自己、理解自己，也更理解身邊的世界"
       
          />
          <ul className="mt-14 grid gap-8 md:grid-cols-3">
            {services.map((service, i) => {
              const accents = [
                { num: "text-accent", bg: "bg-accent-soft", border: "border-accent/15" },
                { num: "text-accent-secondary", bg: "bg-accent-soft-secondary", border: "border-accent-secondary/15" },
                { num: "text-accent-tertiary", bg: "bg-accent-soft-tertiary", border: "border-accent-tertiary/15" },
              ][i % 3];
              return (
              <li
                key={service.title}
                className={`rounded-2xl border ${accents.border} ${accents.bg} p-8 transition-shadow hover:shadow-md`}
              >
                <span className={`font-display text-sm font-semibold ${accents.num}`}>
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {service.description}
                </p>
              </li>
            );
            })}
          </ul>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl gradient-brand px-8 py-14 text-white shadow-xl shadow-accent/20 md:px-14 md:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">
              WELCOME
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              從港鐵乘客、自閉症兒童到家裡那隻貓，沒有我讀不懂的用戶需求。
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/85">
              想一起把混亂的需求梳理成清晰的體驗？告訴我你的情境、使用者與目標，我會回覆你下一步怎麼走。
            </p>
            <div className="mt-8">
              <Button
                href="/contact"
                variant="secondary"
                className="!bg-surface !text-ink hover:!bg-surface/90"
              >
                Start a conversation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
