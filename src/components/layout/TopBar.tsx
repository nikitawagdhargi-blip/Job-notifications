"use client";

import React from "react";

interface TopBarProps {
  currentStep: number;
  totalSteps: number;
  status: "not-started" | "in-progress" | "shipped";
}

const statusConfig = {
  "not-started": {
    label: "Not Started",
    className: "bg-[#F7F6F3] text-[#666666] border border-[#E5E4E1]",
  },
  "in-progress": {
    label: "In Progress",
    className: "bg-[#B8860B]/10 text-[#B8860B] border border-[#B8860B]/20",
  },
  shipped: {
    label: "Shipped",
    className: "bg-[#4A7C59]/10 text-[#4A7C59] border border-[#4A7C59]/20",
  },
};

export function TopBar({ currentStep, totalSteps, status }: TopBarProps) {
  const statusStyle = statusConfig[status];

  return (
    <header className="sticky top-0 z-50 bg-[#F7F6F3] border-b border-[#E5E4E1]">
      <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Left: App name */}
        <div className="flex items-center">
          <span className="font-serif text-lg font-medium text-[#111111]">
            Job Notification App
          </span>
        </div>

        {/* Center: Progress indicator */}
        <div className="flex items-center gap-3">
          <span className="text-sm text-[#666666]">
            Step {currentStep} / {totalSteps}
          </span>
          <div className="flex gap-1">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div
                key={index}
                className={`w-8 h-1.5 rounded-full transition-colors duration-200 ease-in-out ${
                  index < currentStep
                    ? "bg-[#8B0000]"
                    : "bg-[#E5E4E1]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right: Status badge */}
        <div
          className={`px-4 py-1.5 rounded-full text-sm font-medium ${statusStyle.className}`}
        >
          {statusStyle.label}
        </div>
      </div>
    </header>
  );
}
