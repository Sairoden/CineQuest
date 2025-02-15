// NEXT
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

// STYLES
import "./globals.css";

// COMPONENTS
import { Footer, ScrollTransition, Navbar, Providers } from "@/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CineQuest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Navbar />

          <ScrollTransition />

          {children}

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
