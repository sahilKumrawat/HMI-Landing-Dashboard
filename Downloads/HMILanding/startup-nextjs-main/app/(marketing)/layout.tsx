// app/(marketing)/layout.tsx
export const dynamic = 'force-dynamic';

import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Hack My Interview",
  description: "Your go-to AI interview prep",
};

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Public site header */}
      <Header />

      {/* Main content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Public site footer */}
      <Footer />
    </>
  );
}
