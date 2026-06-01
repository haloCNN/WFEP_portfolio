"use client";

import Image from "next/image";

const projectImages = [
  {
    src: "/images/ch0.jpeg",
    alt: "作品展示 Ch0",
    fit: "cover",
  },
  {
    src: "/images/ch1.jpg",
    alt: "作品展示 Ch1",
    fit: "cover",
  },
  {
    src: "/images/ch6.jpg",
    alt: "作品展示 Ch6",
    fit: "cover",
  },
  {
    src: "/images/logo2.jpg",
    alt: "Logo 設計 2",
    fit: "contain",
  },
  {
    src: "/images/logo3.jpg",
    alt: "Logo 設計 3",
    fit: "contain",
  },
  {
    src: "/images/logo4.jpg",
    alt: "Logo 設計 4",
    fit: "contain",
  },
  {
    src: "/images/makeupclass.jpg",
    alt: "Makeup Class 專案",
    fit: "cover",
  },
  {
    src: "/images/mediator.jpg",
    alt: "Mediator 專案",
    fit: "cover",
  },
  {
    src: "/images/warm.jpg",
    alt: "Warm 專案",
    fit: "cover",
  },
] as const;

const marqueeImages = [...projectImages, ...projectImages];

function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden px-6 py-20 md:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-100/50 blur-3xl" />
      <div className="pointer-events-none absolute right-10 top-16 h-56 w-56 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-5xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">
          {eyebrow}
        </p>

        <h1 className="text-5xl font-semibold tracking-tight text-gray-950 sm:text-6xl md:text-7xl">
          {title}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-500 sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-gray-950">
      <PageHero
        eyebrow="過往作品"
        title="Work"
        description="用理性與直覺，把訊息煉成會發光的設計"
      />

      <section className="relative px-6 pb-20 pt-6 md:pb-28 md:pt-10">
        <div className="mx-auto mb-10 max-w-5xl text-center">
          <p className="text-sm uppercase tracking-[0.22em] text-gray-400">
            Selected Works
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            A moving gallery of visual projects
          </h2>
        </div>

        <div className="relative -mx-6 overflow-hidden border-y border-gray-100 bg-gray-50/60 py-10">
          <div className="work-marquee-track flex w-max gap-6">
            {marqueeImages.map((image, index) => (
              <article
                key={`${image.src}-${index}`}
                className="group relative h-[220px] w-[280px] shrink-0 overflow-hidden rounded-3xl border border-white/80 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl sm:h-[260px] sm:w-[360px] lg:h-[300px] lg:w-[430px]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={index < 4}
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 430px"
                  className={`transition-transform duration-700 group-hover:scale-105 ${
                    image.fit === "contain"
                      ? "object-contain p-8"
                      : "object-cover"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-20" />
              </article>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent" />
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-6 text-gray-400">
          Hover over the gallery to pause and view each work.
        </p>
      </section>

      <style>{`
        @keyframes work-marquee-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .work-marquee-track {
          animation: work-marquee-scroll 42s linear infinite;
          will-change: transform;
        }

        .work-marquee-track:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .work-marquee-track {
            animation: none;
            transform: translateX(0);
          }
        }
      `}</style>
    </main>
  );
}
