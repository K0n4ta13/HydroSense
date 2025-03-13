import { NextResponse } from "next/server"

export async function GET() {
  const data = [
    {
      date: "1",
      "Zone A": 7.0,
      "Zone B": 6.5,
      "Zone C": 5.5,
      "Zone D": 6.8,
    },
    {
      date: "5",
      "Zone A": 7.1,
      "Zone B": 6.4,
      "Zone C": 5.4,
      "Zone D": 6.7,
    },
    {
      date: "10",
      "Zone A": 7.1,
      "Zone B": 6.5,
      "Zone C": 5.3,
      "Zone D": 6.8,
    },
    {
      date: "15",
      "Zone A": 7.2,
      "Zone B": 6.6,
      "Zone C": 5.2,
      "Zone D": 6.9,
    },
    {
      date: "20",
      "Zone A": 7.1,
      "Zone B": 6.5,
      "Zone C": 5.2,
      "Zone D": 6.8,
    },
    {
      date: "25",
      "Zone A": 7.1,
      "Zone B": 6.5,
      "Zone C": 5.2,
      "Zone D": 6.8,
    },
    {
      date: "30",
      "Zone A": 7.1,
      "Zone B": 6.5,
      "Zone C": 5.2,
      "Zone D": 6.8,
    },
  ]

  return NextResponse.json({ data })
}

