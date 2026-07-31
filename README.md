# 🐾 VetSanCristóbal — Demo Comercial Veterinaria

![Next.js](https://img.shields.io/badge/Next.js-15.5-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF)

**Centro Médico Veterinario en San Cristóbal, Táchira, Venezuela.**

Demo comercial de alta conversión para clínica veterinaria. Diseño profesional responsive, dark/light mode, flujo de reservas vía WhatsApp, panel de administración, y SEO local optimizado.

---

## 🚀 Stack Tecnológico

| Tecnología | Uso |
|---|---|
| **Next.js 15** | Framework SSR/SSG, App Router, API endpoints |
| **TypeScript 5** | Tipado estricto en todo el proyecto |
| **Tailwind CSS 3.4** | Sistema de diseño utility-first |
| **Framer Motion 11** | Animaciones fluidas (hero, cards, stepper, carrusel) |
| **lucide-react** | Iconografía médica SVG (Stethoscope, Shield, Syringe, etc.) |
| **Prisma** | ORM para PostgreSQL (opcional, schema incluido) |
| **Zod** | Validación de formularios y APIs |
| **Vercel** | Despliegue serverless — single build |

---

## ✨ Funcionalidades

### 🏠 Landing Page
- **Hero Section** — Titular empático, doble CTA (Agendar Cita / WhatsApp Emergencia), SVG animado con Framer Motion
- **TrustBar** — 5,000+ mascotas atendidas, 4.9/5 Google, certificaciones (Fear Free, AAHA, WSAVA)
- **ServicesGrid** — 6 tarjetas interactivas con gradientes y efectos hover 3D
- **Testimonials** — Carrusel de reseñas reales con estrellas
- **EmergencyCTA** — Banner rojo de urgencias 24/7 con enlace directo a WhatsApp

### 📅 Flujo de Reservas (BookingStepper)
- 3 pasos: **Paciente** → **Cita** → **Confirmar** (envío a WhatsApp con formato estructurado)
- Selección de especie (🐕 Perro, 🐈 Gato, 🦜 Exótico)
- Date picker + time slots
- Métodos de pago: **PagoMóvil, USD, COP**

### 🎛️ Panel de Administración (`/admin`)
- Contraseña: `admin123`
- 4 tabs: **Info General, Servicios, Equipo, Testimonios**
- CRUD completo con persistencia en localStorage
- Cambios se reflejan instantáneamente en la web

### 🌓 Toggle Light/Dark Mode
- Botón ☀️/🌙 en Navbar (desktop y mobile)
- Persiste en localStorage
- 10 componentes migrados con clases condicionales `dark:`

### 📱 Responsive (Mobile-First)
- Probado desde 324px hasta 1920px
- Menú hamburguesa fullscreen (sin transparencias)
- WhatsApp FAB en esquina inferior derecha

### 🔍 SEO Local
- Schema Markup JSON-LD: `VeterinaryCare` + `LocalBusiness` + `WebSite`
- Metadatos Open Graph y Twitter Cards
- Blog con 6 artículos optimizados

### 🔗 Integración WhatsApp
- Botón flotante con chat dialog predefinido
- Botones de emergencia en Navbar, Hero, EmergencyCTA, Footer, Menú móvil
- Número: **+584262931869**

---

## 📁 Estructura del Proyecto

```
BasicPlan/
├── prisma/schema.prisma              # Modelos: Owner, Pet, Appointment, Contact
├── public/
│   ├── favicon.svg                   # Ícono personalizado
│   └── images/                       # SVGs y assets
├── src/
│   ├── app/
│   │   ├── layout.tsx                # Layout raíz + SEO + Schema Markup
│   │   ├── page.tsx                  # Landing Page
│   │   ├── admin/page.tsx            # Panel de Administración
│   │   ├── equipo/page.tsx           # Perfiles veterinarios
│   │   ├── blog/page.tsx             # 6 artículos SEO
│   │   └── api/{booking,contact}/route.ts
│   ├── components/
│   │   ├── layout/{Navbar,Footer,WhatsAppCTA}.tsx
│   │   ├── sections/{Hero,TrustBar,ServicesGrid,Testimonials,EmergencyCTA,VetTeam}.tsx
│   │   ├── booking/BookingStepper.tsx
│   │   └── ui/ScrollAnimation.tsx
│   ├── lib/
│   │   ├── constants.ts              # Datos estáticos (servicios, vets, pagos)
│   │   ├── utils.ts                  # cn(), WhatsApp URL, formateadores
│   │   ├── schema-markup.ts          # JSON-LD generators
│   │   ├── theme-context.tsx         # Light/Dark mode context
│   │   ├── admin-context.tsx         # Admin panel context (localStorage)
│   │   └── site-data.ts              # Hooks para componentes → admin data
│   └── styles/globals.css            # Variables CSS + Light/Dark + Componentes
├── tailwind.config.ts                # darkMode: "class", paleta médica
├── next.config.mjs                   # Headers de seguridad
└── package.json
```

---

## 🔧 Instalación y Ejecución

### Requisitos
- Node.js 18+ y npm 9+

### Instalación
```bash
git clone https://github.com/Caskiuz/vetsancristobal.git
cd vetsancristobal
npm install
```

### Desarrollo
```bash
npm run dev
# → http://localhost:3000
```

### Producción
```bash
npm run build
npm start
# → http://localhost:3000
```

### Base de Datos (opcional)
```bash
# Configurar .env con DATABASE_URL (PostgreSQL)
cp .env.example .env
npx prisma migrate dev --name init
```

---

## 🌍 Despliegue en Vercel

1. Conectar repositorio a [Vercel](https://vercel.com)
2. Configurar `DATABASE_URL` en Environment Variables (opcional)
3. Deploy automático desde `main`

---

## 🎨 Paleta de Colores

| Modo | Fondo | Texto | Acento | Bordes |
|---|---|---|---|---|
| **Light** | `#FFFFFF` | `#0F172A` | `#0D9488` | `#E2E8F0` |
| **Dark** | `#0F172A` | `#F1F5F9` | `#14B8A6` | `#334155` |

---

## 📞 Contacto

- **WhatsApp:** +58 426-2931869
- **Email:** contacto@vetsancristobal.com
- **Ubicación:** Av. Universidad, CC Los Andes, San Cristóbal, Táchira, Venezuela

---

*Hecho con ❤️ en San Cristóbal, Venezuela — Julio 2026*