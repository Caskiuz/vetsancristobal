"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

// ==================== TYPES ====================
export type BusinessId = "veterinaria" | "carniceria" | "ferreteria";

export interface BusinessTemplate {
  id: BusinessId;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  emoji: string;
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
    primaryValue: number;
    primaryLabel: string;
    secondaryValue: number;
    secondaryLabel: string;
    ratingValue: number;
    ratingLabel: string;
    reviewsValue: number;
    reviewsLabel: string;
  };
  colors: {
    primary: string;
    primaryDark: string;
    primaryLight: string;
    secondary: string;
    secondaryDark: string;
    secondaryLight: string;
    accent: string;
    accentDark: string;
    accentLight: string;
    emergency: string;
    emergencyDark: string;
  };
  logoIcon: string;
  lordiconSrc: string;
  hero: {
    badge: string;
    headline: string;
    headlineHighlight: string;
    subtitle: string;
    ctaEmergency: string;
    ctaEmergencyShort: string;
    emergencyWhatsAppMessage: string;
  };
  services: {
    id: string;
    title: string;
    description: string;
    icon: string;
    color: string;
    priceRange: string;
    illustration: string;
  }[];
  team: {
    name: string;
    role: string;
    specialty: string;
    education: string;
    experience: string;
    certifications: string[];
  }[];
  testimonials: {
    name: string;
    pet: string;
    rating: number;
    text: string;
  }[];
  heroBgImage: string;
  features: {
    hasBooking: boolean;
    hasBlog: boolean;
    hasEmergency: boolean;
    blogTitle: string;
    blogDescription: string;
  };
  navLinks: { href: string; label: string }[];
}

// ==================== BUSINESS TEMPLATES ====================
const businessTemplates: Record<BusinessId, BusinessTemplate> = {
  veterinaria: {
    id: "veterinaria",
    name: "Centro Médico Veterinario San Cristóbal",
    shortName: "VetSanCristóbal",
    tagline: "Centro Médico Veterinario",
    description: "Atención veterinaria avanzada en San Cristóbal, Táchira. Consultas, cirugía, laboratorio, urgencias 24/7. PagoMóvil, USD y COP aceptados.",
    emoji: "🐾",
    phone: "+584262931869",
    phoneFormatted: "+58 426-2931869",
    email: "contacto@vetsancristobal.com",
    address: { street: "Av. Universidad, CC Los Andes, Local 12", city: "San Cristóbal", state: "Táchira", country: "Venezuela", postalCode: "5001" },
    schedule: { weekdays: "Lunes a Viernes: 8:00 AM – 7:00 PM", saturday: "Sábados: 8:00 AM – 2:00 PM", emergency: "Emergencias: 24 horas, 7 días" },
    stats: { primaryValue: 5000, primaryLabel: "Mascotas Atendidas", secondaryValue: 15, secondaryLabel: "Años de Experiencia", ratingValue: 4.9, ratingLabel: "Calificación Google", reviewsValue: 320, reviewsLabel: "Reseñas Reales" },
    colors: { primary: "#0D9488", primaryDark: "#0F766E", primaryLight: "#5EEAD4", secondary: "#14B8A6", secondaryDark: "#0F766E", secondaryLight: "#99F6E4", accent: "#06B6D4", accentDark: "#0891B2", accentLight: "#67E8F9", emergency: "#DC2626", emergencyDark: "#991B1B" },
    logoIcon: "Stethoscope",
    lordiconSrc: "https://cdn.lordicon.com/drtetgog.json",
    hero: { badge: "Atención Veterinaria Avanzada en San Cristóbal, Táchira", headline: "Cuidamos a tu mascota con la", headlineHighlight: "precisión médica", subtitle: "Desde consultas preventivas hasta cirugías complejas y urgencias 24 horas.", ctaEmergency: "WhatsApp Emergencia (24/7)", ctaEmergencyShort: "WHATSAPP EMERGENCIA", emergencyWhatsAppMessage: "¡URGENTE! 🚨 Necesito atención veterinaria de emergencia." },
    services: [
      { id: "consulta", title: "Consulta General", description: "Evaluación clínica completa, diagnóstico y plan de tratamiento personalizado.", icon: "Stethoscope", color: "from-teal-500 to-emerald-500", priceRange: "$15 – $30 USD", illustration: "/images/services/vet-consulta.svg" },
      { id: "cirugia", title: "Cirugía", description: "Procedimientos quirúrgicos con equipo de anestesia monitoreada.", icon: "Bone", color: "from-cyan-500 to-blue-500", priceRange: "$80 – $350 USD", illustration: "/images/services/vet-cirugia.svg" },
      { id: "peluqueria", title: "Peluquería Canina", description: "Baño medicado, corte de pelo, limpieza de oídos.", icon: "Scissors", color: "from-purple-500 to-pink-500", priceRange: "$10 – $25 USD", illustration: "/images/services/vet-peluqueria.svg" },
      { id: "laboratorio", title: "Laboratorio Clínico", description: "Análisis de sangre, orina, heces. Resultados en 24h.", icon: "Microscope", color: "from-amber-500 to-orange-500", priceRange: "$8 – $60 USD", illustration: "/images/services/vet-laboratorio.svg" },
      { id: "exoticos", title: "Animales Exóticos", description: "Atención para aves, reptiles, conejos y hurones.", icon: "Bird", color: "from-emerald-500 to-teal-500", priceRange: "$20 – $50 USD", illustration: "/images/services/vet-exoticos.svg" },
      { id: "vacunacion", title: "Vacunación", description: "Plan de inmunización completo. Cartilla digital.", icon: "Syringe", color: "from-blue-500 to-indigo-500", priceRange: "$10 – $35 USD", illustration: "/images/services/vet-vacunacion.svg" },
    ],
    team: [
      { name: "Dra. María Gabriela Rojas", role: "Directora Médica", specialty: "Medicina Interna y Cirugía", education: "Universidad de Los Andes (ULA)", experience: "15 años de experiencia", certifications: ["Fear Free Certified", "AAHA Member"] },
      { name: "Dr. Carlos Eduardo Ramírez", role: "Cirujano Veterinario", specialty: "Ortopedia y Neurocirugía", education: "Universidad Central de Venezuela (UCV)", experience: "12 años de experiencia", certifications: ["Fear Free Certified"] },
      { name: "Dra. Andrea Valentina Sánchez", role: "Veterinaria de Exóticos", specialty: "Aves, Reptiles y Mamíferos", education: "Universidad Nacional de Colombia", experience: "8 años de experiencia", certifications: ["Wildlife Medicine Certified"] },
      { name: "Dr. Luis Fernando Chacón", role: "Patólogo Clínico", specialty: "Diagnóstico y Citología", education: "Universidad del Zulia (LUZ)", experience: "10 años de experiencia", certifications: ["ASVCP Member"] },
    ],
    testimonials: [
      { name: "Luisa Fernanda Contreras", pet: "Max (Golden Retriever)", rating: 5, text: "Salvaron a mi Max de una torsión gástrica a las 3 AM. Eternamente agradecida." },
      { name: "Pedro José Ramírez", pet: "Luna (Gata Persa)", rating: 5, text: "La Dra. Andrea es increíble con los gatos. Luna nunca había estado tan tranquila." },
      { name: "María Alejandra Torres", pet: "Rocky (Pitbull)", rating: 5, text: "Desde que vamos a VetSanCristóbal, Rocky dejó de tener miedo al veterinario." },
      { name: "José Gregorio Molina", pet: "Pancho (Loro Real)", rating: 5, text: "Pensé que nadie atendía loros en San Cristóbal hasta que los encontré." },
    ],
    heroBgImage: "/images/hero-bg-veterinaria.svg",
    features: { hasBooking: true, hasBlog: true, hasEmergency: true, blogTitle: "Blog de Salud Animal", blogDescription: "Consejos de salud preventiva para tu mascota." },
    navLinks: [
      { href: "/#servicios", label: "Servicios" },
      { href: "/equipo", label: "Especialistas" },
      { href: "/#testimonios", label: "Reseñas" },
      { href: "/blog", label: "Salud Pet" },
      { href: "/#reservar", label: "Reservar Cita" },
    ],
  },

  carniceria: {
    id: "carniceria",
    name: "Carnicería Premium San Cristóbal",
    shortName: "CarniSanCristóbal",
    tagline: "Carnicería Premium",
    description: "La mejor carne de San Cristóbal, Táchira. Cortes premium, embutidos artesanales, delivery a domicilio. Calidad garantizada. PagoMóvil, USD y COP aceptados.",
    emoji: "🥩",
    phone: "+584262931869",
    phoneFormatted: "+58 426-2931869",
    email: "contacto@carnisancristobal.com",
    address: { street: "Av. Principal, Mercado Municipal, Local 8", city: "San Cristóbal", state: "Táchira", country: "Venezuela", postalCode: "5001" },
    schedule: { weekdays: "Lunes a Sábado: 7:00 AM – 6:00 PM", saturday: "Domingos: 7:00 AM – 12:00 PM", emergency: "Pedidos urgentes vía WhatsApp" },
    stats: { primaryValue: 10000, primaryLabel: "Kilos Vendidos/mes", secondaryValue: 20, secondaryLabel: "Años de Tradición", ratingValue: 4.8, ratingLabel: "Calificación Google", reviewsValue: 250, reviewsLabel: "Reseñas Reales" },
    colors: { primary: "#B91C1C", primaryDark: "#991B1B", primaryLight: "#FCA5A5", secondary: "#DC2626", secondaryDark: "#B91C1C", secondaryLight: "#FECACA", accent: "#F59E0B", accentDark: "#D97706", accentLight: "#FDE68A", emergency: "#DC2626", emergencyDark: "#991B1B" },
    logoIcon: "Beef",
    lordiconSrc: "https://cdn.lordicon.com/puvaffet.json",
    hero: { badge: "Carnicería Premium en San Cristóbal, Táchira", headline: "La mejor carne de la ciudad con la", headlineHighlight: "calidad que mereces", subtitle: "Cortes premium, embutidos artesanales y delivery a domicilio.", ctaEmergency: "Pedir Ahora por WhatsApp", ctaEmergencyShort: "PEDIR AHORA", emergencyWhatsAppMessage: "¡Hola! 🥩 Quisiera hacer un pedido de carne. ¿Qué cortes tienen disponibles hoy?" },
    services: [
      { id: "cortes-premium", title: "Cortes Premium", description: "Solomo, lomito, punta trasera, muchacho redondo. Los mejores cortes.", icon: "Beef", color: "from-red-600 to-rose-600", priceRange: "Desde $5 USD/kg", illustration: "/images/services/carne-cortes.svg" },
      { id: "embutidos", title: "Embutidos Artesanales", description: "Chorizo, morcilla, salchichón. Elaboración propia sin conservantes.", icon: "ChefHat", color: "from-orange-500 to-amber-500", priceRange: "Desde $3 USD", illustration: "/images/services/carne-embutidos.svg" },
      { id: "delivery", title: "Delivery a Domicilio", description: "Pedidos por WhatsApp. Entrega en menos de 45 min en San Cristóbal.", icon: "Truck", color: "from-red-500 to-orange-500", priceRange: "Delivery gratis +$20", illustration: "/images/services/carne-delivery.svg" },
      { id: "bbq-pack", title: "BBQ Packs", description: "Combos para parrilla: mix de cortes, chorizos, aliños y carbón.", icon: "Flame", color: "from-amber-500 to-yellow-500", priceRange: "Desde $25 USD", illustration: "/images/services/carne-bbq.svg" },
      { id: "huesos-mascotas", title: "Huesos para Mascotas", description: "Huesos frescos carnosos para perros. Sin cocinar, 100% naturales.", icon: "Bone", color: "from-slate-500 to-gray-500", priceRange: "Desde $2 USD", illustration: "/images/services/carne-huesos.svg" },
      { id: "marinados", title: "Carnes Marinadas", description: "Pollo, cerdo y res sazonados listos para cocinar.", icon: "ChefHat", color: "from-emerald-500 to-green-500", priceRange: "Desde $6 USD/kg", illustration: "/images/services/carne-marinados.svg" },
    ],
    team: [
      { name: "Don Ramón Contreras", role: "Maestro Carnicero", specialty: "Cortes Premium de Res", education: "30 años en el Mercado Municipal", experience: "30 años de experiencia", certifications: ["Tradición Familiar", "Higiene Certificada"] },
      { name: "Carlos Eduardo Méndez", role: "Especialista en Embutidos", specialty: "Chorizos y Morcillas Artesanales", education: "Escuela de Charcutería", experience: "12 años de experiencia", certifications: ["Recetas Originales"] },
      { name: "Luisana Fernández", role: "Atención al Cliente", specialty: "Pedidos y Delivery", education: "Universidad del Táchira", experience: "5 años de experiencia", certifications: ["Servicio Rápido"] },
      { name: "Pedro José Ramírez", role: "Carnicero Senior", specialty: "Desposte y Limpieza", education: "Oficio Tradicional", experience: "18 años de experiencia", certifications: ["Técnica Profesional"] },
    ],
    testimonials: [
      { name: "María Gabriela López", pet: "Cliente frecuente", rating: 5, text: "La mejor carne de San Cristóbal. Los cortes son excelentes y el servicio impecable." },
      { name: "Restaurante El Fogón", pet: "Cliente corporativo", rating: 5, text: "Nos surten toda la carne para el restaurante. Calidad consistente siempre." },
      { name: "Juan Carlos Pereira", pet: "Ama de casa", rating: 5, text: "Los BBQ Packs son perfectos para los domingos familiares. ¡Recomendadísimo!" },
      { name: "Luisa Contreras", pet: "Cliente nuevo", rating: 5, text: "Pedí delivery y en 30 minutos tenía la carne en mi casa. Increíble servicio." },
    ],
    heroBgImage: "/images/hero-bg-carniceria.svg",
    features: { hasBooking: false, hasBlog: true, hasEmergency: true, blogTitle: "Recetas y Tips de Cocina", blogDescription: "Recetas, consejos de cocina y tips para asados perfectos." },
    navLinks: [
      { href: "/#servicios", label: "Cortes" },
      { href: "/equipo", label: "Maestros" },
      { href: "/#testimonios", label: "Reseñas" },
      { href: "/blog", label: "Recetas" },
    ],
  },

  ferreteria: {
    id: "ferreteria",
    name: "Ferretería El Constructor San Cristóbal",
    shortName: "FerreSanCristóbal",
    tagline: "Ferretería y Materiales",
    description: "Todo para construir y reparar en San Cristóbal, Táchira. Materiales de construcción, herramientas, fontanería, electricidad. Cotizaciones por WhatsApp. PagoMóvil, USD y COP aceptados.",
    emoji: "🔧",
    phone: "+584262931869",
    phoneFormatted: "+58 426-2931869",
    email: "contacto@ferresancristobal.com",
    address: { street: "Av. Rotaria, Galpón Principal, Local 1", city: "San Cristóbal", state: "Táchira", country: "Venezuela", postalCode: "5001" },
    schedule: { weekdays: "Lunes a Viernes: 7:30 AM – 5:30 PM", saturday: "Sábados: 7:30 AM – 2:00 PM", emergency: "Cotizaciones urgentes vía WhatsApp" },
    stats: { primaryValue: 15000, primaryLabel: "Productos en Stock", secondaryValue: 25, secondaryLabel: "Años en el Mercado", ratingValue: 4.7, ratingLabel: "Calificación Google", reviewsValue: 180, reviewsLabel: "Reseñas Reales" },
    colors: { primary: "#EA580C", primaryDark: "#C2410C", primaryLight: "#FDBA74", secondary: "#F97316", secondaryDark: "#EA580C", secondaryLight: "#FED7AA", accent: "#64748B", accentDark: "#475569", accentLight: "#CBD5E1", emergency: "#DC2626", emergencyDark: "#991B1B" },
    logoIcon: "Wrench",
    lordiconSrc: "https://cdn.lordicon.com/wyhalxdy.json",
    hero: { badge: "Ferretería y Materiales en San Cristóbal, Táchira", headline: "Todo lo que necesitas para construir con la", headlineHighlight: "mejor calidad", subtitle: "Materiales de construcción, herramientas, fontanería, electricidad y más.", ctaEmergency: "Cotizar por WhatsApp", ctaEmergencyShort: "COTIZAR AHORA", emergencyWhatsAppMessage: "¡Hola! 🔧 Necesito una cotización de materiales de ferretería. ¿Pueden ayudarme?" },
    services: [
      { id: "materiales", title: "Materiales de Construcción", description: "Cemento, arena, piedra, bloques, cabillas. Todo para tu obra.", icon: "HardHat", color: "from-orange-500 to-amber-500", priceRange: "Desde $3 USD", illustration: "/images/services/ferre-materiales.svg" },
      { id: "herramientas", title: "Herramientas", description: "Martillos, taladros, sierras, destornilladores. Marcas líderes.", icon: "Wrench", color: "from-slate-500 to-gray-500", priceRange: "Desde $5 USD", illustration: "/images/services/ferre-herramientas.svg" },
      { id: "fontaneria", title: "Fontanería", description: "Tuberías PVC, llaves, grifería, pegamento. Todo para plomería.", icon: "Droplets", color: "from-blue-500 to-cyan-500", priceRange: "Desde $2 USD", illustration: "/images/services/ferre-fontaneria.svg" },
      { id: "electricidad", title: "Electricidad", description: "Cables, tomacorrientes, breaker, bombillos. Material eléctrico.", icon: "Zap", color: "from-yellow-500 to-amber-500", priceRange: "Desde $1 USD", illustration: "/images/services/ferre-electricidad.svg" },
      { id: "pintura", title: "Pinturas y Acabados", description: "Pintura de interior, exterior, esmaltes, brochas y rodillos.", icon: "PaintBucket", color: "from-purple-500 to-pink-500", priceRange: "Desde $10 USD/galón", illustration: "/images/services/ferre-pintura.svg" },
      { id: "cerrajeria", title: "Cerrajería", description: "Cerraduras, candados, bisagras. Seguridad para tu hogar.", icon: "Lock", color: "from-zinc-500 to-slate-500", priceRange: "Desde $8 USD", illustration: "/images/services/ferre-cerrajeria.svg" },
    ],
    team: [
      { name: "Ing. José Gregorio Molina", role: "Gerente General", specialty: "Materiales de Construcción", education: "Universidad del Táchira (UNET)", experience: "25 años de experiencia", certifications: ["Ingeniero Civil", "Gestión de Obras"] },
      { name: "Luis Fernando Chacón", role: "Jefe de Ventas", specialty: "Herramientas y Maquinaria", education: "Técnico Superior en Mecánica", experience: "15 años de experiencia", certifications: ["Marcas Líderes"] },
      { name: "Andrea Valentina Sánchez", role: "Atención al Cliente", specialty: "Cotizaciones y Pedidos", education: "Administración de Empresas", experience: "8 años de experiencia", certifications: ["Servicio Profesional"] },
      { name: "Carlos Eduardo Ramírez", role: "Encargado de Almacén", specialty: "Inventario y Logística", education: "TSU en Logística", experience: "10 años de experiencia", certifications: ["Control de Stock"] },
    ],
    testimonials: [
      { name: "Constructora Los Andes", pet: "Cliente corporativo", rating: 5, text: "Siempre tienen todo lo que necesitamos para nuestras obras. Los precios son justos." },
      { name: "María Alejandra Torres", pet: "Ama de casa", rating: 5, text: "Fui por una llave y me asesoraron perfecto. Tienen de todo. Muy recomendado." },
      { name: "Pedro José Ramírez", pet: "Contratista", rating: 5, text: "Cotización rápida por WhatsApp. Me entregaron los materiales en la obra al día siguiente." },
      { name: "Luisana Fernández", pet: "Cliente nuevo", rating: 5, text: "Excelente atención. Me ayudaron a elegir la pintura correcta para mi casa." },
    ],
    heroBgImage: "/images/hero-bg-ferreteria.svg",
    features: { hasBooking: false, hasBlog: true, hasEmergency: true, blogTitle: "Tips de Construcción y Bricolaje", blogDescription: "Consejos prácticos para reparaciones, construcción y proyectos DIY." },
    navLinks: [
      { href: "/#servicios", label: "Productos" },
      { href: "/equipo", label: "Expertos" },
      { href: "/#testimonios", label: "Reseñas" },
      { href: "/blog", label: "Tips" },
    ],
  },
};

// ==================== CONTEXT ====================
interface BusinessContextType {
  currentBusiness: BusinessId;
  businessData: BusinessTemplate;
  allBusinesses: BusinessTemplate[];
  setBusiness: (id: BusinessId) => void;
}

const BusinessContext = createContext<BusinessContextType>({
  currentBusiness: "veterinaria",
  businessData: businessTemplates.veterinaria,
  allBusinesses: Object.values(businessTemplates),
  setBusiness: () => {},
});

export function BusinessProvider({ children }: { children: React.ReactNode }) {
  const [currentBusiness, setCurrentBusiness] = useState<BusinessId>("veterinaria");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("vet-business") as BusinessId | null;
    if (stored && businessTemplates[stored]) {
      setCurrentBusiness(stored);
    }
    setMounted(true);
  }, []);

  const setBusiness = useCallback((id: BusinessId) => {
    setCurrentBusiness(id);
    localStorage.setItem("vet-business", id);
    // Update CSS variables
    const template = businessTemplates[id];
    const root = document.documentElement;
    root.style.setProperty("--business-primary", template.colors.primary);
    root.style.setProperty("--business-primary-dark", template.colors.primaryDark);
    root.style.setProperty("--business-primary-light", template.colors.primaryLight);
    root.style.setProperty("--business-secondary", template.colors.secondary);
    root.style.setProperty("--business-accent", template.colors.accent);
  }, []);

  useEffect(() => {
    if (mounted) {
      setBusiness(currentBusiness);
    }
  }, [currentBusiness, mounted, setBusiness]);

  if (!mounted) return <>{children}</>;

  return (
    <BusinessContext.Provider
      value={{
        currentBusiness,
        businessData: businessTemplates[currentBusiness],
        allBusinesses: Object.values(businessTemplates),
        setBusiness,
      }}
    >
      {children}
    </BusinessContext.Provider>
  );
}

export function useBusiness() {
  return useContext(BusinessContext);
}