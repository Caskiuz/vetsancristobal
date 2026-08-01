import type { BusinessId } from "@/lib/business-context";

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
  content: string;
  businessId: BusinessId;
}

const allBlogPosts: BlogPost[] = [
  // ========== VETERINARIA (6 posts) ==========
  {
    businessId: "veterinaria",
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
    businessId: "veterinaria",
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
    businessId: "veterinaria",
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
    businessId: "veterinaria",
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
    businessId: "veterinaria",
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
    businessId: "veterinaria",
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

  // ========== CARNICERIA (6 posts) ==========
  {
    businessId: "carniceria",
    title: "Los 5 Cortes de Carne que Todo Parrillero Debe Conocer",
    excerpt: "Descubre los cortes premium de res y cómo cocinar cada uno para obtener el mejor sabor y textura.",
    date: "Julio 2026",
    category: "Cortes",
    slug: "cortes-premium-parrilla",
    content: `Conocer los cortes de carne es esencial para cualquier amante de la parrilla.

## 1. Lomito
El corte más tierno de la res. Ideal para medallones y filetes a la plancha. Cocinarlo vuelta y vuelta, término medio.

## 2. Solomo
También conocido como "solomillo". Perfecto para asar entero o en medallones gruesos. Jugoso y lleno de sabor.

## 3. Punta Trasera
Un corte versátil y económico. Excelente para desmechar, guisar o asar a fuego lento. Muy sabroso.

## 4. Muchacho Redondo
Ideal para roast beef o para cortar en bistecs. Magro y de textura firme. Marinarlo ayuda a resaltar su sabor.

## 5. Churrasco
Corte delgado y sabroso, perfecto para la parrilla rápida. Se cocina en minutos a fuego alto.

---

**Consejo del maestro carnicero:** Siempre deja reposar la carne 5 minutos después de cocinarla para que los jugos se redistribuyan.`,
  },
  {
    businessId: "carniceria",
    title: "Cómo Marinar Carnes: Guía Completa para Principiantes",
    excerpt: "Aprende las técnicas básicas de marinado para resaltar el sabor natural de tus cortes favoritos.",
    date: "Julio 2026",
    category: "Preparación",
    slug: "marinar-carnes-guia",
    content: `El marinado transforma una buena carne en una experiencia inolvidable.

## Ingredientes básicos de un buen marinado
- **Ácido:** Jugo de limón, vinagre o vino. Ayuda a ablandar la carne.
- **Aceite:** Oliva, canola o girasol. Transporta los sabores.
- **Especias:** Ajo, pimienta, comino, orégano. La base del sabor.
- **Sal:** Preferiblemente sal gruesa o marina.

## Tiempos de marinado

| Tipo de Carne | Tiempo Mínimo | Tiempo Ideal |
|---------------|---------------|--------------|
| Res (bistecs) | 30 min | 2-4 horas |
| Cerdo | 2 horas | 4-8 horas |
| Pollo | 1 hora | 2-4 horas |
| Pescado | 15 min | 30 min max |

**Importante:** Siempre marina en refrigeración, nunca a temperatura ambiente.`,
  },
  {
    businessId: "carniceria",
    title: "Guía de Punto de Cocción: Término Medio, 3/4 y Bien Cocido",
    excerpt: "Aprende a identificar el punto exacto de cocción de tus carnes con estos consejos profesionales.",
    date: "Junio 2026",
    category: "Parrilla",
    slug: "puntos-coccion-carne",
    content: `El punto de cocción perfecto es cuestión de técnica y práctica.

## Los 4 puntos clásicos

| Punto | Temperatura Interna | Tiempo aprox. | Característica |
|-------|---------------------|---------------|----------------|
| Rojo Inglés | 50-52°C | 2-3 min por lado | Centro rojo y tibio |
| Término Medio | 57-60°C | 4-5 min por lado | Centro rosado y caliente |
| 3/4 | 65-68°C | 6-7 min por lado | Ligero rosado en el centro |
| Bien Cocido | 71°C+ | 8-10 min por lado | Completamente cocido |

## Truco del dedo
Presiona la base del pulgar: la resistencia que sientes equivale a:
- Mano abierta: Rojo
- Pulgar+índice: Término medio
- Pulgar+anular: 3/4
- Pulgar+meñique: Bien cocido

---

Pide nuestros cortes ya sazonados y listos para la parrilla.`,
  },
  {
    businessId: "carniceria",
    title: "Embutidos Artesanales: Diferencias entre Chorizo, Morcilla y Salchichón",
    excerpt: "Conoce las características de cada embutido artesanal y cómo disfrutarlos al máximo.",
    date: "Junio 2026",
    category: "Productos",
    slug: "embutidos-artesanales-guia",
    content: `Nuestros embutidos son elaborados artesanalmente con recetas tradicionales.

## Chorizo
Elaborado con carne de cerdo y res, condimentado con ajo, pimentón y especias. Ideal para asar a la parrilla o cocinar en guisos. Su sabor ahumado lo hace perfecto para acompañar arepas.

## Morcilla
Hecha a base de sangre de cerdo, arroz, cebolla y especias. Textura suave y sabor profundo. Excelente como acompañante en parrilladas o frita en rodajas.

## Salchichón
Embutido curado de res y cerdo con granos de pimienta enteros. Perfecto para tablas de embutidos, sándwiches gourmet o picadas.

## Longaniza
Similar al chorizo pero más delgada y con mayor proporción de carne magra. Ideal para freír o asar entera.

---

Todos nuestros embutidos son **sin conservantes artificiales**.`,
  },
  {
    businessId: "carniceria",
    title: "Consejos para Conservar la Carne Fresca por Más Tiempo",
    excerpt: "Técnicas probadas para mantener tus cortes frescos y seguros en el refrigerador y congelador.",
    date: "Mayo 2026",
    category: "Conservación",
    slug: "conservar-carne-fresca",
    content: `Una correcta conservación mantiene la calidad y seguridad de tus alimentos.

## En el refrigerador (0-4°C)

| Tipo de Carne | Duración Máxima |
|---------------|-----------------|
| Res fresca | 3-5 días |
| Cerdo fresco | 2-4 días |
| Pollo fresco | 1-2 días |
| Carne molida | 1-2 días |

## En el congelador (-18°C)

| Tipo de Carne | Duración Máxima |
|---------------|-----------------|
| Res | 6-12 meses |
| Cerdo | 4-6 meses |
| Pollo | 9-12 meses |
| Embutidos | 1-2 meses |

## Consejos clave
- **Siempre** descongela en el refrigerador, nunca a temperatura ambiente.
- Envuelve la carne en papel film antes de congelar.
- Etiqueta con la fecha de congelación.
- No vuelvas a congelar carne que ya fue descongelada.

---

Pregunta por nuestros packs de congelación con cortes ya empacados al vacío.`,
  },
  {
    businessId: "carniceria",
    title: "BBQ Pack: La Solución Perfecta para tus Domingos Familiares",
    excerpt: "Descubre nuestros combos para parrilla con mix de cortes, chorizos, aliños y carbón.",
    date: "Mayo 2026",
    category: "Productos",
    slug: "bbq-pack-domingos",
    content: `Nuestros BBQ Packs están diseñados para que solo te preocupes por disfrutar.

## ¿Qué incluye el BBQ Pack?
- 1 kg de Punta Trasera (corte para asar)
- 1 kg de Chuletas de Cerdo
- 4 Chorizos Artesanales
- 2 Morcillas
- Aliños y Chimichurri casero
- Bolsa de Carbón (opcional)

## Precio especial
Desde **$25 USD** el combo básico. Pregunta por los tamaños familiar y fiesta.

## Cómo pedirlo
1. Escríbenos por WhatsApp al **+58 426-2931869**
2. Elige el tamaño de tu pack
3. Te lo llevamos a domicilio en menos de 45 min

---

Perfecto para compartir en familia. ¡Reserva tu BBQ Pack con anticipación para los domingos!`,
  },

  // ========== FERRETERIA (6 posts) ==========
  {
    businessId: "ferreteria",
    title: "Guía Básica de Herramientas para el Hogar: Las 10 Imprescindibles",
    excerpt: "Descubre las herramientas esenciales que todo hogar debe tener para reparaciones y mantenimiento básico.",
    date: "Julio 2026",
    category: "Herramientas",
    slug: "herramientas-basicas-hogar",
    content: `Tener las herramientas correctas hace la diferencia entre un trabajo bien hecho y uno frustrante.

## Las 10 herramientas imprescindibles

1. **Martillo de uña** — Para clavar y extraer clavos.
2. **Destornilladores** — Juego de pala y estrella de varios tamaños.
3. **Llave ajustable** — También llamada "llave inglesa", para tuercas y tornillos.
4. **Cinta métrica** — De al menos 5 metros, con freno.
5. **Nivel de burbuja** — Para colgar cuadros y estantes rectos.
6. **Taladro inalámbrico** — Con brocas para madera, metal y concreto.
7. **Pinzas** — De punta fina, de corte y de presión.
8. **Serrucho** — Para cortes rápidos en madera.
9. **Cúter o exacto** — Con repuesto de cuchillas.
10. **Caja de herramientas** — Para mantener todo organizado.

---

Visítanos y te asesoramos en la selección de tus herramientas según tus proyectos.`,
  },
  {
    businessId: "ferreteria",
    title: "Cómo Elegir la Pintura Correcta para Cada Ambiente de tu Hogar",
    excerpt: "Aprende a seleccionar el tipo de pintura ideal según el espacio y la superficie a pintar.",
    date: "Julio 2026",
    category: "Pintura",
    slug: "elegir-pintura-correcta",
    content: `Seleccionar la pintura adecuada garantiza un acabado duradero y profesional.

## Tipos de pintura según la superficie

| Ambiente | Tipo Recomendado | ¿Por qué? |
|----------|-----------------|-----------|
| Sala / Dormitorio | Látex vinílica mate | Bajo brillo, oculta imperfecciones |
| Cocina / Baño | Esmalte satinado | Resistente a la humedad |
| Fachada exterior | Acrílica impermeable | Protege contra sol y lluvia |
| Techos | Látex blanco mate | Buena cobertura, no gotea |
| Rejas / Metal | Esmalte sintético | Anticorrosivo y duradero |

## Rendimiento aproximado
- 1 galón rinde aproximadamente **30-40 m²**
- Se recomiendan **2 manos** para un acabado óptimo
- Usa sellador antes de pintar superficies nuevas

---

Contamos con una amplia gama de colores y marcas. ¡Cotiza con nosotros por WhatsApp!`,
  },
  {
    businessId: "ferreteria",
    title: "Fontanería Básica: Cómo Reparar una Fuga de Agua en Casa",
    excerpt: "Guía paso a paso para solucionar fugas comunes sin necesidad de llamar a un plomero.",
    date: "Junio 2026",
    category: "Fontanería",
    slug: "reparar-fuga-agua",
    content: `Las fugas de agua pueden causar daños costosos si no se atienden a tiempo.

## Materiales necesarios
- Llave ajustable o llave inglesa
- Cinta de teflón
- Empaques de repuesto
- Destornillador
- Sellador de silicona

## Paso a paso para reparar un grifo que gotea

1. **Cierra la llave de paso** principal o la del grifo que vas a reparar.
2. **Abre el grifo** para liberar el agua residual.
3. **Desmonta la manija** con el destornillador.
4. **Retira el cartucho o vástago** con la llave ajustable.
5. **Revisa los empaques** — usualmente están desgastados.
6. **Cambia el empaque** y aplica cinta de teflón en las roscas.
7. **Arma todo de nuevo** y abre la llave de paso lentamente.

## ¿No se solucionó?
Ven a la ferretería y te orientamos. Tenemos todos los repuestos que necesitas.`,
  },
  {
    businessId: "ferreteria",
    title: "Instalación Eléctrica Segura: Lo que Todo Propietario Debe Saber",
    excerpt: "Conceptos básicos de electricidad residencial para hacer reparaciones seguras en tu hogar.",
    date: "Junio 2026",
    category: "Electricidad",
    slug: "instalacion-electrica-segura",
    content: `La electricidad no es un juego. Sigue estas normas de seguridad básicas.

## Principios fundamentales

### Antes de cualquier trabajo
- **SIEMPRE** corta la electricidad desde el breaker principal.
- Verifica con un buscapolo o multímetro que NO haya corriente.
- Usa herramientas con mango aislante.

## Calibre de cables recomendado

| Uso | Calibre | Capacidad |
|-----|---------|-----------|
| Iluminación | #14 AWG | 15 amperios |
| Tomacorrientes generales | #12 AWG | 20 amperios |
| Cocina / Calentador | #10 AWG | 30 amperios |
| Aire acondicionado | #8 AWG | 40 amperios |

## Elementos de protección
- **Breaker termomagnético:** Protege contra sobrecargas.
- **Breaker diferencial:** Protege contra fugas a tierra (obligatorio en zonas húmedas).
- **Puesta a tierra:** Varilla de cobre conectada al tablero principal.

---

**Recuerda:** Si el trabajo es complejo, contrata a un electricista certificado. Nosotros tenemos los materiales que necesitas.`,
  },
  {
    businessId: "ferreteria",
    title: "Tipos de Cemento y sus Usos en Construcción",
    excerpt: "Conoce las diferencias entre cemento Portland, blanco, rápido y otros tipos para tu obra.",
    date: "Mayo 2026",
    category: "Materiales",
    slug: "tipos-cemento-construccion",
    content: `El cemento es la base de toda construcción. Elegir el correcto es clave.

## Principales tipos de cemento

| Tipo | Característica | Uso Principal |
|------|---------------|---------------|
| Portland Tipo I | Uso general | Losas, columnas, vigas |
| Portland Tipo II | Moderada resistencia a sulfatos | Cimentaciones |
| Portland Tipo III | Fraguado rápido (3-7 días) | Obras urgentes |
| Cemento Blanco | Estético, más costoso | Acabados, juntas, decoración |
| Cemento de Albañilería | Mayor plasticidad | Pegar bloques y ladrillos |

## Proporción básica de concreto
Para 1 m³ de concreto de 210 kg/cm²:
- **350 kg de cemento** (8 sacos de 42.5 kg)
- **0.56 m³ de arena**
- **0.84 m³ de piedra picada**
- **175 litros de agua**

---

Cotiza materiales de construcción al por mayor y menor con nosotros. Envíos a toda la ciudad.`,
  },
  {
    businessId: "ferreteria",
    title: "5 Proyectos DIY para Mejorar tu Hogar este Fin de Semana",
    excerpt: "Ideas prácticas de bricolaje que puedes hacer tú mismo con herramientas y materiales básicos.",
    date: "Mayo 2026",
    category: "Bricolaje",
    slug: "proyectos-diy-hogar",
    content: `No necesitas ser un experto para hacer mejoras significativas en casa.

## 1. Estante flotante de madera
**Materiales:** Tabla de pino, soportes ocultos, tornillos, pintura o barniz.
Ideal para colocar libros, plantas o decoración sin ocupar espacio en el piso.

## 2. Organizador de herramientas con tubos PVC
**Materiales:** Tubos PVC de 3" y 4", pegamento, base de madera.
Corta los tubos en ángulo, pégalos a una base y tendrás un organizador perfecto para el taller.

## 3. Pared de acento con palets reciclados
**Materiales:** Palets de madera, lijadora, clavos, barniz.
Lija la madera, córtala en tablones y clávalos en la pared creando un diseño rústico.

## 4. Macetero colgante con cuerda y tabla
**Materiales:** Tabla circular, cuerda de yute, gancho de techo, taladro.
Perfora 4 agujeros, pasa la cuerda y cuélgalo del techo. Perfecto para plantas colgantes.

## 5. Pizarra de pared con pintura de pizarrón
**Materiales:** Pintura de pizarrón, rodillo, cinta de enmascarar.
Pinta un rectángulo en la cocina u oficina. Ideal para notas, menús o listas de tareas.

---

Todos los materiales los encuentras en nuestra ferretería. ¡Cotiza por WhatsApp y recibe asesoría personalizada!`,
  },
];

export function getBlogPosts(businessId: BusinessId): BlogPost[] {
  return allBlogPosts.filter((post) => post.businessId === businessId);
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return allBlogPosts.find((post) => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return allBlogPosts;
}