// components/dashboard/Sidebar.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

// <-- notice the corrected imports here
import {
  FiGrid,
  FiBarChart2,
  FiUser,
  FiBriefcase,
  FiMessageSquare,
  FiFileText,
  FiChevronDown,
} from "react-icons/fi"

export default function Sidebar() {
  const path = usePathname();
  const [openFront, setOpenFront] = useState(false);

  const linkClass = (href: string) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${path === href
      ? "bg-indigo-600 text-white"
      : "text-gray-700 hover:bg-indigo-100"
    }`;

  return (
    <nav className="px-2 py-4 space-y-1">
      <Link href="/dashboard" className={linkClass("/dashboard")}>
        <FiGrid className="h-5 w-5" />
        Dashboard
      </Link>

      <Link
        href="/dashboard/jobs"
        className={linkClass("/dashboard/jobs")}
      >
        <FiBriefcase className="h-5 w-5" /> Jobs
      </Link>

      <Link href="/dashboard/profile" className={linkClass("/dashboard/profile")}>
        <FiUser className="h-5 w-5" /> 
        Profile
      </Link>

      {/* <div>
        <button
          onClick={() => setOpenFront(!openFront)}
          className="flex w-full items-center justify-between gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-indigo-100"
        >
          <span className="flex items-center gap-3">
            Front Pages
          </span>
          
        </button>

        {openFront && (
          <div className="ml-8 mt-1 space-y-1">
            <Link
              href="/dashboard/landingpage"
              className={linkClass("/dashboard/landingpage")}
            >
              Landingpage
            </Link>
          </div>
        )}
      </div> */}
      
    </nav>
  );
}
