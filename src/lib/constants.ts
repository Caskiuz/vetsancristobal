export const SITE_CONFIG = {
  name: "VetSanCristóbal",
  fullName: "Centro Médico Veterinario San Cristóbal",
  tagline: "Centro Médico Veterinario",
  description:
    "Atención veterinaria avanzada en San Cristóbal, Táchira. Consultas, cirugía, laboratorio, urgencias 24/7. PagoMóvil, USD y COP aceptados.",
  url: "https://vetsancristobal.vercel.app",
  phone: "+584262931869",
  phoneFormatted: "+58 426-2931869",
  email: "contacto@vetsancristobal.com",
  address: {
    street: "Av. Universidad, Centro Comercial Los Andes, Local 12",
    city: "San Cristóbal",
    state: "Táchira",
    country: "Venezuela",
    postalCode: "5001",
    mapsUrl: "https://maps.google.com/?q=San+Cristobal+Tachira+Venezuela",
  },
  social: {
    instagram: "https://instagram.com/vetsancristobal",
    facebook: "https://facebook.com/vetsancristobal",
    tiktok: "https://tiktok.com/@vetsancristobal",
  },
  schedule: {
    weekdays: "Lunes a Viernes: 8:00 AM – 7:00 PM",
    saturday: "Sábados: 8:00 AM – 2:00 PM",
    emergency: "Emergencias: 24 horas, 7 días",
  },
  stats: {
    petsServed: 5000,
    yearsExperience: 15,
    googleRating: 4.9,
    googleReviews: 320,
  },
};

export const SERVICES = [
  {
    id: "consulta",
    title: "Consulta General",
    description:
      "Evaluación clínica completa, diagnóstico y plan de tratamiento personalizado para tu mascota.",
    icon: "Stethoscope",
    color: "from-teal-500 to-emerald-500",
    priceRange: "$15 – $30 USD",
  },
  {
    id: "cirugia",
    title: "Cirugía",
    description:
      "Procedimientos quirúrgicos con equipo de anestesia monitoreada y quirófano esterilizado.",
    icon: "Bone",
    color: "from-cyan-500 to-blue-500",
    priceRange: "$80 – $350 USD",
  },
  {
    id: "peluqueria",
    title: "Peluquería Canina",
    description:
      "Baño medicado, corte de pelo, limpieza de oídos y corte de uñas con productos hipoalergénicos.",
    icon: "Scissors",
    color: "from-purple-500 to-pink-500",
    priceRange: "$10 – $25 USD",
  },
  {
    id: "laboratorio",
    title: "Laboratorio Clínico",
    description:
      "Análisis de sangre, orina, heces, citología y pruebas rápidas. Resultados en 24 horas.",
    icon: "Microscope",
    color: "from-amber-500 to-orange-500",
    priceRange: "$8 – $60 USD",
  },
  {
    id: "exoticos",
    title: "Animales Exóticos",
    description:
      "Atención especializada para aves, reptiles, conejos, hurones y pequeños mamíferos.",
    icon: "Bird",
    color: "from-emerald-500 to-teal-500",
    priceRange: "$20 – $50 USD",
  },
  {
    id: "vacunacion",
    title: "Vacunación",
    description:
      "Plan de inmunización completo para perros y gatos. Cartilla digital de vacunación.",
    icon: "Syringe",
    color: "from-blue-500 to-indigo-500",
    priceRange: "$10 – $35 USD",
  },
];

export const VETS = [
  {
    name: "Dra. María Gabriela Rojas",
    role: "Directora Médica",
    specialty: "Medicina Interna y Cirugía de Tejidos Blandos",
    education: "Universidad de Los Andes (ULA)",
    experience: "15 años de experiencia",
    certifications: ["Fear Free Certified", "AAHA Member"],
    image: "/images/equipo/vet-01.svg",
  },
  {
    name: "Dr. Carlos Eduardo Ramírez",
    role: "Cirujano Veterinario",
    specialty: "Ortopedia y Neurocirugía",
    education: "Universidad Central de Venezuela (UCV)",
    experience: "12 años de experiencia",
    certifications: ["Fear Free Certified"],
    image: "/images/equipo/vet-02.svg",
  },
  {
    name: "Dra. Andrea Valentina Sánchez",
    role: "Veterinaria de Fauna Exótica",
    specialty: "Medicina de Aves, Reptiles y Pequeños Mamíferos",
    education: "Universidad Nacional de Colombia",
    experience: "8 años de experiencia",
    certifications: ["Wildlife Medicine Certified"],
    image: "/images/equipo/vet-03.svg",
  },
  {
    name: "Dr. Luis Fernando Chacón",
    role: "Patólogo Clínico",
    specialty: "Diagnóstico de Laboratorio y Citología",
    education: "Universidad del Zulia (LUZ)",
    experience: "10 años de experiencia",
    certifications: ["ASVCP Member"],
    image: "/images/equipo/vet-04.svg",
  },
];

export const TESTIMONIALS = [
  {
    name: "Luisa Fernanda Contreras",
    pet: "Max (Golden Retriever)",
    rating: 5,
    text: "Salvaron a mi Max de una torsión gástrica a las 3 AM. El equipo de emergencia actuó rapidísimo. Eternamente agradecida.",
    image: "/images/testimonios/client-01.svg",
  },
  {
    name: "Pedro José Ramírez",
    pet: "Luna (Gata Persa)",
    rating: 5,
    text: "La Dra. Andrea es increíble con los gatos. Luna nunca había estado tan tranquila en una consulta. Recomiendo 100%.",
    image: "/images/testimonios/client-02.svg",
  },
  {
    name: "María Alejandra Torres",
    pet: "Rocky (Pitbull)",
    rating: 5,
    text: "Desde que vamos a VetSanCristóbal, Rocky dejó de tener miedo al veterinario. El trato es excepcional y los precios justos.",
    image: "/images/testimonios/client-03.svg",
  },
  {
    name: "José Gregorio Molina",
    pet: "Pancho (Loro Real)",
    rating: 5,
    text: "Pensé que nadie atendía loros en San Cristóbal hasta que los encontré. La Dra. Andrea le salvó la vida a Panchito.",
    image: "/images/testimonios/client-04.svg",
  },
];

export const CERTIFICATIONS = [
  { name: "Fear Free", logo: "/images/certificaciones/fear-free.svg" },
  { name: "AAHA", logo: "/images/certificaciones/aaha.svg" },
  { name: "FIAVAC", logo: "/images/certificaciones/fiavac.svg" },
  { name: "WSAVA", logo: "/images/certificaciones/wsava.svg" },
];

export const PAYMENT_METHODS = [
  {
    id: "pago_movil",
    name: "PagoMóvil",
    description: "Transferencia inmediata en Bolívares",
    icon: "Smartphone",
    color: "bg-teal-900/50 border-teal-600 text-teal-300",
    instructions: "PagoMóvil al 0426-2931869 / Banco Venezuela / CI: V-12345678",
  },
  {
    id: "usd",
    name: "Dólares (USD)",
    description: "Efectivo o Zelle",
    icon: "DollarSign",
    color: "bg-emerald-900/50 border-emerald-600 text-emerald-300",
    instructions: "Zelle: vetsancristobal@gmail.com / Efectivo en consultorio",
  },
  {
    id: "cop",
    name: "Pesos Colombianos",
    description: "Efectivo o transferencia",
    icon: "Banknote",
    color: "bg-cyan-900/50 border-cyan-600 text-cyan-300",
    instructions: "A la tasa del día. Aceptamos efectivo en COP y transferencias Nequi.",
  },
];

export const APPOINTMENT_REASONS = [
  "Consulta General",
  "Vacunación",
  "Control de Crecimiento",
  "Problemas Digestivos",
  "Problemas de Piel",
  "Revisión Post-Quirúrgica",
  "Emergencia / Urgencia",
  "Desparasitación",
  "Análisis de Laboratorio",
  "Peluquería",
  "Otro",
];