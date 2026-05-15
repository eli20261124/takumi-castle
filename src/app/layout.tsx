import type { Metadata } from "next";
import { JetBrains_Mono, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jb-mono",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  variable: "--font-noto-serif-jp",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "石垣與破風：現存十二天守防禦構造解析",
  description: "大和領地的守護屏障——現存十二天守之防禦構造與工藝技術互動研究",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-Hant"
      className={`h-full antialiased ${jetbrainsMono.variable} ${notoSerifJP.variable}`}
    >
      <body className="min-h-full flex flex-col">
        <div className="iron-grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
