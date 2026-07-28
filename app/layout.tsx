import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "秋山総業株式会社｜あなたのまちの解体屋さん",
  description:
    "さいたま市・上尾市を中心に関東エリアの解体工事に対応。現地調査・お見積り無料。自社施工で安心価格、工事実績3,000件以上。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
