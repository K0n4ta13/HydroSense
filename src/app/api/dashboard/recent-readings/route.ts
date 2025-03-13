import { NextResponse } from "next/server"

export async function GET() {
  const readings = [
    {
      zone: "Zone A",
      temperature: "23°C",
      moisture: "68%",
      ph: "6.8",
      timestamp: "2 minutes ago",
    },
    {
      zone: "Zone B",
      temperature: "22°C",
      moisture: "65%",
      ph: "6.7",
      timestamp: "5 minutes ago",
    },
    {
      zone: "Zone C",
      temperature: "24°C",
      moisture: "70%",
      ph: "6.9",
      timestamp: "8 minutes ago",
    },
    {
      zone: "Zone D",
      temperature: "23°C",
      moisture: "67%",
      ph: "6.8",
      timestamp: "10 minutes ago",
    },
  ]

  return NextResponse.json({ readings })
}

