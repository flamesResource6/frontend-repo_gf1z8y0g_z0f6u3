import React from 'react';

// Global background accents: soft gradient blobs, subtle grid, and a faint vignette
export default function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Soft gradient blobs */}
      <div className="absolute -top-32 -right-24 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle_at_30%_30%,#FF33CC44,transparent_60%)] blur-2xl" />
      <div className="absolute -bottom-32 -left-24 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle_at_70%_70%,#6F00FF33,transparent_60%)] blur-2xl" />

      {/* Subtle dot grid using multiple backgrounds + mask to fade edges */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(#000000 0.5px, transparent 0.5px), radial-gradient(#000000 0.5px, transparent 0.5px)",
          backgroundSize: "24px 24px, 24px 24px",
          backgroundPosition: "0 0, 12px 12px",
          WebkitMaskImage:
            "radial-gradient(60% 60% at 50% 50%, black, transparent)",
          maskImage: "radial-gradient(60% 60% at 50% 50%, black, transparent)",
        }}
      />

      {/* Vignette to keep edges calm */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#ffffff_85%)]" />
    </div>
  );
}
