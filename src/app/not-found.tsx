"use client";

import Link from "next/link";
import { NavigationShell } from "@/components/navigation";
import { Button } from "@/components/ui";

export default function NotFoundPage() {
  return (
    <NavigationShell>
      <div className="flex-1 flex items-center justify-center py-24 px-6">
        <div className="max-w-[720px] mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-[#8B0000]/10 flex items-center justify-center mx-auto mb-8">
            <svg
              className="w-8 h-8 text-[#8B0000]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="font-serif text-4xl font-medium text-[#111111] mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-[#666666] leading-relaxed mb-8 max-w-[400px] mx-auto">
            The page you are looking for does not exist.
          </p>
          <Link href="/dashboard">
            <Button variant="primary">Go to Dashboard</Button>
          </Link>
        </div>
      </div>
    </NavigationShell>
  );
}
