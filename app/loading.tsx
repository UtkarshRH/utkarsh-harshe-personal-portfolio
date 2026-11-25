import React from "react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#111318] flex items-center justify-center px-5">
      <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.18em] text-[#A3AAB6]">
        <span className="w-2 h-2 rounded-full bg-[#6685FF] animate-pulse" />
        <span>Loading portfolio</span>
      </div>
    </div>
  );
}
