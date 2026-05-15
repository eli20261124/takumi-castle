"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { CastleContent, CastleKey } from "@/data/takumi-content";
import ReactMarkdown from "react-markdown";

type Props = {
  castles: CastleContent[];
  selectedCastle: CastleKey | null;
  onClose: () => void;
};

export function CastlePanel({ castles, selectedCastle, onClose }: Props) {
  const castle = castles.find((c) => c.id === selectedCastle) ?? null;

  return (
    <AnimatePresence>
      {castle && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100]"
            style={{ background: "rgba(0,0,0,0.6)" }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Bottom sheet */}
          <motion.div
            key="panel"
            role="dialog"
            aria-modal="true"
            aria-label={castle.nameJP}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.32, ease: [0.32, 0.72, 0, 1] }}
            className="fixed bottom-0 left-0 right-0 z-[110] max-h-[85vh] overflow-y-auto rounded-t-2xl"
            style={{
              background: "var(--takumi-stone)",
              borderTop: "2px solid var(--takumi-gold)",
            }}
          >
            {/* Gold drag handle */}
            <div className="flex justify-center pt-3 pb-1">
              <div
                className="h-1 w-10 rounded-full"
                style={{ background: "var(--takumi-gold)", opacity: 0.5 }}
              />
            </div>

            <div className="px-6 pb-10 pt-2">
              {/* Header row */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h2
                      className="font-serif text-2xl sm:text-3xl"
                      style={{ color: "var(--takumi-ink)" }}
                    >
                      {castle.nameJP}
                    </h2>
                    {/* Designation badge */}
                    <span
                      className="font-mono text-[10px] uppercase tracking-[0.18em] border px-2 py-1"
                      style={
                        castle.designation === "kokuhо̄"
                          ? {
                              borderColor: "var(--takumi-gold)",
                              color: "var(--takumi-gold)",
                            }
                          : {
                              borderColor: "var(--takumi-muted)",
                              color: "var(--takumi-muted)",
                            }
                      }
                    >
                      {castle.designation === "kokuhо̄" ? "★ 國寶" : "重要文化財"}
                    </span>
                  </div>
                  <p
                    className="mt-1 font-serif text-base"
                    style={{ color: "var(--takumi-muted)" }}
                  >
                    {castle.nameCH}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="閉じる"
                  className="shrink-0 mt-1 font-mono text-[11px] uppercase tracking-[0.15em] px-3 py-1.5 border transition-colors duration-120"
                  style={{
                    borderColor: "var(--takumi-border)",
                    color: "var(--takumi-muted)",
                  }}
                >
                  ✕ 閉じる
                </button>
              </div>

              {/* Meta chips */}
              <div className="mt-4 flex flex-wrap gap-3">
                {[
                  { label: "藩主", value: castle.clanCH },
                  { label: "所在", value: castle.prefectureCH },
                  { label: "竣工", value: castle.year + "年" },
                  { label: "層數", value: `${castle.tiers}層` },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="border px-3 py-1.5"
                    style={{ borderColor: "var(--takumi-border)" }}
                  >
                    <p
                      className="font-mono text-[9px] uppercase tracking-[0.2em]"
                      style={{ color: "var(--takumi-gold-dim)" }}
                    >
                      {label}
                    </p>
                    <p
                      className="font-serif text-sm mt-0.5"
                      style={{ color: "var(--takumi-ink)" }}
                    >
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Gold divider */}
              <div className="gold-divider mt-5 mb-5" />

              {/* Markdown content */}
              <div
                className="font-serif text-[15px] leading-8 space-y-4"
                style={{ color: "var(--takumi-ink)" }}
              >
                <ReactMarkdown
                  components={{
                    p: ({ children }) => <p className="leading-8">{children}</p>,
                    strong: ({ children }) => (
                      <strong style={{ color: "var(--takumi-gold)" }}>{children}</strong>
                    ),
                  }}
                >
                  {castle.markdown}
                </ReactMarkdown>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
