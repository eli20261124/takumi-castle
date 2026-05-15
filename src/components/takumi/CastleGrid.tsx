"use client";

import { motion } from "framer-motion";
import type { CastleContent, CastleKey, CastleRegion } from "@/data/takumi-content";
import { useI18n } from "@/lib/i18n";

type Props = {
  castles: CastleContent[];
  onSelect: (id: CastleKey) => void;
  selectedCastle: CastleKey | null;
};

const REGION_ORDER: CastleRegion[] = ["tohoku", "chubu", "kansai", "chugoku", "shikoku"];

function regionLabel(region: CastleRegion, t: ReturnType<typeof useI18n>["t"]): string {
  const map: Record<CastleRegion, string> = {
    tohoku: t.regionTohoku,
    chubu: t.regionChubu,
    kansai: t.regionKansai,
    chugoku: t.regionChugoku,
    shikoku: t.regionShikoku,
  };
  return map[region];
}

function CastleCard({
  castle,
  idx,
  active,
  onSelect,
}: {
  castle: CastleContent;
  idx: number;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <motion.article
      whileHover={{ y: -3, boxShadow: "0 8px 32px rgba(201,168,76,0.18)" }}
      transition={{ duration: 0.18 }}
      className="relative cursor-pointer"
      style={{
        background: active ? "var(--takumi-iron)" : "var(--takumi-stone)",
        border: active
          ? "1px solid var(--takumi-gold)"
          : "1px solid var(--takumi-border)",
      }}
      onClick={onSelect}
      role="button"
      tabIndex={0}
      aria-label={`${castle.nameJP} の詳細を開く`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onSelect();
      }}
    >
      <div className="absolute top-3 right-3 font-mono text-[10px]" style={{ color: "var(--takumi-gold-dim)" }}>
        {String(idx + 1).padStart(2, "0")}
      </div>

      <div className="p-5 pt-4">
        <p className="font-mono text-[9px] uppercase tracking-[0.2em] mb-2" style={{ color: "var(--takumi-gold-dim)" }}>
          {castle.prefectureCH}
        </p>
        <h3 className="font-serif castle-name-highlight text-xl leading-tight" style={{ color: "var(--takumi-ink)" }}>
          {castle.nameJP}
        </h3>
        <p className="font-serif text-sm mt-0.5" style={{ color: "var(--takumi-muted)" }}>
          {castle.nameCH}
        </p>
        <div className="gold-divider my-3" />
        <p className="font-mono text-[10px]" style={{ color: "var(--takumi-muted)" }}>
          {castle.clanCH}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-mono text-[10px]" style={{ color: "var(--takumi-muted)" }}>
            {castle.year}年竣工
          </span>
          <span
            className="font-mono text-[9px] border px-1.5 py-0.5"
            style={
              castle.designation !== "jūbunka"
                ? { borderColor: "var(--takumi-gold)", color: "var(--takumi-gold)" }
                : { borderColor: "var(--takumi-border)", color: "var(--takumi-muted)" }
            }
          >
            {castle.designation !== "jūbunka" ? "★ 國寶" : "文化財"}
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export function CastleGrid({ castles, onSelect, selectedCastle }: Props) {
  const { t } = useI18n();

  const byRegion = REGION_ORDER.reduce<Record<CastleRegion, CastleContent[]>>(
    (acc, r) => { acc[r] = castles.filter((c) => c.region === r); return acc; },
    { tohoku: [], chubu: [], kansai: [], chugoku: [], shikoku: [] }
  );

  let seqIdx = 0;

  return (
    <div className="space-y-12">
      {REGION_ORDER.map((region) => {
        const group = byRegion[region];
        if (!group.length) return null;
        return (
          <div key={region}>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1" style={{ background: "var(--takumi-border)" }} />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] px-3" style={{ color: "var(--takumi-gold-dim)" }}>
                {regionLabel(region, t)}
              </span>
              <div className="h-px flex-1" style={{ background: "var(--takumi-border)" }} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {group.map((castle) => {
                const idx = seqIdx++;
                return (
                  <CastleCard
                    key={castle.id}
                    castle={castle}
                    idx={idx}
                    active={selectedCastle === castle.id}
                    onSelect={() => onSelect(castle.id)}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
