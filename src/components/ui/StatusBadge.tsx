"use client";

import React from "react";

type StatusType = "default" | "success" | "warning" | "error" | "info";

interface StatusBadgeProps {
  children: React.ReactNode;
  status?: StatusType;
  className?: string;
}

const statusStyles: Record<StatusType, string> = {
  default: "bg-[#F7F6F3] text-[#666666] border-[#E5E4E1]",
  success: "bg-[#4A7C59]/10 text-[#4A7C59] border-[#4A7C59]/20",
  warning: "bg-[#B8860B]/10 text-[#B8860B] border-[#B8860B]/20",
  error: "bg-[#8B0000]/10 text-[#8B0000] border-[#8B0000]/20",
  info: "bg-[#111111]/5 text-[#111111] border-[#111111]/10",
};

export function StatusBadge({
  children,
  status = "default",
  className = "",
}: StatusBadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center
        px-3 py-1
        text-sm font-medium
        rounded-full
        border
        ${statusStyles[status]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
