import { NextResponse } from "next/server"

export async function GET() {
  // Datos para el gráfico de resumen
  const data = [
    {
      temperature: 22,
      moisture: 65,
      ph: 6.7,
    },
    {
      temperature: 23,
      moisture: 67,
      ph: 6.8,
    },
    {
      temperature: 24,
      moisture: 68,
      ph: 6.8,
    },
    {
      temperature: 23,
      moisture: 70,
      ph: 6.9,
    },
    {
      temperature: 22,
      moisture: 68,
      ph: 6.8,
    },
    {
      temperature: 21,
      moisture: 66,
      ph: 6.7,
    },
    {
      temperature: 22,
      moisture: 65,
      ph: 6.7,
    },
  ]

  return NextResponse.json({ data })
}

