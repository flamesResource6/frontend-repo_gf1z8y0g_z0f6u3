import React from 'react';

export default function GradientDivider() {
  return (
    <div className="relative mx-auto my-10 h-px max-w-6xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF33CC] to-[#6F00FF] opacity-60" />
    </div>
  );
}
