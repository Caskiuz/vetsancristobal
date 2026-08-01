"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Stethoscope,
  Bone,
  Scissors,
  Microscope,
  Bird,
  Syringe,
  Beef,
  ChefHat,
  Truck,
  Flame,
  HardHat,
  Wrench,
  Droplets,
  Zap,
  PaintBucket,
  Lock,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { useSiteServices } from "@/lib/site-data";
import { useBusiness } from "@/lib/business-context";
import { cn } from "@/lib/utils";
import { Icons8Image, ICONS8_SERVICE_IMAGES } from "@/components/ui/Icons8Image";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Stethoscope,
  Bone,
  Scissors,
  Microscope,
  Bird,
  Syringe,
  Beef,
  ChefHat,
  Truck,
  Flame,
  HardHat,
  Wrench,
  Droplets,
  Zap,
  PaintBucket,
  Lock,
};

export function ServicesGrid() {
  const services = useSiteServices();
  const { businessData: b } = useBusiness();

  return (
    <section id="servicios" className="relative section-container bg-white dark:bg-[#0B0F19] transition-colors duration-300">
      <div className="text-center mb-14">
        <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="inline-block text-sm font-bold uppercase tracking-widest mb-3" style={{ color: b.colors.primary }}>
          Nuestros Servicios
        </motion.span>
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="section-title text-slate-900 dark:text-white">
          {b.id === "veterinaria" ? (<>Todo el cuidado que tu <span style={{ backgroundImage: `linear-gradient(135deg, ${b.colors.primaryDark} 0%, ${b.colors.primary} 50%, ${b.colors.accent} 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" } as React.CSSProperties}>mascota necesita</span></>)
            : b.id === "carniceria" ? (<>La mejor <span style={{ backgroundImage: `linear-gradient(135deg, ${b.colors.primaryDark} 0%, ${b.colors.primary} 50%, ${b.colors.accent} 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" } as React.CSSProperties}>carne de la ciudad</span></>)
            : (<>Todo lo que necesitas para <span style={{ backgroundImage: `linear-gradient(135deg, ${b.colors.primaryDark} 0%, ${b.colors.primary} 50%, ${b.colors.accent} 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" } as React.CSSProperties}>construir</span></>)}
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="section-subtitle">
          {b.description}
        </motion.p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {services.map((service, index) => {
          const IconComponent = iconMap[service.icon];
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="glass-card-hover group cursor-pointer p-6 sm:p-7 flex flex-col"
            >
              {/* Illustration — SVG first, Icons8 fallback, then gradient */}
              <div className="mb-5 flex justify-center">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300">
                  {service.illustration ? (
                    <img
                      src={service.illustration}
                      alt={service.title}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  ) : ICONS8_SERVICE_IMAGES[service.id] ? (
                    <Icons8Image
                      icon={ICONS8_SERVICE_IMAGES[service.id].icon}
                      style={ICONS8_SERVICE_IMAGES[service.id].style as "fluency" | "color"}
                      size={112}
                      alt={service.title}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className={cn("w-full h-full bg-gradient-to-br flex items-center justify-center", service.color)}>
                      {IconComponent && <IconComponent className="w-8 h-8 text-white" />}
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 transition-colors"
                style={{ color: "inherit" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = b.colors.primary; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = ""; }}>
                {service.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed flex-1">
                {service.description}
              </p>

              {/* Price + Link */}
              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800/50 flex items-center justify-between">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-lg" style={{ color: b.colors.primary, backgroundColor: `${b.colors.primary}15` }}>
                  {service.priceRange}
                </span>
                {b.features.hasBooking ? (
                  <button
                    className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 dark:text-slate-500 transition-colors"
                    style={{ color: "inherit" } as React.CSSProperties}
                    onMouseEnter={(e) => { e.currentTarget.style.color = b.colors.primary; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = ""; }}
                    aria-label={`Agendar ${service.title}`}
                    onClick={() => {
                      document.getElementById("reservar")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <span>Reservar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <a
                    href={`https://wa.me/${b.phone.replace(/\D/g, "")}?text=${encodeURIComponent(`Hola! Me interesa: ${service.title} — ${service.priceRange}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold transition-colors"
                    style={{ color: b.colors.primary }}
                    aria-label={`Consultar ${service.title} por WhatsApp`}
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Consultar</span>
                  </a>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}