"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useBusiness } from "@/lib/business-context";
import { getBlogPost } from "@/lib/blog-data";

export function BlogPostClient({ slug }: { slug: string }) {
  const { businessData: b } = useBusiness();
  const post = getBlogPost(slug);

  const ctaMessages: Record<string, { text: string; href: string; label: string }> = {
    veterinaria: { text: "¿Tu mascota necesita atención? Agenda una cita ahora.", href: "/#reservar", label: "Agendar Cita" },
    carniceria: { text: "¿Listo para hacer tu pedido? Escríbenos por WhatsApp.", href: `https://wa.me/${b.phone.replace(/\D/g, "")}?text=${encodeURIComponent("Hola! Quisiera hacer un pedido.")}`, label: "Pedir Ahora" },
    ferreteria: { text: "¿Necesitas materiales? Cotiza con nosotros por WhatsApp.", href: `https://wa.me/${b.phone.replace(/\D/g, "")}?text=${encodeURIComponent("Hola! Necesito una cotización de materiales.")}`, label: "Cotizar Ahora" },
  };

  const cta = ctaMessages[b.id] || ctaMessages.veterinaria;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0B0F19]">
        <div className="text-center">
          <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-4">404</h1>
          <p className="text-slate-500 dark:text-slate-400 mb-6">Artículo no encontrado</p>
          <Link href="/blog" className="btn-primary">Volver al Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-white dark:bg-[#0B0F19] transition-colors duration-300 pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold transition-colors mb-6"
          style={{ color: b.colors.primary }}
          onMouseEnter={(e) => { e.currentTarget.style.color = b.colors.primaryDark; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = b.colors.primary; }}
        >
          <ArrowLeft className="w-4 h-4" /> Volver al Blog
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <span
            className="px-3 py-1 rounded-md border text-xs font-semibold"
            style={{
              color: b.colors.primary,
              backgroundColor: `${b.colors.primary}15`,
              borderColor: `${b.colors.primary}40`
            }}
          >
            {post.category}
          </span>
          <span className="text-slate-400 dark:text-slate-500 text-sm">{post.date}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-tight mb-6">
          {post.title}
        </h1>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          {post.content.split("\n\n").map((paragraph, idx) => {
            if (paragraph.startsWith("## ")) {
              return <h2 key={idx} className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">{paragraph.replace("## ", "")}</h2>;
            }
            if (paragraph.startsWith("|")) {
              const rows = paragraph.split("\n").filter(Boolean);
              return (
                <div key={idx} className="overflow-x-auto my-4">
                  <table className="w-full text-sm text-left border-collapse">
                    <tbody>
                      {rows.map((row, ri) => {
                        const cells = row.split("|").filter(Boolean).map(c => c.trim());
                        return (
                          <tr key={ri} className={ri === 0 || ri === 1 ? "" : "border-t border-slate-200 dark:border-slate-700"}>
                            {cells.map((cell, ci) => (
                              <td key={ci} className={`px-3 py-2 ${ri === 0 || ri === 1 ? "font-bold" : "text-slate-600 dark:text-slate-300"}`}>{cell.replace(/\*\*/g, "")}</td>
                            ))}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              );
            }
            if (paragraph.startsWith("- **")) {
              return <ul key={idx} className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-300 my-4">
                {paragraph.split("\n").filter(Boolean).map((item, li) => (
                  <li key={li} dangerouslySetInnerHTML={{ __html: item.replace(/^- /, "").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
                ))}
              </ul>;
            }
            return <p key={idx} className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />;
          })}
        </div>

        <div
          className="mt-12 p-6 rounded-2xl border text-center"
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
            {cta.label}
          </a>
        </div>
      </div>
    </article>
  );
}