import { NextResponse } from "next/server"

export async function GET() {
  const gauges = {
    average: {
      value: 23.5,
      label: "Average",
      min: 15,
      max: 35,
      units: "°C",
    },
    peak: {
      value: 28,
      label: "Peak",
      min: 15,
      max: 35,
      units: "°C",
    },
    low: {
      value: 19,
      label: "Low",
      min: 15,
      max: 35,
      units: "°C",
    },
    variation: {
      value: 4.2,
      label: "Variation",
      min: 0,
      max: 10,
      units: "°C",
    },
  }

  return NextResponse.json({ gauges })
}

