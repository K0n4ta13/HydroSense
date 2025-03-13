import { NextResponse } from "next/server"

export async function GET() {
  const incidents = [
    {
      date: "Hoy",
      zone: "Zona B",
      pest: "Áfidos",
      severity: "Alta",
      status: "Tratamiento Necesario",
    },
    {
      date: "Ayer",
      zone: "Zona A",
      pest: "Ácaros",
      severity: "Baja",
      status: "En Tratamiento",
    },
    {
      date: "2 días atrás",
      zone: "Zona C",
      pest: "Ninguna",
      severity: "Ninguna",
      status: "Libre",
    },
    {
      date: "3 días atrás",
      zone: "Zona D",
      pest: "Ninguna",
      severity: "Ninguna",
      status: "Libre",
    },
  ]

  return NextResponse.json({ incidents })
}

