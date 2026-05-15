"use client";

import { kamonTimelines, type KamonTimeline } from "@/data/takumi-content";

// Kamon SVG icons (24×24) for each clan key
function KamonIcon({ kamonKey }: { kamonKey: string }) {
  const gold = "var(--takumi-gold)";
  const dim = "var(--takumi-muted)";
  switch (kamonKey) {
    case "akam": // 赤松 — pine branch
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <line x1="12" y1="22" x2="12" y2="4" stroke={dim} strokeWidth="1.5" strokeLinecap="round" />
          <line x1="12" y1="10" x2="6" y2="6" stroke={dim} strokeWidth="1.2" strokeLinecap="round" />
          <line x1="12" y1="14" x2="18" y2="10" stroke={dim} strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="6" cy="5" r="2" fill={dim} />
          <circle cx="18" cy="9" r="2" fill={dim} />
        </svg>
      );
    case "betcho": // 別所 — circle
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <circle cx="12" cy="12" r="9" fill="none" stroke={dim} strokeWidth="2" />
          <circle cx="12" cy="12" r="4" fill="none" stroke={dim} strokeWidth="1.5" />
        </svg>
      );
    case "toyotomi": // 豊臣 — paulownia
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <line x1="12" y1="20" x2="12" y2="8" stroke={gold} strokeWidth="1.5" strokeLinecap="round" />
          <line x1="12" y1="11" x2="6" y2="6" stroke={gold} strokeWidth="1.2" strokeLinecap="round" />
          <line x1="12" y1="11" x2="18" y2="6" stroke={gold} strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="6" cy="4.5" r="2.5" fill={gold} />
          <circle cx="12" cy="3" r="2.5" fill={gold} />
          <circle cx="18" cy="4.5" r="2.5" fill={gold} />
        </svg>
      );
    case "ikeda": // 池田 — butterfly
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path d="M12 12 C9 9 3 7 4 12 C5 16 10 15 12 12Z" fill="none" stroke={gold} strokeWidth="1.5" />
          <path d="M12 12 C15 9 21 7 20 12 C19 16 14 15 12 12Z" fill="none" stroke={gold} strokeWidth="1.5" />
          <path d="M12 12 C10 14 8 19 11 20 C13 20 13 15 12 12Z" fill="none" stroke={gold} strokeWidth="1.2" />
          <path d="M12 12 C14 14 16 19 13 20 C11 20 11 15 12 12Z" fill="none" stroke={gold} strokeWidth="1.2" />
          <circle cx="12" cy="12" r="1.2" fill={gold} />
        </svg>
      );
    case "honda": // 本多 —立ち葵
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <circle cx="12" cy="8" r="4" fill="none" stroke={gold} strokeWidth="1.5" />
          <circle cx="7" cy="15" r="4" fill="none" stroke={gold} strokeWidth="1.5" />
          <circle cx="17" cy="15" r="4" fill="none" stroke={gold} strokeWidth="1.5" />
          <circle cx="12" cy="12" r="1.5" fill={gold} />
        </svg>
      );
    case "matsu": // 松平 — 三つ葉葵
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <circle cx="12" cy="7" r="4" fill="none" stroke={gold} strokeWidth="1.5" />
          <circle cx="7" cy="15.5" r="4" fill="none" stroke={gold} strokeWidth="1.5" />
          <circle cx="17" cy="15.5" r="4" fill="none" stroke={gold} strokeWidth="1.5" />
          <circle cx="12" cy="12" r="1.8" fill={gold} />
        </svg>
      );
    case "ii": // 井伊 — 井桁
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <line x1="8" y1="3" x2="8" y2="21" stroke={gold} strokeWidth="2" strokeLinecap="round" />
          <line x1="16" y1="3" x2="16" y2="21" stroke={gold} strokeWidth="2" strokeLinecap="round" />
          <line x1="3" y1="8" x2="21" y2="8" stroke={gold} strokeWidth="2" strokeLinecap="round" />
          <line x1="3" y1="16" x2="21" y2="16" stroke={gold} strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "oda": // 織田 — 木瓜
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <circle cx="12" cy="12" r="8" fill="none" stroke={dim} strokeWidth="1.8" />
          <circle cx="12" cy="5" r="3" fill="none" stroke={dim} strokeWidth="1.2" />
          <circle cx="12" cy="19" r="3" fill="none" stroke={dim} strokeWidth="1.2" />
          <circle cx="5" cy="12" r="3" fill="none" stroke={dim} strokeWidth="1.2" />
          <circle cx="19" cy="12" r="3" fill="none" stroke={dim} strokeWidth="1.2" />
        </svg>
      );
    case "ishi": // 石川 — simple flower
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <circle cx="12" cy="12" r="3" fill={dim} />
          {[0, 60, 120, 180, 240, 300].map((deg) => {
            const rad = (deg * Math.PI) / 180;
            const x = 12 + 6 * Math.cos(rad);
            const y = 12 + 6 * Math.sin(rad);
            return <circle key={deg} cx={x} cy={y} r="2.5" fill="none" stroke={dim} strokeWidth="1.5" />;
          })}
        </svg>
      );
    case "owari": // 尾張徳川 — futaba aoi
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <circle cx="8" cy="10" r="5" fill="none" stroke={dim} strokeWidth="1.5" />
          <circle cx="16" cy="10" r="5" fill="none" stroke={dim} strokeWidth="1.5" />
          <line x1="12" y1="10" x2="12" y2="22" stroke={dim} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "naruse": // 成瀬 — 剣片喰
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <circle cx="12" cy="12" r="9" fill="none" stroke={gold} strokeWidth="1.8" />
          <line x1="12" y1="4" x2="12" y2="20" stroke={gold} strokeWidth="1.2" />
          <line x1="4" y1="12" x2="20" y2="12" stroke={gold} strokeWidth="1.2" />
          <circle cx="12" cy="8" r="2.5" fill="none" stroke={gold} strokeWidth="1.2" />
          <circle cx="8" cy="15" r="2.5" fill="none" stroke={gold} strokeWidth="1.2" />
          <circle cx="16" cy="15" r="2.5" fill="none" stroke={gold} strokeWidth="1.2" />
        </svg>
      );
    case "ogasa": // 小笠原 — 三階菱
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <polygon points="12,1 15,6 12,11 9,6" fill="none" stroke={dim} strokeWidth="1.5" strokeLinejoin="round" />
          <polygon points="12,9 16,14 12,19 8,14" fill="none" stroke={dim} strokeWidth="1.5" strokeLinejoin="round" />
          <polygon points="12,17 17,23 12,24 7,23" fill="none" stroke={dim} strokeWidth="1.2" strokeLinejoin="round" />
        </svg>
      );
    case "toda": // 戸田 — 丸に六角
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <circle cx="12" cy="12" r="10" fill="none" stroke={dim} strokeWidth="1.5" />
          <polygon points="12,4 19,8 19,16 12,20 5,16 5,8" fill="none" stroke={dim} strokeWidth="1.5" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <circle cx="12" cy="12" r="9" fill="none" stroke={dim} strokeWidth="1.5" />
        </svg>
      );
  }
}

function TimelineRow({ timeline }: { timeline: KamonTimeline }) {
  const isStable = timeline.entries.length === 1;
  return (
    <div className="stone-layer">
      <h3
        className="font-serif text-lg mb-4"
        style={{ color: "var(--takumi-ink)" }}
      >
        {timeline.nameJP}
        <span
          className="ml-2 font-mono text-[11px]"
          style={{ color: "var(--takumi-muted)" }}
        >
          {timeline.nameCH}
        </span>
      </h3>

      {/* Horizontal scroll timeline */}
      <div className="overflow-x-auto pb-2">
        <div className="flex items-stretch gap-0 min-w-max">
          {timeline.entries.map((entry, idx) => (
            <div key={idx} className="flex items-center">
              {/* Entry card */}
              <div
                className="flex flex-col items-center gap-2 px-4 py-3 border"
                style={{
                  borderColor: isStable ? "var(--takumi-gold)" : idx === timeline.entries.length - 1 ? "var(--takumi-gold)" : "var(--takumi-border)",
                  background: isStable
                    ? "rgba(201,168,76,0.08)"
                    : idx === timeline.entries.length - 1
                    ? "rgba(201,168,76,0.05)"
                    : "var(--takumi-stone)",
                  minWidth: "100px",
                }}
              >
                {/* Kamon icon */}
                <div className="w-10 h-10">
                  <KamonIcon kamonKey={entry.kamonKey} />
                </div>
                <p
                  className="font-serif text-[12px] text-center leading-tight"
                  style={{ color: "var(--takumi-ink)" }}
                >
                  {entry.clanCH}
                </p>
                <p
                  className="font-mono text-[9px] text-center"
                  style={{ color: "var(--takumi-muted)" }}
                >
                  {entry.period}
                </p>
                {isStable && (
                  <span
                    className="font-mono text-[8px] border px-1 py-0.5"
                    style={{ borderColor: "var(--takumi-gold)", color: "var(--takumi-gold)" }}
                  >
                    ★ 一藩貫守
                  </span>
                )}
              </div>

              {/* Arrow connector */}
              {idx < timeline.entries.length - 1 && (
                <div className="flex items-center px-1" style={{ color: "var(--takumi-gold-dim)" }}>
                  <svg width="24" height="16" viewBox="0 0 24 16">
                    <line x1="2" y1="8" x2="18" y2="8" stroke="var(--takumi-gold-dim)" strokeWidth="1.5" strokeDasharray="3 2" />
                    <polygon points="18,4 24,8 18,12" fill="var(--takumi-gold-dim)" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function KamonTimeline() {
  return (
    <section>
      <p
        className="font-mono text-[10px] uppercase tracking-[0.25em] mb-2"
        style={{ color: "var(--takumi-gold-dim)" }}
      >
        Family Crests &amp; Succession · 家紋與領主變遷
      </p>
      <h2
        className="font-serif text-2xl sm:text-3xl mb-3"
        style={{ color: "var(--takumi-ink)" }}
      >
        大名更迭：家紋傳承史
      </h2>
      <p
        className="font-serif text-sm mb-8 max-w-2xl"
        style={{ color: "var(--takumi-muted)" }}
      >
        四座代表性天守的領主更迭史——每一個家紋，代表一個藩主家族的命運與城郭的歷史轉折。
        彦根城的井伊氏260年一藩貫守，是江戶時代政治穩定的縮影。
      </p>

      <div className="space-y-6">
        {kamonTimelines.map((tl) => (
          <TimelineRow key={tl.castleId} timeline={tl} />
        ))}
      </div>
    </section>
  );
}
