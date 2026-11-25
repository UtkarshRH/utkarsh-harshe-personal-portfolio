import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#111318] text-[#F5F5F6] flex items-center justify-center px-5">
      <div className="max-w-lg w-full border border-[#2A2E37] bg-[#181B21] rounded-md p-8 sm:p-10 space-y-6">
        <div className="text-xs font-mono uppercase tracking-[0.14em] text-[#6685FF]">
          404 — Not Found
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-[#F5F5F6]">
          Page not found.
        </h1>
        <p className="text-base text-[#A1A7B3] leading-relaxed">
          The route you requested does not exist or has been moved. Return to the main portfolio or explore selected engineering case studies.
        </p>
        <div className="pt-2 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-[#111318] bg-[#F5F5F6] hover:bg-white rounded-md transition-colors"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Back to home</span>
          </Link>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-[#F5F5F6] bg-[#1E222A] hover:bg-[#252a34] border border-[#2A2E37] rounded-md transition-colors"
          >
            <span>View selected work</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
