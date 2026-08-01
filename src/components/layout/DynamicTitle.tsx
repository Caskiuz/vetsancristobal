"use client";

import { useEffect } from "react";
import { useBusiness } from "@/lib/business-context";

export function DynamicTitle() {
  const { businessData: b } = useBusiness();

  useEffect(() => {
    document.title = `${b.name} — ${b.tagline} en San Cristóbal, Táchira`;
  }, [b.name, b.tagline]);

  return null;
}