"use client";

import { castleTableRows } from "@/data/takumi-content";

export function CastleTable() {
  return (
    <section>
      <p
        className="font-mono text-[10px] uppercase tracking-[0.25em] mb-2"
        style={{ color: "var(--takumi-gold-dim)" }}
      >
        Data Compendium · 諸城概覽
      </p>
      <h2
        className="font-serif text-2xl sm:text-3xl mb-8"
        style={{ color: "var(--takumi-ink)" }}
      >
        現存十二天守：資料彙整
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse" style={{ minWidth: "640px" }}>
          <thead>
            <tr
              className="font-mono text-[10px] uppercase tracking-[0.12em]"
              style={{ borderBottom: "1px solid var(--takumi-gold-dim)", color: "var(--takumi-muted)" }}
            >
              <th className="py-2 pr-4 font-normal">No.</th>
              <th className="py-2 pr-4 font-normal">城名</th>
              <th className="py-2 pr-4 font-normal">所在縣</th>
              <th className="py-2 pr-4 font-normal">主要大名</th>
              <th className="py-2 pr-4 font-normal">竣工年</th>
              <th className="py-2 pr-4 font-normal">層數</th>
              <th className="py-2 pr-4 font-normal">指定</th>
            </tr>
          </thead>
          <tbody>
            {castleTableRows.map((row, idx) => (
              <tr
                key={row.nameJP}
                className="transition-colors duration-100"
                style={{
                  borderBottom: "1px solid var(--takumi-border)",
                  background: idx % 2 === 0 ? "transparent" : "rgba(255,255,255,0.012)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLTableRowElement).style.background = "rgba(201,168,76,0.04)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLTableRowElement).style.background =
                    idx % 2 === 0 ? "transparent" : "rgba(255,255,255,0.012)";
                }}
              >
                <td
                  className="py-3 pr-4 font-mono text-[11px]"
                  style={{ color: "var(--takumi-muted)" }}
                >
                  {String(idx + 1).padStart(2, "0")}
                </td>
                <td className="py-3 pr-4">
                  <span className="font-serif text-sm" style={{ color: "var(--takumi-ink)" }}>
                    {row.nameJP}
                  </span>
                  <span
                    className="ml-2 font-mono text-[10px]"
                    style={{ color: "var(--takumi-muted)" }}
                  >
                    {row.nameCH}
                  </span>
                </td>
                <td
                  className="py-3 pr-4 font-mono text-[11px]"
                  style={{ color: "var(--takumi-ink)" }}
                >
                  {row.prefecture}
                </td>
                <td
                  className="py-3 pr-4 font-serif text-sm"
                  style={{ color: "var(--takumi-ink)" }}
                >
                  {row.clan}
                </td>
                <td
                  className="py-3 pr-4 font-mono text-[11px]"
                  style={{ color: "var(--takumi-ink)" }}
                >
                  {row.year}
                </td>
                <td
                  className="py-3 pr-4 font-mono text-[11px] text-center"
                  style={{ color: "var(--takumi-ink)" }}
                >
                  {row.tiers}F
                </td>
                <td className="py-3 pr-4">
                  {row.designation !== "jūbunka" ? (
                    <span
                      className="font-mono text-[9px] border px-1.5 py-0.5 whitespace-nowrap"
                      style={{ borderColor: "var(--takumi-gold)", color: "var(--takumi-gold)" }}
                    >
                      ★ 國寶
                    </span>
                  ) : (
                    <span
                      className="font-mono text-[9px] border px-1.5 py-0.5 whitespace-nowrap"
                      style={{ borderColor: "var(--takumi-border)", color: "var(--takumi-muted)" }}
                    >
                      重文
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
