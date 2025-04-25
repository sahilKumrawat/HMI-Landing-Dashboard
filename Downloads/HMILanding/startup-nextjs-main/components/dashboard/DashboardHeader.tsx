// components/dashboard/DashboardHeader.tsx
"use client";
import { useState } from "react";
import { MoonIcon, SunIcon, BellIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import AvatarMenu from "./AvatarMenu";

export default function DashboardHeader() {
  const [dark, setDark] = useState(false);
  const toggleDark = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark", !dark);
  };

  return (
    <header className="flex items-center justify-between bg-white px-6 py-3 border-b">
      {/* Left: logo */}
      <div className="flex items-center gap-6">
        <h1 className="text-2xl font-bold text-indigo-600">HMI-Dash</h1>
        {/* optional search / grid icons */}
      </div>

      {/* Right: controls */}
      <div className="flex items-center gap-4">
        {/* .....................light/dark mode............................... */}
        {/* <button onClick={toggleDark} className="p-1 rounded hover:bg-gray-100">
          {dark ? <SunIcon className="h-6 w-6 text-gray-600" /> : <MoonIcon className="h-6 w-6 text-gray-600" />}
        </button> */}

        <button className="relative p-1 rounded hover:bg-gray-100">
          <BellIcon className="h-6 w-6 text-gray-600" />
          <span className="absolute -top-1 -right-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">5</span>
        </button>

        {/* language selector */}
        {/* <div className="flex items-center gap-1 px-2 py-1 border rounded hover:bg-gray-100 cursor-pointer">
          <img src="/icons/gb.svg" alt="EN" className="h-4 w-4" />
          <ChevronDownIcon className="h-4 w-4 text-gray-600" />
        </div> */}

        {/* user avatar + dropdown */}
        <AvatarMenu />
      </div>
    </header>
  );
}
