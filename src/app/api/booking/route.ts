import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const bookingSchema = z.object({
  species: z.string().min(1),
  reason: z.string().min(1),
  scheduledDate: z.string().min(1),
  scheduledTime: z.string().min(1),
  ownerName: z.string().min(2),
  ownerPhone: z.string().min(6),
  ownerEmail: z.string().email().optional().or(z.literal("")),
  paymentMethod: z.string().min(1),
  petName: z.string().min(1),
  petBreed: z.string().optional(),
  petAge: z.string().optional(),
  notes: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = bookingSchema.safeParse(body);

    if (!validated.success) {
      return NextResponse.json(
        { error: "Datos inválidos", details: validated.error.flatten() },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Cita registrada exitosamente. Te contactaremos por WhatsApp.",
        data: validated.data,
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}