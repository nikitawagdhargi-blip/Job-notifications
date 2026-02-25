"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/saved", label: "Saved" },
  { href: "/digest", label: "Digest" },
  { href: "/settings", label: "Settings" },
  { href: "/proof", label: "Proof" },
];

export function TopNavigation() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/dashboard" && pathname === "/") {
      return true;
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#F7F6F3] border-b border-[#E5E4E1]">
      <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Left: App name */}
        <Link
          href="/dashboard"
          className="font-serif text-lg font-medium text-[#111111] hover:text-[#8B0000] transition-colors duration-150"
        >
          Job Notification App
        </Link>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-150 ${
                  active
                    ? "text-[#8B0000]"
                    : "text-[#666666] hover:text-[#111111]"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#8B0000]" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right: Placeholder for user menu or actions */}
        <div className="hidden md:block w-8" />
      </div>
    </nav>
  );
}
