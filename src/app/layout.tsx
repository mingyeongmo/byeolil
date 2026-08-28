import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "./_components/Footer/Footer";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "별일있음",
  description:
    "오늘 있었던 일을 뉴스, 전설, 스포츠 중계 스타일로 쓸데없이 거창하고 웃기게 만들어보세요.",
  openGraph: {
    title: "별일있음",
    description: "별일 없던 하루도 주인공이 될 수 있으니까",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "별일있음",
    description: "별일 없던 하루도 주인공이 될 수 있으니까",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.8.1/kakao.min.js"
          strategy="beforeInteractive"
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
