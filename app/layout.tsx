import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type React from "react";
import { Navigation } from "../components/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sam O'Brien | Tech Career Blog",
  description:
    "Insights on Career Growth, Industry Trends, and Skill Development in Tech",
  keywords:
    "tech career, professional development, industry trends, skill development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white`}
      >
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <footer className="bg-[rgba(8,11,3,0.9)] border-t border-[rgba(92,219,149,0.1)] py-8">
          <div className="container mx-auto px-4 text-center text-sm text-gray-400">
            <p>
              © {new Date().getFullYear()} Sam O'Brien. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
