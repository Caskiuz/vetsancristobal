"use client";

import React, { useEffect, useRef, useState } from "react";

interface LordIconProps {
  src: string;
  trigger?: "hover" | "click" | "loop" | "morph" | "in" | "loop-on-hover" | "boomerang";
  colors?: string;
  state?: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
  stroke?: "light" | "regular" | "bold";
  fallback?: React.ReactNode;
}

// Singleton: track if script is already loaded/loading globally
let scriptPromise: Promise<void> | null = null;

function loadScript(): Promise<void> {
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector('script[src*="lordicon"]');
    if (existing) {
      // Already in DOM — check if it's loaded
      if (customElements.get("lord-icon")) {
        resolve();
      } else {
        existing.addEventListener("load", () => resolve());
        existing.addEventListener("error", () => reject(new Error("Failed to load lordicon script")));
      }
      return;
    }

    const script = document.createElement("script");
    script.src = "https://cdn.lordicon.com/lordicon.js";
    script.async = true;
    script.onload = () => {
      // Wait a tick for customElements registry
      if (customElements.get("lord-icon")) {
        resolve();
      } else {
        // Poll until custom element is registered
        const interval = setInterval(() => {
          if (customElements.get("lord-icon")) {
            clearInterval(interval);
            resolve();
          }
        }, 50);
        // Timeout after 10s
        setTimeout(() => {
          clearInterval(interval);
          if (customElements.get("lord-icon")) resolve();
          else reject(new Error("Lordicon custom element did not register"));
        }, 10000);
      }
    };
    script.onerror = () => reject(new Error("Failed to load lordicon script"));
    document.head.appendChild(script);
  });

  return scriptPromise;
}

export function LordIcon({
  src,
  trigger = "loop-on-hover",
  colors,
  state,
  size = 48,
  className,
  style,
  stroke = "regular",
  fallback,
}: LordIconProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    loadScript()
      .then(() => {
        if (!cancelled) setReady(true);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    if (!ready || !containerRef.current) return;

    containerRef.current.innerHTML = "";
    const iconEl = document.createElement("lord-icon") as HTMLElement;
    iconEl.setAttribute("src", src);
    iconEl.setAttribute("trigger", trigger);
    if (colors) iconEl.setAttribute("colors", colors);
    if (state) iconEl.setAttribute("state", state);
    iconEl.setAttribute("stroke", stroke);
    iconEl.style.width = `${size}px`;
    iconEl.style.height = `${size}px`;
    if (style) Object.assign(iconEl.style, style);
    containerRef.current.appendChild(iconEl);
  }, [ready, src, trigger, colors, state, size, stroke, style]);

  if (error && fallback) {
    return <>{fallback}</>;
  }

  if (error) {
    return (
      <div
        className={className}
        style={{
          width: size,
          height: size,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          ...style,
        }}
      >
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity={0.3}>
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12l2 2 4-4" />
        </svg>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        width: size,
        height: size,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        ...(ready ? {} : { opacity: 0 }),
      }}
    />
  );
}