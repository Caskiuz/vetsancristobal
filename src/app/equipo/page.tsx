import type { Metadata } from "next";
import { VETS, SITE_CONFIG } from "@/lib/constants";
import { VetTeam } from "@/components/sections/VetTeam";

export const metadata: Metadata = {
  title: "Nuestro Equipo Veterinario",
  description: `Conoce a nuestro equipo de veterinarios especialistas en San Cristóbal, Táchira. ${SITE_CONFIG.stats.yearsExperience}+ años de experiencia combinada.`,
};

export default function EquipoPage() {
  return <VetTeam />;
}