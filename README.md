# 《石垣與破風》— 現存十二天守防禦構造解析

## 關於本計畫（Traditional Chinese）

這不是一份城郭名錄，而是一場由匠人視角重構江戶時代建築思維的研究旅程。

「匠」（Takumi），在日本工藝傳統中代表以一生精力貫注於單一技藝的職人。本計畫取名於此，以同等的嚴謹對待現存十二天守之防禦構造、石垣砌築工法與破風飾件的歷史脈絡，試圖在數位介面上重現那個以木石為語言的建築時代。

十二座現存天守，跨越東北至四國，每一座都是歷史偶然的倖存者——在明治廢城令、戰火、自然災害的重重淘汰中，完整保留了江戶時代的木構架與防禦邏輯。彦根城的石垣在四百年風雨後依然齊整，姫路城的大天守白牆在晨霧中如鷺展翅。這不只是建築，而是一個時代對自身永恆性的承諾。

本站提供互動式地圖、區域分組覽覽、建築構造深度解析、家紋與大名更迭史，以及完整資料彙整，支援繁體中文、英文、日文三語切換。

**正在瀏覽：**  
[https://eli20261124.github.io/takumi-castle/](https://eli20261124.github.io/takumi-castle/)

---

### 技術棧

| 項目 | 版本 |
|---|---|
| Framework | Next.js 16 (Static Export) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion 12 |
| Content | react-markdown |
| Typography | Long Cang · Noto Serif JP · JetBrains Mono |
| Deployment | GitHub Pages via Actions |

### 架構概覽

```
src/
├── app/            # Next.js App Router (layout, globals.css, page)
├── components/
│   └── takumi/     # 所有互動式元件
│       ├── TakumiApp.tsx         # 頂層：i18n Provider + 路由
│       ├── TakumiSplash.tsx      # 進場門扉（草書標題）
│       ├── CastleMap.tsx         # SVG互動式日本地圖
│       ├── CastlePanel.tsx       # 城郭詳情側板
│       ├── CastleGrid.tsx        # 區域分組城郭覽覽
│       ├── ArchitectsLab.tsx     # 構造解析（石垣・破風・防禦）
│       ├── KamonTimeline.tsx     # 大名更迭：家紋傳承史
│       ├── CastleTable.tsx       # 十二天守資料表
│       └── ReferencesFooter.tsx  # 學術參考文獻
├── data/
│   └── takumi-content.ts         # 城郭資料、類型定義、Markdown內容
└── lib/
    └── i18n.tsx                  # 三語上下文（ZH / EN / JP）
```

### 十二天守・區域分布

| 地方 | 天守 |
|---|---|
| 東北地方 | 弘前城 |
| 中部地方 | 松本城・丸岡城・犬山城 |
| 近畿地方 | 彦根城・姫路城 |
| 中國・山陰地方 | 松江城・備中松山城 |
| 四國地方 | 丸亀城・伊予松山城・宇和島城・高知城 |

---

---

## About This Project (English)

This is not a castle directory. It is a research reconstruction of Edo-period defensive architecture, conducted with the precision a master craftsman — a *shokunin* — would bring to a lifetime's work.

The name "Takumi" (匠) invokes that tradition: the artisan who commits wholly to mastery of a single craft. This project applies the same singular focus to the stone walls, timber frames, and ornamental gables of Japan's twelve surviving tenshu — the only original castle keeps that endured the Meiji demolition orders, the air raids, and the passage of time.

Twelve tenshu remain, from Tōhoku to Shikoku. Each is an accident of history: the Hikone keep survived because an imperial envoy was due to visit; Himeji's white plaster walls outlasted the firebombing of the surrounding city. Together they represent something irreplaceable: a living archive of Edo-era structural thinking, encoded in wood and stone.

This site offers an interactive map, regionally grouped castle registry, deep architectural analysis of *ishigaki* (stone walls), *hafu* (decorative gables), and defensive systems, a clan succession timeline, and a full data compendium — in Traditional Chinese, English, and Japanese.

**Live site:**  
[https://eli20261124.github.io/takumi-castle/](https://eli20261124.github.io/takumi-castle/)

---

### Tech Stack

| Item | Version |
|---|---|
| Framework | Next.js 16 (Static Export) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion 12 |
| Content | react-markdown |
| Typography | Long Cang · Noto Serif JP · JetBrains Mono |
| Deployment | GitHub Pages via Actions |

### Project Structure

```
src/
├── app/            # Next.js App Router (layout, globals, page)
├── components/
│   └── takumi/     # All interactive components
│       ├── TakumiApp.tsx         # Root: i18n Provider + section routing
│       ├── TakumiSplash.tsx      # Entry gate (calligraphy hero title)
│       ├── CastleMap.tsx         # SVG interactive map of Japan
│       ├── CastlePanel.tsx       # Castle detail side panel
│       ├── CastleGrid.tsx        # Regionally grouped castle registry
│       ├── ArchitectsLab.tsx     # Structural analysis (walls, gables, defences)
│       ├── KamonTimeline.tsx     # Clan succession: history in kamon
│       ├── CastleTable.tsx       # Twelve-tenshu data table
│       └── ReferencesFooter.tsx  # Academic references
├── data/
│   └── takumi-content.ts         # Castle data, types, Markdown content
└── lib/
    └── i18n.tsx                  # Trilingual context (ZH / EN / JP)
```

### The Twelve Tenshu by Region

| Region | Tenshu |
|---|---|
| Tōhoku | Hirosaki |
| Chūbu | Matsumoto · Maruoka · Inuyama |
| Kansai | Hikone · Himeji |
| Chūgoku / San'in | Matsue · Bicchū Matsuyama |
| Shikoku | Marugame · Iyo Matsuyama · Uwajima · Kōchi |

---

*Project Takumi · 匠 — Interactive Architectural History Research · 2026*
