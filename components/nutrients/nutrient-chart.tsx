"use client"

import { useEffect, useState } from "react"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { fetchData } from "@/lib/api"

interface ChartData {
  date: string
  Nitrogen: number
  Phosphorus: number
  Potassium: number
}

interface ApiResponse {
  data: ChartData[]
}

export function NutrientChart() {
  const [data, setData] = useState<ChartData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getChartData = async () => {
      try {
        setLoading(true)
        const response = await fetchData<ApiResponse>("/api/nutrients/chart")
        setData(response.data)
        setError(null)
      } catch (err) {
        console.error("Error fetching nutrient chart data:", err)
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
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="Nitrogen" stroke="#22c55e" strokeWidth={2} />
        <Line type="monotone" dataKey="Phosphorus" stroke="#eab308" strokeWidth={2} />
        <Line type="monotone" dataKey="Potassium" stroke="#06b6d4" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  )
}

