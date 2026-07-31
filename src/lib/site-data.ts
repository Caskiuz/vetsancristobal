"use client";

import { useAdmin } from "@/lib/admin-context";
import { SITE_CONFIG, SERVICES, VETS, TESTIMONIALS } from "@/lib/constants";
import type { SiteConfig, Service, Vet, Testimonial } from "@/lib/admin-context";

export function useSiteConfig(): SiteConfig {
  try {
    const { data } = useAdmin();
    return data.siteConfig;
  } catch {
    return {
      fullName: SITE_CONFIG.fullName,
      tagline: SITE_CONFIG.tagline,
      description: SITE_CONFIG.description,
      phone: SITE_CONFIG.phone,
      phoneFormatted: SITE_CONFIG.phoneFormatted,
      email: SITE_CONFIG.email,
      address: { ...SITE_CONFIG.address },
      schedule: { ...SITE_CONFIG.schedule },
    };
  }
}

export function useSiteServices(): Service[] {
  try {
    const { data } = useAdmin();
    return data.services;
  } catch {
    return SERVICES.map((s) => ({ ...s }));
  }
}

export function useSiteVets(): Vet[] {
  try {
    const { data } = useAdmin();
    return data.vets;
  } catch {
    return VETS.map((v) => ({ ...v, certifications: [...v.certifications] }));
  }
}

export function useSiteTestimonials(): Testimonial[] {
  try {
    const { data } = useAdmin();
    return data.testimonials;
  } catch {
    return TESTIMONIALS.map((t) => ({ ...t }));
  }
}

// Helper for WhatsApp URL that adapts to admin changes
export function getEmergencyWhatsAppUrl(phone: string): string {
  return `https://wa.me/${phone.replace(/\D/g, "")}?text=${encodeURIComponent("¡URGENTE! 🚨 Necesito atención veterinaria de emergencia.")}`;
}