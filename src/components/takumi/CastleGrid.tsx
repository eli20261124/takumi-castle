"use client";

import { motion } from "framer-motion";
import type { CastleContent, CastleKey } from "@/data/takumi-content";

type Props = {
  castles: CastleContent[];
  onSelect: (id: CastleKey) => void;
  selectedCastle: CastleKey | null;
};

export function CastleGrid({ castles, onSelect, selectedCastle }: Props) {
  return (
    <section>
      <p
        className="font-mono text-[10px] uppercase tracking-[0.25em] mb-2"
        style={{ color: "var(--takumi-gold-dim)" }}
      >
        現存十二天守 · The Twelve Surviving Castles
      </p>
      <h2
        className="font-serif text-2xl sm:text-3xl mb-8"
        style={{ color: "var(--takumi-ink)" }}
      >
        十二天守地誌覽
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {castles.map((castle, idx) => {
          const active = selectedCastle === castle.id;
          return (
            <motion.article
              key={castle.id}
              whileHover={{ y: -3, boxShadow: "0 8px 32px rgba(201,168,76,0.18)" }}
              transition={{ duration: 0.18 }}
              className="relative cursor-pointer"
              style={{
                background: active ? "var(--takumi-iron)" : "var(--takumi-stone)",
                border: active
                  ? "1px solid var(--takumi-gold)"
                  : "1px solid var(--takumi-border)",
              }}
              onClick={() => onSelect(castle.id)}
              role="button"
              tabIndex={0}
              aria-label={`${castle.nameJP} の詳細を開く`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") onSelect(castle.id);
              }}
            >
              {/* Sequence number */}
              <div
                className="absolute top-3 right-3 font-mono text-[10px]"
                style={{ color: "var(--takumi-gold-dim)" }}
              >
                {String(idx + 1).padStart(2, "0")}
              </div>

              <div className="p-5 pt-4">
                {/* Prefecture */}
                <p
                  className="font-mono text-[9px] uppercase tracking-[0.2em] mb-2"
                  style={{ color: "var(--takumi-gold-dim)" }}
                >
                  {castle.prefectureCH}
                </p>

                {/* Castle name */}
                <h3
                  className="font-serif text-xl leading-tight"
                  style={{ color: "var(--takumi-ink)" }}
                >
                  {castle.nameJP}
                </h3>
                <p
                  className="font-serif text-sm mt-0.5"
                  style={{ color: "var(--takumi-muted)" }}
                >
                  {castle.nameCH}
                </p>

                {/* Gold divider */}
                <div className="gold-divider my-3" />

                {/* Clan */}
                <p
                  className="font-mono text-[10px]"
                  style={{ color: "var(--takumi-muted)" }}
                >
                  {castle.clanCH}
                </p>

                {/* Footer row: year + designation */}
                <div className="mt-3 flex items-center justify-between">
                  <span
                    className="font-mono text-[10px]"
                    style={{ color: "var(--takumi-muted)" }}
                  >
                    {castle.year}年竣工
                  </span>
                  <span
                    className="font-mono text-[9px] border px-1.5 py-0.5"
                    style={
                      castle.designation === "kokuhо̄"
                        ? {
                            borderColor: "var(--takumi-gold)",
                            color: "var(--takumi-gold)",
                          }
                        : {
                            borderColor: "var(--takumi-border)",
                            color: "var(--takumi-muted)",
                          }
                    }
                  >
                    {castle.designation === "kokuhо̄" ? "★ 國寶" : "文化財"}
                  </span>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
