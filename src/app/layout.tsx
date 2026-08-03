import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "별일있음",
  description:
    "평범한 하루를 쓸데없이 거창하고 웃기게 만들어주는 AI 과장 생성 웹서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
