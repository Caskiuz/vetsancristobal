"use client";

import React from "react";
import { motion } from "framer-motion";

interface AnimatedHeroIconProps {
  variant: "veterinaria" | "carniceria" | "ferreteria";
  size?: number;
  primaryColor?: string;
  secondaryColor?: string;
}

/**
 * Animated SVG icons for the Hero section of each business.
 * Pure React + Framer Motion — no external CDN, 100% reliable.
 */
export function AnimatedHeroIcon({
  variant,
  size = 120,
  primaryColor = "#0D9488",
  secondaryColor = "#14B8A6",
}: AnimatedHeroIconProps) {
  if (variant === "veterinaria") {
    return <VeterinariaIcon size={size} primary={primaryColor} secondary={secondaryColor} />;
  }
  if (variant === "carniceria") {
    return <CarniceriaIcon size={size} primary={primaryColor} secondary={secondaryColor} />;
  }
  return <FerreteriaIcon size={size} primary={primaryColor} secondary={secondaryColor} />;
}

/* ========== VETERINARIA — Heart/Stethoscope Animation ========== */
function VeterinariaIcon({ size, primary, secondary }: { size: number; primary: string; secondary: string }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      animate={{ rotate: [0, 0, 0] }}
      style={{ overflow: "visible" }}
    >
      {/* Heart pulse */}
      <motion.g
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        style={{ transformOrigin: "60px 60px" }}
      >
        <path
          d="M60 35 C50 18 25 22 18 40 C11 58 35 72 60 92 C85 72 109 58 102 40 C95 22 70 18 60 35Z"
          fill={primary}
          opacity="0.85"
        />
        <path
          d="M60 35 C52 22 35 26 28 40 C21 54 40 66 60 82 C80 66 99 54 92 40 C85 26 68 22 60 35Z"
          fill={secondary}
          opacity="0.3"
        />
      </motion.g>

      {/* Stethoscope — left circle */}
      <motion.circle
        cx="30" cy="70" r="10"
        stroke={primary}
        strokeWidth="3"
        fill="none"
        animate={{ r: [10, 11, 10] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 0.3 }}
      />
      {/* Stethoscope — right circle */}
      <motion.circle
        cx="45" cy="70" r="8"
        stroke={secondary}
        strokeWidth="3"
        fill="none"
        animate={{ r: [8, 9, 8] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 0.5 }}
      />
      {/* Stethoscope tube */}
      <motion.path
        d="M30 80 Q25 95 35 100 Q50 105 55 90 Q60 70 50 65"
        stroke={primary}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        animate={{ d: [
          "M30 80 Q25 95 35 100 Q50 105 55 90 Q60 70 50 65",
          "M30 80 Q25 97 35 102 Q50 107 55 90 Q60 70 50 65",
          "M30 80 Q25 95 35 100 Q50 105 55 90 Q60 70 50 65"
        ] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      />
      {/* Paw print detail */}
      <motion.g
        opacity="0.4"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ellipse cx="85" cy="95" rx="6" ry="4" fill={secondary} />
        <circle cx="77" cy="88" r="2.5" fill={secondary} />
        <circle cx="85" cy="84" r="2.5" fill={secondary} />
        <circle cx="93" cy="88" r="2.5" fill={secondary} />
      </motion.g>
    </motion.svg>
  );
}

/* ========== CARNICERIA — Flame/Grill Animation ========== */
function CarniceriaIcon({ size, primary, secondary }: { size: number; primary: string; secondary: string }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      style={{ overflow: "visible" }}
    >
      {/* Fire flames */}
      <motion.g
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        style={{ transformOrigin: "60px 65px" }}
      >
        {/* Outer flame */}
        <path
          d="M55 85 Q50 65 55 35 Q60 25 65 35 Q70 65 65 85 Q62 95 55 85Z"
          fill={primary}
          opacity="0.7"
        />
        {/* Inner flame */}
        <path
          d="M57 80 Q54 65 60 40 Q63 35 63 40 Q66 65 63 80 Q62 90 57 80Z"
          fill={secondary}
          opacity="0.6"
        />
        {/* Flame tip */}
        <ellipse cx="60" cy="38" rx="6" ry="10" fill={secondary} opacity="0.4" />
      </motion.g>

      {/* Grill grate */}
      <g opacity="0.8">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.line
            key={i}
            x1={35 + i * 14}
            y1="78"
            x2={35 + i * 14}
            y2="98"
            stroke={primary}
            strokeWidth="2.5"
            strokeLinecap="round"
            animate={{ strokeOpacity: [0.6, 0.9, 0.6] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.2, ease: "easeInOut" }}
          />
        ))}
      </g>
      {/* Grill base */}
      <rect x="30" y="96" width="60" height="4" rx="2" fill={primary} opacity="0.5" />

      {/* Heat waves */}
      <motion.g
        opacity="0.3"
        animate={{ y: [-2, 2, -2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <path d="M35 30 Q45 25 55 30" stroke={secondary} strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M40 22 Q55 17 70 22" stroke={secondary} strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M45 14 Q60 9 75 14" stroke={secondary} strokeWidth="1" fill="none" strokeLinecap="round" />
      </motion.g>

      {/* Spark particles */}
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={`spark-${i}`}
          cx={80 + i * 10}
          cy={30 + i * 15}
          r={2}
          fill={secondary}
          animate={{ y: [0, -20, 0], opacity: [0.7, 0, 0.7] }}
          transition={{ repeat: Infinity, duration: 1.5 + i * 0.3, ease: "easeOut" }}
        />
      ))}
    </motion.svg>
  );
}

/* ========== FERRETERIA — Gear/Wrench Animation ========== */
function FerreteriaIcon({ size, primary, secondary }: { size: number; primary: string; secondary: string }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      style={{ overflow: "visible" }}
    >
      {/* Rotating gear */}
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        style={{ transformOrigin: "50px 55px" }}
      >
        {/* Gear body */}
        <circle cx="50" cy="55" r="22" stroke={primary} strokeWidth="4" fill="none" />
        <circle cx="50" cy="55" r="10" stroke={secondary} strokeWidth="2" fill="none" />
        <circle cx="50" cy="55" r="4" fill={primary} />
        {/* Gear teeth */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          const x1 = 50 + 25 * Math.cos(rad);
          const y1 = 55 + 25 * Math.sin(rad);
          const x2 = 50 + 30 * Math.cos(rad);
          const y2 = 55 + 30 * Math.sin(rad);
          return (
            <line
              key={angle}
              x1={x1} y1={y1} x2={x2} y2={y2}
              stroke={primary}
              strokeWidth="3"
              strokeLinecap="round"
            />
          );
        })}
      </motion.g>

      {/* Hammer (static but scaled) */}
      <motion.g
        animate={{ rotate: [-5, 5, -5] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        style={{ transformOrigin: "85px 80px" }}
      >
        {/* Hammer head */}
        <rect x="72" y="68" width="28" height="12" rx="3" fill={primary} opacity="0.85" />
        {/* Hammer handle */}
        <rect x="83" y="78" width="6" height="28" rx="2" fill={secondary} opacity="0.7" />
        {/* Hammer grip lines */}
        {[0, 1, 2].map((i) => (
          <line key={i} x1="83" y1={90 + i * 6} x2="89" y2={90 + i * 6} stroke={primary} strokeWidth="1" opacity="0.5" />
        ))}
      </motion.g>

      {/* Wrench outline */}
      <motion.g
        animate={{ rotate: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.5 }}
        style={{ transformOrigin: "30px 30px" }}
        opacity="0.6"
      >
        <circle cx="22" cy="28" r="8" fill="none" stroke={primary} strokeWidth="3" />
        <circle cx="22" cy="28" r="4" fill={primary} opacity="0.3" />
        <line x1="30" y1="28" x2="48" y2="28" stroke={primary} strokeWidth="3" strokeLinecap="round" />
        <line x1="46" y1="22" x2="46" y2="34" stroke={primary} strokeWidth="2.5" strokeLinecap="round" />
      </motion.g>

      {/* Construction dots */}
      <motion.circle cx="70" cy="20" r="3" fill={secondary} opacity="0.4"
        animate={{ y: [0, -5, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      />
      <motion.circle cx="90" cy="15" r="2" fill={primary} opacity="0.35"
        animate={{ y: [0, -4, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 1.7, delay: 0.4, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}