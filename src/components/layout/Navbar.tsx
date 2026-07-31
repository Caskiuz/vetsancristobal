"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  PhoneCall,
  ShieldAlert,
  Calendar,
  Menu,
  X,
  Stethoscope,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "@/lib/theme-context";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/constants";

const NAV_LINKS = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/equipo", label: "Especialistas" },
  { href: "/#testimonios", label: "Reseñas" },
  { href: "/blog", label: "Salud Pet" },
  { href: "/#reservar", label: "Reservar Cita" },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
          isScrolled
            ? "shadow-lg border-slate-200 dark:border-slate-800 py-2"
            : "border-transparent py-3 sm:py-4"
        )}
        style={{
          backgroundColor: 'var(--bg-nav)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group z-50"
              aria-label="VetSanCristóbal - Ir al inicio"
            >
              <motion.div
                whileHover={{ scale: 1.08, rotate: -5 }}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-teal-500/20 relative overflow-hidden"
              >
                <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6 text-white relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/10 to-transparent" />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-black tracking-tight leading-tight" style={{ color: 'var(--text-primary)' }}>
                  VET<span style={{ color: '#0D9488' }}>SAN</span>CRISTÓBAL
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-[0.15em] uppercase font-semibold" style={{ color: 'var(--text-muted)' }}>
                  {SITE_CONFIG.tagline}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3.5 py-2 text-sm font-medium rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all duration-200"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-2.5">
              <button
                onClick={toggleTheme}
                className="theme-toggle"
                aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
                title={theme === "dark" ? "Modo Claro" : "Modo Oscuro"}
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <motion.a
                href={`https://wa.me/${SITE_CONFIG.phone.replace(/\D/g, "")}?text=${encodeURIComponent("¡URGENTE! 🚨 Necesito atención veterinaria de emergencia.")}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl shadow-lg shadow-red-600/20 border border-red-400/30 transition-all duration-200"
                aria-label="Contactar emergencias por WhatsApp"
              >
                <ShieldAlert className="w-3.5 h-3.5" />
                <span className="hidden xl:inline">Emergencia 24/7</span>
              </motion.a>

              <Link href="/#reservar" className="btn-primary text-xs uppercase tracking-wider px-5 py-2.5 !rounded-xl">
                <Calendar className="w-3.5 h-3.5" />
                <span>Agendar Cita</span>
              </Link>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={toggleTheme}
                className="theme-toggle"
                aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="relative z-50 p-2 -mr-2"
                style={{ color: 'var(--text-secondary)' }}
                aria-label="Abrir menú"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu — rendered OUTSIDE header, absolutely independent */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 z-[99999] lg:hidden flex flex-col"
            style={{ backgroundColor: theme === 'dark' ? '#0F172A' : '#FFFFFF' }}
          >
            {/* Header row */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-slate-800">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center">
                  <Stethoscope className="w-5 h-5 text-white" />
                </div>
                <span className="text-base font-black tracking-tight text-slate-900 dark:text-white">
                  VET<span className="text-teal-600 dark:text-teal-400">SAN</span>CRISTÓBAL
                </span>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors text-slate-500 dark:text-slate-400"
                aria-label="Cerrar menú"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Nav links */}
            <div className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center px-4 py-3.5 rounded-xl text-base font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="px-4 py-5 space-y-3 border-t border-slate-200 dark:border-slate-800">
              <a
                href={`https://wa.me/${SITE_CONFIG.phone.replace(/\D/g, "")}?text=${encodeURIComponent("¡URGENTE! 🚨 Necesito atención veterinaria de emergencia.")}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-3 bg-red-600 hover:bg-red-500 text-white font-bold py-3.5 rounded-xl text-sm transition-all"
              >
                <PhoneCall className="w-4 h-4" />
                <span>WHATSAPP EMERGENCIA (24/7)</span>
              </a>
              <Link
                href="/#reservar"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary flex items-center justify-center gap-3 py-3.5 !rounded-xl text-sm w-full"
              >
                <Calendar className="w-4 h-4" />
                <span>AGENDAR CITA ONLINE</span>
              </Link>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}