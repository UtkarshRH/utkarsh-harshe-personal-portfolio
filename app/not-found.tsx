import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#111318] text-[#F4F5F7] flex items-center justify-center px-5">
      <div className="max-w-lg w-full border border-[#303540] bg-[#1B1E25] rounded-sm p-8 sm:p-10 space-y-6">
        <div className="text-xs font-mono uppercase tracking-[0.18em] text-[#6685FF]">
          ERROR // 404
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-[#F4F5F7]">
          Page not found.
        </h1>
        <p className="text-sm sm:text-base text-[#A3AAB6] leading-relaxed">
          The route you requested does not exist or has been moved. Return to the main portfolio or explore selected engineering case studies.
        </p>
        <div className="pt-2 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-[#111318] bg-[#F4F5F7] hover:bg-white rounded-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Back to home</span>
          </Link>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-[#F4F5F7] bg-[#232731] hover:bg-[#2b303c] border border-[#303540] rounded-sm transition-colors"
          >
            <span>View selected work</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
