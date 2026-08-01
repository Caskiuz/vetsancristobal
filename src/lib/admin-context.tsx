"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { SITE_CONFIG, SERVICES, VETS, TESTIMONIALS } from "@/lib/constants";

export interface SiteConfig {
  fullName: string;
  tagline: string;
  description: string;
  phone: string;
  phoneFormatted: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
  };
  schedule: {
    weekdays: string;
    saturday: string;
    emergency: string;
  };
  stats: {
    petsServed: number;
    yearsExperience: number;
    googleRating: number;
    googleReviews: number;
  };
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  priceRange: string;
  illustration?: string;
}

export interface Vet {
  name: string;
  role: string;
  specialty: string;
  education: string;
  experience: string;
  certifications: string[];
}

export interface Testimonial {
  name: string;
  pet: string;
  rating: number;
  text: string;
}

interface AdminData {
  siteConfig: SiteConfig;
  services: Service[];
  vets: Vet[];
  testimonials: Testimonial[];
}

interface AdminContextType {
  data: AdminData;
  updateSiteConfig: (config: Partial<SiteConfig>) => void;
  updateServices: (services: Service[]) => void;
  updateVets: (vets: Vet[]) => void;
  updateTestimonials: (testimonials: Testimonial[]) => void;
  resetToDefaults: () => void;
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}

const defaultData: AdminData = {
  siteConfig: {
    fullName: SITE_CONFIG.fullName,
    tagline: SITE_CONFIG.tagline,
    description: SITE_CONFIG.description,
    phone: SITE_CONFIG.phone,
    phoneFormatted: SITE_CONFIG.phoneFormatted,
    email: SITE_CONFIG.email,
    address: { ...SITE_CONFIG.address },
    schedule: { ...SITE_CONFIG.schedule },
    stats: { ...SITE_CONFIG.stats },
  },
  services: SERVICES.map((s) => ({ ...s })),
  vets: VETS.map((v) => ({ ...v, certifications: [...v.certifications] })),
  testimonials: TESTIMONIALS.map((t) => ({ ...t })),
};

const ADMIN_PASSWORD = "admin123";

const AdminContext = createContext<AdminContextType>({
  data: defaultData,
  updateSiteConfig: () => {},
  updateServices: () => {},
  updateVets: () => {},
  updateTestimonials: () => {},
  resetToDefaults: () => {},
  isAuthenticated: false,
  login: () => false,
  logout: () => {},
});

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<AdminData>(defaultData);
  const [loaded, setLoaded] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("vet-admin-data");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setData({ ...defaultData, ...parsed });
      } catch {
        // keep defaults
      }
    }
    const auth = localStorage.getItem("vet-admin-auth");
    if (auth === "true") setIsAuthenticated(true);
    setLoaded(true);
  }, []);

  const persist = useCallback((newData: AdminData) => {
    setData(newData);
    localStorage.setItem("vet-admin-data", JSON.stringify(newData));
  }, []);

  const updateSiteConfig = (config: Partial<SiteConfig>) => {
    const newData = { ...data, siteConfig: { ...data.siteConfig, ...config } };
    persist(newData);
  };

  const updateServices = (services: Service[]) => {
    persist({ ...data, services });
  };

  const updateVets = (vets: Vet[]) => {
    persist({ ...data, vets });
  };

  const updateTestimonials = (testimonials: Testimonial[]) => {
    persist({ ...data, testimonials });
  };

  const resetToDefaults = () => {
    persist(defaultData);
  };

  const login = (password: string) => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem("vet-admin-auth", "true");
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("vet-admin-auth");
  };

  if (!loaded) return null;

  return (
    <AdminContext.Provider
      value={{
        data,
        updateSiteConfig,
        updateServices,
        updateVets,
        updateTestimonials,
        resetToDefaults,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  return useContext(AdminContext);
}