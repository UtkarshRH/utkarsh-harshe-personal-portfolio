import React from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import type { ArchitectureNode } from "@/types/project";

interface ArchitectureDiagramProps {
  nodes: ArchitectureNode[];
  summary: string;
}

const LAYER_LABELS: Record<ArchitectureNode["layer"], string> = {
  client: "Client Layer",
  gateway: "Boundary",
  service: "Services",
  data: "Persistence",
};

const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({
  nodes,
  summary,
}) => {
  return (
    <div className="border border-[#2A2E37] bg-[#181B21] rounded-md p-6 sm:p-8 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#2A2E37]">
        <span className="text-sm font-medium text-[#F5F5F6]">
          System Architecture Flow
        </span>
        <span className="text-xs font-mono text-[#A1A7B3]">
          Recreated Topology
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-stretch">
        {nodes.map((node, index) => (
          <div
            key={node.label}
            className="relative flex flex-col justify-between p-4 border border-[#2A2E37] bg-[#111318] rounded"
          >
            <div className="text-xs font-mono text-[#6685FF]">
              0{index + 1} · {LAYER_LABELS[node.layer]}
            </div>
            <div className="mt-3">
              <div className="font-heading text-sm sm:text-base font-semibold text-[#F5F5F6]">
                {node.label}
              </div>
              <div className="mt-1.5 text-xs font-mono text-[#A1A7B3] leading-relaxed">
                {node.sublabel}
              </div>
            </div>

            {index < nodes.length - 1 && (
              <>
                <div
                  aria-hidden="true"
                  className="hidden md:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 w-5 h-5 items-center justify-center bg-[#1E222A] border border-[#2A2E37] rounded-full"
                >
                  <ArrowRight className="w-3 h-3 text-[#6685FF]" />
                </div>
                <div
                  aria-hidden="true"
                  className="md:hidden flex justify-center pt-3 -mb-1"
                >
                  <ArrowDown className="w-4 h-4 text-[#6685FF]" />
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <p className="text-sm sm:text-base text-[#A1A7B3] leading-relaxed pt-1">
        {summary}
      </p>
    </div>
  );
};

export default ArchitectureDiagram;
