import { NextResponse } from "next/server"

export async function GET() {
  const readings = [
    {
      time: "14:30",
      zone: "Zone B",
      intensity: "65,000 lux",
      exposure: "5.5h",
      status: "Low",
    },
    {
      time: "14:15",
      zone: "Zone A",
      intensity: "85,000 lux",
      exposure: "8.2h",
      status: "Optimal",
    },
    {
      time: "14:00",
      zone: "Zone C",
      intensity: "80,000 lux",
      exposure: "7.8h",
      status: "Optimal",
    },
    {
      time: "13:45",
      zone: "Zone D",
      intensity: "70,000 lux",
      exposure: "6.5h",
      status: "Optimal",
    },
  ]

  return NextResponse.json({ readings })
}

