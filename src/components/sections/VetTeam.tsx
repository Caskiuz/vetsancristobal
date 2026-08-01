"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Clock, Shield, Star } from "lucide-react";
import { useSiteVets, useSiteConfig } from "@/lib/site-data";

export function VetTeam() {
  const vets = useSiteVets();
  const cfg = useSiteConfig();

  return (
    <section className="relative pt-32 pb-16 sm:pt-36 sm:pb-20 bg-white dark:bg-[#0B0F19] min-h-screen transition-colors duration-300">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-teal-500 dark:text-teal-400 text-sm font-bold uppercase tracking-widest mb-3"
          >
            Nuestro Equipo
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white"
          >
            Especialistas que{" "}
            <span className="text-gradient">aman lo que hacen</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Veterinarios certificados con amplia experiencia, comprometidos con la salud de tu mascota.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {vets.map((vet, index) => (
            <motion.div
              key={vet.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="glass-card-hover p-6 sm:p-8 flex flex-col sm:flex-row gap-6"
            >
              <div className="flex-shrink-0">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/20 flex items-center justify-center overflow-hidden">
                  <svg viewBox="0 0 100 100" className="w-16 h-16 sm:w-20 sm:h-20">
                    <circle cx="50" cy="35" r="22" fill="#1E293B" stroke="#14B8A6" strokeWidth="2" />
                    <ellipse cx="50" cy="85" rx="30" ry="20" fill="#1E293B" stroke="#14B8A6" strokeWidth="2" />
                    <circle cx="42" cy="33" r="3" fill="#14B8A6" />
                    <circle cx="58" cy="33" r="3" fill="#14B8A6" />
                    <path d="M44 42 Q50 48 56 42" fill="none" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{vet.name}</h3>
                <p className="text-teal-500 dark:text-teal-400 text-sm font-semibold mb-3">{vet.role}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <GraduationCap className="w-4 h-4 text-teal-500 dark:text-teal-400 flex-shrink-0" />
                    <span>{vet.education}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <Clock className="w-4 h-4 text-teal-500 dark:text-teal-400 flex-shrink-0" />
                    <span>{vet.experience}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <Star className="w-4 h-4 text-teal-500 dark:text-teal-400 flex-shrink-0" />
                    <span>{vet.specialty}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {vet.certifications.map((cert) => (
                    <span
                      key={cert}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-teal-50 dark:bg-teal-500/10 border border-teal-300 dark:border-teal-500/20 text-teal-700 dark:text-teal-300 text-xs font-medium"
                    >
                      <Shield className="w-3 h-3" />
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a href="/#reservar" className="btn-primary text-base px-8 py-4 !rounded-2xl">
            Agendar Cita con un Especialista
          </a>
        </motion.div>
      </div>
    </section>
  );
}