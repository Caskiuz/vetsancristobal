"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Award, Heart, Users, Star } from "lucide-react";
import { useSiteConfig } from "@/lib/site-data";

const certifications = [
  { name: "Fear Free", description: "Certified Professional" },
  { name: "FIAVAC", description: "Federación Iberoamericana" },
  { name: "WSAVA", description: "World Small Animal" },
  { name: "AAHA", description: "Accredited Standards" },
];

export function TrustBar() {
  const cfg = useSiteConfig();

  const trustStats = [
    { icon: Heart, value: `${cfg.stats.petsServed.toLocaleString("es-VE")}+`, label: "Mascotas Atendidas" },
    { icon: Award, value: `${cfg.stats.yearsExperience}+`, label: "Años de Experiencia" },
    { icon: Star, value: `${cfg.stats.googleRating}/5`, label: "Calificación Google" },
    { icon: Users, value: `${cfg.stats.googleReviews}+`, label: "Reseñas Reales" },
  ];
  return (
    <section className="relative py-12 sm:py-16 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800/40 overflow-hidden transition-colors duration-300">
      {/* Background subtle glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/3 via-transparent to-cyan-500/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {trustStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center gap-2 p-4"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-1">
                <stat.icon className="w-5 h-5 text-teal-400" />
              </div>
              <span className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Certification Badges */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-10 pt-8 border-t border-slate-200 dark:border-slate-800/50"
        >
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <Shield className="w-4 h-4 text-teal-400" />
              <span>Certificaciones:</span>
            </div>
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50"
              >
                <div className="w-2 h-2 rounded-full bg-teal-400" />
                <div className="text-left">
                  <span className="text-slate-900 dark:text-white text-xs font-bold">{cert.name}</span>
                  <span className="text-slate-400 dark:text-slate-500 text-[10px] ml-1.5">{cert.description}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}