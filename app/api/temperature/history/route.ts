import { NextResponse } from "next/server"

export async function GET() {
  const readings = [
    {
      time: "15:00",
      zone: "Zone C",
      temperature: "28°C",
      status: "High",
      trend: "↑",
    },
    {
      time: "14:45",
      zone: "Zone B",
      temperature: "24°C",
      status: "Normal",
      trend: "→",
    },
    {
      time: "14:30",
      zone: "Zone A",
      temperature: "23°C",
      status: "Normal",
      trend: "→",
    },
    {
      time: "14:15",
      zone: "Zone D",
      temperature: "22°C",
      status: "Normal",
      trend: "→",
    },
    {
      time: "14:00",
      zone: "Zone C",
      temperature: "27°C",
      status: "High",
      trend: "↑",
    },
  ]

  return NextResponse.json({ readings })
}

