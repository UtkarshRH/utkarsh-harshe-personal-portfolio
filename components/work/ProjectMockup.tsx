import React from "react";
import type { MockupVariant } from "@/types/project";

interface ProjectMockupProps {
  variant: MockupVariant;
  title: string;
}

const ProjectMockup: React.FC<ProjectMockupProps> = ({ variant, title }) => {
  return (
    <div
      className="relative w-full rounded-sm border border-[#303540] bg-[#111318] overflow-hidden select-none"
      role="img"
      aria-label={`Anonymised interface mockup for ${title}`}
    >
      {/* Top Window Chrome */}
      <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-[#303540] bg-[#1B1E25]">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#303540]" />
          <span className="w-2 h-2 rounded-full bg-[#303540]" />
          <span className="w-2 h-2 rounded-full bg-[#303540]" />
        </div>
        <span className="text-[10px] font-mono tracking-[0.14em] uppercase text-[#A3AAB6]">
          {variant === "retail-pwa" && "PWA // STORE OPERATIONS"}
          {variant === "dms" && "DMS // INVENTORY & FINANCE"}
          {variant === "call-analytics" && "AI // CALL ANALYTICS & ANALYST"}
          {variant === "rate-limiter" && "FASTIFY // REDIS LUA THROTTLER"}
        </span>
        <span className="text-[10px] font-mono text-[#6685FF]">ANONYMISED</span>
      </div>

      {/* Mockup Body */}
      <div className="p-4 sm:p-5">
        {variant === "retail-pwa" && (
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
            {/* Mobile PWA View */}
            <div className="sm:col-span-5 border border-[#303540] bg-[#1B1E25] rounded-sm p-3 space-y-2.5">
              <div className="flex items-center justify-between text-[10px] font-mono">
                <span className="text-[#F4F5F7]">QC_AUDIT // STORE-04</span>
                <span className="px-1.5 py-0.5 bg-[#232731] border border-[#303540] text-[#6685FF] rounded-sm">
                  DEXIE SAVED
                </span>
              </div>
              <div className="space-y-1.5 pt-1">
                <div className="flex items-center justify-between px-2.5 py-1.5 bg-[#111318] border border-[#303540] rounded-sm text-[11px]">
                  <span className="text-[#A3AAB6]">VIN Scan</span>
                  <span className="font-mono text-[#F4F5F7]">VERIFIED</span>
                </div>
                <div className="flex items-center justify-between px-2.5 py-1.5 bg-[#111318] border border-[#303540] rounded-sm text-[11px]">
                  <span className="text-[#A3AAB6]">IQC Checklist</span>
                  <span className="font-mono text-[#6685FF]">DRAFT LOCAL</span>
                </div>
                <div className="flex items-center justify-between px-2.5 py-1.5 bg-[#111318] border border-[#303540] rounded-sm text-[11px]">
                  <span className="text-[#A3AAB6]">Delivery OTP</span>
                  <span className="font-mono text-[#A3AAB6]">PENDING</span>
                </div>
              </div>
              <div className="pt-1 flex items-center justify-between text-[10px] font-mono text-[#A3AAB6] border-t border-[#303540]/70">
                <span>Casbin RBAC</span>
                <span>Partner Mode</span>
              </div>
            </div>

            {/* Operational Modules */}
            <div className="sm:col-span-7 flex flex-col justify-between gap-2.5">
              <div className="border border-[#303540] bg-[#1B1E25]/80 rounded-sm p-3 space-y-2">
                <div className="flex items-center justify-between text-[10px] font-mono text-[#A3AAB6]">
                  <span>REGISTRATION HUB</span>
                  <span>CSV / BULK SYNC</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="p-2 bg-[#111318] border border-[#303540] rounded-sm">
                    <div className="text-[10px] font-mono text-[#A3AAB6]">INWARD</div>
                    <div className="mt-1 text-xs font-medium text-[#F4F5F7]">Truck Scan</div>
                  </div>
                  <div className="p-2 bg-[#111318] border border-[#303540] rounded-sm">
                    <div className="text-[10px] font-mono text-[#A3AAB6]">FINANCE</div>
                    <div className="mt-1 text-xs font-medium text-[#F4F5F7]">UTR Lookup</div>
                  </div>
                  <div className="p-2 bg-[#111318] border border-[#303540] rounded-sm">
                    <div className="text-[10px] font-mono text-[#A3AAB6]">DOCS</div>
                    <div className="mt-1 text-xs font-medium text-[#F4F5F7]">Signed S3</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between px-3 py-2 border border-[#303540] bg-[#232731]/70 rounded-sm text-[11px] font-mono">
                <span className="text-[#A3AAB6]">PWA Release Gate</span>
                <span className="text-[#F4F5F7]">Forced Update Active</span>
              </div>
            </div>
          </div>
        )}

        {variant === "dms" && (
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-[#303540]">
              <div className="text-xs font-mono text-[#F4F5F7]">
                MULTI-STORE VIN PROJECTION
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono">
                <span className="px-2 py-0.5 bg-[#1B1E25] border border-[#303540] text-[#A3AAB6] rounded-sm">
                  FULL-STORE MATCH
                </span>
                <span className="px-2 py-0.5 bg-[#1B1E25] border border-[#6685FF]/50 text-[#6685FF] rounded-sm">
                  PAGINATED API
                </span>
              </div>
            </div>

            <div className="border border-[#303540] bg-[#1B1E25] rounded-sm overflow-hidden">
              <div className="grid grid-cols-4 px-3 py-1.5 bg-[#232731] text-[10px] font-mono uppercase tracking-wider text-[#A3AAB6]">
                <span>Synthetic VIN</span>
                <span>Store</span>
                <span>Flow</span>
                <span className="text-right">State</span>
              </div>
              {[
                { vin: "VIN-SIM-4012", store: "BLR-HUB-01", flow: "Allocation", state: "Matched" },
                { vin: "VIN-SIM-4089", store: "BLR-HUB-02", flow: "Transfer", state: "Inwarded" },
                { vin: "VIN-SIM-4124", store: "BLR-HUB-01", flow: "PayU Intent", state: "Verified" },
              ].map((row) => (
                <div
                  key={row.vin}
                  className="grid grid-cols-4 px-3 py-2 border-t border-[#303540]/70 text-[11px] font-mono items-center"
                >
                  <span className="text-[#F4F5F7]">{row.vin}</span>
                  <span className="text-[#A3AAB6]">{row.store}</span>
                  <span className="text-[#A3AAB6]">{row.flow}</span>
                  <span className="text-right text-[#6685FF]">{row.state}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-2 text-[10px] font-mono">
              <div className="px-2.5 py-2 border border-[#303540] bg-[#1B1E25] rounded-sm text-[#A3AAB6]">
                OTP Onboarding
              </div>
              <div className="px-2.5 py-2 border border-[#303540] bg-[#1B1E25] rounded-sm text-[#A3AAB6]">
                GST & Ledger
              </div>
              <div className="px-2.5 py-2 border border-[#303540] bg-[#1B1E25] rounded-sm text-[#A3AAB6]">
                Razorpay VA
              </div>
            </div>
          </div>
        )}

        {variant === "call-analytics" && (
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
            <div className="sm:col-span-6 border border-[#303540] bg-[#1B1E25] rounded-sm p-3 space-y-2.5">
              <div className="flex items-center justify-between text-[10px] font-mono text-[#A3AAB6]">
                <span>TRANSCRIPT & AUDIO</span>
                <span className="text-[#6685FF]">SIGNED S3</span>
              </div>
              {/* Abstract Audio Waveform */}
              <div className="flex items-center gap-1 h-9 px-2.5 bg-[#111318] border border-[#303540] rounded-sm">
                {[30, 65, 45, 80, 55, 90, 40, 70, 50, 85, 35, 60, 48, 75, 42, 62].map(
                  (height, idx) => (
                    <span
                      key={idx}
                      className={`flex-1 rounded-full ${
                        idx < 7 ? "bg-[#6685FF]" : "bg-[#303540]"
                      }`}
                      style={{ height: `${height}%` }}
                    />
                  )
                )}
              </div>
              <div className="space-y-1 text-[11px] font-mono">
                <div className="flex justify-between text-[#A3AAB6]">
                  <span>Purchase Intent</span>
                  <span className="text-[#F4F5F7]">Extracted</span>
                </div>
                <div className="flex justify-between text-[#A3AAB6]">
                  <span>Campaign Retries</span>
                  <span className="text-[#F4F5F7]">Policy Active</span>
                </div>
              </div>
            </div>

            <div className="sm:col-span-6 border border-[#303540] bg-[#1B1E25] rounded-sm p-3 flex flex-col justify-between space-y-2.5">
              <div className="flex items-center justify-between text-[10px] font-mono text-[#A3AAB6]">
                <span>VERTEX AI ANALYST</span>
                <span>RBAC + AUDIT</span>
              </div>
              <div className="p-2 bg-[#111318] border border-[#303540] rounded-sm text-[11px] text-[#A3AAB6] space-y-1">
                <div className="font-mono text-[10px] text-[#6685FF]">QUERY SESSION</div>
                <div className="text-[#F4F5F7]">
                  Weekly funnel & exception summary across active regions
                </div>
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono text-[#A3AAB6]">
                <span>FastAPI + MongoDB</span>
                <span className="px-1.5 py-0.5 border border-[#303540] bg-[#232731] text-[#F4F5F7] rounded-sm">
                  XLSX EXPORT
                </span>
              </div>
            </div>
          </div>
        )}

        {variant === "rate-limiter" && (
          <div className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="border border-[#303540] bg-[#1B1E25] rounded-sm p-3 space-y-2">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="text-[#F4F5F7]">TOKEN BUCKET</span>
                  <span className="text-[#6685FF]">BURST READY</span>
                </div>
                <div className="grid grid-cols-6 gap-1 pt-1">
                  {[1, 1, 1, 1, 0, 0].map((filled, idx) => (
                    <div
                      key={idx}
                      className={`h-4 rounded-sm border ${
                        filled
                          ? "bg-[#6685FF]/30 border-[#6685FF]/70"
                          : "bg-[#111318] border-[#303540]"
                      }`}
                    />
                  ))}
                </div>
                <div className="text-[10px] font-mono text-[#A3AAB6]">
                  Refill rate + burst capacity
                </div>
              </div>

              <div className="border border-[#303540] bg-[#1B1E25] rounded-sm p-3 space-y-2">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="text-[#F4F5F7]">LEAKY BUCKET</span>
                  <span className="text-[#A3AAB6]">STEADY DRAIN</span>
                </div>
                <div className="h-4 w-full bg-[#111318] border border-[#303540] rounded-sm overflow-hidden">
                  <div className="h-full w-3/5 bg-[#6685FF]/45 border-r border-[#6685FF]" />
                </div>
                <div className="text-[10px] font-mono text-[#A3AAB6]">
                  Constant outflow pacing
                </div>
              </div>
            </div>

            <div className="px-3 py-2 border border-[#303540] bg-[#1B1E25] rounded-sm flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono">
              <span className="text-[#A3AAB6]">REDIS ATOMIC EVALSHA</span>
              <span className="text-[#F4F5F7]">X-RateLimit-Remaining · Retry-After</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectMockup;
