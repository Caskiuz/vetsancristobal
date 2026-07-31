"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, ShieldAlert, Clock, Heart } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function EmergencyCTA() {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden transition-colors duration-300">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-50 dark:from-red-950/40 via-white dark:via-slate-950 to-red-50 dark:to-red-950/40" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card border-red-500/10 p-8 sm:p-12 rounded-3xl"
        >
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-red-500/20 border border-red-500/30 flex items-center justify-center"
          >
            <ShieldAlert className="w-8 h-8 text-red-400" />
          </motion.div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-4">
            Emergencias Veterinarias{" "}
            <span className="text-red-400">24/7</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8 text-base sm:text-lg">
            No esperes cuando tu mascota lo necesita. Nuestro equipo de emergencia
            está listo para atenderte en cualquier momento, cualquier día.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href={`https://wa.me/${SITE_CONFIG.phone.replace(/\D/g, "")}?text=${encodeURIComponent("¡URGENTE! 🚨 Necesito atención veterinaria de emergencia.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-emergency !text-lg !px-10 !py-5 !rounded-2xl w-full sm:w-auto"
            >
              <Phone className="w-5 h-5" />
              <span className="hidden sm:inline">WhatsApp Emergencia — {SITE_CONFIG.phoneFormatted}</span>
              <span className="sm:hidden">WHATSAPP EMERGENCIA</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200 dark:border-slate-800/60">
            <div className="flex items-center justify-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <Clock className="w-4 h-4 text-teal-400" />
              <span>Tiempo de respuesta: {"<5 min"}</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
              <Heart className="w-4 h-4 text-red-400" />
              <span>Equipo especializado en urgencias</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
              <ShieldAlert className="w-4 h-4 text-amber-400" />
              <span>Quirófano disponible 24h</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}