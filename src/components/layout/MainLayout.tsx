"use client";

import React from "react";
import { TopBar } from "./TopBar";
import { ContextHeader } from "./ContextHeader";
import { ProofFooter } from "./ProofFooter";

interface MainLayoutProps {
  children: React.ReactNode;
  secondaryPanel?: React.ReactNode;
  topBarProps: {
    currentStep: number;
    totalSteps: number;
    status: "not-started" | "in-progress" | "shipped";
  };
  contextHeaderProps: {
    headline: string;
    subtext: string;
  };
  proofFooterProps: {
    items: { label: string; checked: boolean }[];
  };
}

export function MainLayout({
  children,
  secondaryPanel,
  topBarProps,
  contextHeaderProps,
  proofFooterProps,
}: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6F3]">
      {/* Top Bar */}
      <TopBar {...topBarProps} />

      {/* Context Header */}
      <ContextHeader {...contextHeaderProps} />

      {/* Main Content Area */}
      <main className="flex-1 py-10">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex gap-10">
            {/* Primary Workspace (70%) */}
            <div className="flex-[0.7] min-w-0">
              {children}
            </div>

            {/* Secondary Panel (30%) */}
            {secondaryPanel && (
              <div className="flex-[0.3] min-w-0">
                <div className="sticky top-24">
                  {secondaryPanel}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Proof Footer */}
      <ProofFooter {...proofFooterProps} />
    </div>
  );
}
