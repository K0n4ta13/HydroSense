import { NextResponse } from "next/server"

export async function GET() {
  const readings = [
    {
      time: "14:30",
      zone: "Zone C",
      ph: "5.2",
      status: "Acidic",
      action: "Treatment Required",
    },
    {
      time: "14:15",
      zone: "Zone B",
      ph: "6.5",
      status: "Optimal",
      action: "None Required",
    },
    {
      time: "14:00",
      zone: "Zone A",
      ph: "7.1",
      status: "Optimal",
      action: "None Required",
    },
    {
      time: "13:45",
      zone: "Zone D",
      ph: "6.8",
      status: "Optimal",
      action: "None Required",
    },
  ]

  return NextResponse.json({ readings })
}

