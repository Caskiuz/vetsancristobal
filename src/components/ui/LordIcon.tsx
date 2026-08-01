"use client";

import React, { useEffect, useRef } from "react";

interface LordIconProps {
  src: string;
  trigger?: "hover" | "click" | "loop" | "morph" | "in" | "loop-on-hover" | "boomerang";
  colors?: string;
  state?: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
  stroke?: "light" | "regular" | "bold";
}

/**
 * LordIcon - Animated icons from Lordicon.com
 * Uses the free CDN web component.
 * Docs: https://lordicon.com/documentation
 * 
 * Usage:
 * <LordIcon src="https://cdn.lordicon.com/abc123.json" trigger="hover" colors="primary:#0D9488" />
 */
export function LordIcon({
  src,
  trigger = "loop-on-hover",
  colors,
  state,
  size = 48,
  className,
  style,
  stroke = "regular",
}: LordIconProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamically load the Lordicon script if not already loaded
    const existingScript = document.querySelector('script[src*="lordicon"]');
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://cdn.lordicon.com/lordicon.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  useEffect(() => {
    // Create lord-icon element programmatically to avoid TSX custom element issues
    if (containerRef.current) {
      containerRef.current.innerHTML = "";
      const iconEl = document.createElement("lord-icon") as HTMLElement & {
        src?: string;
        trigger?: string;
        colors?: string;
        state?: string;
        stroke?: string;
      };
      iconEl.setAttribute("src", src);
      iconEl.setAttribute("trigger", trigger);
      if (colors) iconEl.setAttribute("colors", colors);
      if (state) iconEl.setAttribute("state", state);
      iconEl.setAttribute("stroke", stroke);
      iconEl.style.width = `${size}px`;
      iconEl.style.height = `${size}px`;
      Object.assign(iconEl.style, style || {});
      containerRef.current.appendChild(iconEl);
    }
  }, [src, trigger, colors, state, size, stroke, style]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}
    />
  );
}