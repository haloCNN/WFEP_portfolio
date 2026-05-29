"use client";

import Link from "next/link";
import { useEffect, useId, useMemo, useState } from "react";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

type WorkBentoGridProps = {
  projects: Project[];
};

function storageKey(slug: string) {
  return `wfep.workImage.${slug}`;
}

function getBentoSpan(i: number) {
  // 6-column grid on lg+. Pattern repeats nicely.
  const m = i % 8;
  if (m === 0) return "lg:col-span-4 lg:row-span-2";
  if (m === 1) return "lg:col-span-2 lg:row-span-1";
  if (m === 2) return "lg:col-span-2 lg:row-span-1";
  if (m === 3) return "lg:col-span-3 lg:row-span-2";
  if (m === 4) return "lg:col-span-3 lg:row-span-1";
  if (m === 5) return "lg:col-span-3 lg:row-span-1";
  if (m === 6) return "lg:col-span-2 lg:row-span-1";
  return "lg:col-span-4 lg:row-span-1";
}

export function WorkBentoGrid({ projects }: WorkBentoGridProps) {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6 lg:auto-rows-[170px]">
        {projects.map((project, i) => (
          <WorkBentoCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}

function WorkBentoCard({ project, index }: { project: Project; index: number }) {
  const inputId = useId();
  const key = useMemo(() => storageKey(project.slug), [project.slug]);
  const [dataUrl, setDataUrl] = useState<string | null>(null);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(key);
      if (stored) setDataUrl(stored);
    } catch {
      // ignore (private mode / storage disabled)
    }
  }, [key]);

  const onPickFile = (file: File | null) => {
    if (!file) return;
    if (!file.type.startsWith("image/")) return;

    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === "string" ? reader.result : null;
      if (!result) return;
      setDataUrl(result);
      try {
        window.localStorage.setItem(key, result);
      } catch {
        // ignore storage errors
      }
    };
    reader.readAsDataURL(file);
  };

  const clear = () => {
    setDataUrl(null);
    try {
      window.localStorage.removeItem(key);
    } catch {
      // ignore
    }
  };

  const hasImage = Boolean(dataUrl);

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-surface-elevated",
        "transition-shadow hover:shadow-lg",
        "sm:col-span-1",
        getBentoSpan(index),
      )}
      style={{
        backgroundColor: hasImage ? undefined : `${project.accent}12`,
      }}
    >
      <div className="absolute inset-0">
        {hasImage ? (
          <div
            className={cn(
              "absolute inset-0 bg-center bg-cover transition duration-500",
              "group-hover:opacity-55 group-hover:saturate-75",
            )}
            style={{ backgroundImage: `url(${dataUrl})` }}
            aria-hidden
          />
        ) : (
          <div
            className="absolute inset-0 opacity-70 transition-transform duration-500 group-hover:scale-[1.02]"
            style={{
              background: `linear-gradient(135deg, ${project.accent}40 0%, transparent 55%), radial-gradient(circle at 80% 20%, ${project.accent}55, transparent 45%)`,
            }}
            aria-hidden
          />
        )}

        <div
          className={cn(
            "absolute inset-0 opacity-0 transition-opacity duration-300",
            "bg-gradient-to-b from-black/15 via-black/35 to-black/55",
            "group-hover:opacity-100",
          )}
          aria-hidden
        />
      </div>

      <div className="relative flex h-full flex-col justify-between p-6">
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-surface/85 px-3 py-1 text-xs font-medium text-ink backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="font-display text-2xl font-semibold text-ink transition-colors group-hover:text-surface">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-ink-muted transition-colors group-hover:text-surface/85">
            {project.subtitle}
          </p>

          <div className="mt-4 overflow-hidden">
            <p className="translate-y-2 text-sm leading-relaxed text-surface/0 transition-all duration-300 group-hover:translate-y-0 group-hover:text-surface/85">
              {/* 留空：你之後再補簡介 */}
              &nbsp;
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href={`/projects/${project.slug}`}
              className={cn(
                "inline-flex items-center gap-1 rounded-full border border-border bg-surface/85 px-4 py-2 text-sm font-medium text-ink backdrop-blur-sm",
                "transition-colors hover:bg-surface",
              )}
            >
              View
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>

            <div className="flex items-center gap-2">
              <input
                id={inputId}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => onPickFile(e.target.files?.[0] ?? null)}
              />
              <label
                htmlFor={inputId}
                className={cn(
                  "cursor-pointer select-none rounded-full border border-border bg-surface/70 px-4 py-2 text-xs font-medium text-ink backdrop-blur-sm",
                  "transition-colors hover:bg-surface",
                )}
              >
                從電腦選圖
              </label>
              {hasImage && (
                <button
                  type="button"
                  onClick={clear}
                  className={cn(
                    "rounded-full border border-border bg-surface/70 px-3 py-2 text-xs font-medium text-ink-muted backdrop-blur-sm",
                    "transition-colors hover:bg-surface hover:text-ink",
                  )}
                >
                  清除
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

