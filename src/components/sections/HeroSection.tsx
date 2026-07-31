"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Phone,
  CheckCircle2,
  Star,
  ShieldCheck,
  MapPin,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const emergencyWhatsAppUrl = `https://wa.me/${SITE_CONFIG.phone.replace(/\D/g, "")}?text=${encodeURIComponent("¡URGENTE! 🚨 Necesito atención veterinaria de emergencia.")}`;

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] pt-24 pb-12 sm:pt-32 sm:pb-20 overflow-hidden flex items-center bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 dark:bg-cyan-500/8 rounded-full blur-[120px] pointer-events-none" />

      <motion.div animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} className="absolute top-1/4 right-1/4 w-2 h-2 bg-teal-400 rounded-full" />
      <motion.div animate={{ y: [0, -15, 0], opacity: [0.2, 0.5, 0.2] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }} className="absolute top-1/3 left-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full" />
      <motion.div animate={{ y: [0, -25, 0], opacity: [0.2, 0.7, 0.2] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }} className="absolute bottom-1/3 left-1/4 w-2.5 h-2.5 bg-emerald-400 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 dark:bg-teal-500/10 border border-teal-300 dark:border-teal-500/30 text-teal-700 dark:text-teal-300 text-xs font-semibold">
              <MapPin className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span>Atención Veterinaria Avanzada en San Cristóbal, Táchira</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.08] px-2 sm:px-0">
              Cuidamos a tu mascota con la <span className="text-gradient">precisión médica</span> que merece.
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0">
              Desde consultas preventivas hasta cirugías complejas y urgencias 24 horas.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a href="#reservar" className="btn-primary w-full sm:w-auto text-base px-8 py-4 !rounded-2xl">
                <Calendar className="w-5 h-5" /><span>Agendar Cita Ahora</span>
              </a>
              <a href={emergencyWhatsAppUrl} target="_blank" rel="noopener noreferrer" className="btn-emergency w-full sm:w-auto text-base px-8 py-4 !rounded-2xl">
                <Phone className="w-5 h-5" /><span>WhatsApp Emergencia (24/7)</span>
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-1.5 pt-4 text-xs text-slate-500 dark:text-slate-400 font-medium justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400" /><span>PagoMóvil / USD / COP</span>
              </div>
              <div className="flex items-center gap-1.5 pt-4 text-xs text-slate-500 dark:text-slate-400 font-medium justify-center lg:justify-start">
                <ShieldCheck className="w-4 h-4 text-teal-600 dark:text-teal-400" /><span>Laboratorio Propio</span>
              </div>
              <div className="flex items-center gap-1.5 pt-4 text-xs text-slate-500 dark:text-slate-400 font-medium justify-center lg:justify-start">
                <Star className="w-4 h-4 text-amber-500 fill-amber-400" /><span>{SITE_CONFIG.stats.googleRating}/5 Reseñas</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Visual Hero */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.3 }}
              className="relative w-full max-w-[280px] sm:max-w-sm lg:max-w-md aspect-square rounded-3xl bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl flex flex-col justify-between overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tl from-teal-500/5 to-transparent pointer-events-none" />

              <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-5 left-5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-3 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg z-20 flex items-center gap-3">
                <div className="relative"><div className="w-3 h-3 bg-emerald-500 rounded-full" /><div className="absolute inset-0 w-3 h-3 bg-emerald-500 rounded-full animate-ping" /></div>
                <div><p className="text-[11px] font-bold text-slate-900 dark:text-white">Quirófano Disponible</p><p className="text-[9px] text-slate-500 dark:text-slate-400">Atención inmediata activa</p></div>
              </motion.div>

              <div className="w-full h-full flex items-center justify-center p-2 sm:p-4">
                <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-w-[300px] drop-shadow-2xl">
                  <circle cx="200" cy="200" r="160" fill="url(#bgGradLight)" opacity="0.1" />
                  <rect x="155" y="230" width="90" height="100" rx="20" fill="#1E293B" stroke="#94A3B8" strokeWidth="2" />
                  <path d="M170 230 L200 260 L230 230" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="2" />
                  <circle cx="200" cy="170" r="55" fill="#0F172A" stroke="#94A3B8" strokeWidth="2" />
                  <path d="M150 160 Q200 100 250 160" fill="#334155" />
                  <circle cx="182" cy="168" r="5" fill="#0D9488" /><circle cx="218" cy="168" r="5" fill="#0D9488" />
                  <circle cx="183" cy="167" r="2" fill="white" /><circle cx="219" cy="167" r="2" fill="white" />
                  <path d="M190 185 Q200 195 210 185" fill="none" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" />
                  <path d="M190 195 Q190 210 200 220 Q210 230 230 230" fill="none" stroke="#0D9488" strokeWidth="4" strokeLinecap="round" />
                  <circle cx="230" cy="230" r="8" fill="none" stroke="#0D9488" strokeWidth="3" />
                  <rect x="140" y="240" width="25" height="60" rx="10" fill="#1E293B" stroke="#94A3B8" strokeWidth="1.5" />
                  <rect x="235" y="240" width="25" height="60" rx="10" fill="#1E293B" stroke="#94A3B8" strokeWidth="1.5" />
                  <rect x="225" y="235" width="10" height="16" rx="2" fill="#DC2626" />
                  <rect x="222" y="238" width="16" height="10" rx="2" fill="#DC2626" />
                  <ellipse cx="280" cy="280" rx="30" ry="25" fill="#334155" stroke="#94A3B8" strokeWidth="1.5" />
                  <circle cx="280" cy="250" r="18" fill="#1E293B" stroke="#94A3B8" strokeWidth="1.5" />
                  <ellipse cx="268" cy="240" rx="8" ry="12" fill="#1E293B" stroke="#94A3B8" strokeWidth="1.5" transform="rotate(-15 268 240)" />
                  <ellipse cx="292" cy="240" rx="8" ry="12" fill="#1E293B" stroke="#94A3B8" strokeWidth="1.5" transform="rotate(15 292 240)" />
                  <circle cx="274" cy="248" r="3" fill="#0D9488" /><circle cx="286" cy="248" r="3" fill="#0D9488" />
                  <ellipse cx="280" cy="255" rx="4" ry="3" fill="#64748B" />
                  <ellipse cx="270" cy="305" rx="8" ry="5" fill="#334155" stroke="#94A3B8" strokeWidth="1.5" />
                  <ellipse cx="290" cy="305" rx="8" ry="5" fill="#334155" stroke="#94A3B8" strokeWidth="1.5" />
                  <motion.g animate={{ scale: [1, 1.15, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
                    <path d="M240 260 C240 255 245 250 250 250 C255 250 255 255 255 260 C255 265 250 270 248 272 C246 270 240 265 240 260Z" fill="#EF4444" opacity="0.9" />
                  </motion.g>
                  <defs>
                    <radialGradient id="bgGradLight" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(200 200) rotate(90) scale(160)">
                      <stop stopColor="#0D9488" /><stop offset="1" stopColor="#F8FAFC" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>

              <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg flex items-center justify-between z-20 gap-2 flex-wrap">
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Formas de pago:</span>
                <div className="flex gap-1.5">
                  <span className="px-2.5 py-1 bg-teal-50 dark:bg-teal-950/80 text-teal-700 dark:text-teal-300 text-[10px] font-bold rounded-lg border border-teal-300 dark:border-teal-700/40">PagoMóvil</span>
                  <span className="px-2.5 py-1 bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold rounded-lg border border-emerald-300 dark:border-emerald-700/40">USD $</span>
                  <span className="px-2.5 py-1 bg-cyan-50 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-300 text-[10px] font-bold rounded-lg border border-cyan-300 dark:border-cyan-700/40">COP</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}