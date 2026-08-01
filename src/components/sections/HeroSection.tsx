"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Phone, CheckCircle2, Star, ShieldCheck, MapPin } from "lucide-react";
import { useBusiness } from "@/lib/business-context";

export function HeroSection() {
  const { businessData: b } = useBusiness();
  const emergencyWhatsAppUrl = `https://wa.me/${b.phone.replace(/\D/g, "")}?text=${encodeURIComponent(b.hero.emergencyWhatsAppMessage)}`;

  return (
    <section className="relative min-h-[100svh] pt-24 pb-12 sm:pt-32 sm:pb-20 overflow-hidden flex items-center bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">
      {/* Background SVG Image */}
      <div className="absolute inset-0 pointer-events-none opacity-70 dark:opacity-40 z-0">
        <img
          src={b.heroBgImage}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-[150px] pointer-events-none z-0" style={{ backgroundColor: `${b.colors.primary}08` }} />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none z-0" style={{ backgroundColor: `${b.colors.secondary}06` }} />
      <motion.div animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full" style={{ backgroundColor: b.colors.primaryLight }} />
      <motion.div animate={{ y: [0, -15, 0], opacity: [0.2, 0.5, 0.2] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }} className="absolute top-1/3 left-1/3 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: b.colors.secondaryLight }} />
      <motion.div animate={{ y: [0, -25, 0], opacity: [0.2, 0.7, 0.2] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }} className="absolute bottom-1/3 left-1/4 w-2.5 h-2.5 rounded-full" style={{ backgroundColor: b.colors.accentLight }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold"
              style={{ backgroundColor: `${b.colors.primary}15`, borderColor: `${b.colors.primary}40`, color: b.colors.primaryDark }}>
              <MapPin className="w-3.5 h-3.5" style={{ color: b.colors.primary }} />
              <span>{b.hero.badge}</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.08] px-2 sm:px-0">
              {b.hero.headline}{" "}
              <span style={{ 
                backgroundImage: `linear-gradient(135deg, ${b.colors.primaryDark} 0%, ${b.colors.primary} 50%, ${b.colors.accent} 100%)`, 
                WebkitBackgroundClip: "text", 
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              } as React.CSSProperties}>{b.hero.headlineHighlight}</span>.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0">
              {b.hero.subtitle}
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              {b.features.hasBooking && (
                <a href="#reservar" className="btn-primary w-full sm:w-auto text-base px-8 py-4 !rounded-2xl"
                  style={{ background: `linear-gradient(135deg, ${b.colors.primary} 0%, ${b.colors.secondary} 100%)` }}>
                  <Calendar className="w-5 h-5" /><span>Agendar Cita Ahora</span>
                </a>
              )}
              <a href={emergencyWhatsAppUrl} target="_blank" rel="noopener noreferrer" className="btn-emergency w-full sm:w-auto text-base px-8 py-4 !rounded-2xl">
                <Phone className="w-5 h-5" /><span>{b.hero.ctaEmergency}</span>
              </a>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-1.5 pt-4 text-xs text-slate-500 dark:text-slate-400 font-medium justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4" style={{ color: b.colors.primary }} /><span>PagoMóvil / USD / COP</span>
              </div>
              <div className="flex items-center gap-1.5 pt-4 text-xs text-slate-500 dark:text-slate-400 font-medium justify-center lg:justify-start">
                <ShieldCheck className="w-4 h-4" style={{ color: b.colors.primary }} /><span>{b.features.hasEmergency ? "Disponible 24/7" : "Calidad Garantizada"}</span>
              </div>
              <div className="flex items-center gap-1.5 pt-4 text-xs text-slate-500 dark:text-slate-400 font-medium justify-center lg:justify-start">
                <Star className="w-4 h-4 text-amber-500 fill-amber-400" /><span>{b.stats.ratingValue}/5 Reseñas</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Visual Hero */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.3 }}
              className="relative w-full max-w-[280px] sm:max-w-sm lg:max-w-md aspect-square rounded-3xl bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl flex flex-col justify-between overflow-hidden group">
              <div className="absolute inset-0 pointer-events-none" style={{ background: `linear-gradient(to top left, ${b.colors.primary}10, transparent)` }} />
              <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-5 left-5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-3 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg z-20 flex items-center gap-3">
                <div className="relative"><div className="w-3 h-3 rounded-full" style={{ backgroundColor: b.colors.secondary }} /><div className="absolute inset-0 w-3 h-3 rounded-full animate-ping" style={{ backgroundColor: b.colors.secondary }} /></div>
                <div><p className="text-[11px] font-bold text-slate-900 dark:text-white">{b.features.hasBooking ? "Disponible Ahora" : "Pedidos Abiertos"}</p><p className="text-[9px] text-slate-500 dark:text-slate-400">Atención inmediata activa</p></div>
              </motion.div>

              {/* Business Icon Hero */}
              <div className="w-full h-full flex items-center justify-center p-2 sm:p-4 text-8xl">
                <motion.span animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 3 }}>{b.emoji}</motion.span>
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