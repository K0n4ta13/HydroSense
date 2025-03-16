import { NextResponse } from "next/server"

export async function GET() {
  const readings = [
    {
      time: "14:30",
      zone: "Zone C",
      humidity: "85%",
      dewPoint: "18°C",
      status: "High",
    },
    {
      time: "14:15",
      zone: "Zone A",
      humidity: "75%",
      dewPoint: "16°C",
      status: "Optimal",
    },
    {
      time: "14:00",
      zone: "Zone B",
      humidity: "65%",
      dewPoint: "14°C",
      status: "Optimal",
    },
    {
      time: "13:45",
      zone: "Zone D",
      humidity: "70%",
      dewPoint: "15°C",
      status: "Optimal",
    },
  ]

  return NextResponse.json({ readings })
}

