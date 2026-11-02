import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ronnel Jomoc Jr.",
  description:
    "Portfolio of Ronnel Jomoc Jr., a junior full-stack web developer based in the Philippines.",
  icons: {
    icon: "/JayImage.png",
    shortcut: "/JayImage.png",
    apple: "/JayImage.png",
  },
  authors: [{ name: "Ronnel Jomoc Jr." }],
  keywords: [
    "Ronnel Jomoc Jr.",
    "Junior Full-Stack Web Developer",
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
    <html lang="en" className="scroll-smooth antialiased">
      <body className="bg-[#050505] text-white min-h-screen flex flex-col font-sans custom-cursor-enabled selection:bg-white selection:text-black">
        <CustomCursor />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
