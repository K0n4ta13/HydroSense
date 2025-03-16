"use client"

import { useEffect, useState } from "react"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { fetchData } from "@/lib/api"

interface ChartData {
  date: string
  "Zone A": number
  "Zone B": number
  "Zone C": number
  "Zone D": number
}

interface ApiResponse {
  data: ChartData[]
}

export function PhChart() {
  const [data, setData] = useState<ChartData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getChartData = async () => {
      try {
        setLoading(true)
        const response = await fetchData<ApiResponse>("/api/ph/chart")
        setData(response.data)
        setError(null)
      } catch (err) {
        console.error("Error fetching pH chart data:", err)
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
        <YAxis domain={[5, 8]} />
        <Tooltip />
        <Line type="monotone" dataKey="Zone A" stroke="#eab308" strokeWidth={2} />
        <Line type="monotone" dataKey="Zone B" stroke="#84cc16" strokeWidth={2} />
        <Line type="monotone" dataKey="Zone C" stroke="#dc2626" strokeWidth={2} />
        <Line type="monotone" dataKey="Zone D" stroke="#8b5cf6" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  )
}

