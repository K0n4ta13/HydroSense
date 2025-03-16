"use client"

import { useEffect, useState } from "react"
import { fetchData } from "@/lib/api"

interface GaugeProps {
  value: number
  min?: number
  max?: number
  label: string
  units?: string
}

interface GaugeData {
  average: GaugeProps
  peak: GaugeProps
  low: GaugeProps
  variation: GaugeProps
}

interface ApiResponse {
  gauges: GaugeData
}

export function TemperatureGauge({ value, min = 0, max = 50, label, units = "°C" }: GaugeProps) {
  // Calculate the percentage for the gauge
  const percentage = ((value - min) / (max - min)) * 100

  // Calculate the rotation for the needle
  const rotation = percentage * 1.8 - 90 // 1.8 degrees per percentage point, -90 to start at left

  // Calculate color based on value
  const getColor = () => {
    if (value < 15) return "text-blue-500"
    if (value > 30) return "text-red-500"
    return "text-green-500"
  }

  return (
    <div className="relative w-full aspect-square max-w-[200px] mx-auto">
      {/* Gauge background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full rounded-full border-8 border-muted" />
      </div>

      {/* Temperature marks */}
      <div className="absolute inset-0">
        {Array.from({ length: 7 }).map((_, i) => {
          const markRotation = -90 + i * 30
          return (
            <div key={i} className="absolute w-full h-full" style={{ transform: `rotate(${markRotation}deg)` }}>
              <div
                className="absolute left-1/2 h-2 w-0.5 bg-muted-foreground/50 origin-bottom"
                style={{ top: "10%" }}
              />
            </div>
          )
        })}
      </div>

      {/* Needle */}
      <div
        className="absolute inset-0 transition-transform duration-500"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <div className="w-0.5 h-[45%] bg-primary mx-auto origin-bottom" />
      </div>

      {/* Center point */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-primary" />
      </div>

      {/* Value display */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className={`text-2xl font-bold ${getColor()}`}>
          {value}
          {units}
        </div>
        <div className="text-sm text-muted-foreground">{label}</div>
      </div>
    </div>
  )
}

export function TemperatureGauges() {
  const [gauges, setGauges] = useState<GaugeData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getGaugeData = async () => {
      try {
        setLoading(true)
        const response = await fetchData<ApiResponse>("/api/temperature/gauges")
        setGauges(response.gauges)
        setError(null)
      } catch (err) {
        console.error("Error fetching temperature gauges:", err)
        setError("Error al cargar los datos. Por favor, intente de nuevo más tarde.")
      } finally {
        setLoading(false)
      }
    }

    getGaugeData()
  }, [])

  if (loading) {
    return <div className="flex items-center justify-center h-[200px]">Cargando datos...</div>
  }

  if (error) {
    return <div className="flex items-center justify-center h-[200px] text-red-500">{error}</div>
  }

  if (!gauges) {
    return null
  }

  return (
    <div className="grid grid-cols-1 gap-4">
      <TemperatureGauge
        value={gauges.average.value}
        label={gauges.average.label}
        min={gauges.average.min}
        max={gauges.average.max}
        units={gauges.average.units}
      />
    </div>
  )
}

