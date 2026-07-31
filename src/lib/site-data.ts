"use client";

import { useAdmin } from "@/lib/admin-context";
import { useBusiness } from "@/lib/business-context";
import { SITE_CONFIG, SERVICES, VETS, TESTIMONIALS } from "@/lib/constants";
import type { SiteConfig, Service, Vet, Testimonial } from "@/lib/admin-context";

// Combines business template + admin overrides
export function useSiteConfig(): SiteConfig {
  try {
    const { data } = useAdmin();
    const { businessData } = useBusiness();
    return {
      fullName: data.siteConfig.fullName || businessData.name,
      tagline: data.siteConfig.tagline || businessData.tagline,
      description: data.siteConfig.description || businessData.description,
      phone: data.siteConfig.phone || businessData.phone,
      phoneFormatted: data.siteConfig.phoneFormatted || businessData.phoneFormatted,
      email: data.siteConfig.email || businessData.email,
      address: {
        street: data.siteConfig.address.street || businessData.address.street,
        city: data.siteConfig.address.city || businessData.address.city,
        state: data.siteConfig.address.state || businessData.address.state,
        country: data.siteConfig.address.country || businessData.address.country,
        postalCode: data.siteConfig.address.postalCode || businessData.address.postalCode,
      },
      schedule: {
        weekdays: data.siteConfig.schedule.weekdays || businessData.schedule.weekdays,
        saturday: data.siteConfig.schedule.saturday || businessData.schedule.saturday,
        emergency: data.siteConfig.schedule.emergency || businessData.schedule.emergency,
      },
      stats: {
        petsServed: data.siteConfig.stats.petsServed,
        yearsExperience: data.siteConfig.stats.yearsExperience,
        googleRating: data.siteConfig.stats.googleRating,
        googleReviews: data.siteConfig.stats.googleReviews,
      },
    };
  } catch {
    const { businessData } = useBusiness();
    return {
      fullName: businessData.name,
      tagline: businessData.tagline,
      description: businessData.description,
      phone: businessData.phone,
      phoneFormatted: businessData.phoneFormatted,
      email: businessData.email,
      address: { ...businessData.address },
      schedule: { ...businessData.schedule },
      stats: {
        petsServed: businessData.stats.primaryValue,
        yearsExperience: businessData.stats.secondaryValue,
        googleRating: businessData.stats.ratingValue,
        googleReviews: businessData.stats.reviewsValue,
      },
    };
  }
}

export function useSiteServices(): Service[] {
  const { businessData } = useBusiness();
  return businessData.services.map((s) => ({
    id: s.id,
    title: s.title,
    description: s.description,
    icon: s.icon,
    color: s.color,
    priceRange: s.priceRange,
  }));
}

export function useSiteVets(): Vet[] {
  const { businessData } = useBusiness();
  return businessData.team.map((v) => ({
    name: v.name,
    role: v.role,
    specialty: v.specialty,
    education: v.education,
    experience: v.experience,
    certifications: v.certifications,
  }));
}

export function useSiteTestimonials(): Testimonial[] {
  const { businessData } = useBusiness();
  return businessData.testimonials.map((t) => ({
    name: t.name,
    pet: t.pet,
    rating: t.rating,
    text: t.text,
  }));
}

// Helper for WhatsApp URL that adapts to business changes
export function getEmergencyWhatsAppUrl(phone: string, message?: string): string {
  return `https://wa.me/${phone.replace(/\D/g, "")}?text=${encodeURIComponent(message || "¡Hola! Quisiera información sobre sus servicios.")}`;
}