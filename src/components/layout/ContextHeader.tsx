"use client";

import React from "react";

interface ContextHeaderProps {
  headline: string;
  subtext: string;
}

export function ContextHeader({ headline, subtext }: ContextHeaderProps) {
  return (
    <div className="py-10 border-b border-[#E5E4E1]">
      <div className="max-w-[1400px] mx-auto px-6">
        <h1 className="font-serif text-4xl font-medium text-[#111111] tracking-tight mb-3">
          {headline}
        </h1>
        <p className="text-lg text-[#666666] max-w-[720px] leading-relaxed">
          {subtext}
        </p>
      </div>
    </div>
  );
}
