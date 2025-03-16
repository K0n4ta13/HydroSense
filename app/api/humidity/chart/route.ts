import { NextResponse } from "next/server"

export async function GET() {
  const data = [
    {
      time: "00:00",
      "Zone A": 72,
      "Zone B": 65,
      "Zone C": 80,
      "Zone D": 70,
    },
    {
      time: "04:00",
      "Zone A": 75,
      "Zone B": 68,
      "Zone C": 82,
      "Zone D": 72,
    },
    {
      time: "08:00",
      "Zone A": 73,
      "Zone B": 66,
      "Zone C": 83,
      "Zone D": 71,
    },
    {
      time: "12:00",
      "Zone A": 70,
      "Zone B": 63,
      "Zone C": 85,
      "Zone D": 68,
    },
    {
      time: "16:00",
      "Zone A": 75,
      "Zone B": 65,
      "Zone C": 84,
      "Zone D": 70,
    },
    {
      time: "20:00",
      "Zone A": 77,
      "Zone B": 67,
      "Zone C": 85,
      "Zone D": 73,
    },
  ]

  return NextResponse.json({ data })
}

