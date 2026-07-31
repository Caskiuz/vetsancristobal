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
  ArrowRight,
} from "lucide-react";
import { useSiteServices } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Stethoscope,
  Bone,
  Scissors,
  Microscope,
  Bird,
  Syringe,
};

export function ServicesGrid() {
  const services = useSiteServices();

  return (
    <section id="servicios" className="relative section-container bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Section Header */}
      <div className="text-center mb-14">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-teal-400 text-sm font-bold uppercase tracking-widest mb-3"
        >
          Nuestros Servicios
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-title text-slate-900 dark:text-white"
        >
          Todo el cuidado que tu{" "}
          <span className="text-gradient">mascota necesita</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="section-subtitle"
        >
          Desde medicina preventiva hasta cirugías especializadas, cubrimos cada
          etapa de la vida de tu compañero.
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
              {/* Icon */}
              <div
                className={cn(
                  "w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300",
                  service.color
                )}
              >
                {IconComponent && (
                  <IconComponent className="w-6 h-6 text-white" />
                )}
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed flex-1">
                {service.description}
              </p>

              {/* Price + Link */}
              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800/50 flex items-center justify-between">
                <span className="text-xs font-semibold text-teal-400 bg-teal-500/10 px-2.5 py-1 rounded-lg">
                  {service.priceRange}
                </span>
                <button
                  className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 dark:text-slate-500 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors"
                  aria-label={`Agendar ${service.title}`}
                  onClick={() => {
                    document.getElementById("reservar")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <span>Reservar</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}