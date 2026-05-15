"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { castles, type CastleKey } from "@/data/takumi-content";
import { I18nProvider, useI18n, type Lang } from "@/lib/i18n";
import { TakumiSplash } from "./TakumiSplash";
import { CastleMap } from "./CastleMap";
import { CastlePanel } from "./CastlePanel";
import { CastleGrid } from "./CastleGrid";
import { ArchitectsLab } from "./ArchitectsLab";
import { KamonTimeline } from "./KamonTimeline";
import { CastleTable } from "./CastleTable";
import { ReferencesFooter } from "./ReferencesFooter";

function LangSwitcher() {
  const { lang, setLang } = useI18n();
  const opts: { key: Lang; label: string }[] = [
    { key: "zh", label: "中" },
    { key: "en", label: "EN" },
    { key: "ja", label: "JP" },
  ];
  return (
    <div className="flex items-center gap-0 border" style={{ borderColor: "var(--takumi-border)" }}>
      {opts.map((o) => (
        <button
          key={o.key}
          type="button"
          onClick={() => setLang(o.key)}
          className="font-mono text-[10px] uppercase tracking-[0.1em] px-2.5 py-1.5 transition-colors duration-100"
          style={{
            background: lang === o.key ? "var(--takumi-gold)" : "transparent",
            color: lang === o.key ? "var(--takumi-void)" : "var(--takumi-muted)",
          }}
          aria-pressed={lang === o.key}
          aria-label={`Switch language to ${o.label}`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

function TakumiInner() {
  const { t } = useI18n();
  const [unlocked, setUnlocked] = useState(false);
  const [selectedCastle, setSelectedCastle] = useState<CastleKey | null>(null);
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      setScrollPct((el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100 || 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "var(--takumi-void)", color: "var(--takumi-ink)" }}>
      {/* Splash gate */}
      <AnimatePresence>
        {!unlocked && <TakumiSplash onUnlock={() => setUnlocked(true)} />}
      </AnimatePresence>

      {/* Reading progress bar */}
      {unlocked && (
        <div
          className="fixed top-0 left-0 z-50 h-[2px] pointer-events-none transition-all duration-75"
          style={{ width: `${scrollPct}%`, background: "var(--takumi-gold)", boxShadow: "0 0 8px var(--takumi-gold)" }}
        />
      )}

      {/* Sticky site header */}
      {unlocked && (
        <motion.header
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="sticky top-0 z-40 border-b"
          style={{ background: "rgba(10,10,11,0.88)", backdropFilter: "blur(10px)", borderColor: "var(--takumi-border)" }}
        >
          <div className="max-w-[1120px] mx-auto px-4 py-2.5 flex items-center gap-4">
            <div className="flex-1 min-w-0">
              <p className="font-mono text-[9px] uppercase tracking-[0.25em]" style={{ color: "var(--takumi-gold-dim)" }}>
                {t.projectLabel}
              </p>
              {/* Calligraphy font in header h1 */}
              <h1 className="font-calligraphy leading-none" style={{ color: "var(--takumi-ink)", fontSize: "clamp(1.1rem, 3vw, 1.5rem)" }}>
                《石垣與破風》
              </h1>
            </div>
            <div className="hidden sm:block h-8 w-px" style={{ background: "var(--takumi-border)" }} />
            <p className="hidden sm:block font-mono text-[10px] flex-1" style={{ color: "var(--takumi-muted)" }}>
              {t.headerSubtitle}
            </p>
            {/* Language switcher */}
            <LangSwitcher />
          </div>
        </motion.header>
      )}

      {/* Main content */}
      {unlocked && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="max-w-[1120px] mx-auto px-4 py-10 space-y-20"
        >
          {/* § 1 — Interactive Castle Map */}
          <section>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] mb-2" style={{ color: "var(--takumi-gold-dim)" }}>
              {t.mapEyebrow}
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl mb-3" style={{ color: "var(--takumi-ink)" }}>
              {t.mapTitle}
            </h2>
            <p className="font-mono text-[10px] mb-6" style={{ color: "var(--takumi-muted)" }}>
              {t.mapHint}
            </p>
            <div className="flex justify-center">
              <CastleMap
                castles={castles}
                selectedCastle={selectedCastle}
                onSelect={(id) => setSelectedCastle((prev) => (prev === id ? null : id))}
              />
            </div>
          </section>

          <AnimatePresence>
            {selectedCastle !== null && (
              <CastlePanel castles={castles} selectedCastle={selectedCastle} onClose={() => setSelectedCastle(null)} />
            )}
          </AnimatePresence>

          {/* § 2 — Castle Grid (with regional grouping) */}
          <section>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] mb-2" style={{ color: "var(--takumi-gold-dim)" }}>
              {t.gridEyebrow}
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl mb-8" style={{ color: "var(--takumi-ink)" }}>
              {t.gridTitle}
            </h2>
            <CastleGrid
              castles={castles}
              selectedCastle={selectedCastle}
              onSelect={(id) => setSelectedCastle((prev) => (prev === id ? null : id))}
            />
          </section>

          <div className="gold-divider" />
          <ArchitectsLab />
          <div className="gold-divider" />
          <KamonTimeline />
          <div className="gold-divider" />
          <CastleTable />
          <div className="gold-divider" />
          <ReferencesFooter />
        </motion.main>
      )}
    </div>
  );
}

export function TakumiApp() {
  return (
    <I18nProvider>
      <TakumiInner />
    </I18nProvider>
  );
}
