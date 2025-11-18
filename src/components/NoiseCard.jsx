import React from 'react';

export default function NoiseCard({ children, className = '' }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-white/60 bg-white/70 p-6 shadow-[0_10px_30px_rgba(111,0,255,0.06)] backdrop-blur ${className}`}>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\' opacity=\'0.5\'/></svg>\")',
        }}
      />
      {children}
    </div>
  );
}
