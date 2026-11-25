"use client";

import React, { Component, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import ArchitectureBackgroundFallback from "@/components/background/ArchitectureBackgroundFallback";

const ArchitectureBackgroundCanvas = dynamic(
  () => import("@/components/background/ArchitectureBackgroundCanvas"),
  {
    ssr: false,
    loading: () => <ArchitectureBackgroundFallback />,
  }
);

interface ErrorBoundaryProps {
  fallback: React.ReactNode;
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class WebGLErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl2") ||
          canvas.getContext("webgl") ||
          canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

const ArchitectureBackground: React.FC = () => {
  const [canRender3D, setCanRender3D] = useState(false);
  const [contextFailed, setContextFailed] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktopQuery = window.matchMedia("(min-width: 768px)");

    const evaluate = () => {
      setCanRender3D(!motionQuery.matches && desktopQuery.matches && isWebGLAvailable());
    };

    evaluate();
    motionQuery.addEventListener("change", evaluate);
    desktopQuery.addEventListener("change", evaluate);

    return () => {
      motionQuery.removeEventListener("change", evaluate);
      desktopQuery.removeEventListener("change", evaluate);
    };
  }, []);

  if (!canRender3D || contextFailed) {
    return <ArchitectureBackgroundFallback />;
  }

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#111318]"
    >
      {/* Subtle architectural coordinate grid */}
      <div className="absolute inset-0 bg-architectural-grid opacity-20" />

      {/* Full-viewport interactive 3-tier system architecture */}
      <div className="absolute inset-0">
        <WebGLErrorBoundary fallback={<ArchitectureBackgroundFallback />}>
          <ArchitectureBackgroundCanvas onError={() => setContextFailed(true)} />
        </WebGLErrorBoundary>
      </div>

      {/* Controlled directional scrim so editorial typography stays sharp */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(17,19,24,0.86) 0%, rgba(17,19,24,0.62) 48%, rgba(17,19,24,0.22) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 75% 45%, transparent 0%, rgba(17,19,24,0.5) 75%)",
        }}
      />
    </div>
  );
};

export default ArchitectureBackground;
