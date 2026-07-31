"use client";

import React from "react";
import Link from "next/link";
import { PhoneCall, Mail, MapPin, Clock, Instagram, Facebook, Music2, Heart } from "lucide-react";
import { useBusiness } from "@/lib/business-context";
import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  const { businessData: b } = useBusiness();
  const currentYear = new Date().getFullYear();

  const footerServices = b.services.slice(0, 5).map((s) => ({
    href: "/#servicios",
    label: s.title,
  }));

  const empresaLinks = [
    { href: "/equipo", label: "Nuestro Equipo" },
    { href: "/blog", label: b.features.blogTitle || "Blog" },
    ...(b.features.hasBooking ? [{ href: "/#reservar", label: "Reservar Cita" }] : []),
    { href: "/#testimonios", label: "Testimonios" },
  ];

  return (
    <footer className="relative bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/60 pt-16 lg:pt-20 overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-slate-200 dark:border-slate-800/60">
          <div className="sm:col-span-2 lg:col-span-1 space-y-5">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
                style={{ background: `linear-gradient(135deg, ${b.colors.primary} 0%, ${b.colors.secondary} 100%)` }}>
                <span className="text-white text-xl">{b.emoji}</span>
              </div>
              <span className="text-xl font-black tracking-tight text-slate-900 dark:text-white">{b.shortName}</span>
            </Link>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-sm">{b.description}</p>
            <div className="space-y-3 pt-2">
              <a href={`https://wa.me/${b.phone.replace(/\D/g, "")}?text=${encodeURIComponent(b.hero.emergencyWhatsAppMessage)}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-600 dark:text-slate-300 transition-colors group/contact"
                onMouseEnter={(e) => e.currentTarget.style.color = b.colors.primary}
                onMouseLeave={(e) => e.currentTarget.style.color = ""}>
                <div className="w-8 h-8 rounded-lg border flex items-center justify-center transition-colors"
                  style={{ backgroundColor: `${b.colors.emergency}15`, borderColor: `${b.colors.emergency}30` }}>
                  <PhoneCall className="w-4 h-4" style={{ color: b.colors.emergency }} />
                </div>
                <span className="text-sm font-medium">{b.phoneFormatted}</span>
              </a>
              <a href={`mailto:${b.email}`}
                className="flex items-center gap-3 text-slate-600 dark:text-slate-300 transition-colors group/contact"
                onMouseEnter={(e) => e.currentTarget.style.color = b.colors.primary}
                onMouseLeave={(e) => e.currentTarget.style.color = ""}>
                <div className="w-8 h-8 rounded-lg border flex items-center justify-center transition-colors"
                  style={{ backgroundColor: `${b.colors.primary}15`, borderColor: `${b.colors.primary}30` }}>
                  <Mail className="w-4 h-4" style={{ color: b.colors.primary }} />
                </div>
                <span className="text-sm font-medium">{b.email}</span>
              </a>
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <div className="w-8 h-8 rounded-lg border flex items-center justify-center transition-colors"
                  style={{ backgroundColor: `${b.colors.accent}15`, borderColor: `${b.colors.accent}30` }}>
                  <MapPin className="w-4 h-4" style={{ color: b.colors.accent }} />
                </div>
                <span className="text-sm font-medium">{b.address.street}<br />{b.address.city}, {b.address.state}</span>
              </div>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-pink-500 transition-all" aria-label="Instagram"><Instagram className="w-4 h-4" /></a>
              <a href={SITE_CONFIG.social.facebook} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-blue-500 transition-all" aria-label="Facebook"><Facebook className="w-4 h-4" /></a>
              <a href={SITE_CONFIG.social.tiktok} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-cyan-500 transition-all" aria-label="TikTok"><Music2 className="w-4 h-4" /></a>
            </div>
          </div>
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold text-sm mb-4 uppercase tracking-wider">Servicios</h4>
            <ul className="space-y-2.5">{footerServices.map((link) => (<li key={link.label}><Link href={link.href} className="text-slate-500 dark:text-slate-400 text-sm transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = b.colors.primary} onMouseLeave={(e) => e.currentTarget.style.color = ""}>{link.label}</Link></li>))}</ul>
          </div>
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold text-sm mb-4 uppercase tracking-wider">Empresa</h4>
            <ul className="space-y-2.5">{empresaLinks.map((link) => (<li key={link.label}><Link href={link.href} className="text-slate-500 dark:text-slate-400 text-sm transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = b.colors.primary} onMouseLeave={(e) => e.currentTarget.style.color = ""}>{link.label}</Link></li>))}</ul>
          </div>
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold text-sm mb-4 uppercase tracking-wider">Horarios</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: b.colors.primary }} />
                <div className="space-y-1.5">
                  <p className="text-slate-500 dark:text-slate-400 text-xs">{b.schedule.weekdays}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs">{b.schedule.saturday}</p>
                  <p className="text-xs font-semibold" style={{ color: b.colors.emergency }}>{b.schedule.emergency}</p>
                </div>
              </div>
            </div>
            <a href={`https://wa.me/${b.phone.replace(/\D/g, "")}?text=${encodeURIComponent(b.hero.emergencyWhatsAppMessage)}`} target="_blank" rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 w-full border font-bold text-xs py-2.5 rounded-xl transition-all"
              style={{ backgroundColor: `${b.colors.emergency}15`, borderColor: `${b.colors.emergency}30`, color: b.colors.emergency }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = `${b.colors.emergency}25`; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = `${b.colors.emergency}15`; }}>
              <PhoneCall className="w-3.5 h-3.5" />WhatsApp {b.features.hasEmergency ? "Emergencias" : "Pedidos"} 24/7
            </a>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 text-center sm:text-left">
          <p className="text-slate-500 text-xs">&copy; {currentYear} {b.name}. Todos los derechos reservados.</p>
          <p className="text-slate-400 dark:text-slate-600 text-xs flex items-center gap-1.5">Hecho con <Heart className="w-3 h-3 text-red-400 fill-red-400 animate-pulse" /> en San Cristóbal, Venezuela</p>
        </div>
      </div>
    </footer>
  );
}