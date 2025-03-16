import { NextResponse } from "next/server"

export async function GET() {
  const data = [
    {
      date: "1",
      Aphids: 2,
      "Spider Mites": 1,
      Whiteflies: 0,
      Thrips: 1,
    },
    {
      date: "5",
      Aphids: 3,
      "Spider Mites": 2,
      Whiteflies: 1,
      Thrips: 0,
    },
    {
      date: "10",
      Aphids: 4,
      "Spider Mites": 2,
      Whiteflies: 0,
      Thrips: 0,
    },
    {
      date: "15",
      Aphids: 3,
      "Spider Mites": 3,
      Whiteflies: 1,
      Thrips: 1,
    },
    {
      date: "20",
      Aphids: 5,
      "Spider Mites": 2,
      Whiteflies: 0,
      Thrips: 0,
    },
    {
      date: "25",
      Aphids: 4,
      "Spider Mites": 3,
      Whiteflies: 0,
      Thrips: 1,
    },
    {
      date: "30",
      Aphids: 3,
      "Spider Mites": 2,
      Whiteflies: 1,
      Thrips: 0,
    },
  ]

  return NextResponse.json({ data })
}

