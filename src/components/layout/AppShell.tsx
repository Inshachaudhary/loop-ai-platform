"use client";

import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

interface AppShellProps {
  children: ReactNode;
}

export default function AppShell({
  children,
}: AppShellProps) {
  return (
    <div className="flex min-h-screen bg-[var(--background)]">

      {/* Sidebar */}

      <Sidebar />

      {/* Main Content */}

      <div className="flex min-w-0 flex-1 flex-col">

        <Header />

        <main
          className="
          flex-1
          overflow-y-auto
          bg-[var(--background)]
          px-10
          py-8
          "
        >
          <div className="mx-auto w-full max-w-[1600px]">
            {children}
          </div>
        </main>

      </div>

    </div>
  );
}