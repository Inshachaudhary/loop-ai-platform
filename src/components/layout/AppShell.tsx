"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

import Sidebar from "./Sidebar";
import Header from "./Header";

type AppShellProps = {
  children: React.ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-72 transform bg-white transition-transform duration-300 lg:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-20 items-center justify-end border-b border-stone-200 px-6">
          <button
            onClick={() => setMobileOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-stone-200 hover:bg-stone-100"
          >
            <X size={18} />
          </button>
        </div>

        <Sidebar />
      </div>

      <div className="flex min-h-screen">
       {/* Desktop Sidebar */}
       <div className="hidden lg:flex">
      <Sidebar />
      </div>

        {/* Main Content */}
        <div className="flex min-h-screen min-w-0 flex-1 flex-col">
          <Header onMenuClick={() => setMobileOpen(true)} />

          <main className="flex-1 p-6 lg:p-8">
            <div className="mx-auto w-full max-w-7xl">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}