import { NextResponse } from "next/server"

export async function GET() {
  const data = [
    {
      time: "00:00",
      "Zone A": 72,
      "Zone B": 48,
      "Zone C": 58,
      "Zone D": 78,
    },
    {
      time: "04:00",
      "Zone A": 70,
      "Zone B": 45,
      "Zone C": 55,
      "Zone D": 75,
    },
    {
      time: "08:00",
      "Zone A": 68,
      "Zone B": 43,
      "Zone C": 52,
      "Zone D": 73,
    },
    {
      time: "12:00",
      "Zone A": 65,
      "Zone B": 40,
      "Zone C": 50,
      "Zone D": 70,
    },
    {
      time: "16:00",
      "Zone A": 70,
      "Zone B": 45,
      "Zone C": 55,
      "Zone D": 75,
    },
    {
      time: "20:00",
      "Zone A": 75,
      "Zone B": 50,
      "Zone C": 60,
      "Zone D": 80,
    },
  ]

  return NextResponse.json({ data })
}

