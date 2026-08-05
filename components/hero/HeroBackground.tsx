"use me";
"use client";

import { useEffect, useState } from "react";

interface HeroBackgroundProps {
  variant?: "default" | "vms" | "hms" | "cybersecurity";
}

export default function HeroBackground({ variant = "default" }: HeroBackgroundProps) {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const [enableCursorGlow, setEnableCursorGlow] = useState(false);

  useEffect(() => {
    if (variant === "cybersecurity") {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      const isTouchDevice =
        "ontouchstart" in window || navigator.maxTouchPoints > 0;

      if (!prefersReducedMotion && !isTouchDevice) {
        setEnableCursorGlow(true);
      }
    }
  }, [variant]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enableCursorGlow) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
    setIsHovered(true);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsHovered(false)}
      className="absolute inset-0 overflow-hidden pointer-events-auto"
    >
      {/* Dark Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A09] via-[#1A1A18] to-[#0A0A09]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-15" />

      {/* SVG Network Line Mesh */}
      <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradMono" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#A3A3A0" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path
          d="M -100 200 L 400 -50 L 900 300 L 1400 100"
          stroke="url(#lineGradMono)"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M 100 600 L 600 250 L 1100 500"
          stroke="url(#lineGradMono)"
          strokeWidth="1"
          fill="none"
        />
        <circle cx="400" cy="-50" r="3" fill="#FFFFFF" className="animate-ping" />
        <circle cx="900" cy="300" r="3" fill="#10B981" className="animate-ping" />
      </svg>

      {/* Variant Accent Glows */}
      {variant === "vms" && (
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/10 rounded-full filter blur-3xl" />
      )}
      {variant === "hms" && (
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-white/10 rounded-full filter blur-3xl" />
      )}
      {variant === "cybersecurity" && (
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-[#10B981]/15 rounded-full filter blur-3xl" />
      )}

      {/* Cursor Following Glow (Cybersecurity variant) */}
      {enableCursorGlow && isHovered && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(16, 185, 129, 0.12), transparent 70%)`,
          }}
        />
      )}
    </div>
  );
}
