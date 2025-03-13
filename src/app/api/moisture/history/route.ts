import { NextResponse } from "next/server"

export async function GET() {
  const readings = [
    {
      time: "14:30",
      zone: "Zone B",
      moisture: "45%",
      status: "Low",
      action: "Irrigation Scheduled",
    },
    {
      time: "14:15",
      zone: "Zone A",
      moisture: "70%",
      status: "Optimal",
      action: "None Required",
    },
    {
      time: "14:00",
      zone: "Zone C",
      moisture: "55%",
      status: "Moderate",
      action: "Monitoring",
    },
    {
      time: "13:45",
      zone: "Zone D",
      moisture: "75%",
      status: "Optimal",
      action: "None Required",
    },
  ]

  return NextResponse.json({ readings })
}

