// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import dynamic from "next/dynamic";

// Dynamically import components that might use document
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const ScrollTransition = dynamic(
  () => import("@/components/ScrollTransition"),
  {
    ssr: false,
    loading: () => null,
  }
);

// Import Providers normally since it doesn't use document
import Providers from "@/components/Providers";

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
          <main>{children}</main>
          <ScrollTransition />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
