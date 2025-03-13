import { NextResponse } from "next/server"

export async function GET() {
  const data = [
    {
      time: "06:00",
      "Zone A": 20000,
      "Zone B": 15000,
      "Zone C": 18000,
      "Zone D": 16000,
    },
    {
      time: "09:00",
      "Zone A": 45000,
      "Zone B": 35000,
      "Zone C": 42000,
      "Zone D": 38000,
    },
    {
      time: "12:00",
      "Zone A": 85000,
      "Zone B": 65000,
      "Zone C": 80000,
      "Zone D": 70000,
    },
    {
      time: "15:00",
      "Zone A": 65000,
      "Zone B": 45000,
      "Zone C": 60000,
      "Zone D": 50000,
    },
    {
      time: "18:00",
      "Zone A": 30000,
      "Zone B": 25000,
      "Zone C": 28000,
      "Zone D": 26000,
    },
    {
      time: "20:00",
      "Zone A": 5000,
      "Zone B": 4000,
      "Zone C": 4500,
      "Zone D": 4200,
    },
  ]

  return NextResponse.json({ data })
}

