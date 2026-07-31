"use client";

import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { EmergencyCTA } from "@/components/sections/EmergencyCTA";
import { BookingStepper } from "@/components/booking/BookingStepper";
import { useBusiness } from "@/lib/business-context";

export default function HomePage() {
  const { businessData: b } = useBusiness();

  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesGrid />
      <Testimonials />
      <EmergencyCTA />
      {b.features.hasBooking && <BookingStepper />}
    </>
  );
}
