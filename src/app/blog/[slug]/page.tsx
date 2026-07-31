import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const blogPosts = [
  {
    title: "5 Signos de Emergencia en tu Mascota que No Debes Ignorar",
    excerpt: "Reconocer los síntomas de una emergencia veterinaria puede salvar la vida de tu mascota. Aprende a identificarlos.",
    date: "Julio 2026",
    category: "Emergencias",
    slug: "signos-emergencia-mascotas",
    content: `Las emergencias veterinarias pueden ocurrir en cualquier momento. Saber reconocer los signos tempranos puede marcar la diferencia entre la vida y la muerte de tu mascota.

## 1. Dificultad para respirar
Si tu mascota respira con la boca abierta, hace ruidos extraños al respirar, o sus encías se ven azuladas o pálidas, necesita atención inmediata.

## 2. Vómitos o diarrea persistentes
Un episodio ocasional puede no ser grave, pero si dura más de 24 horas o contiene sangre, es una emergencia.

## 3. Incapacidad para orinar
Especialmente en gatos machos, esto puede indicar una obstrucción urinaria potencialmente fatal.

## 4. Convulsiones
Cualquier episodio de convulsión que dure más de 2 minutos requiere atención veterinaria urgente.

## 5. Trauma o accidente
Atropellos, caídas desde altura, o peleas con otros animales requieren evaluación inmediata incluso si no hay heridas visibles.

---

Ante cualquiera de estos signos, contacta a nuestro equipo de emergencia 24/7 al **+58 426-2931869** por WhatsApp.`,
  },
  {
    title: "Vacunación: El Calendario Completo para Cachorros y Gatitos",
    excerpt: "Guía actualizada de vacunación para perros y gatos bebés. Protege a tu mascota desde sus primeras semanas de vida.",
    date: "Julio 2026",
    category: "Prevención",
    slug: "calendario-vacunacion-cachorros",
    content: `La vacunación es la herramienta más efectiva para prevenir enfermedades graves en mascotas jóvenes.

## Calendario para Cachorros (Perros)

| Edad | Vacuna |
|------|--------|
| 6-8 semanas | Primera dosis: Parvovirus, Moquillo, Hepatitis |
| 10-12 semanas | Segunda dosis: Polivalente + Tos de las perreras |
| 14-16 semanas | Tercera dosis: Polivalente + Rabia |

## Calendario para Gatitos

| Edad | Vacuna |
|------|--------|
| 8-9 semanas | Primera dosis: Panleucopenia, Calicivirus, Herpesvirus |
| 12 semanas | Segunda dosis: Triple felina + Leucemia felina |
| 16 semanas | Tercera dosis + Rabia |

---

**Importante:** Las vacunas requieren refuerzos anuales. Consulta con nuestro equipo para un plan personalizado.`,
  },
  {
    title: "Alimentación Natural vs. Alimento Procesado: ¿Qué es Mejor?",
    excerpt: "Comparativa basada en evidencia científica sobre los beneficios y riesgos de cada tipo de alimentación.",
    date: "Junio 2026",
    category: "Nutrición",
    slug: "alimentacion-natural-vs-procesado",
    content: `Una de las decisiones más importantes para la salud de tu mascota es su alimentación.

## Alimento Procesado (Concentrado)
- **Ventajas:** Balance nutricional garantizado, práctico, fácil de almacenar.
- **Desventajas:** Puede contener conservantes y subproductos de baja calidad.

## Alimentación Natural (BARF / Cocida)
- **Ventajas:** Ingredientes frescos, sin aditivos, mayor palatabilidad.
- **Desventajas:** Requiere planificación, riesgo de desbalance nutricional.

## Recomendación
La mejor opción depende de tu mascota, tu estilo de vida y tu presupuesto. Lo ideal es consultar con un veterinario para diseñar un plan alimenticio personalizado.`,
  },
  {
    title: "¿Cada Cuánto Debes Llevar a tu Mascota al Veterinario?",
    excerpt: "La frecuencia ideal de chequeos según la edad, especie y condición de salud de tu compañero.",
    date: "Junio 2026",
    category: "Prevención",
    slug: "frecuencia-visitas-veterinario",
    content: `Los chequeos regulares son fundamentales para detectar problemas de salud antes de que se agraven.

## Cachorros y Gatitos (0-1 año)
- Visitas mensuales para vacunación y control de crecimiento.

## Adultos (1-7 años)
- Chequeo anual completo con análisis de sangre y orina.

## Senior (7+ años)
- Chequeos cada 6 meses. Los perros y gatos mayores necesitan monitoreo más frecuente.

---

Recuerda que la prevención siempre es más económica que el tratamiento de enfermedades avanzadas.`,
  },
  {
    title: "Animales Exóticos: Cuidados Básicos para Aves, Reptiles y Roedores",
    excerpt: "Todo lo que necesitas saber sobre alimentación, hábitat y salud de mascotas no tradicionales.",
    date: "Mayo 2026",
    category: "Exóticos",
    slug: "cuidados-animales-exoticos",
    content: `Las mascotas exóticas requieren cuidados muy específicos.

## Aves (Loros, Canarios, Ninfas)
- Alimentación variada: mezcla de semillas, frutas y verduras frescas.
- Ambiente libre de corrientes de aire y humo.
- Juguetes para estimulación mental.

## Reptiles (Iguanas, Tortugas, Serpientes)
- Control estricto de temperatura y humedad.
- Iluminación UVB esencial para metabolismo del calcio.
- Dieta específica según especie.

## Roedores (Conejos, Cobayas, Hámsters)
- Heno fresco siempre disponible.
- Espacio amplio para ejercicio.
- Revisión dental regular.

Nuestro equipo tiene experiencia con todas estas especies. Agenda tu consulta especializada.`,
  },
  {
    title: "Esterilización: Mitos, Beneficios y el Mejor Momento para Hacerla",
    excerpt: "Despejamos las dudas más comunes sobre la esterilización con información avalada por nuestros veterinarios.",
    date: "Mayo 2026",
    category: "Cirugía",
    slug: "esterilizacion-mitos-beneficios",
    content: `La esterilización es uno de los procedimientos más recomendados por veterinarios.

## Beneficios
- Previene cáncer de mama y testicular.
- Elimina el riesgo de infecciones uterinas (piometra).
- Reduce el marcaje con orina y el escape en busca de pareja.
- Ayuda a controlar la sobrepoblación animal.

## Mitos
- **"Deben tener una camada antes"** — Falso. No hay beneficio médico.
- **"Engordan después"** — El aumento de peso se controla con dieta.
- **"Cambia su personalidad"** — Se vuelven más tranquilos, no cambian su esencia.

## Momento ideal
Entre los 4 y 6 meses de edad, antes del primer celo en hembras.`,
  },
];

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Artículo no encontrado" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950">
        <div className="text-center">
          <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-4">404</h1>
          <p className="text-slate-500 dark:text-slate-400 mb-6">Artículo no encontrado</p>
          <Link href="/blog" className="btn-primary">Volver al Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300 pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-teal-500 dark:text-teal-400 hover:text-teal-600 dark:hover:text-teal-300 transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" /> Volver al Blog
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-md bg-teal-50 dark:bg-teal-500/10 border border-teal-300 dark:border-teal-500/20 text-teal-600 dark:text-teal-400 text-xs font-semibold">
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

        <div className="mt-12 p-6 rounded-2xl bg-teal-50 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/20 text-center">
          <p className="text-slate-700 dark:text-slate-300 text-sm mb-3">¿Tienes dudas sobre la salud de tu mascota?</p>
          <a href="/#reservar" className="btn-primary">Agendar una Cita</a>
        </div>
      </div>
    </article>
  );
}