"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lock,
  Eye,
  EyeOff,
  Settings,
  Building2,
  Scissors,
  Users,
  MessageSquare,
  LogOut,
  Save,
  Plus,
  Trash2,
  RotateCcw,
  ArrowLeft,
  Shield,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import { useAdmin, Service, Vet, Testimonial } from "@/lib/admin-context";
import { useTheme } from "@/lib/theme-context";

export default function AdminPage() {
  const { isAuthenticated, login, logout, data, updateSiteConfig, updateServices, updateVets, updateTestimonials, resetToDefaults } = useAdmin();
  const { theme } = useTheme();
  const router = useRouter();

  if (!isAuthenticated) {
    return <LoginScreen onLogin={login} theme={theme} />;
  }

  return (
    <Dashboard
      data={data}
      onLogout={logout}
      onUpdateSiteConfig={updateSiteConfig}
      onUpdateServices={updateServices}
      onUpdateVets={updateVets}
      onUpdateTestimonials={updateTestimonials}
      onReset={resetToDefaults}
      onBack={() => router.push("/")}
      theme={theme}
    />
  );
}

// ==================== LOGIN SCREEN ====================
function LoginScreen({ onLogin, theme }: { onLogin: (pw: string) => boolean; theme: string }) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onLogin(password)) {
      setError("");
    } else {
      setError("Contraseña incorrecta");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 px-4">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-sm">
        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl p-8 border border-slate-200 dark:border-slate-700">
          <div className="text-center mb-6">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center mb-4">
              <Lock className="w-8 h-8 text-teal-400" />
            </div>
            <h1 className="text-xl font-black text-slate-900 dark:text-white">Panel Admin</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">VetSanCristóbal</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5">Contraseña</label>
              <div className="relative">
                <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)}
                  className="input-field pr-10" placeholder="••••••••" autoFocus />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            {error && <p className="text-red-500 text-xs font-medium">{error}</p>}
            <button type="submit" className="btn-primary w-full py-3">
              <Lock className="w-4 h-4" /> Iniciar Sesión
            </button>
          </form>
          <p className="text-xs text-slate-400 text-center mt-4">Contraseña por defecto: admin123</p>
        </div>
      </motion.div>
    </div>
  );
}

// ==================== DASHBOARD ====================
function Dashboard({
  data, onLogout, onUpdateSiteConfig, onUpdateServices, onUpdateVets, onUpdateTestimonials, onReset, onBack, theme,
}: {
  data: ReturnType<typeof useAdmin>["data"];
  onLogout: () => void;
  onUpdateSiteConfig: (c: any) => void;
  onUpdateServices: (s: Service[]) => void;
  onUpdateVets: (v: Vet[]) => void;
  onUpdateTestimonials: (t: Testimonial[]) => void;
  onReset: () => void;
  onBack: () => void;
  theme: string;
}) {
  const [tab, setTab] = useState<"info" | "servicios" | "equipo" | "testimonios">("info");
  const [saved, setSaved] = useState(false);

  const flashSave = () => { setSaved(true); setTimeout(() => setSaved(false), 2000); };

  const tabs = [
    { id: "info" as const, label: "Info General", icon: Building2 },
    { id: "servicios" as const, label: "Servicios", icon: Scissors },
    { id: "equipo" as const, label: "Equipo", icon: Users },
    { id: "testimonios" as const, label: "Testimonios", icon: MessageSquare },
  ];

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={onBack} className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-lg font-black text-slate-900 dark:text-white">Panel de Administración</h1>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">VetSanCristóbal</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {saved && <motion.span initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-xs text-emerald-500 font-bold hidden sm:inline">✓ Guardado</motion.span>}
            <button onClick={onReset} className="p-2 rounded-lg hover:bg-amber-100 dark:hover:bg-amber-900/30 text-amber-600 dark:text-amber-400 transition-colors" title="Restaurar valores por defecto">
              <RotateCcw className="w-4 h-4" />
            </button>
            <button onClick={onLogout} className="p-2 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 text-red-500 dark:text-red-400 transition-colors" title="Cerrar sesión">
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <nav className="sticky top-[57px] z-30 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-4">
        <div className="max-w-6xl mx-auto flex gap-1 overflow-x-auto">
          {tabs.map((t) => (
            <button key={t.id} onClick={() => setTab(t.id)}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
                tab === t.id ? "border-teal-500 text-teal-600 dark:text-teal-400" : "border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
              }`}>
              <t.icon className="w-4 h-4" />{t.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 py-6">
        <AnimatePresence mode="wait">
          {tab === "info" && <TabInfo key="info" config={data.siteConfig} onUpdate={onUpdateSiteConfig} onSave={flashSave} />}
          {tab === "servicios" && <TabServices key="services" services={data.services} onUpdate={onUpdateServices} onSave={flashSave} />}
          {tab === "equipo" && <TabVets key="vets" vets={data.vets} onUpdate={onUpdateVets} onSave={flashSave} />}
          {tab === "testimonios" && <TabTestimonials key="testimonials" testimonials={data.testimonials} onUpdate={onUpdateTestimonials} onSave={flashSave} />}
        </AnimatePresence>
      </main>
    </div>
  );
}

// ==================== TAB: INFO GENERAL ====================
function TabInfo({ config, onUpdate, onSave }: { config: any; onUpdate: any; onSave: () => void }) {
  const [form, setForm] = useState(config);

  const handleChange = (field: string, value: string) => {
    setForm((prev: any) => {
      if (field.includes(".")) {
        const [parent, child] = field.split(".");
        return { ...prev, [parent]: { ...prev[parent], [child]: value } };
      }
      return { ...prev, [field]: value };
    });
  };

  const handleSave = () => { onUpdate(form); onSave(); };

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <Section title="Identidad del Negocio" icon={Building2}>
        <Field label="Nombre Completo" value={form.fullName} onChange={(v) => handleChange("fullName", v)} />
        <Field label="Tagline" value={form.tagline} onChange={(v) => handleChange("tagline", v)} />
        <Field label="Descripción SEO" value={form.description} onChange={(v) => handleChange("description", v)} textarea />
      </Section>
      <Section title="Contacto" icon={Phone}>
        <Field label="Teléfono (formato +58426...)" value={form.phone} onChange={(v) => handleChange("phone", v)} />
        <Field label="Teléfono Formateado" value={form.phoneFormatted} onChange={(v) => handleChange("phoneFormatted", v)} />
        <Field label="Email" value={form.email} onChange={(v) => handleChange("email", v)} />
      </Section>
      <Section title="Dirección" icon={MapPin}>
        <Field label="Calle/Dirección" value={form.address.street} onChange={(v) => handleChange("address.street", v)} />
        <div className="grid grid-cols-2 gap-3">
          <Field label="Ciudad" value={form.address.city} onChange={(v) => handleChange("address.city", v)} />
          <Field label="Estado" value={form.address.state} onChange={(v) => handleChange("address.state", v)} />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Field label="País" value={form.address.country} onChange={(v) => handleChange("address.country", v)} />
          <Field label="Código Postal" value={form.address.postalCode} onChange={(v) => handleChange("address.postalCode", v)} />
        </div>
      </Section>
      <Section title="Horarios" icon={Clock}>
        <Field label="Lunes a Viernes" value={form.schedule.weekdays} onChange={(v) => handleChange("schedule.weekdays", v)} />
        <Field label="Sábados" value={form.schedule.saturday} onChange={(v) => handleChange("schedule.saturday", v)} />
        <Field label="Emergencias" value={form.schedule.emergency} onChange={(v) => handleChange("schedule.emergency", v)} />
      </Section>
      <button onClick={handleSave} className="btn-primary w-full sm:w-auto px-8 py-3"><Save className="w-4 h-4" /> Guardar Cambios</button>
    </motion.div>
  );
}

// ==================== TAB: SERVICIOS ====================
function TabServices({ services, onUpdate, onSave }: { services: Service[]; onUpdate: (s: Service[]) => void; onSave: () => void }) {
  const [items, setItems] = useState(services);

  const updateItem = (id: string, field: keyof Service, value: string) => {
    setItems((prev) => prev.map((s) => (s.id === id ? { ...s, [field]: value } : s)));
  };

  const addItem = () => {
    const newId = `servicio-${Date.now()}`;
    setItems([...items, { id: newId, title: "Nuevo Servicio", description: "", icon: "Stethoscope", color: "from-teal-500 to-emerald-500", priceRange: "Consultar" }]);
  };

  const removeItem = (id: string) => {
    setItems(items.filter((s) => s.id !== id));
  };

  const handleSave = () => { onUpdate(items); onSave(); };

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="glass-card p-5 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-slate-900 dark:text-white">{item.title}</h3>
            <button onClick={() => removeItem(item.id)} className="p-1.5 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 text-red-500 transition-colors">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
          <Field label="Título" value={item.title} onChange={(v) => updateItem(item.id, "title", v)} />
          <Field label="Descripción" value={item.description} onChange={(v) => updateItem(item.id, "description", v)} textarea />
          <div className="grid grid-cols-2 gap-3">
            <Field label="Icono (lucide)" value={item.icon} onChange={(v) => updateItem(item.id, "icon", v)} />
            <Field label="Rango de Precio" value={item.priceRange} onChange={(v) => updateItem(item.id, "priceRange", v)} />
          </div>
          <Field label="Color (Tailwind gradient)" value={item.color} onChange={(v) => updateItem(item.id, "color", v)} />
        </div>
      ))}
      <div className="flex gap-3">
        <button onClick={addItem} className="btn-outline flex-1 py-3"><Plus className="w-4 h-4" /> Agregar Servicio</button>
        <button onClick={handleSave} className="btn-primary px-8 py-3"><Save className="w-4 h-4" /> Guardar</button>
      </div>
    </motion.div>
  );
}

// ==================== TAB: EQUIPO ====================
function TabVets({ vets, onUpdate, onSave }: { vets: Vet[]; onUpdate: (v: Vet[]) => void; onSave: () => void }) {
  const [items, setItems] = useState(vets);

  const updateItem = (index: number, field: keyof Vet, value: string | string[]) => {
    setItems((prev) => prev.map((v, i) => (i === index ? { ...v, [field]: value } : v)));
  };

  const addItem = () => {
    setItems([...items, { name: "Nuevo Veterinario", role: "", specialty: "", education: "", experience: "", certifications: [] }]);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const updateCert = (vetIndex: number, certIndex: number, value: string) => {
    setItems((prev) => prev.map((v, i) => i === vetIndex ? { ...v, certifications: v.certifications.map((c, ci) => ci === certIndex ? value : c) } : v));
  };

  const addCert = (vetIndex: number) => {
    setItems((prev) => prev.map((v, i) => i === vetIndex ? { ...v, certifications: [...v.certifications, ""] } : v));
  };

  const removeCert = (vetIndex: number, certIndex: number) => {
    setItems((prev) => prev.map((v, i) => i === vetIndex ? { ...v, certifications: v.certifications.filter((_, ci) => ci !== certIndex) } : v));
  };

  const handleSave = () => { onUpdate(items); onSave(); };

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
      {items.map((vet, index) => (
        <div key={index} className="glass-card p-5 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-slate-900 dark:text-white">{vet.name || "Nuevo Veterinario"}</h3>
            <button onClick={() => removeItem(index)} className="p-1.5 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 text-red-500 transition-colors">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
          <Field label="Nombre" value={vet.name} onChange={(v) => updateItem(index, "name", v)} />
          <Field label="Rol" value={vet.role} onChange={(v) => updateItem(index, "role", v)} />
          <Field label="Especialidad" value={vet.specialty} onChange={(v) => updateItem(index, "specialty", v)} />
          <div className="grid grid-cols-2 gap-3">
            <Field label="Educación" value={vet.education} onChange={(v) => updateItem(index, "education", v)} />
            <Field label="Experiencia" value={vet.experience} onChange={(v) => updateItem(index, "experience", v)} />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2">Certificaciones</label>
            {vet.certifications.map((cert, ci) => (
              <div key={ci} className="flex gap-2 mb-2">
                <input value={cert} onChange={(e) => updateCert(index, ci, e.target.value)} className="input-field" placeholder="Certificación" />
                <button onClick={() => removeCert(index, ci)} className="p-2 rounded-lg hover:bg-red-100 text-red-500"><Trash2 className="w-3 h-3" /></button>
              </div>
            ))}
            <button onClick={() => addCert(index)} className="text-xs text-teal-500 hover:text-teal-600 font-semibold"><Plus className="w-3 h-3 inline" /> Agregar certificación</button>
          </div>
        </div>
      ))}
      <div className="flex gap-3">
        <button onClick={addItem} className="btn-outline flex-1 py-3"><Plus className="w-4 h-4" /> Agregar Veterinario</button>
        <button onClick={handleSave} className="btn-primary px-8 py-3"><Save className="w-4 h-4" /> Guardar</button>
      </div>
    </motion.div>
  );
}

// ==================== TAB: TESTIMONIOS ====================
function TabTestimonials({ testimonials, onUpdate, onSave }: { testimonials: Testimonial[]; onUpdate: (t: Testimonial[]) => void; onSave: () => void }) {
  const [items, setItems] = useState(testimonials);

  const updateItem = (index: number, field: keyof Testimonial, value: string | number) => {
    setItems((prev) => prev.map((t, i) => (i === index ? { ...t, [field]: value } : t)));
  };

  const addItem = () => {
    setItems([...items, { name: "Nuevo Cliente", pet: "", rating: 5, text: "" }]);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleSave = () => { onUpdate(items); onSave(); };

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
      {items.map((t, index) => (
        <div key={index} className="glass-card p-5 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-slate-900 dark:text-white">{t.name || "Nuevo Testimonio"}</h3>
            <button onClick={() => removeItem(index)} className="p-1.5 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 text-red-500 transition-colors">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
          <Field label="Nombre del Cliente" value={t.name} onChange={(v) => updateItem(index, "name", v)} />
          <Field label="Mascota" value={t.pet} onChange={(v) => updateItem(index, "pet", v)} />
          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5">Rating (1-5)</label>
            <input type="number" min={1} max={5} value={t.rating} onChange={(e) => updateItem(index, "rating", parseInt(e.target.value) || 5)}
              className="input-field w-24" />
          </div>
          <Field label="Testimonio" value={t.text} onChange={(v) => updateItem(index, "text", v)} textarea />
        </div>
      ))}
      <div className="flex gap-3">
        <button onClick={addItem} className="btn-outline flex-1 py-3"><Plus className="w-4 h-4" /> Agregar Testimonio</button>
        <button onClick={handleSave} className="btn-primary px-8 py-3"><Save className="w-4 h-4" /> Guardar</button>
      </div>
    </motion.div>
  );
}

// ==================== SHARED COMPONENTS ====================
function Section({ title, icon: Icon, children }: { title: string; icon: any; children: React.ReactNode }) {
  return (
    <div className="glass-card p-5 space-y-3">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
          <Icon className="w-4 h-4 text-teal-500 dark:text-teal-400" />
        </div>
        <h3 className="font-bold text-slate-900 dark:text-white">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function Field({ label, value, onChange, textarea }: { label: string; value: string; onChange: (v: string) => void; textarea?: boolean }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5">{label}</label>
      {textarea ? (
        <textarea value={value} onChange={(e) => onChange(e.target.value)} rows={2} className="input-field resize-none" />
      ) : (
        <input type="text" value={value} onChange={(e) => onChange(e.target.value)} className="input-field" />
      )}
    </div>
  );
}