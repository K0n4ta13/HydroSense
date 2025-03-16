"use client"

import { useEffect, useState } from "react"
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { fetchData } from "@/lib/api"

interface ChartData {
  date: string
  Aphids: number
  "Spider Mites": number
  Whiteflies: number
  Thrips: number
}

interface ApiResponse {
  data: ChartData[]
}

export function PestChart() {
  const [data, setData] = useState<ChartData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getChartData = async () => {
      try {
        setLoading(true)
        const response = await fetchData<ApiResponse>("/api/pests/chart")
        setData(response.data)
        setError(null)
      } catch (err) {
        console.error("Error fetching pest chart data:", err)
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
      <BarChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="Aphids" fill="#ef4444" />
        <Bar dataKey="Spider Mites" fill="#f97316" />
        <Bar dataKey="Whiteflies" fill="#84cc16" />
        <Bar dataKey="Thrips" fill="#06b6d4" />
      </BarChart>
    </ResponsiveContainer>
  )
}

