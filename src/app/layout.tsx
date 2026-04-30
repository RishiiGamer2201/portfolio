import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rishii Kumar Singh | AI/ML Learner & Hackathon Builder",
  description:
    "Portfolio of Rishii Kumar Singh - AI/ML enthusiast, B.Tech student at DTU, specializing in Computer Vision, Gesture Systems, and Climate-Tech solutions.",
  openGraph: {
    title: "Rishii Kumar Singh | Portfolio",
    description: "AI/ML Learner & Hackathon Builder - Building Tech for Good.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-x-hidden">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
