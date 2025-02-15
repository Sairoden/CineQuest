// NEXT
import type { Metadata } from "next";

// STYLES
import "./globals.css";

// COMPONENTS
import { Footer, ScrollTransition, Navbar, Providers } from "@/components";

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
      <body suppressHydrationWarning>
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
