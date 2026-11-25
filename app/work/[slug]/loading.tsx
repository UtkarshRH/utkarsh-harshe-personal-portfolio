import React from "react";

export default function CaseStudyLoading() {
  return (
    <div className="min-h-screen bg-[#111318] pt-32 pb-20 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto space-y-8 animate-pulse">
        <div className="h-4 w-36 bg-[#1B1E25] rounded-sm" />
        <div className="h-12 w-3/4 bg-[#1B1E25] rounded-sm" />
        <div className="h-6 w-2/3 bg-[#1B1E25] rounded-sm" />
        <div className="h-72 w-full bg-[#1B1E25] border border-[#303540] rounded-sm" />
      </div>
    </div>
  );
}
