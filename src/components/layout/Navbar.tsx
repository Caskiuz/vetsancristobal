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
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "@/lib/theme-context";
import { useBusiness } from "@/lib/business-context";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { currentBusiness, setBusiness, allBusinesses, businessData: b } = useBusiness();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bizDropdownOpen, setBizDropdownOpen] = useState(false);

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
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const whatsappUrl = `https://wa.me/${b.phone.replace(/\D/g, "")}?text=${encodeURIComponent(b.hero.emergencyWhatsAppMessage)}`;

  return (
    <>
      <header
        className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
          isScrolled ? "shadow-lg border-slate-200 dark:border-slate-800 py-2" : "border-transparent py-3 sm:py-4")}
        style={{ backgroundColor: 'var(--bg-nav)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group z-50" aria-label={`${b.shortName} - Ir al inicio`}>
              <motion.div whileHover={{ scale: 1.08, rotate: -5 }}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${b.colors.primary} 0%, ${b.colors.secondary} 100%)` }}>
                <span className="text-white text-xl z-10">{b.emoji}</span>
                <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/10 to-transparent" />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-black tracking-tight leading-tight" style={{ color: 'var(--text-primary)' }}>{b.shortName}</span>
                <span className="text-[9px] sm:text-[10px] tracking-[0.15em] uppercase font-semibold" style={{ color: 'var(--text-muted)' }}>{b.tagline}</span>
              </div>
            </Link>

            {/* Business Selector */}
            <div className="hidden lg:flex items-center gap-1 relative">
              <button onClick={() => setBizDropdownOpen(!bizDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-bold rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all"
                style={{ color: 'var(--text-primary)' }}>
                <span className="text-lg">{allBusinesses.find(x => x.id === currentBusiness)?.emoji}</span>
                <span className="hidden xl:inline">{allBusinesses.find(x => x.id === currentBusiness)?.shortName}</span>
                <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {bizDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl z-50 min-w-[180px] overflow-hidden">
                  {allBusinesses.map((biz) => (
                    <button key={biz.id} onClick={() => { setBusiness(biz.id); setBizDropdownOpen(false); }}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-semibold transition-colors hover:bg-slate-100 dark:hover:bg-slate-700`}
                      style={{ color: currentBusiness === biz.id ? biz.colors.primary : 'var(--text-primary)' }}>
                      <span className="text-xl">{biz.emoji}</span><span>{biz.shortName}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Desktop Navigation — dynamic per business */}
            <nav className="hidden lg:flex items-center gap-1">
              {b.navLinks.map((link) => (
                <Link key={link.href + link.label} href={link.href}
                  className="px-3.5 py-2 text-sm font-medium rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all duration-200"
                  style={{ color: 'var(--text-secondary)' }}>{link.label}</Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-2.5">
              <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <motion.a href={whatsappUrl} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl shadow-lg shadow-red-600/20 border border-red-400/30 transition-all duration-200"
                aria-label="Contactar por WhatsApp">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span className="hidden xl:inline">{b.hero.ctaEmergencyShort}</span>
              </motion.a>

              {b.features.hasBooking && (
                <Link href="/#reservar" className="text-white font-extrabold text-xs uppercase tracking-wider px-5 py-2.5 !rounded-xl shadow-lg"
                  style={{ background: `linear-gradient(135deg, ${b.colors.primary} 0%, ${b.colors.secondary} 100%)` }}>
                  <Calendar className="w-3.5 h-3.5 inline mr-1" /><span>Agendar Cita</span>
                </Link>
              )}
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <button onClick={() => setMobileMenuOpen(true)} className="relative z-50 p-2 -mr-2" style={{ color: 'var(--text-secondary)' }}
                aria-label="Abrir menú" aria-expanded={mobileMenuOpen}><Menu className="w-6 h-6" /></button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[99999] lg:hidden flex flex-col"
            style={{ backgroundColor: theme === 'dark' ? '#0F172A' : '#FFFFFF' }}>
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-slate-800">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${b.colors.primary} 0%, ${b.colors.secondary} 100%)` }}>
                  <span className="text-white text-lg">{b.emoji}</span>
                </div>
                <span className="text-base font-black tracking-tight text-slate-900 dark:text-white">{b.shortName}</span>
              </Link>
              <button onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors text-slate-500 dark:text-slate-400"
                aria-label="Cerrar menú"><X className="w-6 h-6" /></button>
            </div>
            <div className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
              {b.navLinks.map((link, index) => (
                <motion.div key={link.href + link.label} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.06 }}>
                  <Link href={link.href} onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center px-4 py-3.5 rounded-xl text-base font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all">
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              {/* Business selector in mobile menu */}
              <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-700">
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3 px-4">Cambiar Rubro</p>
                {allBusinesses.map((biz) => (
                  <button key={biz.id} onClick={() => { setBusiness(biz.id); setMobileMenuOpen(false); }}
                    className="w-full flex items-center gap-3 px-4 py-3 text-base font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all"
                    style={{ color: currentBusiness === biz.id ? biz.colors.primary : undefined }}>
                    <span className="text-xl">{biz.emoji}</span><span>{biz.shortName}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="px-4 py-5 space-y-3 border-t border-slate-200 dark:border-slate-800">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-3 bg-red-600 hover:bg-red-500 text-white font-bold py-3.5 rounded-xl text-sm transition-all">
                <PhoneCall className="w-4 h-4" /><span>{b.hero.ctaEmergencyShort} (24/7)</span>
              </a>
              {b.features.hasBooking && (
                <Link href="/#reservar" onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-3 text-white font-extrabold py-3.5 rounded-xl text-sm w-full"
                  style={{ background: `linear-gradient(135deg, ${b.colors.primary} 0%, ${b.colors.secondary} 100%)` }}>
                  <Calendar className="w-4 h-4" /><span>AGENDAR CITA ONLINE</span>
                </Link>
              )}
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}