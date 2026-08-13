import type { Metadata } from "next";
import { Alfa_Slab_One, Geist, Geist_Mono } from "next/font/google";
import { Header } from "../components/site-header";
import { Footer } from "../components/site-footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const alfaSlabOne = Alfa_Slab_One({
  variable: "--font-alfa-slab-one",
  subsets: ["latin"],
  weight: "400",
});

const url = "https://rust-lang.jp";
const icon = "/favicon.ico";
const ogpIcon = "/ogp.webp";
const siteName = "Rust Developers JP";
const description = "日本のRust開発者コミュニティへようこそ！";
export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: `${siteName}`,
    template: `%s / ${siteName}`
  },
  description,
  openGraph: {
    title: "Rust Developers JP",
    description,
    url,
    siteName,
    locale: "ja-JP",
    type: "website",
    images: ogpIcon
  },
  icons: icon,
  publisher: `@ri0n_dev`,
  robots: "index, follow",
  creator: `@ri0n_dev`,
  keywords: ["Rust", "Rust Developers JP", "Rust Devs JP", "Rustコミュニティ", "Rust開発者", "Rustエンジニア", "Rustプログラマー", "Rust学習", "Rust情報"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} ${alfaSlabOne.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
