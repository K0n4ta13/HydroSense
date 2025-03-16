"use client"

import { useEffect, useState } from "react"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { fetchData } from "@/lib/api"

interface ChartData {
  time: string
  "Zone A": number
  "Zone B": number
  "Zone C": number
  "Zone D": number
}

interface ApiResponse {
  data: ChartData[]
}

export function TemperatureChart() {
  const [data, setData] = useState<ChartData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getChartData = async () => {
      try {
        setLoading(true)
        const response = await fetchData<ApiResponse>("/api/temperature/chart")
        setData(response.data)
        setError(null)
      } catch (err) {
        console.error("Error fetching temperature chart data:", err)
        setError("Error al cargar los datos. Por favor, intente de nuevo más tarde.")
      } finally {
        setLoading(false)
      }
    }

    getChartData()
  }, [])

  if (loading) {
    return <div className="flex items-center justify-center h-[350px]">Cargando datos...</div>
  }

  if (error) {
    return <div className="flex items-center justify-center h-[350px] text-red-500">{error}</div>
  }

  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="Zone A" stroke="#f97316" strokeWidth={2} />
        <Line type="monotone" dataKey="Zone B" stroke="#06b6d4" strokeWidth={2} />
        <Line type="monotone" dataKey="Zone C" stroke="#8b5cf6" strokeWidth={2} />
        <Line type="monotone" dataKey="Zone D" stroke="#22c55e" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  )
}

