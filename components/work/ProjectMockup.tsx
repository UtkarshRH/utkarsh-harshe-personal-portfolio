import React from "react";
import type { MockupVariant } from "@/types/project";

interface ProjectMockupProps {
  variant: MockupVariant;
  title: string;
}

const ProjectMockup: React.FC<ProjectMockupProps> = ({ variant, title }) => {
  return (
    <div
      className="w-full rounded-md border border-[#2A2E37] bg-[#181B21] overflow-hidden select-none"
      role="img"
      aria-label={`Recreated interface preview for ${title}`}
    >
      {/* Window Header */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#2A2E37] bg-[#1E222A]">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#2A2E37]" />
          <span className="w-2 h-2 rounded-full bg-[#2A2E37]" />
          <span className="w-2 h-2 rounded-full bg-[#2A2E37]" />
        </div>
        <span className="text-xs font-mono text-[#A1A7B3]">
          {variant === "retail-pwa" && "Retail Operations PWA"}
          {variant === "dms" && "Dealer Management System"}
          {variant === "call-analytics" && "AI Call Analytics"}
          {variant === "rate-limiter" && "Fastify Rate Limiter"}
        </span>
        <span className="text-xs font-mono text-[#A1A7B3]/70">Preview</span>
      </div>

      {/* Mockup Body */}
      <div className="p-4 sm:p-5 bg-[#111318]">
        {variant === "retail-pwa" && (
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
            <div className="sm:col-span-5 border border-[#2A2E37] bg-[#181B21] rounded p-3.5 space-y-2.5">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#F5F5F6]">QC Audit</span>
                <span className="text-[#6685FF]">Draft Saved</span>
              </div>
              <div className="space-y-1.5 pt-1">
                <div className="flex items-center justify-between px-2.5 py-1.5 bg-[#111318] border border-[#2A2E37] rounded text-xs">
                  <span className="text-[#A1A7B3]">VIN Scan</span>
                  <span className="font-mono text-[#F5F5F6]">Verified</span>
                </div>
                <div className="flex items-center justify-between px-2.5 py-1.5 bg-[#111318] border border-[#2A2E37] rounded text-xs">
                  <span className="text-[#A1A7B3]">IQC Checklist</span>
                  <span className="font-mono text-[#6685FF]">Dexie Local</span>
                </div>
                <div className="flex items-center justify-between px-2.5 py-1.5 bg-[#111318] border border-[#2A2E37] rounded text-xs">
                  <span className="text-[#A1A7B3]">Delivery OTP</span>
                  <span className="font-mono text-[#A1A7B3]">Pending</span>
                </div>
              </div>
            </div>

            <div className="sm:col-span-7 flex flex-col justify-between gap-2.5">
              <div className="border border-[#2A2E37] bg-[#181B21] rounded p-3.5 space-y-2.5">
                <div className="flex items-center justify-between text-xs font-mono text-[#A1A7B3]">
                  <span>Registration Hub</span>
                  <span>CSV Export</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="p-2 bg-[#111318] border border-[#2A2E37] rounded">
                    <div className="text-[11px] font-mono text-[#A1A7B3]">Logistics</div>
                    <div className="mt-1 text-xs font-medium text-[#F5F5F6]">Inwarding</div>
                  </div>
                  <div className="p-2 bg-[#111318] border border-[#2A2E37] rounded">
                    <div className="text-[11px] font-mono text-[#A1A7B3]">Finance</div>
                    <div className="mt-1 text-xs font-medium text-[#F5F5F6]">UTR Lookup</div>
                  </div>
                  <div className="p-2 bg-[#111318] border border-[#2A2E37] rounded">
                    <div className="text-[11px] font-mono text-[#A1A7B3]">Media</div>
                    <div className="mt-1 text-xs font-medium text-[#F5F5F6]">Signed S3</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between px-3.5 py-2 border border-[#2A2E37] bg-[#1E222A] rounded text-xs font-mono">
                <span className="text-[#A1A7B3]">PWA Release Gate</span>
                <span className="text-[#F5F5F6]">Forced Update</span>
              </div>
            </div>
          </div>
        )}

        {variant === "dms" && (
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-[#2A2E37]">
              <span className="text-xs font-mono text-[#F5F5F6]">
                Multi-Store VIN Projection
              </span>
              <span className="text-xs font-mono text-[#6685FF]">
                Paginated Store Match
              </span>
            </div>

            <div className="border border-[#2A2E37] bg-[#181B21] rounded overflow-hidden">
              <div className="grid grid-cols-4 px-3 py-2 bg-[#1E222A] text-[11px] font-mono text-[#A1A7B3]">
                <span>Sample VIN</span>
                <span>Store</span>
                <span>Workflow</span>
                <span className="text-right">Status</span>
              </div>
              {[
                { vin: "VIN-EX-4012", store: "STORE-A", flow: "Allocation", state: "Matched" },
                { vin: "VIN-EX-4089", store: "STORE-B", flow: "Transfer", state: "Inwarded" },
                { vin: "VIN-EX-4124", store: "STORE-A", flow: "PayU Intent", state: "Verified" },
              ].map((row) => (
                <div
                  key={row.vin}
                  className="grid grid-cols-4 px-3 py-2 border-t border-[#2A2E37] text-xs font-mono items-center"
                >
                  <span className="text-[#F5F5F6]">{row.vin}</span>
                  <span className="text-[#A1A7B3]">{row.store}</span>
                  <span className="text-[#A1A7B3]">{row.flow}</span>
                  <span className="text-right text-[#6685FF]">{row.state}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-2 text-xs font-mono">
              <div className="px-3 py-2 border border-[#2A2E37] bg-[#181B21] rounded text-[#A1A7B3]">
                OTP Onboarding
              </div>
              <div className="px-3 py-2 border border-[#2A2E37] bg-[#181B21] rounded text-[#A1A7B3]">
                GST & Ledger
              </div>
              <div className="px-3 py-2 border border-[#2A2E37] bg-[#181B21] rounded text-[#A1A7B3]">
                Razorpay VA
              </div>
            </div>
          </div>
        )}

        {variant === "call-analytics" && (
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
            <div className="sm:col-span-6 border border-[#2A2E37] bg-[#181B21] rounded p-3.5 space-y-2.5">
              <div className="flex items-center justify-between text-xs font-mono text-[#A1A7B3]">
                <span>Transcript & Audio</span>
                <span className="text-[#6685FF]">Signed S3</span>
              </div>
              <div className="flex items-center gap-1 h-9 px-2.5 bg-[#111318] border border-[#2A2E37] rounded">
                {[30, 65, 45, 80, 55, 90, 40, 70, 50, 85, 35, 60, 48, 75, 42, 62].map(
                  (height, idx) => (
                    <span
                      key={idx}
                      className={`flex-1 rounded-full ${
                        idx < 7 ? "bg-[#6685FF]" : "bg-[#2A2E37]"
                      }`}
                      style={{ height: `${height}%` }}
                    />
                  )
                )}
              </div>
              <div className="space-y-1 text-xs font-mono">
                <div className="flex justify-between text-[#A1A7B3]">
                  <span>Purchase Intent</span>
                  <span className="text-[#F5F5F6]">Extracted</span>
                </div>
                <div className="flex justify-between text-[#A1A7B3]">
                  <span>Campaign Retries</span>
                  <span className="text-[#F5F5F6]">Active</span>
                </div>
              </div>
            </div>

            <div className="sm:col-span-6 border border-[#2A2E37] bg-[#181B21] rounded p-3.5 flex flex-col justify-between space-y-2.5">
              <div className="flex items-center justify-between text-xs font-mono text-[#A1A7B3]">
                <span>Vertex AI Analyst</span>
                <span>RBAC</span>
              </div>
              <div className="p-2.5 bg-[#111318] border border-[#2A2E37] rounded text-xs text-[#F5F5F6]">
                Weekly funnel and exception summary across active regions
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-[#A1A7B3]">
                <span>FastAPI + MongoDB</span>
                <span className="text-[#F5F5F6]">Excel Export</span>
              </div>
            </div>
          </div>
        )}

        {variant === "rate-limiter" && (
          <div className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="border border-[#2A2E37] bg-[#181B21] rounded p-3.5 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#F5F5F6]">Token Bucket</span>
                  <span className="text-[#6685FF]">Burst Ready</span>
                </div>
                <div className="grid grid-cols-6 gap-1 pt-1">
                  {[1, 1, 1, 1, 0, 0].map((filled, idx) => (
                    <div
                      key={idx}
                      className={`h-4 rounded-sm border ${
                        filled
                          ? "bg-[#6685FF]/25 border-[#6685FF]/60"
                          : "bg-[#111318] border-[#2A2E37]"
                      }`}
                    />
                  ))}
                </div>
                <div className="text-xs font-mono text-[#A1A7B3]">
                  Refill rate + burst capacity
                </div>
              </div>

              <div className="border border-[#2A2E37] bg-[#181B21] rounded p-3.5 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#F5F5F6]">Leaky Bucket</span>
                  <span className="text-[#A1A7B3]">Steady Drain</span>
                </div>
                <div className="h-4 w-full bg-[#111318] border border-[#2A2E37] rounded-sm overflow-hidden">
                  <div className="h-full w-3/5 bg-[#6685FF]/40 border-r border-[#6685FF]" />
                </div>
                <div className="text-xs font-mono text-[#A1A7B3]">
                  Constant outflow pacing
                </div>
              </div>
            </div>

            <div className="px-3.5 py-2 border border-[#2A2E37] bg-[#181B21] rounded flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
              <span className="text-[#A1A7B3]">Redis Atomic EVALSHA</span>
              <span className="text-[#F5F5F6]">X-RateLimit-Remaining · Retry-After</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectMockup;
