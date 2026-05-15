"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { archLabItems, castles, type ArchLabCategory, type ArchLabItem } from "@/data/takumi-content";

const CATEGORIES: { key: ArchLabCategory; labelJP: string; labelCH: string }[] = [
  { key: "hafu", labelJP: "破風", labelCH: "山牆屋頂" },
  { key: "tiles", labelJP: "瓦與頂", labelCH: "瓦件與脊飾" },
  { key: "ishigaki", labelJP: "石垣", labelCH: "石造城牆" },
  { key: "defense", labelJP: "防禦機關", labelCH: "防禦體系" },
];

// SVG diagrams: each returns a 80×60 SVG content
function ArchDiagram({ itemId }: { itemId: string }) {
  const gold = "var(--takumi-gold)";
  const dim = "var(--takumi-gold-dim)";
  const muted = "var(--takumi-muted)";

  switch (itemId) {
    // ── HAFU diagrams ──────────────────────────────────────────────────────────
    case "chidori":
      return (
        <svg viewBox="0 0 80 60" className="w-full h-full">
          {/* Roof slope */}
          <line x1="0" y1="50" x2="80" y2="50" stroke={muted} strokeWidth="1" />
          <line x1="10" y1="50" x2="40" y2="25" stroke={muted} strokeWidth="1.5" />
          <line x1="70" y1="50" x2="40" y2="25" stroke={muted} strokeWidth="1.5" />
          {/* Chidori dormer triangle */}
          <polygon points="32,25 40,8 48,25" fill="none" stroke={gold} strokeWidth="2" strokeLinejoin="round" />
          <line x1="32" y1="25" x2="48" y2="25" stroke={gold} strokeWidth="2" />
          {/* Label */}
          <text x="40" y="56" textAnchor="middle" fontSize="6" fill={dim} fontFamily="monospace">千鳥破風</text>
        </svg>
      );
    case "kara":
      return (
        <svg viewBox="0 0 80 60" className="w-full h-full">
          <line x1="0" y1="50" x2="80" y2="50" stroke={muted} strokeWidth="1" />
          {/* Curved kara-hafu profile */}
          <path d="M15 40 Q20 20 40 15 Q60 20 65 40" fill="none" stroke={gold} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="15" y1="40" x2="65" y2="40" stroke={gold} strokeWidth="2" />
          {/* Eave curves */}
          <path d="M15 40 Q10 45 8 50" fill="none" stroke={muted} strokeWidth="1.2" />
          <path d="M65 40 Q70 45 72 50" fill="none" stroke={muted} strokeWidth="1.2" />
          <text x="40" y="56" textAnchor="middle" fontSize="6" fill={dim} fontFamily="monospace">唐破風</text>
        </svg>
      );
    case "irimoya":
      return (
        <svg viewBox="0 0 80 60" className="w-full h-full">
          <line x1="0" y1="50" x2="80" y2="50" stroke={muted} strokeWidth="1" />
          {/* Hip roof base */}
          <path d="M5 50 L20 30 L40 24 L60 30 L75 50" fill="none" stroke={muted} strokeWidth="1.2" />
          {/* Gable triangle overlay */}
          <polygon points="25 30 40 12 55 30" fill="none" stroke={gold} strokeWidth="2" />
          <line x1="25" y1="30" x2="55" y2="30" stroke={gold} strokeWidth="2" />
          <text x="40" y="56" textAnchor="middle" fontSize="6" fill={dim} fontFamily="monospace">入母屋破風</text>
        </svg>
      );
    case "kirizuma":
      return (
        <svg viewBox="0 0 80 60" className="w-full h-full">
          <line x1="0" y1="50" x2="80" y2="50" stroke={muted} strokeWidth="1" />
          {/* Simple gable triangle */}
          <polygon points="15 50 40 15 65 50" fill="none" stroke={gold} strokeWidth="2" strokeLinejoin="round" />
          <line x1="15" y1="50" x2="65" y2="50" stroke={gold} strokeWidth="2" />
          <text x="40" y="57" textAnchor="middle" fontSize="6" fill={dim} fontFamily="monospace">切妻破風</text>
        </svg>
      );
    case "noki-kara":
      return (
        <svg viewBox="0 0 80 60" className="w-full h-full">
          {/* Wall */}
          <rect x="10" y="10" width="60" height="40" fill="none" stroke={muted} strokeWidth="1" />
          {/* Noki kara-hafu on eave line */}
          <path d="M20 10 Q25 2 40 0 Q55 2 60 10" fill="none" stroke={gold} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="20" y1="10" x2="60" y2="10" stroke={gold} strokeWidth="2" />
          <text x="40" y="58" textAnchor="middle" fontSize="6" fill={dim} fontFamily="monospace">軒唐破風</text>
        </svg>
      );
    // ── TILES diagrams ─────────────────────────────────────────────────────────
    case "shachihoko":
      return (
        <svg viewBox="0 0 80 60" className="w-full h-full">
          {/* Ridge line */}
          <line x1="10" y1="40" x2="70" y2="40" stroke={muted} strokeWidth="2" />
          {/* Left shachihoko (fish/dragon) */}
          <path d="M16 40 C14 30 18 22 22 26 C24 28 22 36 20 40" fill="none" stroke={gold} strokeWidth="2" strokeLinecap="round" />
          <path d="M13 26 L22 26 L18 20Z" fill={gold} />
          {/* Right shachihoko (mirrored) */}
          <path d="M64 40 C66 30 62 22 58 26 C56 28 58 36 60 40" fill="none" stroke={gold} strokeWidth="2" strokeLinecap="round" />
          <path d="M67 26 L58 26 L62 20Z" fill={gold} />
          <text x="40" y="57" textAnchor="middle" fontSize="6" fill={dim} fontFamily="monospace">鯱鉾</text>
        </svg>
      );
    case "oni-gawara":
      return (
        <svg viewBox="0 0 80 60" className="w-full h-full">
          {/* Face outline */}
          <circle cx="40" cy="28" r="18" fill="none" stroke={gold} strokeWidth="2" />
          {/* Horns */}
          <path d="M30 14 L26 5 L32 10Z" fill="none" stroke={gold} strokeWidth="1.5" />
          <path d="M50 14 L54 5 L48 10Z" fill="none" stroke={gold} strokeWidth="1.5" />
          {/* Eyes */}
          <circle cx="33" cy="25" r="3.5" fill="none" stroke={gold} strokeWidth="1.5" />
          <circle cx="47" cy="25" r="3.5" fill="none" stroke={gold} strokeWidth="1.5" />
          {/* Fangs */}
          <line x1="35" y1="38" x2="33" y2="44" stroke={gold} strokeWidth="2" strokeLinecap="round" />
          <line x1="45" y1="38" x2="47" y2="44" stroke={gold} strokeWidth="2" strokeLinecap="round" />
          <text x="40" y="57" textAnchor="middle" fontSize="6" fill={dim} fontFamily="monospace">鬼瓦</text>
        </svg>
      );
    case "noshi-gawara":
      return (
        <svg viewBox="0 0 80 60" className="w-full h-full">
          {/* Stacked noshi tiles on ridge */}
          {[0, 4, 8, 12, 16].map((offset, i) => (
            <rect
              key={i}
              x={20}
              y={42 - offset}
              width={40}
              height={5}
              fill="none"
              stroke={i === 0 ? muted : gold}
              strokeWidth={i === 0 ? 1 : 1.5}
            />
          ))}
          <text x="40" y="57" textAnchor="middle" fontSize="6" fill={dim} fontFamily="monospace">熨斗瓦（九層）</text>
        </svg>
      );
    case "kazari-gawara":
      return (
        <svg viewBox="0 0 80 60" className="w-full h-full">
          {/* Tile row */}
          <line x1="5" y1="35" x2="75" y2="35" stroke={muted} strokeWidth="1.5" />
          {[12, 28, 44, 60].map((x, i) => (
            <g key={i}>
              <rect x={x - 6} y={25} width={12} height={10} fill="none" stroke={muted} strokeWidth="1" />
              {/* End decorative circle */}
              <circle cx={x} cy={24} r={6} fill="none" stroke={gold} strokeWidth={i === 1 ? 2 : 1.2} />
              {i === 1 && <circle cx={x} cy={24} r={2.5} fill={gold} />}
            </g>
          ))}
          <text x="40" y="57" textAnchor="middle" fontSize="6" fill={dim} fontFamily="monospace">飾り瓦</text>
        </svg>
      );
    // ── ISHIGAKI diagrams ──────────────────────────────────────────────────────
    case "nozura":
      return (
        <svg viewBox="0 0 80 60" className="w-full h-full">
          {/* Rough irregular stone shapes */}
          {[
            [2, 38, 22, 12], [26, 35, 18, 15], [46, 40, 20, 10], [68, 37, 12, 13],
            [5, 24, 20, 13], [28, 22, 25, 12], [55, 25, 18, 14],
            [0, 11, 15, 12], [17, 9, 22, 14], [41, 12, 20, 12], [63, 10, 17, 13],
          ].map(([x, y, w, h], i) => (
            <rect key={i} x={x} y={y} width={w} height={h} rx={2} ry={3}
              fill="none" stroke={i < 4 ? gold : muted} strokeWidth={i < 4 ? 1.5 : 1} />
          ))}
          <text x="40" y="57" textAnchor="middle" fontSize="6" fill={dim} fontFamily="monospace">野面積</text>
        </svg>
      );
    case "uchikomi":
      return (
        <svg viewBox="0 0 80 60" className="w-full h-full">
          {/* Partially trimmed — more regular */}
          {[
            [1, 38, 26, 11], [29, 37, 22, 12], [53, 39, 26, 11],
            [1, 25, 18, 12], [21, 26, 28, 11], [51, 25, 28, 12],
            [1, 13, 22, 11], [25, 12, 24, 12], [51, 13, 28, 11],
          ].map(([x, y, w, h], i) => (
            <rect key={i} x={x} y={y} width={w} height={h}
              fill="none" stroke={gold} strokeWidth="1.5" />
          ))}
          <text x="40" y="57" textAnchor="middle" fontSize="6" fill={dim} fontFamily="monospace">打込ハギ</text>
        </svg>
      );
    case "kirikomi":
      return (
        <svg viewBox="0 0 80 60" className="w-full h-full">
          {/* Perfect grid — precision cut */}
          {[0, 1, 2].map((row) =>
            [0, 1, 2, 3].map((col) => (
              <rect key={`${row}-${col}`} x={2 + col * 19} y={10 + row * 13} width={18} height={12}
                fill="none" stroke={gold} strokeWidth="2" />
            ))
          )}
          <text x="40" y="57" textAnchor="middle" fontSize="6" fill={dim} fontFamily="monospace">切込ハギ</text>
        </svg>
      );
    case "sangi":
      return (
        <svg viewBox="0 0 80 60" className="w-full h-full">
          {/* Corner quoin alternating pattern */}
          <text x="8" y="8" fontSize="7" fill={dim} fontFamily="monospace">corner →</text>
          {/* Vertical stack left */}
          {[8, 20, 32, 44].map((y, i) => (
            <rect key={`v${i}`} x={2} y={y} width={28} height={10}
              fill="none" stroke={i % 2 === 0 ? gold : muted} strokeWidth={i % 2 === 0 ? 2 : 1} />
          ))}
          {/* Horizontal stack right (interlocking) */}
          {[8, 20, 32, 44].map((y, i) => (
            <rect key={`h${i}`} x={30} y={y} width={10} height={10}
              fill="none" stroke={i % 2 === 1 ? gold : muted} strokeWidth={i % 2 === 1 ? 2 : 1} />
          ))}
          <text x="40" y="57" textAnchor="middle" fontSize="6" fill={dim} fontFamily="monospace">算木積（隅角）</text>
        </svg>
      );
    case "nuno":
      return (
        <svg viewBox="0 0 80 60" className="w-full h-full">
          {/* Perfect horizontal courses */}
          {[10, 21, 32, 43].map((y, row) =>
            [0, 1, 2, 3].map((col) => (
              <rect key={`${row}-${col}`} x={1 + col * 19} y={y} width={18} height={10}
                fill="none" stroke={gold} strokeWidth="1.8" />
            ))
          )}
          <text x="40" y="57" textAnchor="middle" fontSize="6" fill={dim} fontFamily="monospace">布積</text>
        </svg>
      );
    // ── DEFENSE diagrams ───────────────────────────────────────────────────────
    case "hazama":
      return (
        <svg viewBox="0 0 80 60" className="w-full h-full">
          {/* Wall */}
          <rect x="5" y="8" width="70" height="42" fill="none" stroke={muted} strokeWidth="1.5" />
          {/* Circle loophole */}
          <circle cx="20" cy="28" r="6" fill="none" stroke={gold} strokeWidth="2" />
          {/* Triangle loophole */}
          <polygon points="38,22 46,22 42,34" fill="none" stroke={gold} strokeWidth="2" strokeLinejoin="round" />
          {/* Rectangle loophole */}
          <rect x="54" y="22" width="10" height="12" fill="none" stroke={gold} strokeWidth="2" />
          {/* Labels */}
          <text x="20" y="42" textAnchor="middle" fontSize="5.5" fill={dim} fontFamily="monospace">丸</text>
          <text x="42" y="42" textAnchor="middle" fontSize="5.5" fill={dim} fontFamily="monospace">三角</text>
          <text x="59" y="42" textAnchor="middle" fontSize="5.5" fill={dim} fontFamily="monospace">四角</text>
          <text x="40" y="57" textAnchor="middle" fontSize="6" fill={dim} fontFamily="monospace">狭間（三形式）</text>
        </svg>
      );
    case "ishi-otoshi":
      return (
        <svg viewBox="0 0 80 60" className="w-full h-full">
          {/* Wall face */}
          <rect x="5" y="5" width="50" height="50" fill="none" stroke={muted} strokeWidth="1.5" />
          {/* Overhang bracket */}
          <rect x="55" y="14" width="20" height="18" fill="none" stroke={gold} strokeWidth="2" />
          {/* Grid floor (drop opening) */}
          <line x1="59" y1="14" x2="59" y2="32" stroke={gold} strokeWidth="1.5" />
          <line x1="63" y1="14" x2="63" y2="32" stroke={gold} strokeWidth="1.5" />
          <line x1="67" y1="14" x2="67" y2="32" stroke={gold} strokeWidth="1.5" />
          {/* Falling stone */}
          <circle cx="63" cy="42" r="4" fill="none" stroke={gold} strokeWidth="2" />
          <path d="M63 32 L63 38" stroke={gold} strokeWidth="1.5" strokeDasharray="2 2" />
          <text x="40" y="57" textAnchor="middle" fontSize="6" fill={dim} fontFamily="monospace">石落</text>
        </svg>
      );
    case "tamon":
      return (
        <svg viewBox="0 0 80 60" className="w-full h-full">
          {/* Long corridor building */}
          <rect x="5" y="22" width="70" height="20" fill="none" stroke={gold} strokeWidth="2" />
          {/* Upper floor */}
          <rect x="5" y="12" width="70" height="10" fill="none" stroke={muted} strokeWidth="1.2" />
          {/* Loopholes in upper floor */}
          {[15, 30, 45, 60].map((x) => (
            <rect key={x} x={x - 3} y={14} width={6} height={6} fill="none" stroke={gold} strokeWidth="1.5" />
          ))}
          {/* Soldier paths */}
          <line x1="5" y1="38" x2="75" y2="38" stroke={muted} strokeWidth="1" strokeDasharray="4 2" />
          <text x="40" y="57" textAnchor="middle" fontSize="6" fill={dim} fontFamily="monospace">多門櫓</text>
        </svg>
      );
    case "masugata":
      return (
        <svg viewBox="0 0 80 60" className="w-full h-full">
          {/* Square killing box */}
          <rect x="15" y="10" width="50" height="40" fill="none" stroke={gold} strokeWidth="2.5" />
          {/* Outer gate (bottom) */}
          <rect x="27" y="48" width="26" height="8" fill="none" stroke={muted} strokeWidth="1.5" />
          {/* Inner gate (right) */}
          <rect x="62" y="22" width="8" height="22" fill="none" stroke={muted} strokeWidth="1.5" />
          {/* Attacker path with bend */}
          <path d="M40 56 L40 35 L60 35" stroke={gold} strokeWidth="1.5" strokeDasharray="3 2" markerEnd="url(#a)" />
          {/* Labels */}
          <text x="24" y="32" fontSize="6" fill={dim} fontFamily="monospace">壁</text>
          <text x="40" y="57" textAnchor="middle" fontSize="6" fill={dim} fontFamily="monospace">枡形虎口</text>
        </svg>
      );
    case "hori":
      return (
        <svg viewBox="0 0 80 60" className="w-full h-full">
          {/* Castle silhouette */}
          <polygon points="30,35 50,35 48,20 40,10 32,20" fill="none" stroke={muted} strokeWidth="1.5" />
          {/* Moat ring */}
          <ellipse cx="40" cy="38" rx="32" ry="12" fill="none" stroke={gold} strokeWidth="2.5" />
          {/* Water ripple */}
          <ellipse cx="40" cy="38" rx="25" ry="8" fill="none" stroke={gold} strokeWidth="1" opacity={0.4} />
          {/* Bridge */}
          <line x1="40" y1="50" x2="40" y2="58" stroke={muted} strokeWidth="3" strokeLinecap="round" />
          <text x="40" y="57" textAnchor="middle" fontSize="6" fill={dim} fontFamily="monospace">水堀</text>
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 80 60" className="w-full h-full">
          <rect x="10" y="10" width="60" height="40" fill="none" stroke={gold} strokeWidth="2" />
        </svg>
      );
  }
}

function CastleTagList({ castleIds }: { castleIds: string[] }) {
  const names = castleIds.map((id) => {
    const c = castles.find((x) => x.id === id);
    return c ? c.nameJP : id;
  });
  return (
    <div className="flex flex-wrap gap-1.5 mt-3">
      {names.map((name) => (
        <span
          key={name}
          className="font-mono text-[9px] border px-1.5 py-0.5"
          style={{ borderColor: "var(--takumi-gold-dim)", color: "var(--takumi-gold-dim)" }}
        >
          {name}
        </span>
      ))}
    </div>
  );
}

function LabItem({ item }: { item: ArchLabItem }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border"
      style={{ borderColor: "var(--takumi-border)", background: "var(--takumi-stone)" }}
    >
      <button
        type="button"
        className="w-full flex items-center justify-between gap-4 p-4 text-left"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <div className="flex items-center gap-4">
          {/* Mini SVG preview */}
          <div className="shrink-0 w-16 h-12 flex items-center justify-center"
            style={{ background: "var(--takumi-iron)" }}>
            <div className="w-12 h-10">
              <ArchDiagram itemId={item.id} />
            </div>
          </div>
          <div>
            <p className="font-serif text-base" style={{ color: "var(--takumi-ink)" }}>
              {item.termJP}
            </p>
            <p className="font-mono text-[10px]" style={{ color: "var(--takumi-muted)" }}>
              {item.termCH}
            </p>
          </div>
        </div>
        <span
          className="font-mono text-sm shrink-0"
          style={{ color: "var(--takumi-gold)", transform: open ? "rotate(45deg)" : "none", transition: "transform 0.2s" }}
        >
          +
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-5 pt-2 border-t" style={{ borderColor: "var(--takumi-border)" }}>
              {/* Large diagram */}
              <div
                className="w-full h-28 mb-4 flex items-center justify-center"
                style={{ background: "var(--takumi-iron)" }}
              >
                <div className="w-40 h-24">
                  <ArchDiagram itemId={item.id} />
                </div>
              </div>
              <p
                className="font-serif text-sm leading-7"
                style={{ color: "var(--takumi-ink)" }}
              >
                {item.description}
              </p>
              <CastleTagList castleIds={item.castles} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ArchitectsLab() {
  const [activeCategory, setActiveCategory] = useState<ArchLabCategory>("hafu");
  const items = archLabItems.filter((i) => i.category === activeCategory);

  return (
    <section>
      <p
        className="font-mono text-[10px] uppercase tracking-[0.25em] mb-2"
        style={{ color: "var(--takumi-gold-dim)" }}
      >
        Architect&apos;s Lab · 建築師之室
      </p>
      <h2
        className="font-serif text-2xl sm:text-3xl mb-8"
        style={{ color: "var(--takumi-ink)" }}
      >
        構造解析：石垣・破風・防禦
      </h2>

      {/* Category tabs */}
      <div className="flex gap-0 mb-6 border" style={{ borderColor: "var(--takumi-border)" }}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            type="button"
            onClick={() => setActiveCategory(cat.key)}
            className="flex-1 py-3 px-2 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.15em] transition-colors duration-150 border-r last:border-r-0"
            style={{
              borderRightColor: "var(--takumi-border)",
              background:
                activeCategory === cat.key
                  ? "var(--takumi-gold)"
                  : "var(--takumi-stone)",
              color:
                activeCategory === cat.key
                  ? "var(--takumi-void)"
                  : "var(--takumi-muted)",
            }}
          >
            <span className="block">{cat.labelJP}</span>
            <span className="hidden sm:block text-[9px] opacity-70 mt-0.5">{cat.labelCH}</span>
          </button>
        ))}
      </div>

      {/* Items */}
      <div className="space-y-2">
        {items.map((item) => (
          <LabItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
