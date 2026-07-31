"use client";

import React from "react";
import Link from "next/link";
import { PhoneCall, Mail, MapPin, Clock, Instagram, Facebook, Music2, Heart, Stethoscope } from "lucide-react";
import { useSiteConfig } from "@/lib/site-data";
import { SITE_CONFIG } from "@/lib/constants";

const footerLinks = {
  servicios: [
    { href: "/#servicios", label: "Consulta General" },
    { href: "/#servicios", label: "Cirugía" },
    { href: "/#servicios", label: "Peluquería" },
    { href: "/#servicios", label: "Laboratorio" },
    { href: "/#servicios", label: "Animales Exóticos" },
  ],
  empresa: [
    { href: "/equipo", label: "Nuestro Equipo" },
    { href: "/blog", label: "Blog de Salud" },
    { href: "/#reservar", label: "Reservar Cita" },
    { href: "/#testimonios", label: "Testimonios" },
  ],
};

export function Footer() {
  const cfg = useSiteConfig();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/60 pt-16 lg:pt-20 overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-slate-200 dark:border-slate-800/60">
          <div className="sm:col-span-2 lg:col-span-1 space-y-5">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-teal-500/20">
                <Stethoscope className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-black tracking-tight text-slate-900 dark:text-white">
                VET<span className="text-teal-600 dark:text-teal-400">SAN</span>CRISTÓBAL
              </span>
            </Link>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-sm">{cfg.description}</p>
            <div className="space-y-3 pt-2">
              <a href={`tel:${cfg.phone}`} className="flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 flex items-center justify-center">
                  <PhoneCall className="w-4 h-4 text-red-500 dark:text-red-400" />
                </div>
                <span className="text-sm font-medium">{cfg.phoneFormatted}</span>
              </a>
              <a href={`mailto:${cfg.email}`} className="flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-teal-50 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/20 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                </div>
                <span className="text-sm font-medium">{cfg.email}</span>
              </a>
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                </div>
                <span className="text-sm font-medium">{cfg.address.street}<br />{cfg.address.city}, {cfg.address.state}</span>
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
            <ul className="space-y-2.5">{footerLinks.servicios.map((link) => (<li key={link.label}><Link href={link.href} className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 text-sm transition-colors">{link.label}</Link></li>))}</ul>
          </div>
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold text-sm mb-4 uppercase tracking-wider">Empresa</h4>
            <ul className="space-y-2.5">{footerLinks.empresa.map((link) => (<li key={link.label}><Link href={link.href} className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 text-sm transition-colors">{link.label}</Link></li>))}</ul>
          </div>
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold text-sm mb-4 uppercase tracking-wider">Horarios</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-teal-500 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                <div className="space-y-1.5">
                  <p className="text-slate-500 dark:text-slate-400 text-xs">{cfg.schedule.weekdays}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs">{cfg.schedule.saturday}</p>
                  <p className="text-red-500 dark:text-red-400 text-xs font-semibold">{cfg.schedule.emergency}</p>
                </div>
              </div>
            </div>
            <a href={`https://wa.me/${cfg.phone.replace(/\D/g, "")}?text=${encodeURIComponent("¡URGENTE! 🚨 Necesito atención veterinaria de emergencia.")}`} target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center justify-center gap-2 w-full bg-red-50 dark:bg-red-600/20 hover:bg-red-100 dark:hover:bg-red-600/30 border border-red-200 dark:border-red-500/30 text-red-600 dark:text-red-400 font-bold text-xs py-2.5 rounded-xl transition-all">
              <PhoneCall className="w-3.5 h-3.5" />WhatsApp Emergencias 24/7
            </a>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 text-center sm:text-left">
          <p className="text-slate-500 text-xs">&copy; {currentYear} {cfg.fullName}. Todos los derechos reservados.</p>
          <p className="text-slate-400 dark:text-slate-600 text-xs flex items-center gap-1.5">Hecho con <Heart className="w-3 h-3 text-red-400 fill-red-400 animate-pulse" /> en San Cristóbal, Venezuela</p>
        </div>
      </div>
    </footer>
  );
}