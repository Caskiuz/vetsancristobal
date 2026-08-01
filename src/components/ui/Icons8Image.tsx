"use client";

import React, { useState } from "react";

interface Icons8ImageProps {
  /** Search term in English (e.g., "veterinarian", "butcher", "hardware") */
  icon: string;
  /** Style: "color" (flat), "ios" (outline), "fluency" (3D), "external" (photo-like) */
  style?: "color" | "ios" | "fluency" | "dusk" | "office" | "external" | "clouds";
  size?: number;
  className?: string;
  alt?: string;
  loading?: "lazy" | "eager";
}

/**
 * Icons8Image - Free high-quality icons/illustrations from Icons8 CDN
 * No API key needed for basic usage.
 * 
 * Styles:
 * - "color" → flat colorful icons
 * - "ios" → outline style  
 * - "fluency" → 3D gradient icons
 * - "dusk" → dark theme icons
 * - "office" → business illustrations
 * - "external" → photo-realistic
 * - "clouds" → cloud style
 * 
 * Usage:
 * <Icons8Image icon="veterinarian" style="fluency" size={250} />
 */
export function Icons8Image({
  icon,
  style = "fluency",
  size = 250,
  className,
  alt,
  loading = "lazy",
}: Icons8ImageProps) {
  const [error, setError] = useState(false);

  // Icons8 CDN URL (free, no API key needed for basic CDN access)
  const src = `https://img.icons8.com/${style}/${size}/${encodeURIComponent(icon)}.png`;

  if (error) {
    return null; // Silently fail to not break layout
  }

  return (
    <img
      src={src}
      alt={alt || icon}
      width={size}
      height={size}
      loading={loading}
      className={className}
      onError={() => setError(true)}
    />
  );
}

/**
 * Predefined Icons8 images for each business service
 * These are high-quality illustrations that replace SVG placeholders
 */
export const ICONS8_SERVICE_IMAGES: Record<string, { icon: string; style: string }> = {
  // Veterinaria
  "vet-consulta": { icon: "stethoscope", style: "fluency" },
  "vet-cirugia": { icon: "surgical--v1", style: "color" },
  "vet-peluqueria": { icon: "scissors--v1", style: "fluency" },
  "vet-laboratorio": { icon: "test-tube", style: "color" },
  "vet-exoticos": { icon: "macaw", style: "fluency" },
  "vet-vacunacion": { icon: "syringe", style: "color" },
  // Carniceria
  "carne-cortes": { icon: "steak", style: "fluency" },
  "carne-embutidos": { icon: "salami", style: "color" },
  "carne-delivery": { icon: "delivery", style: "fluency" },
  "carne-bbq": { icon: "barbecue", style: "color" },
  "carne-huesos": { icon: "bone", style: "fluency" },
  "carne-marinados": { icon: "marinating", style: "color" },
  // Ferreteria
  "ferre-materiales": { icon: "concrete-mixer", style: "color" },
  "ferre-herramientas": { icon: "maintenance", style: "fluency" },
  "ferre-fontaneria": { icon: "plumbing", style: "color" },
  "ferre-electricidad": { icon: "electrical", style: "fluency" },
  "ferre-pintura": { icon: "paint-bucket", style: "color" },
  "ferre-cerrajeria": { icon: "padlock", style: "fluency" },
};