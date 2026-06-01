import Image from "next/image";

const visuals = [
  {
    src: "/images/zodiac.jpg",
    alt: "十二星座星盤圖示，代表占星與直覺洞察",
    label: "",
    caption: "",
    border: "border-accent-secondary/20",
    bg: "bg-accent-soft-secondary",
    labelColor: "text-accent-secondary",
    position: "left-2 top-6 w-[62%] rotate-[-5deg] hover:rotate-[-1deg] z-20",
    animation: "animate-float-slow",
  },
  {
    src: "/images/rational.jpg",
    alt: "邏輯與數據分析圖示，代表理性思維",
    label: "",
    caption: "",
    border: "border-accent-tertiary/20",
    bg: "bg-accent-soft-tertiary",
    labelColor: "text-accent-tertiary",
    position: "right-2 bottom-8 w-[58%] rotate-[6deg] hover:rotate-[1deg] z-30",
    animation: "animate-float-delay",
  },
] as const;

export function HomeHeroVisuals() {
  return (
    <div className="relative mx-auto h-[360px] w-full max-w-[520px] sm:h-[430px] lg:h-[500px]">
      {/* 背景光暈 */}
      <div className="absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-soft-secondary/60 blur-3xl" />

      {visuals.map((item) => (
        <figure
          key={item.src}
          className={`
            group absolute overflow-hidden rounded-[1.75rem] border 
            ${item.border} ${item.bg} ${item.position} ${item.animation}
            shadow-[0_24px_80px_rgba(15,23,42,0.14)]
            transition-all duration-500 ease-out
            hover:-translate-y-2 hover:scale-[1.03] hover:shadow-[0_30px_90px_rgba(15,23,42,0.2)]
          `}
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              priority
              sizes="(max-width: 640px) 60vw, 280px"
              className="object-contain p-7 transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>

          <figcaption className="border-t border-white/60 bg-white/40 px-4 py-3 backdrop-blur-sm">
            <p
              className={`text-xs font-semibold uppercase tracking-[0.16em] ${item.labelColor}`}
            >
              {item.label}
            </p>
            <p className="mt-1 text-[11px] text-ink-faint">
              {item.caption}
            </p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
