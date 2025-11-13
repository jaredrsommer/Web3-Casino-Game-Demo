import type { Metadata } from "next";
import { Bangers, Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers/provider";
import { useEffect, useRef, useState } from "react";
import LoadingIndicator from "@/components/Loading";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CozyCasino - Coreum Casino Gaming Platform",
  description: "A modern cryptocurrency casino gaming platform powered by Coreum blockchain with provably fair games",
  keywords: ["casino", "crypto", "blockchain", "Coreum", "provably fair", "gaming", "web3"],
  authors: [{ name: "CozyCasino" }],
  icons: {
    icon: "/assets/image/cozy-mascot.png",
    apple: "/assets/image/cozy-mascot.png",
  },
  openGraph: {
    title: "CozyCasino - Coreum Casino Gaming Platform",
    description: "Play provably fair casino games on Coreum blockchain",
    type: "website",
    images: [
      {
        url: "/assets/image/cozy-logo.png",
        width: 1200,
        height: 630,
        alt: "CozyCasino Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CozyCasino - Coreum Casino Gaming Platform",
    description: "Play provably fair casino games on Coreum blockchain",
    images: ["/assets/image/cozy-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className={`${bangers.className} max-w-[1920px] bg-white mx-auto`}>
        <LoadingIndicator />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
