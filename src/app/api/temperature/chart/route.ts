import { NextResponse } from "next/server"

export async function GET() {
  const data = [
    {
      time: "00:00",
      "Zone A": 20,
      "Zone B": 21,
      "Zone C": 22,
      "Zone D": 20,
    },
    {
      time: "04:00",
      "Zone A": 19,
      "Zone B": 20,
      "Zone C": 21,
      "Zone D": 19,
    },
    {
      time: "08:00",
      "Zone A": 21,
      "Zone B": 22,
      "Zone C": 24,
      "Zone D": 20,
    },
    {
      time: "12:00",
      "Zone A": 23,
      "Zone B": 24,
      "Zone C": 26,
      "Zone D": 22,
    },
    {
      time: "16:00",
      "Zone A": 25,
      "Zone B": 26,
      "Zone C": 28,
      "Zone D": 24,
    },
    {
      time: "20:00",
      "Zone A": 22,
      "Zone B": 23,
      "Zone C": 25,
      "Zone D": 21,
    },
    {
      time: "24:00",
      "Zone A": 21,
      "Zone B": 22,
      "Zone C": 23,
      "Zone D": 20,
    },
  ]

  return NextResponse.json({ data })
}

