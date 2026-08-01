"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dog,
  Cat,
  Bird,
  HelpCircle,
  ChevronRight,
  ChevronLeft,
  Check,
  Smartphone,
  DollarSign,
  Banknote,
  Calendar,
  Clock,
  MessageCircle,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { createWhatsAppUrl } from "@/lib/utils";
import { SITE_CONFIG, PAYMENT_METHODS, APPOINTMENT_REASONS } from "@/lib/constants";

interface BookingData {
  species: string | null;
  reason: string | null;
  scheduledDate: string;
  scheduledTime: string;
  ownerName: string;
  ownerPhone: string;
  ownerEmail: string;
  paymentMethod: string | null;
  petName: string;
  petBreed: string;
  petAge: string;
  notes: string;
}

const SPECIES_OPTIONS = [
  { id: "canino", label: "Perro", icon: Dog, emoji: "🐕" },
  { id: "felino", label: "Gato", icon: Cat, emoji: "🐈" },
  { id: "exotico", label: "Exótico", icon: Bird, emoji: "🦜" },
  { id: "otro", label: "Otro", icon: HelpCircle, emoji: "🐾" },
];

const TIME_SLOTS = [
  "08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "02:00 PM", "02:30 PM", "03:00 PM",
  "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM",
];

export function BookingStepper() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<BookingData>({
    species: null,
    reason: null,
    scheduledDate: "",
    scheduledTime: "",
    ownerName: "",
    ownerPhone: "",
    ownerEmail: "",
    paymentMethod: null,
    petName: "",
    petBreed: "",
    petAge: "",
    notes: "",
  });

  const updateField = (field: keyof BookingData, value: string | null) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const canProceedStep1 = data.species !== null;
  const canProceedStep2 = data.reason !== null && data.scheduledDate !== "" && data.scheduledTime !== "";
  const canProceedStep3 = data.ownerName.trim() !== "" && data.ownerPhone.trim() !== "" && data.petName.trim() !== "" && data.paymentMethod !== null;

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 3));
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));

  const buildWhatsAppMessage = (): string => {
    const speciesLabel = SPECIES_OPTIONS.find((s) => s.id === data.species)?.label || data.species;
    const paymentLabel = PAYMENT_METHODS.find((p) => p.id === data.paymentMethod)?.name || data.paymentMethod;

    return [
      `🐾 *NUEVA CITA — VetSanCristóbal*`,
      ``,
      `📋 *Datos del Paciente:*`,
      `• Especie: ${speciesLabel}`,
      `• Nombre: ${data.petName}`,
      `• Raza: ${data.petBreed || "No especificada"}`,
      `• Edad: ${data.petAge || "No especificada"}`,
      ``,
      `🏥 *Información de la Cita:*`,
      `• Motivo: ${data.reason}`,
      `• Fecha: ${data.scheduledDate}`,
      `• Hora: ${data.scheduledTime}`,
      ``,
      `👤 *Datos del Dueño:*`,
      `• Nombre: ${data.ownerName}`,
      `• Teléfono: ${data.ownerPhone}`,
      `• Email: ${data.ownerEmail || "No especificado"}`,
      ``,
      `💳 *Método de Pago:* ${paymentLabel}`,
      ``,
      `📝 *Notas:* ${data.notes || "Ninguna"}`,
      ``,
      `_Mensaje enviado desde VetSanCristóbal App_`,
    ].join("\n");
  };

  const handleWhatsAppSubmit = () => {
    const message = buildWhatsAppMessage();
    const url = createWhatsAppUrl(SITE_CONFIG.phone, message);
    window.open(url, "_blank");
  };

  const getTodayDate = (): string => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const getMaxDate = (): string => {
    const max = new Date();
    max.setMonth(max.getMonth() + 3);
    return max.toISOString().split("T")[0];
  };

  const steps = [
    { number: 1, label: "Paciente" },
    { number: 2, label: "Cita" },
    { number: 3, label: "Confirmar" },
  ];

  return (
    <section id="reservar" className="relative section-container bg-white dark:bg-[#0B0F19] scroll-mt-24 transition-colors duration-300">
      {/* Section Header */}
      <div className="text-center mb-12">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-teal-400 text-sm font-bold uppercase tracking-widest mb-3"
        >
          Reserva en 3 Pasos
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-title text-slate-900 dark:text-white"
        >
          Agenda tu{" "}
          <span className="text-gradient">cita ahora</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="section-subtitle"
        >
          Sin llamadas, sin esperas. Completa el formulario y te confirmamos por WhatsApp.
        </motion.p>
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Step Progress Bar */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-10">
          {steps.map((s, index) => (
            <React.Fragment key={s.number}>
              <div className="flex items-center gap-2">
                <div
                  className={cn(
                    "w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300",
                    step > s.number
                      ? "bg-teal-500 text-white"
                      : step === s.number
                      ? "bg-teal-500/20 border-2 border-teal-500 text-teal-400"
                      : "bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-500 border border-slate-300 dark:border-slate-700"
                  )}
                >
                  {step > s.number ? <Check className="w-4 h-4" /> : s.number}
                </div>
                <span
                  className={cn(
                    "hidden sm:inline text-sm font-medium transition-colors",
                    step >= s.number ? "text-slate-900 dark:text-white" : "text-slate-400 dark:text-slate-500"
                  )}
                >
                  {s.label}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    "w-8 sm:w-12 h-0.5 rounded-full transition-colors",
                    step > s.number ? "bg-teal-500" : "bg-slate-300 dark:bg-slate-700"
                  )}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Step Content */}
        <div className="glass-card p-6 sm:p-8 min-h-[400px]">
          <AnimatePresence mode="wait">
            {/* Step 1: Species & Patient */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white text-center">
                ¿Qué tipo de paciente es?
              </h3>
                <div className="grid grid-cols-2 gap-4">
                  {SPECIES_OPTIONS.map((species) => (
                    <button
                      key={species.id}
                      onClick={() => updateField("species", species.id)}
                      className={cn(
                        "p-5 rounded-2xl border-2 transition-all duration-200 flex flex-col items-center gap-3",
                        data.species === species.id
                          ? "border-teal-500 bg-teal-500/10 shadow-lg shadow-teal-500/10"
                          : "border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800/30 hover:border-slate-400 dark:hover:border-slate-600"
                      )}
                    >
                      <span className="text-3xl">{species.emoji}</span>
                      <span className="text-sm font-bold text-slate-900 dark:text-white">
                        {species.label}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="space-y-3 pt-2">
                  <input
                    type="text"
                    placeholder="Nombre de la mascota"
                    value={data.petName}
                    onChange={(e) => updateField("petName", e.target.value)}
                    className="input-field"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Raza (opcional)"
                      value={data.petBreed}
                      onChange={(e) => updateField("petBreed", e.target.value)}
                      className="input-field"
                    />
                    <input
                      type="text"
                      placeholder="Edad (opcional)"
                      value={data.petAge}
                      onChange={(e) => updateField("petAge", e.target.value)}
                      className="input-field"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Reason + Date/Time */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white text-center">
                Motivo y fecha de la cita
              </h3>

                {/* Reason Select */}
                <div>
                  <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                    Motivo de consulta
                  </label>
                  <select
                    value={data.reason || ""}
                    onChange={(e) => updateField("reason", e.target.value)}
                    className="select-field"
                  >
                    <option value="" disabled>
                      Selecciona un motivo...
                    </option>
                    {APPOINTMENT_REASONS.map((reason) => (
                      <option key={reason} value={reason}>
                        {reason}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date Picker */}
                <div>
                  <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-teal-500 dark:text-teal-400" />
                    Fecha
                  </label>
                  <input
                    type="date"
                    value={data.scheduledDate}
                    onChange={(e) => updateField("scheduledDate", e.target.value)}
                    min={getTodayDate()}
                    max={getMaxDate()}
                    className="input-field"
                  />
                </div>

                {/* Time Slots */}
                <div>
                  <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-teal-500 dark:text-teal-400" />
                    Hora disponible
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {TIME_SLOTS.map((time) => (
                      <button
                        key={time}
                        onClick={() => updateField("scheduledTime", time)}
                        className={cn(
                          "px-2 py-2 rounded-lg text-xs font-medium transition-all border",
                          data.scheduledTime === time
                            ? "bg-teal-500 text-white border-teal-500"
                            : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600"
                        )}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                    Notas adicionales (opcional)
                  </label>
                  <textarea
                    value={data.notes}
                    onChange={(e) => updateField("notes", e.target.value)}
                    placeholder="¿Algún síntoma o información relevante?"
                    rows={2}
                    className="input-field resize-none"
                  />
                </div>
              </motion.div>
            )}

            {/* Step 3: Owner Data + Payment */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white text-center">
                Datos del dueño y pago
              </h3>

                {/* Owner Form */}
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Nombre completo *"
                    value={data.ownerName}
                    onChange={(e) => updateField("ownerName", e.target.value)}
                    className="input-field"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Teléfono (ej. +58424...) *"
                    value={data.ownerPhone}
                    onChange={(e) => updateField("ownerPhone", e.target.value)}
                    className="input-field"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Correo electrónico (opcional)"
                    value={data.ownerEmail}
                    onChange={(e) => updateField("ownerEmail", e.target.value)}
                    className="input-field"
                  />
                </div>

                {/* Payment Method */}
                <div>
                  <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-3">
                    Método de pago *
                  </label>
                  <div className="grid grid-cols-1 gap-3">
                    {PAYMENT_METHODS.map((method) => {
                      const icons: Record<string, React.ReactNode> = {
                        Smartphone: <Smartphone className="w-5 h-5" />,
                        DollarSign: <DollarSign className="w-5 h-5" />,
                        Banknote: <Banknote className="w-5 h-5" />,
                      };
                      return (
                        <button
                          key={method.id}
                          onClick={() => updateField("paymentMethod", method.id)}
                          className={cn(
                            "flex items-center gap-4 p-4 rounded-xl border-2 transition-all text-left",
                            data.paymentMethod === method.id
                              ? `${method.color} border-current`
                              : "border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800/30 hover:border-slate-400 dark:hover:border-slate-600"
                          )}
                        >
                          <div className="w-10 h-10 rounded-lg bg-slate-200 dark:bg-slate-900 flex items-center justify-center flex-shrink-0">
                            {icons[method.icon]}
                          </div>
                          <div className="flex-1">
                            <p className="text-slate-900 dark:text-white font-bold text-sm">
                              {method.name}
                            </p>
                            <p className="text-slate-500 dark:text-slate-400 text-xs">
                              {method.description}
                            </p>
                          </div>
                          <div
                            className={cn(
                              "w-5 h-5 rounded-full border-2 flex items-center justify-center",
                              data.paymentMethod === method.id
                                ? "border-teal-500 bg-teal-500"
                                : "border-slate-600"
                            )}
                          >
                            {data.paymentMethod === method.id && (
                              <Check className="w-3 h-3 text-white" />
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/60">
            {step > 1 ? (
              <button onClick={handleBack} className="btn-outline text-sm px-4 py-2">
                <ChevronLeft className="w-4 h-4" />
                Atrás
              </button>
            ) : (
              <div />
            )}

            {step < 3 ? (
              <button
                onClick={handleNext}
                disabled={
                  (step === 1 && !canProceedStep1) ||
                  (step === 2 && !canProceedStep2)
                }
                className={cn(
                  "btn-primary text-sm px-5 py-2",
                  ((step === 1 && !canProceedStep1) || (step === 2 && !canProceedStep2)) &&
                    "opacity-50 cursor-not-allowed hover:translate-y-0"
                )}
              >
                Siguiente
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleWhatsAppSubmit}
                disabled={!canProceedStep3}
                className={cn(
                  "flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-lg shadow-emerald-600/20",
                  !canProceedStep3 && "opacity-50 cursor-not-allowed"
                )}
              >
                <Send className="w-4 h-4" />
                Enviar a WhatsApp
                <MessageCircle className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}