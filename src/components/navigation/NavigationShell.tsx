"use client";

import React from "react";
import { TopNavigation } from "./TopNavigation";
import { MobileNavigation } from "./MobileNavigation";

interface NavigationShellProps {
  children: React.ReactNode;
}

export function NavigationShell({ children }: NavigationShellProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6F3]">
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <TopNavigation />
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <MobileNavigation />
      </div>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
