import React from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import type { ArchitectureNode } from "@/types/project";

interface ArchitectureDiagramProps {
  nodes: ArchitectureNode[];
  summary: string;
}

const LAYER_LABELS: Record<ArchitectureNode["layer"], string> = {
  client: "01 / CLIENT",
  gateway: "02 / BOUNDARY",
  service: "03 / SERVICES",
  data: "04 / STORAGE",
};

const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({
  nodes,
  summary,
}) => {
  return (
    <div className="border border-[#303540] bg-[#1B1E25] rounded-sm p-6 sm:p-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-4 border-b border-[#303540]">
        <span className="text-xs font-mono uppercase tracking-[0.16em] text-[#6685FF]">
          System Architecture Flow
        </span>
        <span className="text-xs font-mono text-[#A3AAB6]">
          ANONYMISED TOPOLOGY
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-stretch">
        {nodes.map((node, index) => (
          <React.Fragment key={node.label}>
            <div className="relative flex flex-col justify-between p-4 border border-[#303540] bg-[#111318] rounded-sm">
              <div className="text-[10px] font-mono uppercase tracking-[0.14em] text-[#6685FF]">
                {LAYER_LABELS[node.layer]}
              </div>
              <div className="mt-3">
                <div className="font-heading text-sm sm:text-base font-semibold text-[#F4F5F7]">
                  {node.label}
                </div>
                <div className="mt-1.5 text-xs font-mono text-[#A3AAB6] leading-relaxed">
                  {node.sublabel}
                </div>
              </div>

              {index < nodes.length - 1 && (
                <>
                  <div
                    aria-hidden="true"
                    className="hidden md:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 w-5 h-5 items-center justify-center bg-[#232731] border border-[#303540] rounded-full"
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
          </React.Fragment>
        ))}
      </div>

      <p className="text-sm text-[#A3AAB6] leading-relaxed pt-1">{summary}</p>
    </div>
  );
};

export default ArchitectureDiagram;
