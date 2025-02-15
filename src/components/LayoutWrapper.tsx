"use client";

import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const ScrollTransition = dynamic(
  () => import("@/components/ScrollTransition"),
  {
    ssr: false,
    loading: () => null,
  }
);

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <ScrollTransition />
      <Footer />
    </>
  );
}
