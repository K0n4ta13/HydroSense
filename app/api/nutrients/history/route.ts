import { NextResponse } from "next/server"

export async function GET() {
  const applications = [
    {
      date: "Hoy",
      zone: "Zona C",
      type: "Refuerzo de Potasio",
      amount: "2.5 kg/ha",
      status: "Programado",
    },
    {
      date: "Ayer",
      zone: "Zona B",
      type: "Mezcla NPK",
      amount: "5 kg/ha",
      status: "Aplicado",
    },
    {
      date: "3 días atrás",
      zone: "Zona A",
      type: "Mantenimiento",
      amount: "3 kg/ha",
      status: "Aplicado",
    },
    {
      date: "1 semana atrás",
      zone: "Zona D",
      type: "Mezcla NPK",
      amount: "5 kg/ha",
      status: "Aplicado",
    },
  ]

  return NextResponse.json({ applications })
}

