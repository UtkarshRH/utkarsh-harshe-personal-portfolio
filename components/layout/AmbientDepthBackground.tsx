"use client";

import React, { useEffect, useState } from "react";

/**
 * Subtle, low-contrast architectural depth layer:
 * fine structural grid, soft ambient top-right lighting, and restrained scroll parallax.
 * Respects prefers-reduced-motion and renders zero foreground objects.
 */
const AmbientDepthBackground: React.FC = () => {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) return;

    let rafId = 0;
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, 2400);
        setScrollOffset(y * 0.025);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#111318]"
    >
      {/* Fine architectural grid masked smoothly toward edges */}
      <div
        className="absolute inset-0 bg-fine-grid opacity-30"
        style={{
          transform: `translate3d(0, ${-scrollOffset}px, 0)`,
          maskImage:
            "radial-gradient(ellipse 80% 70% at 60% 20%, black 20%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 60% 20%, black 20%, transparent 100%)",
        }}
      />

      {/* Soft ambient studio lighting wash */}
      <div
        className="absolute -top-[20%] right-[-10%] w-[70vw] max-w-[960px] h-[65vh] rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(102, 133, 255, 0.055) 0%, rgba(24, 27, 33, 0.02) 48%, transparent 72%)",
          transform: `translate3d(0, ${scrollOffset * 0.6}px, 0)`,
        }}
      />

      {/* Subtle architectural depth plane */}
      <div
        className="absolute top-[18%] left-[-8%] w-[55vw] max-w-[780px] h-[55vh]"
        style={{
          background:
            "radial-gradient(circle at center, rgba(245, 245, 246, 0.02) 0%, transparent 65%)",
        }}
      />
    </div>
  );
};

export default AmbientDepthBackground;
