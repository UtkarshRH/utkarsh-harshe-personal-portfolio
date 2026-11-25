import React from "react";

/**
 * Full-viewport precision SVG fallback representing the 3-tier system architecture
 * (Client, Service/API, Data/Storage) for mobile, reduced-motion, and non-WebGL contexts.
 */
const ArchitectureBackgroundFallback: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#111318]"
    >
      {/* Hairline architectural grid */}
      <div className="absolute inset-0 bg-architectural-grid opacity-25" />

      {/* Isometric 3-tier system schematic positioned toward right/top */}
      <svg
        viewBox="0 0 800 800"
        className="absolute -right-24 top-16 w-[520px] sm:w-[680px] lg:w-[760px] h-auto opacity-45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Vertical data conduits */}
        <line x1="400" y1="150" x2="400" y2="620" stroke="#6685FF" strokeOpacity="0.35" strokeWidth="1.2" strokeDasharray="4 6" />
        <line x1="280" y1="215" x2="280" y2="555" stroke="#303540" strokeWidth="1" />
        <line x1="520" y1="215" x2="520" y2="555" stroke="#303540" strokeWidth="1" />

        {/* Tier 1: Client / UI Layer */}
        <g transform="translate(0, -10)">
          <polygon points="400,120 580,200 400,280 220,200" fill="#1B1E25" fillOpacity="0.85" stroke="#434a59" strokeWidth="1.2" />
          <polygon points="400,145 535,205 400,265 265,205" fill="#232731" fillOpacity="0.7" stroke="#6685FF" strokeOpacity="0.45" strokeWidth="1" />
          <circle cx="400" cy="205" r="4" fill="#6685FF" fillOpacity="0.85" />
        </g>

        {/* Tier 2: API & Service Layer */}
        <g transform="translate(0, 145)">
          <polygon points="400,120 580,200 400,280 220,200" fill="#1B1E25" fillOpacity="0.85" stroke="#434a59" strokeWidth="1.2" />
          <polygon points="340,175 400,148 460,175 400,202" fill="#232731" stroke="#596173" strokeWidth="1" />
          <polygon points="340,225 400,198 460,225 400,252" fill="#232731" stroke="#6685FF" strokeOpacity="0.45" strokeWidth="1" />
        </g>

        {/* Tier 3: Distributed Data Layer */}
        <g transform="translate(0, 300)">
          <polygon points="400,120 580,200 400,280 220,200" fill="#1B1E25" fillOpacity="0.85" stroke="#434a59" strokeWidth="1.2" />
          <ellipse cx="345" cy="200" rx="28" ry="14" fill="#232731" stroke="#596173" strokeWidth="1" />
          <ellipse cx="455" cy="200" rx="28" ry="14" fill="#232731" stroke="#596173" strokeWidth="1" />
          <ellipse cx="400" cy="228" rx="28" ry="14" fill="#232731" stroke="#6685FF" strokeOpacity="0.5" strokeWidth="1" />
        </g>
      </svg>

      {/* Readability scrim */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(17,19,24,0.92) 0%, rgba(17,19,24,0.7) 52%, rgba(17,19,24,0.38) 100%)",
        }}
      />
    </div>
  );
};

export default ArchitectureBackgroundFallback;
