"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Sparkles } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/constants";
import { ChatDialog } from "@/components/chat/ChatDialog";

export function WhatsAppCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [showDialog, setShowDialog] = useState(false);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const tooltipTimer = setTimeout(() => setShowTooltip(false), 8000);
      return () => clearTimeout(tooltipTimer);
    }
  }, [isVisible]);

  const whatsappUrl = createWhatsAppUrl(
    SITE_CONFIG.phone,
    "¡Hola! 🐾 Quisiera información sobre sus servicios veterinarios en San Cristóbal."
  );

  const quickMessages = [
    {
      label: "Agendar una cita",
      message: "¡Hola! 🐾 Quisiera agendar una cita para mi mascota.",
    },
    {
      label: "Consulta de precios",
      message: "¡Hola! 🐾 Me gustaría conocer los precios de sus servicios.",
    },
    {
      label: "Emergencia 24/7",
      message: "¡URGENTE! 🚨 Necesito atención veterinaria de emergencia.",
    },
  ];

  const handleQuickMessage = (message: string) => {
    const url = createWhatsAppUrl(SITE_CONFIG.phone, message);
    window.open(url, "_blank");
    setShowDialog(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3">
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="hidden sm:block bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 shadow-xl max-w-[220px]"
              >
                <p className="text-xs text-slate-700 dark:text-slate-200 font-medium">
                  ¿Necesitas ayuda? ¡Escríbenos por WhatsApp!
                </p>
                <div className="absolute bottom-0 right-6 translate-y-2 rotate-45 w-3 h-3 bg-white dark:bg-slate-800 border-r border-b border-slate-200 dark:border-slate-700" />
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showDialog && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl w-[calc(100vw-2rem)] max-w-[320px] overflow-hidden mb-2"
              >
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">VetSanCristóbal</p>
                        <p className="text-emerald-100 text-xs">Responde en menos de 5 min</p>
                      </div>
                    </div>
                    <button onClick={() => setShowDialog(false)} className="text-white/70 hover:text-white transition-colors" aria-label="Cerrar chat">
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="p-4 space-y-3">
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    ¡Bienvenido a <strong className="text-slate-900 dark:text-white">VetSanCristóbal</strong>! 🐾 ¿En qué podemos ayudarte hoy?
                  </p>

                  <div className="space-y-2">
                    {quickMessages.map((item) => (
                      <button
                        key={item.label}
                        onClick={() => handleQuickMessage(item.message)}
                        className="w-full text-left px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 hover:border-teal-500/40 text-sm text-slate-700 dark:text-slate-200 transition-all duration-200 flex items-center gap-2"
                      >
                        <span className="text-teal-500">▸</span>
                        {item.label}
                      </button>
                    ))}
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-slate-200 dark:border-slate-700" />
                    </div>
                    <div className="relative flex justify-center">
                      <span className="bg-white dark:bg-slate-900 px-3 text-xs text-slate-400 dark:text-slate-500">
                        o escribe tu mensaje
                      </span>
                    </div>
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl transition-all duration-200 text-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Iniciar Chat por WhatsApp
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Chat IA Dialog */}
          <AnimatePresence>
            {showChat && (
              <div className="absolute bottom-full right-0 mb-2">
                <ChatDialog isOpen={showChat} onClose={() => setShowChat(false)} />
              </div>
            )}
          </AnimatePresence>

          {/* Botones flotantes */}
          {showDialog && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              onClick={() => {
                setShowDialog(false);
                setShowChat(true);
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 text-white flex items-center justify-center shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 transition-shadow"
              aria-label="Hablar con IA VetBot"
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          )}

          <motion.button
            onClick={() => {
              if (showChat) {
                setShowChat(false);
              } else {
                setShowDialog(!showDialog);
              }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={
              showDialog || showChat
                ? { rotate: 0 }
                : {
                    boxShadow: [
                      "0 0 0 0 rgba(16, 185, 129, 0.4)",
                      "0 0 0 15px rgba(16, 185, 129, 0)",
                      "0 0 0 0 rgba(16, 185, 129, 0)",
                    ],
                  }
            }
            transition={{ boxShadow: { repeat: Infinity, duration: 2, ease: "easeInOut" } }}
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-shadow"
            aria-label="Abrir opciones de contacto"
          >
            {showDialog || showChat ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            ) : (
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            )}
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
}
