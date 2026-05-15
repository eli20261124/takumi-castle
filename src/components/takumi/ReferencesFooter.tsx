"use client";

import { references } from "@/data/takumi-content";

export function ReferencesFooter() {
  return (
    <footer className="border-t pt-10 pb-8" style={{ borderColor: "var(--takumi-gold-dim)" }}>
      <p
        className="font-mono text-[10px] uppercase tracking-[0.25em] mb-2"
        style={{ color: "var(--takumi-gold-dim)" }}
      >
        Academic References · 學術參考文獻
      </p>
      <h2
        className="font-serif text-xl mb-6"
        style={{ color: "var(--takumi-ink)" }}
      >
        參考文獻
      </h2>

      <ol className="space-y-3">
        {references.map((ref) => (
          <li key={ref.id} className="flex gap-3">
            <span
              className="font-mono text-[10px] shrink-0 mt-0.5 w-6 text-right"
              style={{ color: "var(--takumi-muted)" }}
            >
              [{ref.id}]
            </span>
            <span className="font-serif text-sm leading-6" style={{ color: "var(--takumi-muted)" }}>
              {ref.url ? (
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 transition-colors duration-100"
                  style={{ color: "var(--takumi-gold)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--takumi-gold-light)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--takumi-gold)";
                  }}
                >
                  {ref.title}
                </a>
              ) : (
                <span style={{ color: "var(--takumi-ink)" }}>{ref.title}</span>
              )}
              {ref.source && (
                <span className="ml-1">{ref.source}</span>
              )}
            </span>
          </li>
        ))}
      </ol>

      <div className="gold-divider mt-10 mb-6" />

      <div className="flex flex-wrap items-center justify-between gap-4">
        <p
          className="font-mono text-[10px]"
          style={{ color: "var(--takumi-muted)" }}
        >
          Project Takumi · 匠 © 2026 · 互動式建築史研究
        </p>
        <p
          className="font-serif text-[11px]"
          style={{ color: "var(--takumi-muted)" }}
        >
          石垣與破風：大和領地的守護屏障
        </p>
      </div>
    </footer>
  );
}
