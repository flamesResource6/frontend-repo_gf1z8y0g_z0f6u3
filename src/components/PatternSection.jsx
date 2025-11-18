import React from 'react';

// A modern pattern section that adds depth between content blocks
export default function PatternSection({ children, className = '' }) {
  return (
    <section className={`relative bg-white ${className}`}>
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* angled gradient stripes */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(135deg, #6F00FF, #6F00FF 1px, transparent 1px, transparent 14px)',
          }}
        />
        {/* glass highlight at top */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/80 to-transparent" />
      </div>
      {children}
    </section>
  );
}
