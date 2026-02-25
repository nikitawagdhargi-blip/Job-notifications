"use client";

import React, { useState } from "react";
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

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/dashboard" && pathname === "/") {
      return true;
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      {/* Mobile Header */}
      <div className="sticky top-0 z-50 bg-[#F7F6F3] border-b border-[#E5E4E1]">
        <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
          {/* Left: App name */}
          <Link
            href="/dashboard"
            className="font-serif text-lg font-medium text-[#111111]"
            onClick={closeMenu}
          >
            Job Notification App
          </Link>

          {/* Right: Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md text-[#111111] hover:bg-[#E5E4E1]/50 transition-colors duration-150"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`fixed inset-x-0 top-16 z-40 bg-[#F7F6F3] border-b border-[#E5E4E1] transition-all duration-200 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <nav className="max-w-[1400px] mx-auto px-6 py-4">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`px-4 py-3 text-base font-medium rounded-md transition-colors duration-150 ${
                    active
                      ? "text-[#8B0000] bg-[#8B0000]/5"
                      : "text-[#666666] hover:text-[#111111] hover:bg-[#E5E4E1]/30"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 top-32 z-30 bg-[#111111]/10"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
