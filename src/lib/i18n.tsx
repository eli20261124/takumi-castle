"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

export type Lang = "zh" | "en" | "ja";

type Strings = {
  // Splash
  projectLabel: string;
  heroSubtitle: string;
  heroBody: string;
  enterCta: string;
  interactiveNote: string;

  // Header
  headerSubtitle: string;

  // Section labels (eyebrow mono text)
  mapEyebrow: string;
  mapTitle: string;
  mapHint: string;
  gridEyebrow: string;
  gridTitle: string;
  labEyebrow: string;
  labTitle: string;
  kamonEyebrow: string;
  kamonTitle: string;
  kamonDesc: string;
  tableEyebrow: string;
  tableTitle: string;
  refEyebrow: string;
  refTitle: string;

  // Table headers
  colNo: string;
  colName: string;
  colPrefecture: string;
  colClan: string;
  colYear: string;
  colTiers: string;
  colDesignation: string;

  // Designation labels
  kokuhoBadge: string;
  jubunkaBadge: string;

  // Castle meta chips
  chipClan: string;
  chipPrefecture: string;
  chipYear: string;
  chipTiers: string;

  // Region labels
  regionTohoku: string;
  regionChubu: string;
  regionKansai: string;
  regionChugoku: string;
  regionShikoku: string;

  // Misc
  closeBtn: string;
  completionYear: string;
  footerCopy: string;
  footerDesc: string;
};

const STRINGS: Record<Lang, Strings> = {
  zh: {
    projectLabel: "Project Takumi · 匠",
    heroSubtitle: "大和領地的守護屏障",
    heroBody: "現存十二天守之防禦構造與工藝技術解析",
    enterCta: "入城 · Enter",
    interactiveNote: "互動式建築史研究",
    headerSubtitle: "大和領地的守護屏障",
    mapEyebrow: "Interactive Map · 天守地圖",
    mapTitle: "現存十二天守：分布地圖",
    mapHint: "點擊家紋符號查看天守詳情 · Click a kamon to explore each castle",
    gridEyebrow: "現存十二天守 · The Twelve Surviving Castles",
    gridTitle: "十二天守地誌覽",
    labEyebrow: "Architect's Lab · 建築師之室",
    labTitle: "構造解析：石垣・破風・防禦",
    kamonEyebrow: "Family Crests & Succession · 家紋與領主變遷",
    kamonTitle: "大名更迭：家紋傳承史",
    kamonDesc:
      "四座代表性天守的領主更迭史——每一個家紋，代表一個藩主家族的命運與城郭的歷史轉折。彦根城的井伊氏260年一藩貫守，是江戶時代政治穩定的縮影。",
    tableEyebrow: "Data Compendium · 諸城概覽",
    tableTitle: "現存十二天守：資料彙整",
    refEyebrow: "Academic References · 學術參考文獻",
    refTitle: "參考文獻",
    colNo: "No.",
    colName: "城名",
    colPrefecture: "所在縣",
    colClan: "主要大名",
    colYear: "竣工年",
    colTiers: "層數",
    colDesignation: "指定",
    kokuhoBadge: "★ 國寶",
    jubunkaBadge: "重文",
    chipClan: "藩主",
    chipPrefecture: "所在",
    chipYear: "竣工",
    chipTiers: "層數",
    regionTohoku: "東北地方",
    regionChubu: "中部地方",
    regionKansai: "近畿地方",
    regionChugoku: "中國・山陰地方",
    regionShikoku: "四國地方",
    closeBtn: "✕ 閉じる",
    completionYear: "年竣工",
    footerCopy: "Project Takumi · 匠 © 2026 · 互動式建築史研究",
    footerDesc: "石垣與破風：大和領地的守護屏障",
  },
  en: {
    projectLabel: "Project Takumi · 匠",
    heroSubtitle: "Guardians of the Yamato Domain",
    heroBody: "Defensive Architecture of the Twelve Surviving Tenshu",
    enterCta: "Enter · 入城",
    interactiveNote: "Interactive Architectural History",
    headerSubtitle: "Guardians of the Yamato Domain",
    mapEyebrow: "Interactive Map · Distribution",
    mapTitle: "The Twelve Surviving Tenshu: Map",
    mapHint: "Click a kamon symbol to explore each castle · 點擊家紋查看詳情",
    gridEyebrow: "Castle Registry · The Twelve",
    gridTitle: "The Twelve Surviving Tenshu",
    labEyebrow: "Architect's Lab · Structural Analysis",
    labTitle: "Structure: Stone Walls, Gables & Defences",
    kamonEyebrow: "Family Crests & Succession",
    kamonTitle: "Clan Succession: A History in Kamon",
    kamonDesc:
      "The succession histories of four representative castles — each kamon marks a dynasty, a turning point in a castle's fate. The Ii clan of Hikone held unbroken dominion for 260 years, a symbol of Edo-era political stability.",
    tableEyebrow: "Data Compendium",
    tableTitle: "The Twelve Tenshu: Data Reference",
    refEyebrow: "Academic References",
    refTitle: "References",
    colNo: "No.",
    colName: "Castle",
    colPrefecture: "Prefecture",
    colClan: "Ruling Clan",
    colYear: "Completed",
    colTiers: "Tiers",
    colDesignation: "Status",
    kokuhoBadge: "★ National Treasure",
    jubunkaBadge: "Imp. Cultural Property",
    chipClan: "Clan",
    chipPrefecture: "Location",
    chipYear: "Built",
    chipTiers: "Tiers",
    regionTohoku: "Tōhoku Region",
    regionChubu: "Chūbu Region",
    regionKansai: "Kansai Region",
    regionChugoku: "Chūgoku / San'in Region",
    regionShikoku: "Shikoku Region",
    closeBtn: "✕ Close",
    completionYear: "",
    footerCopy: "Project Takumi · 匠 © 2026 · Interactive Architectural History",
    footerDesc: "Stone Walls & Gables: Guardians of the Yamato Domain",
  },
  ja: {
    projectLabel: "Project Takumi · 匠",
    heroSubtitle: "大和領地の守護屏障",
    heroBody: "現存十二天守の防禦構造と工芸技術の解析",
    enterCta: "入城 · Enter",
    interactiveNote: "インタラクティブ建築史研究",
    headerSubtitle: "大和領地の守護屏障",
    mapEyebrow: "Interactive Map · 天守地図",
    mapTitle: "現存十二天守：分布地図",
    mapHint: "家紋をクリックして各天守を探索する",
    gridEyebrow: "現存十二天守 · 全覧",
    gridTitle: "十二天守地誌覧",
    labEyebrow: "Architect's Lab · 建築家の部屋",
    labTitle: "構造解析：石垣・破風・防禦機関",
    kamonEyebrow: "家紋と領主変遷",
    kamonTitle: "大名更迭：家紋伝承史",
    kamonDesc:
      "四つの代表的天守における領主更迭の歴史——それぞれの家紋は、藩主家族の命運と城郭の歴史的転折を物語る。彦根城の井伊氏260年間の一藩貫守は、江戸時代の政治的安定の縮図である。",
    tableEyebrow: "Data Compendium · 諸城概覧",
    tableTitle: "現存十二天守：資料一覧",
    refEyebrow: "学術参考文献",
    refTitle: "参考文献",
    colNo: "No.",
    colName: "城名",
    colPrefecture: "所在県",
    colClan: "主要大名",
    colYear: "竣工年",
    colTiers: "層数",
    colDesignation: "指定",
    kokuhoBadge: "★ 国宝",
    jubunkaBadge: "重文",
    chipClan: "藩主",
    chipPrefecture: "所在",
    chipYear: "竣工",
    chipTiers: "層数",
    regionTohoku: "東北地方",
    regionChubu: "中部地方",
    regionKansai: "近畿地方",
    regionChugoku: "中国・山陰地方",
    regionShikoku: "四国地方",
    closeBtn: "✕ 閉じる",
    completionYear: "年竣工",
    footerCopy: "Project Takumi · 匠 © 2026 · インタラクティブ建築史研究",
    footerDesc: "石垣と破風：大和領地の守護屏障",
  },
};

type I18nCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Strings;
};

const I18nContext = createContext<I18nCtx>({
  lang: "zh",
  setLang: () => {},
  t: STRINGS.zh,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("zh");
  return (
    <I18nContext.Provider value={{ lang, setLang, t: STRINGS[lang] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
