import { NextResponse } from "next/server"

export async function GET() {
  const data = [
    {
      date: "1",
      Nitrogen: 175,
      Phosphorus: 42,
      Potassium: 145,
    },
    {
      date: "5",
      Nitrogen: 180,
      Phosphorus: 45,
      Potassium: 150,
    },
    {
      date: "10",
      Nitrogen: 178,
      Phosphorus: 43,
      Potassium: 148,
    },
    {
      date: "15",
      Nitrogen: 182,
      Phosphorus: 44,
      Potassium: 152,
    },
    {
      date: "20",
      Nitrogen: 180,
      Phosphorus: 45,
      Potassium: 150,
    },
    {
      date: "25",
      Nitrogen: 185,
      Phosphorus: 46,
      Potassium: 155,
    },
    {
      date: "30",
      Nitrogen: 180,
      Phosphorus: 45,
      Potassium: 150,
    },
  ]

  return NextResponse.json({ data })
}

