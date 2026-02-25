"use client";

import React from "react";

interface ChecklistItem {
  label: string;
  checked: boolean;
}

interface ProofFooterProps {
  items: ChecklistItem[];
}

export function ProofFooter({ items }: ProofFooterProps) {
  return (
    <footer className="border-t border-[#E5E4E1] bg-[#F7F6F3] py-6">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center gap-8">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-2.5">
              <div
                className={`w-5 h-5 rounded border flex items-center justify-center transition-colors duration-150 ease-in-out ${
                  item.checked
                    ? "bg-[#4A7C59] border-[#4A7C59]"
                    : "bg-white border-[#E5E4E1]"
                }`}
              >
                {item.checked && (
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
              <span
                className={`text-sm ${
                  item.checked ? "text-[#4A7C59]" : "text-[#666666]"
                }`}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
