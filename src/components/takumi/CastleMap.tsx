"use client";

import type { CastleContent, CastleKey } from "@/data/takumi-content";

type Props = {
  castles: CastleContent[];
  selectedCastle: CastleKey | null;
  onSelect: (id: CastleKey) => void;
};

// SVG positions within viewBox 0 0 420 700 (North → South)
const castlePositions: Record<CastleKey, { x: number; y: number }> = {
  hirosaki:  { x: 205, y: 198 },
  matsumoto: { x: 234, y: 306 },
  maruoka:   { x: 181, y: 320 },
  inuyama:   { x: 222, y: 350 },
  hikone:    { x: 206, y: 366 },
  himeji:    { x: 181, y: 394 },
  matsue:    { x: 148, y: 396 },
  bicchu:    { x: 166, y: 418 },
  marugame:  { x: 196, y: 448 },
  iyo:       { x: 171, y: 460 },
  uwajima:   { x: 161, y: 478 },
  kochi:     { x: 197, y: 470 },
};

// Each castle's Kamon glyph as an inline SVG (24×24 canvas)
function KamonGlyph({
  castleId,
  color,
  opacity,
}: {
  castleId: CastleKey;
  color: string;
  opacity: number;
}) {
  const sw = 1.6;
  const swThin = 1.1;
  switch (castleId) {
    case "hirosaki":
      // 丸に三つ引き — circle + 3 horizontal bars
      return (
        <g opacity={opacity}>
          <circle cx="12" cy="12" r="10" fill="none" stroke={color} strokeWidth={sw} />
          <line x1="4" y1="8" x2="20" y2="8" stroke={color} strokeWidth={swThin} />
          <line x1="4" y1="12" x2="20" y2="12" stroke={color} strokeWidth={swThin} />
          <line x1="4" y1="16" x2="20" y2="16" stroke={color} strokeWidth={swThin} />
        </g>
      );
    case "matsumoto":
      // 三階菱 — 3 stacked diamonds
      return (
        <g opacity={opacity}>
          <polygon points="12,1 16,5 12,9 8,5" fill="none" stroke={color} strokeWidth={sw} strokeLinejoin="round" />
          <polygon points="12,8 17,13 12,18 7,13" fill="none" stroke={color} strokeWidth={sw} strokeLinejoin="round" />
          <polygon points="12,15 18,21 12,24 6,21" fill="none" stroke={color} strokeWidth={swThin} strokeLinejoin="round" />
        </g>
      );
    case "maruoka":
      // 立ち葵 in circle — hollyhock blossom
      return (
        <g opacity={opacity}>
          <circle cx="12" cy="12" r="10" fill="none" stroke={color} strokeWidth={sw} />
          <circle cx="12" cy="9" r="3" fill="none" stroke={color} strokeWidth={swThin} />
          <circle cx="7.5" cy="14.5" r="3" fill="none" stroke={color} strokeWidth={swThin} />
          <circle cx="16.5" cy="14.5" r="3" fill="none" stroke={color} strokeWidth={swThin} />
          <circle cx="12" cy="12" r="1.2" fill={color} />
        </g>
      );
    case "inuyama":
      // 丸に剣片喰 — circle + cross-oxalis
      return (
        <g opacity={opacity}>
          <circle cx="12" cy="12" r="10" fill="none" stroke={color} strokeWidth={sw} />
          <line x1="12" y1="4" x2="12" y2="20" stroke={color} strokeWidth={swThin} />
          <line x1="4" y1="12" x2="20" y2="12" stroke={color} strokeWidth={swThin} />
          <circle cx="12" cy="8" r="2.2" fill="none" stroke={color} strokeWidth={swThin} />
          <circle cx="8" cy="15" r="2.2" fill="none" stroke={color} strokeWidth={swThin} />
          <circle cx="16" cy="15" r="2.2" fill="none" stroke={color} strokeWidth={swThin} />
        </g>
      );
    case "hikone":
      // 井桁 — hash-grid (#)
      return (
        <g opacity={opacity}>
          <line x1="8" y1="3" x2="8" y2="21" stroke={color} strokeWidth={sw} strokeLinecap="round" />
          <line x1="16" y1="3" x2="16" y2="21" stroke={color} strokeWidth={sw} strokeLinecap="round" />
          <line x1="3" y1="8" x2="21" y2="8" stroke={color} strokeWidth={sw} strokeLinecap="round" />
          <line x1="3" y1="16" x2="21" y2="16" stroke={color} strokeWidth={sw} strokeLinecap="round" />
        </g>
      );
    case "himeji":
      // 揚羽蝶 — butterfly outline
      return (
        <g opacity={opacity}>
          <path d="M12 12 C8 8 2 6 3 12 C4 17 9 16 12 12Z" fill="none" stroke={color} strokeWidth={swThin} strokeLinejoin="round" />
          <path d="M12 12 C16 8 22 6 21 12 C20 17 15 16 12 12Z" fill="none" stroke={color} strokeWidth={swThin} strokeLinejoin="round" />
          <path d="M12 12 C9 14 7 20 11 21 C13 21 13 16 12 12Z" fill="none" stroke={color} strokeWidth={swThin} strokeLinejoin="round" />
          <path d="M12 12 C15 14 17 20 13 21 C11 21 11 16 12 12Z" fill="none" stroke={color} strokeWidth={swThin} strokeLinejoin="round" />
          <circle cx="12" cy="12" r="1.5" fill={color} />
        </g>
      );
    case "matsue":
    case "iyo":
      // 三つ葉葵 — 3-petal hollyhock
      return (
        <g opacity={opacity}>
          <circle cx="12" cy="7" r="4" fill="none" stroke={color} strokeWidth={sw} />
          <circle cx="7" cy="15.5" r="4" fill="none" stroke={color} strokeWidth={sw} />
          <circle cx="17" cy="15.5" r="4" fill="none" stroke={color} strokeWidth={sw} />
          <circle cx="12" cy="12" r="1.8" fill={color} />
        </g>
      );
    case "bicchu":
      // 剣花菱 — diamond with petal points
      return (
        <g opacity={opacity}>
          <circle cx="12" cy="12" r="10" fill="none" stroke={color} strokeWidth={sw} />
          <polygon points="12,3 15,12 12,21 9,12" fill="none" stroke={color} strokeWidth={swThin} strokeLinejoin="round" />
          <polygon points="3,12 12,9 21,12 12,15" fill="none" stroke={color} strokeWidth={swThin} strokeLinejoin="round" />
        </g>
      );
    case "marugame":
      // 平四つ目 — 4-square grid
      return (
        <g opacity={opacity}>
          <rect x="3" y="3" width="8" height="8" fill="none" stroke={color} strokeWidth={sw} />
          <rect x="13" y="3" width="8" height="8" fill="none" stroke={color} strokeWidth={sw} />
          <rect x="3" y="13" width="8" height="8" fill="none" stroke={color} strokeWidth={sw} />
          <rect x="13" y="13" width="8" height="8" fill="none" stroke={color} strokeWidth={sw} />
        </g>
      );
    case "uwajima":
      // 竹に雀 — bamboo stalk + bird
      return (
        <g opacity={opacity}>
          <line x1="12" y1="2" x2="12" y2="22" stroke={color} strokeWidth={sw} strokeLinecap="round" />
          <line x1="12" y1="7" x2="18" y2="4" stroke={color} strokeWidth={swThin} strokeLinecap="round" />
          <line x1="12" y1="12" x2="6" y2="9" stroke={color} strokeWidth={swThin} strokeLinecap="round" />
          <line x1="12" y1="17" x2="18" y2="14" stroke={color} strokeWidth={swThin} strokeLinecap="round" />
          {/* Sparrow silhouette */}
          <ellipse cx="18" cy="3" rx="2.5" ry="1.8" fill="none" stroke={color} strokeWidth={swThin} />
          <circle cx="19.5" cy="2" r="1.2" fill="none" stroke={color} strokeWidth={swThin} />
        </g>
      );
    case "kochi":
      // 山の字 — mountain kanji-inspired
      return (
        <g opacity={opacity}>
          <line x1="12" y1="3" x2="12" y2="21" stroke={color} strokeWidth={sw + 0.4} strokeLinecap="round" />
          <line x1="5" y1="9" x2="5" y2="21" stroke={color} strokeWidth={sw} strokeLinecap="round" />
          <line x1="19" y1="9" x2="19" y2="21" stroke={color} strokeWidth={sw} strokeLinecap="round" />
          <line x1="3" y1="21" x2="21" y2="21" stroke={color} strokeWidth={swThin} strokeLinecap="round" />
        </g>
      );
    default:
      return <circle cx="12" cy="12" r="5" fill={color} opacity={opacity} />;
  }
}

export function CastleMap({ castles, selectedCastle, onSelect }: Props) {
  return (
    <div className="relative w-full">
      <svg
        viewBox="0 0 420 700"
        role="img"
        aria-label="Map of Japan showing 12 surviving original castles"
        className="h-auto w-full"
        style={{ background: "var(--takumi-stone)", border: "1px solid var(--takumi-border)" }}
      >
        {/* Japan coastline silhouette */}
        <path
          d="M236 48l42 30 15 45-20 48-42 38 18 42-5 35-26 33-2 52-45 28-22 48-41 25-16 54-40 26"
          fill="none"
          stroke="var(--takumi-border)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />

        {castles.map((castle) => {
          const pos = castlePositions[castle.id];
          const active = selectedCastle === castle.id;
          const color = active ? "var(--takumi-gold)" : "var(--takumi-muted)";
          const opacity = active ? 1 : 0.75;

          return (
            <g key={castle.id}>
              {/* Active pulse ring */}
              {active && (
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={22}
                  fill="none"
                  stroke="var(--takumi-gold)"
                  strokeWidth="1.2"
                  opacity={0.4}
                />
              )}
              {/* Kamon glyph */}
              <g transform={`translate(${pos.x - 12}, ${pos.y - 12})`}>
                <KamonGlyph castleId={castle.id} color={color} opacity={opacity} />
              </g>
            </g>
          );
        })}
      </svg>

      {/* Invisible hit targets */}
      {castles.map((castle) => {
        const pos = castlePositions[castle.id];
        const active = selectedCastle === castle.id;
        return (
          <button
            key={`btn-${castle.id}`}
            type="button"
            onClick={() => onSelect(castle.id)}
            aria-label={`${castle.nameJP} を開く`}
            title={`${castle.nameJP} — ${castle.clanCH}`}
            className="absolute h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-transparent bg-transparent transition-[filter] duration-150 hover:[filter:drop-shadow(0_0_8px_var(--takumi-gold-light))] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--takumi-gold)]"
            style={{
              left: `${(pos.x / 420) * 100}%`,
              top: `${(pos.y / 700) * 100}%`,
              outlineColor: active ? "var(--takumi-gold)" : undefined,
            }}
          />
        );
      })}
    </div>
  );
}
