// app/dashboard/layout.tsx
"use client";
export const dynamic = 'force-dynamic';

import { ReactNode } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

// export const metadata = {
//   title: "Dashboard | HMI-Dash",
// };

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      
      {/* 1) Header now at the very top, full width */}
      <header className="w-full">
        <DashboardHeader />
      </header>
      
      {/* 2) Sidebar + content below the header */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* Sidebar on the left */}
        <aside className="w-64 bg-white border-r">
          <Sidebar />
        </aside>
        
        {/* Main content */}
        <main className="flex-1 overflow-auto bg-gray-50 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
