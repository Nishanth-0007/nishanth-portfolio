import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nishanth | AI & Full-Stack Developer",
  description: "Portfolio of Chikka Nishanth, AI/ML Specialist and MERN Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#050505] text-white antialiased`}>
        {/* This ensures your Navbar stays at the top of every page */}
        <Navbar /> 
        {children}
      </body>
    </html>
  );
}