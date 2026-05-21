import type { Metadata } from "next";
import { Syne, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Ronnel Jr.",
  description:
    "Monochrome editorial portfolio of Ronnel P. Jomoc Jr. Crafting high-performance web systems, responsive user interfaces, and elegant backend architectures.",
  icons: {
    icon: "/JayImage.png",
    shortcut: "/JayImage.png",
    apple: "/JayImage.png",
  },
  authors: [{ name: "Ronnel P. Jomoc Jr." }],
  keywords: [
    "Ronnel P. Jomoc Jr.",
    "Full Stack Developer",
    "Next.js Developer",
    "Django Developer",
    "Premium Portfolio",
    "Minimalist Web Design",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${outfit.variable} ${jetbrainsMono.variable} scroll-smooth antialiased`}
    >
      <body className="bg-[#050505] text-white min-h-screen flex flex-col font-sans custom-cursor-enabled selection:bg-white selection:text-black">
        <CustomCursor />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
