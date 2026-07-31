"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useSiteTestimonials } from "@/lib/site-data";

export function Testimonials() {
  const testimonials = useSiteTestimonials();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => prev === 0 ? testimonials.length - 1 : prev - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => prev === testimonials.length - 1 ? 0 : prev + 1);
  };

  if (!testimonials.length) return null;

  return (
    <section id="testimonios" className="relative section-container bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="relative z-10">
        <div className="text-center mb-14">
          <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-block text-amber-400 text-sm font-bold uppercase tracking-widest mb-3">Testimonios</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="section-title text-slate-900 dark:text-white">
            Lo que dicen nuestros <span className="text-gradient-warm">clientes</span>
          </motion.h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative glass-card p-8 sm:p-10 md:p-12">
            <Quote className="absolute top-6 left-6 w-10 h-10 text-teal-500/10" />
            <AnimatePresence mode="wait">
              <motion.div key={currentIndex} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }} className="text-center space-y-5">
                <div className="flex justify-center gap-1">
                  {[...Array(testimonials[currentIndex]?.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-200 leading-relaxed italic">
                  &ldquo;{testimonials[currentIndex]?.text}&rdquo;
                </p>
                <div className="pt-2">
                  <p className="text-slate-900 dark:text-white font-bold">{testimonials[currentIndex]?.name}</p>
                  <p className="text-sm text-teal-400">{testimonials[currentIndex]?.pet}</p>
                </div>
              </motion.div>
            </AnimatePresence>
            <button onClick={handlePrevious} className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all" aria-label="Testimonio anterior"><ChevronLeft className="w-5 h-5" /></button>
            <button onClick={handleNext} className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all" aria-label="Siguiente testimonio"><ChevronRight className="w-5 h-5" /></button>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button key={index} onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-teal-500 w-8" : "bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600"}`}
                aria-label={`Ir al testimonio ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}