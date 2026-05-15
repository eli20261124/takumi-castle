"use client";

import { motion, AnimatePresence } from "framer-motion";

type Props = {
  onUnlock: () => void;
};

export function TakumiSplash({ onUnlock }: Props) {
  return (
    <AnimatePresence>
      <motion.div
        key="splash"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, pointerEvents: "none" }}
        transition={{ duration: 0.42, ease: "easeInOut" }}
        className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
        style={{ background: "var(--takumi-void)" }}
      >
        {/* Iron grain texture */}
        <div className="iron-grain" aria-hidden="true" />

        {/* Decorative gold top border */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{ background: "var(--takumi-gold)", opacity: 0.6 }}
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center w-full max-w-3xl">
          {/* Project label */}
          <p
            className="font-mono text-[10px] uppercase tracking-[0.3em]"
            style={{ color: "var(--takumi-gold)" }}
          >
            Project Takumi · 匠
          </p>

          {/* Thin gold rule */}
          <div
            className="w-12 h-px"
            style={{ background: "var(--takumi-gold)", opacity: 0.5 }}
            aria-hidden="true"
          />

          {/* Main title — 草書體 calligraphy for 蒼茫感 */}
          <h1
            className="font-calligraphy leading-none tracking-wide"
            style={{
              color: "var(--takumi-ink)",
              fontSize: "clamp(2.6rem, 8vw, 5rem)",
              textShadow: "0 2px 24px rgba(201,168,76,0.18)",
              whiteSpace: "nowrap",
            }}
          >
            《石垣與破風》
          </h1>

          {/* Subtitle */}
          <p
            className="font-serif text-lg leading-relaxed"
            style={{ color: "var(--takumi-muted)" }}
          >
            大和領地的守護屏障
          </p>

          {/* Body line */}
          <p
            className="font-mono text-[11px] leading-6 max-w-xs"
            style={{ color: "var(--takumi-muted)" }}
          >
            現存十二天守之防禦構造與工藝技術解析
          </p>

          {/* Thin gold rule */}
          <div
            className="w-12 h-px"
            style={{ background: "var(--takumi-gold)", opacity: 0.5 }}
            aria-hidden="true"
          />

          {/* CTA button */}
          <motion.button
            type="button"
            onClick={onUnlock}
            aria-label="Enter Project Takumi"
            className="mt-2 border px-10 py-3 font-mono text-[11px] uppercase tracking-[0.25em] transition-colors duration-150"
            style={{
              borderColor: "var(--takumi-gold)",
              color: "var(--takumi-gold)",
              background: "transparent",
            }}
            whileHover={{
              backgroundColor: "var(--takumi-gold)",
              color: "var(--takumi-void)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.12 }}
          >
            入城 · Enter
          </motion.button>

          {/* Footer note */}
          <p
            className="font-mono text-[10px]"
            style={{ color: "var(--takumi-gold-dim)" }}
          >
            互動式建築史研究
          </p>
        </div>

        {/* Decorative gold bottom border */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[2px]"
          style={{ background: "var(--takumi-gold)", opacity: 0.6 }}
          aria-hidden="true"
        />
      </motion.div>
    </AnimatePresence>
  );
}
