"use client";

import { useEffect, useRef, useState } from "react";

export default function BackgroundEffect() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleMouseMove = (e) => {
      // Smooth subtle mouse glow
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Deep dark base radial lights */}
      <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] rounded-full bg-cyan-600/5 blur-[120px]" />
      <div className="absolute top-[30%] right-[-5%] w-[600px] h-[600px] rounded-full bg-indigo-600/5 blur-[140px]" />
      <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-[130px]" />

      {/* Grid Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      {/* Interactive Cursor Spotlight (Only rendered client-side on desktop) */}
      {isClient && mousePos.x > 0 && (
        <div
          className="hidden md:block absolute w-[700px] h-[700px] rounded-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            background: "radial-gradient(circle, rgba(56, 189, 248, 0.04) 0%, rgba(99, 102, 241, 0.02) 40%, transparent 70%)",
          }}
        />
      )}
    </div>
  );
}
