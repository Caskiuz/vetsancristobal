"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useBusiness } from "@/lib/business-context";
import { getBlogPosts } from "@/lib/blog-data";

export function BlogListClient() {
  const { businessData: b, currentBusiness } = useBusiness();
  const posts = getBlogPosts(currentBusiness);

  const ctaMessages: Record<string, { text: string; href: string }> = {
    veterinaria: { text: "¿Tu mascota necesita atención? Agenda una cita ahora.", href: "/#reservar" },
    carniceria: { text: "¿Listo para hacer tu pedido? Escríbenos por WhatsApp.", href: `https://wa.me/${b.phone.replace(/\D/g, "")}?text=${encodeURIComponent("Hola! Quisiera hacer un pedido.")}` },
    ferreteria: { text: "¿Necesitas materiales? Cotiza con nosotros por WhatsApp.", href: `https://wa.me/${b.phone.replace(/\D/g, "")}?text=${encodeURIComponent("Hola! Necesito una cotización de materiales.")}` },
  };

  const cta = ctaMessages[currentBusiness] || ctaMessages.veterinaria;

  return (
    <section className="relative pt-32 pb-16 sm:pt-36 sm:pb-20 bg-white dark:bg-[#0B0F19] min-h-screen transition-colors duration-300">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-sm font-bold uppercase tracking-widest mb-3"
            style={{ color: b.colors.primary }}
          >
            {b.features.blogTitle}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white"
          >
            {b.id === "veterinaria" ? (
              <>
                Consejos para una{" "}
                <span style={{
                  backgroundImage: `linear-gradient(135deg, ${b.colors.primaryDark} 0%, ${b.colors.primary} 50%, ${b.colors.accent} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                } as React.CSSProperties}>
                  vida saludable
                </span>
              </>
            ) : b.id === "carniceria" ? (
              <>
                Recetas y tips de{" "}
                <span style={{
                  backgroundImage: `linear-gradient(135deg, ${b.colors.primaryDark} 0%, ${b.colors.primary} 50%, ${b.colors.accent} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                } as React.CSSProperties}>
                  cocina premium
                </span>
              </>
            ) : (
              <>
                Tips de{" "}
                <span style={{
                  backgroundImage: `linear-gradient(135deg, ${b.colors.primaryDark} 0%, ${b.colors.primary} 50%, ${b.colors.accent} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                } as React.CSSProperties}>
                  construcción y bricolaje
                </span>
              </>
            )}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto"
          >
            {b.features.blogDescription}
          </motion.p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-slate-500 dark:text-slate-400 text-lg mb-4">
              No hay artículos publicados aún en esta sección.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
              style={{ color: b.colors.primary }}
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="glass-card-hover group p-6 flex flex-col h-full"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="px-2.5 py-0.5 rounded-md border text-xs font-semibold"
                      style={{
                        color: b.colors.primary,
                        backgroundColor: `${b.colors.primary}15`,
                        borderColor: `${b.colors.primary}40`
                      }}
                    >
                      {post.category}
                    </span>
                    <span className="text-slate-400 dark:text-slate-500 text-xs">{post.date}</span>
                  </div>
                  <h3
                    className="text-lg font-bold text-slate-900 dark:text-white transition-colors mb-2 group-hover:underline"
                    style={{ textDecorationColor: b.colors.primary }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <span
                    className="inline-flex items-center gap-1 text-sm font-semibold mt-4 group-hover:gap-2 transition-all"
                    style={{ color: b.colors.primary }}
                  >
                    Leer más
                    <span className="text-lg leading-none">→</span>
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {/* CTA Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 p-6 rounded-2xl border text-center"
          style={{
            backgroundColor: `${b.colors.primary}10`,
            borderColor: `${b.colors.primary}30`
          }}
        >
          <p className="text-slate-700 dark:text-slate-300 text-sm mb-3">
            {cta.text}
          </p>
          <a
            href={cta.href}
            className="btn-primary"
            style={{
              background: `linear-gradient(135deg, ${b.colors.primary} 0%, ${b.colors.secondary} 100%)`
            }}
          >
            {b.id === "veterinaria" ? "Agendar Cita" : b.id === "carniceria" ? "Pedir Ahora" : "Cotizar Ahora"}
          </a>
        </motion.div>
      </div>
    </section>
  );
}