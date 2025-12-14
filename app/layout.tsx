import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import MobileBlocker from "@/components/MobileBlocker";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GrainOverlay } from "@/components/GrainOverlay";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Avanya",
  description: "To dismantle the cookie- cutter 5-star experience and replace it with Raw Luxury—where opulence is defined by privacy, silence, and rare access to nature, not just gold taps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${playfair.variable} ${playfair.className} antialiased`}
      >
        <SmoothScrolling>
          <MobileBlocker />
          <Navbar />
          {/* <GrainOverlay /> */}
          {children}
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
