import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendChatMessage, ChatMessage } from "@/lib/gemini";

const chatRequestSchema = z.object({
  message: z.string().min(1, "El mensaje no puede estar vacío").max(2000),
  history: z
    .array(
      z.object({
        role: z.enum(["user", "model"]),
        content: z.string(),
      })
    )
    .max(50)
    .optional()
    .default([]),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = chatRequestSchema.safeParse(body);

    if (!validated.success) {
      return NextResponse.json(
        {
          error: "Datos inválidos",
          details: validated.error.flatten(),
        },
        { status: 400 }
      );
    }

    const { message, history } = validated.data;

    const response = await sendChatMessage(
      history as ChatMessage[],
      message
    );

    return NextResponse.json({
      success: true,
      message: response,
    });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Error desconocido";
    console.error("Error en chat API:", errorMessage, error);
    return NextResponse.json(
      {
        error: `Error al procesar el mensaje: ${errorMessage}`,
      },
      { status: 500 }
    );
  }
}