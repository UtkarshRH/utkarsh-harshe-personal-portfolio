"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  Database,
  FileSpreadsheet,
  FileText,
  Lock,
  RefreshCw,
  ScanLine,
  Search,
  Shield,
  Truck,
  Upload,
} from "lucide-react";

type ShowcaseTab = "fulfilment" | "qc" | "registration" | "finance";

const TABS: { id: ShowcaseTab; label: string }[] = [
  { id: "fulfilment", label: "Fulfilment & VIN Scan" },
  { id: "qc", label: "QC Audit (Dexie)" },
  { id: "registration", label: "Registration Hub" },
  { id: "finance", label: "Dealer Finance" },
];

/**
 * Original, anonymised product interface mockup illustrating verified
 * Ola Retail App PWA workflows. Not an actual company screenshot.
 */
const OlaRetailShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ShowcaseTab>("fulfilment");

  return (
    <figure className="space-y-4">
      <div className="rounded-lg border border-[#2A2E37] bg-[#181B21] overflow-hidden shadow-2xl shadow-black/40">
        {/* Browser Chrome */}
        <div className="px-4 sm:px-6 py-3.5 border-b border-[#2A2E37] bg-[#1E222A] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2A2E37]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#2A2E37]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#2A2E37]" />
          </div>

          <div className="max-w-[220px] sm:max-w-none truncate px-3 sm:px-4 py-1 rounded bg-[#111318] border border-[#2A2E37] text-xs font-mono text-[#A1A7B3]">
            retail-pwa.internal / store-operations
          </div>

          <div className="flex items-center gap-2 text-xs text-[#A1A7B3]">
            <Shield className="w-3.5 h-3.5 text-[#6685FF]" aria-hidden="true" />
            <span>Casbin RBAC · Partner Mode</span>
          </div>
        </div>

        {/* Interactive Workflow Switcher */}
        <div className="px-4 sm:px-6 py-3 border-b border-[#2A2E37] bg-[#181B21] flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Product workflow views">
            {TABS.map((tab) => {
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3.5 py-1.5 text-xs sm:text-sm rounded transition-colors ${
                    isActive
                      ? "bg-[#6685FF]/15 text-[#F5F5F6] border border-[#6685FF]/50"
                      : "text-[#A1A7B3] hover:text-[#F5F5F6] border border-transparent"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-[#A1A7B3]">
            <RefreshCw className="w-3.5 h-3.5 text-[#6685FF]" aria-hidden="true" />
            <span>PWA Release Gate Active</span>
          </div>
        </div>

        {/* Application Workspace Canvas */}
        <div className="bg-[#111318] grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">
          {/* App Sidebar Navigation */}
          <aside className="lg:col-span-3 border-b lg:border-b-0 lg:border-r border-[#2A2E37] p-4 sm:p-5 bg-[#14171D] flex flex-col justify-between gap-6">
            <div className="space-y-1">
              <div className="px-3 py-2 text-xs font-medium text-[#A1A7B3]">
                Store Workspace
              </div>
              {[
                { id: "fulfilment" as const, label: "Fulfilment & Logistics", icon: Truck },
                { id: "qc" as const, label: "QC Audits & Part Master", icon: CheckCircle2 },
                { id: "registration" as const, label: "Registration Hub", icon: FileSpreadsheet },
                { id: "finance" as const, label: "Dealer Finance", icon: FileText },
              ].map((nav) => {
                const Icon = nav.icon;
                const active = activeTab === nav.id;
                return (
                  <button
                    key={nav.id}
                    type="button"
                    onClick={() => setActiveTab(nav.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded text-left text-sm transition-colors ${
                      active
                        ? "bg-[#1E222A] text-[#F5F5F6]"
                        : "text-[#A1A7B3] hover:text-[#F5F5F6] hover:bg-[#181B21]"
                    }`}
                  >
                    <Icon
                      className={`w-4 h-4 ${active ? "text-[#6685FF]" : "text-[#A1A7B3]"}`}
                      aria-hidden="true"
                    />
                    <span>{nav.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-[#2A2E37] space-y-2 text-xs text-[#A1A7B3]">
              <div className="flex items-center justify-between">
                <span>Runtime</span>
                <span className="text-[#F5F5F6]">PWA / Android WebView</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Telemetry</span>
                <span className="text-[#F5F5F6]">CubeAPM Connected</span>
              </div>
            </div>
          </aside>

          {/* Main Workspace Content */}
          <div className="lg:col-span-9 p-5 sm:p-8">
            {activeTab === "fulfilment" && (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-[#2A2E37]">
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-[#F5F5F6]">
                      Truck Inwarding & VIN Scanning
                    </h3>
                    <p className="text-sm text-[#A1A7B3] mt-1">
                      Verify incoming units, process outwarding, and complete delivery OTP handover.
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#181B21] border border-[#2A2E37] rounded text-xs font-mono text-[#F5F5F6]">
                    <ScanLine className="w-4 h-4 text-[#6685FF]" aria-hidden="true" />
                    <span>Scanner Ready</span>
                  </div>
                </div>

                <div className="border border-[#2A2E37] rounded bg-[#181B21] overflow-hidden">
                  <div className="grid grid-cols-4 px-4 py-2.5 bg-[#1E222A] text-xs font-mono text-[#A1A7B3]">
                    <span>Sample Unit</span>
                    <span>Workflow</span>
                    <span>Document</span>
                    <span className="text-right">Status</span>
                  </div>
                  {[
                    { unit: "UNIT-EX-101", flow: "Truck Inwarding", doc: "Delivery Note", status: "VIN Scanned" },
                    { unit: "UNIT-EX-102", flow: "Outwarding", doc: "Handover Form", status: "OTP Verified" },
                    { unit: "UNIT-EX-103", flow: "Customer Delivery", doc: "Signed S3 Upload", status: "Ready" },
                  ].map((row) => (
                    <div
                      key={row.unit}
                      className="grid grid-cols-2 sm:grid-cols-4 gap-2 px-4 py-3 border-t border-[#2A2E37] text-sm items-center"
                    >
                      <span className="font-mono text-[#F5F5F6]">{row.unit}</span>
                      <span className="text-[#A1A7B3]">{row.flow}</span>
                      <span className="text-[#A1A7B3] hidden sm:inline">{row.doc}</span>
                      <span className="text-right font-mono text-xs text-[#6685FF]">
                        {row.status}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 border border-[#2A2E37] bg-[#181B21] rounded flex items-center justify-between">
                    <div>
                      <div className="text-xs text-[#A1A7B3]">Delivery Verification</div>
                      <div className="text-sm font-medium text-[#F5F5F6] mt-0.5">
                        6-Digit Delivery OTP Gate
                      </div>
                    </div>
                    <Lock className="w-4 h-4 text-[#6685FF]" aria-hidden="true" />
                  </div>
                  <div className="p-4 border border-[#2A2E37] bg-[#181B21] rounded flex items-center justify-between">
                    <div>
                      <div className="text-xs text-[#A1A7B3]">Version Control</div>
                      <div className="text-sm font-medium text-[#F5F5F6] mt-0.5">
                        Forced-Update Prompt Enabled
                      </div>
                    </div>
                    <RefreshCw className="w-4 h-4 text-[#6685FF]" aria-hidden="true" />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "qc" && (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-[#2A2E37]">
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-[#F5F5F6]">
                      Quality Control Audit & Part Master
                    </h3>
                    <p className="text-sm text-[#A1A7B3] mt-1">
                      Offline-resilient inspection checklists backed by Dexie IndexedDB draft autosave.
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#181B21] border border-[#6685FF]/40 rounded text-xs font-mono text-[#F5F5F6]">
                    <Database className="w-4 h-4 text-[#6685FF]" aria-hidden="true" />
                    <span>Draft Saved Locally (Dexie)</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { check: "Exterior & Chassis Inspection", module: "QC Audit Form", state: "Autosaved" },
                    { check: "Component Verification", module: "Part Master Lookup", state: "Passed" },
                    { check: "Discrepancy Resolution", module: "IQC Correction Tool", state: "Draft Synced" },
                  ].map((item) => (
                    <div
                      key={item.check}
                      className="p-4 border border-[#2A2E37] bg-[#181B21] rounded flex flex-wrap items-center justify-between gap-3"
                    >
                      <div>
                        <div className="text-sm font-medium text-[#F5F5F6]">{item.check}</div>
                        <div className="text-xs text-[#A1A7B3] mt-0.5">{item.module}</div>
                      </div>
                      <span className="text-xs font-mono text-[#6685FF]">{item.state}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "registration" && (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-[#2A2E37]">
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-[#F5F5F6]">
                      Registration Hub & Bulk Sync
                    </h3>
                    <p className="text-sm text-[#A1A7B3] mt-1">
                      Search registration tasks, upload verification batches, and export CSV reports.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#181B21] border border-[#2A2E37] rounded text-xs text-[#F5F5F6]">
                      <Upload className="w-3.5 h-3.5 text-[#6685FF]" aria-hidden="true" />
                      Bulk Upload
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#181B21] border border-[#2A2E37] rounded text-xs text-[#F5F5F6]">
                      <FileSpreadsheet className="w-3.5 h-3.5 text-[#6685FF]" aria-hidden="true" />
                      Export CSV
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 px-4 py-2.5 bg-[#181B21] border border-[#2A2E37] rounded text-sm text-[#A1A7B3]">
                  <Search className="w-4 h-4 text-[#A1A7B3]" aria-hidden="true" />
                  <span>Search registration task by unit ID or batch reference...</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 border border-[#2A2E37] bg-[#181B21] rounded space-y-1.5">
                    <div className="text-xs font-mono text-[#6685FF]">Document Storage</div>
                    <div className="text-sm font-medium text-[#F5F5F6]">
                      Signed AWS S3 Collateral & Docs
                    </div>
                    <div className="text-xs text-[#A1A7B3]">
                      Accessible across desktop browser and Android WebView.
                    </div>
                  </div>
                  <div className="p-4 border border-[#2A2E37] bg-[#181B21] rounded space-y-1.5">
                    <div className="text-xs font-mono text-[#6685FF]">Operational Reporting</div>
                    <div className="text-sm font-medium text-[#F5F5F6]">
                      Filtered Task CSV Exports
                    </div>
                    <div className="text-xs text-[#A1A7B3]">
                      Structured exports for store and regional operations review.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "finance" && (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-[#2A2E37]">
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-[#F5F5F6]">
                      Dealer Finance & UTR Lookup
                    </h3>
                    <p className="text-sm text-[#A1A7B3] mt-1">
                      E-voucher PDFs, virtual accounts, ledger statements, and UTR-based sale-order lookup.
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between px-4 py-2.5 bg-[#181B21] border border-[#2A2E37] rounded text-sm">
                  <span className="text-[#A1A7B3] font-mono">UTR Lookup: UTR-SAMPLE-9042</span>
                  <span className="text-xs font-mono text-[#6685FF]">Order Matched</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { title: "E-Voucher PDFs", desc: "Downloadable dealer payment vouchers" },
                    { title: "Virtual Accounts", desc: "Store settlement account tracking" },
                    { title: "Ledger & Statements", desc: "Unified transaction history" },
                  ].map((card) => (
                    <div
                      key={card.title}
                      className="p-4 border border-[#2A2E37] bg-[#181B21] rounded space-y-1"
                    >
                      <div className="text-sm font-medium text-[#F5F5F6]">{card.title}</div>
                      <div className="text-xs text-[#A1A7B3]">{card.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <figcaption className="text-xs sm:text-sm text-[#A1A7B3]">
        Recreated, anonymised interface mockup illustrating verified Ola Retail App workflows. Not an actual company screenshot.
      </figcaption>
    </figure>
  );
};

export default OlaRetailShowcase;
