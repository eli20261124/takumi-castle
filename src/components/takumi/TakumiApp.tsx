"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { castles, type CastleKey } from "@/data/takumi-content";
import { TakumiSplash } from "./TakumiSplash";
import { CastleMap } from "./CastleMap";
import { CastlePanel } from "./CastlePanel";
import { CastleGrid } from "./CastleGrid";
import { ArchitectsLab } from "./ArchitectsLab";
import { KamonTimeline } from "./KamonTimeline";
import { CastleTable } from "./CastleTable";
import { ReferencesFooter } from "./ReferencesFooter";

export function TakumiApp() {
  const [unlocked, setUnlocked] = useState(false);
  const [selectedCastle, setSelectedCastle] = useState<CastleKey | null>(null);
  const [scrollPct, setScrollPct] = useState(0);

  // Scroll progress bar
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setScrollPct(pct || 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="min-h-screen"
      style={{ background: "var(--takumi-void)", color: "var(--takumi-ink)" }}
    >
      {/* Splash gate */}
      <AnimatePresence>
        {!unlocked && (
          <TakumiSplash onUnlock={() => setUnlocked(true)} />
        )}
      </AnimatePresence>

      {/* Reading progress bar */}
      {unlocked && (
        <div
          className="fixed top-0 left-0 z-50 h-[2px] pointer-events-none transition-all duration-75"
          style={{
            width: `${scrollPct}%`,
            background: "var(--takumi-gold)",
            boxShadow: "0 0 8px var(--takumi-gold)",
          }}
        />
      )}

      {/* Sticky site header */}
      {unlocked && (
        <motion.header
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="sticky top-0 z-40 border-b"
          style={{
            background: "rgba(10,10,11,0.88)",
            backdropFilter: "blur(10px)",
            borderColor: "var(--takumi-border)",
          }}
        >
          <div className="max-w-[1120px] mx-auto px-4 py-3 flex items-center gap-4">
            <div>
              <p
                className="font-mono text-[9px] uppercase tracking-[0.25em]"
                style={{ color: "var(--takumi-gold-dim)" }}
              >
                Project Takumi · 匠
              </p>
              <h1
                className="font-serif text-base sm:text-lg leading-tight"
                style={{ color: "var(--takumi-ink)" }}
              >
                《石垣與破風》
              </h1>
            </div>
            <div
              className="hidden sm:block h-8 w-px"
              style={{ background: "var(--takumi-border)" }}
            />
            <p
              className="hidden sm:block font-mono text-[10px]"
              style={{ color: "var(--takumi-muted)" }}
            >
              大和領地的守護屏障
            </p>
          </div>
        </motion.header>
      )}

      {/* Main content — only rendered after unlock */}
      {unlocked && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="max-w-[1120px] mx-auto px-4 py-10 space-y-20"
        >
          {/* § 1 — Interactive Castle Map */}
          <section>
            <p
              className="font-mono text-[10px] uppercase tracking-[0.25em] mb-2"
              style={{ color: "var(--takumi-gold-dim)" }}
            >
              Interactive Map · 天守地圖
            </p>
            <h2
              className="font-serif text-2xl sm:text-3xl mb-3"
              style={{ color: "var(--takumi-ink)" }}
            >
              現存十二天守：分布地圖
            </h2>
            <p
              className="font-mono text-[10px] mb-6"
              style={{ color: "var(--takumi-muted)" }}
            >
              點擊家紋符號查看天守詳情 · Click a kamon to explore each castle
            </p>

            <div className="flex justify-center">
              <CastleMap
                castles={castles}
                selectedCastle={selectedCastle}
                onSelect={(id) =>
                  setSelectedCastle((prev) => (prev === id ? null : id))
                }
              />
            </div>
          </section>

          {/* Castle detail panel (inline below map on mobile, overlay on larger) */}
          <AnimatePresence>
            {selectedCastle !== null && (
              <CastlePanel
                castles={castles}
                selectedCastle={selectedCastle}
                onClose={() => setSelectedCastle(null)}
              />
            )}
          </AnimatePresence>

          {/* § 2 — Castle Grid */}
          <section>
            <p
              className="font-mono text-[10px] uppercase tracking-[0.25em] mb-2"
              style={{ color: "var(--takumi-gold-dim)" }}
            >
              Castle Registry · 城郭列傳
            </p>
            <h2
              className="font-serif text-2xl sm:text-3xl mb-8"
              style={{ color: "var(--takumi-ink)" }}
            >
              十二天守：全覽
            </h2>
            <CastleGrid
              castles={castles}
              selectedCastle={selectedCastle}
              onSelect={(id) =>
                setSelectedCastle((prev) => (prev === id ? null : id))
              }
            />
          </section>

          {/* Divider */}
          <div className="gold-divider" />

          {/* § 3 — Architect's Lab */}
          <ArchitectsLab />

          {/* Divider */}
          <div className="gold-divider" />

          {/* § 4 — Kamon & Succession Timelines */}
          <KamonTimeline />

          {/* Divider */}
          <div className="gold-divider" />

          {/* § 5 — Data Table */}
          <CastleTable />

          {/* Divider */}
          <div className="gold-divider" />

          {/* § 6 — References */}
          <ReferencesFooter />
        </motion.main>
      )}
    </div>
  );
}
