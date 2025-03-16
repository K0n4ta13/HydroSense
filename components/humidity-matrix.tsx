"use client"

import React from "react"

interface HumidityCell {
  temp: number
  humidity: number
  risk: "low" | "moderate" | "high" | "critical"
}

const riskColors = {
  low: "bg-green-500/20 border-green-500",
  moderate: "bg-yellow-500/20 border-yellow-500",
  high: "bg-orange-500/20 border-orange-500",
  critical: "bg-red-500/20 border-red-500",
}

export function HumidityMatrix({
  data,
  current,
}: {
  data: HumidityCell[][]
  current: { temp: number; humidity: number }
}) {
  return (
    <div className="relative w-full overflow-x-auto">
      <div className="min-w-[600px]">
        {/* Y-axis (Temperature) */}
        <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col justify-between items-end pr-2">
          {Array.from({ length: 11 }).map((_, i) => (
            <div key={i} className="text-xs text-muted-foreground">
              {35 - i * 2}°C
            </div>
          ))}
        </div>

        {/* X-axis (Humidity) */}
        <div className="absolute left-12 bottom-0 right-0 h-6 flex justify-between items-start pl-2">
          {Array.from({ length: 11 }).map((_, i) => (
            <div key={i} className="text-xs text-muted-foreground">
              {i * 10}%
            </div>
          ))}
        </div>

        {/* Matrix grid */}
        <div className="ml-12 mb-6">
          <div className="grid grid-cols-10 gap-px">
            {data.map((row, i) => (
              <React.Fragment key={i}>
                {row.map((cell, j) => {
                  const isCurrent =
                    Math.abs(cell.temp - current.temp) < 1 && Math.abs(cell.humidity - current.humidity) < 5

                  return (
                    <div
                      key={`${i}-${j}`}
                      className={`
                        w-12 h-12 border-2 relative
                        ${riskColors[cell.risk]}
                        ${isCurrent ? "ring-2 ring-primary" : ""}
                      `}
                    >
                      {isCurrent && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                        </div>
                      )}
                    </div>
                  )
                })}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="absolute top-0 right-0 flex flex-col gap-2">
          {Object.entries(riskColors).map(([risk, color]) => (
            <div key={risk} className="flex items-center gap-2">
              <div className={`w-4 h-4 ${color} border-2`} />
              <span className="text-xs text-muted-foreground capitalize">
                {risk === "low" ? "Bajo" : risk === "moderate" ? "Moderado" : risk === "high" ? "Alto" : "Crítico"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

