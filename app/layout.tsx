import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohamed Santawi | Frontend Developer",
  description: "Portfolio of Mohamed Santawi, a Frontend Developer specialized in React, Next.js, TypeScript, and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen flex flex-col bg-slate-900 text-slate-50 font-sans selection:bg-yellow-500/30">
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
      </body>
    </html>
  );
}
