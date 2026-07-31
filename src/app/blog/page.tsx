import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog de Salud Animal",
  description: `Consejos de salud preventiva, cuidado animal y bienestar para tu mascota. ${SITE_CONFIG.fullName} — San Cristóbal, Táchira.`,
};

const blogPosts = [
  {
    title: "5 Signos de Emergencia en tu Mascota que No Debes Ignorar",
    excerpt: "Reconocer los síntomas de una emergencia veterinaria puede salvar la vida de tu mascota. Aprende a identificarlos.",
    date: "Julio 2026",
    category: "Emergencias",
    slug: "signos-emergencia-mascotas",
  },
  {
    title: "Vacunación: El Calendario Completo para Cachorros y Gatitos",
    excerpt: "Guía actualizada de vacunación para perros y gatos bebés. Protege a tu mascota desde sus primeras semanas de vida.",
    date: "Julio 2026",
    category: "Prevención",
    slug: "calendario-vacunacion-cachorros",
  },
  {
    title: "Alimentación Natural vs. Alimento Procesado: ¿Qué es Mejor?",
    excerpt: "Comparativa basada en evidencia científica sobre los beneficios y riesgos de cada tipo de alimentación.",
    date: "Junio 2026",
    category: "Nutrición",
    slug: "alimentacion-natural-vs-procesado",
  },
  {
    title: "¿Cada Cuánto Debes Llevar a tu Mascota al Veterinario?",
    excerpt: "La frecuencia ideal de chequeos según la edad, especie y condición de salud de tu compañero.",
    date: "Junio 2026",
    category: "Prevención",
    slug: "frecuencia-visitas-veterinario",
  },
  {
    title: "Animales Exóticos: Cuidados Básicos para Aves, Reptiles y Roedores",
    excerpt: "Todo lo que necesitas saber sobre alimentación, hábitat y salud de mascotas no tradicionales.",
    date: "Mayo 2026",
    category: "Exóticos",
    slug: "cuidados-animales-exoticos",
  },
  {
    title: "Esterilización: Mitos, Beneficios y el Mejor Momento para Hacerla",
    excerpt: "Despejamos las dudas más comunes sobre la esterilización con información avalada por nuestros veterinarios.",
    date: "Mayo 2026",
    category: "Cirugía",
    slug: "esterilizacion-mitos-beneficios",
  },
];

export default function BlogPage() {
  return (
    <section className="relative pt-32 pb-16 sm:pt-36 sm:pb-20 bg-white dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <span className="inline-block text-teal-500 dark:text-teal-400 text-sm font-bold uppercase tracking-widest mb-3">
            Blog de Salud Animal
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white">
            Consejos para una{" "}
            <span className="text-gradient">vida saludable</span>
          </h1>
          <p className="mt-4 text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Información verificada por nuestro equipo veterinario para el bienestar de tu mascota.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="glass-card-hover group p-6 flex flex-col"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-md bg-teal-50 dark:bg-teal-500/10 border border-teal-300 dark:border-teal-500/20 text-teal-600 dark:text-teal-400 text-xs font-semibold">
                  {post.category}
                </span>
                <span className="text-slate-400 dark:text-slate-500 text-xs">{post.date}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors mb-2">
                {post.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed flex-1">
                {post.excerpt}
              </p>
              <span className="inline-flex items-center gap-1 text-teal-500 dark:text-teal-400 text-sm font-semibold mt-4 group-hover:gap-2 transition-all">
                Leer más
                <span className="text-lg leading-none">→</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}