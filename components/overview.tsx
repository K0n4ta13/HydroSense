"use client"

import { useEffect, useState } from "react"
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts"
import { fetchData } from "@/lib/api"

interface OverviewData {
  temperature: number
  moisture: number
  ph: number
}

interface ApiResponse {
  data: OverviewData[]
}

export function Overview() {
  const [data, setData] = useState<OverviewData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getOverviewData = async () => {
      try {
        setLoading(true)
        const response = await fetchData<ApiResponse>("/api/dashboard/overview")
        setData(response.data)
        setError(null)
      } catch (err) {
        console.error("Error fetching overview data:", err)
        setError("Error al cargar los datos. Por favor, intente de nuevo más tarde.")
      } finally {
        setLoading(false)
      }
    }

    getOverviewData()
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
        <Tooltip />
        <Line type="monotone" dataKey="temperature" stroke="#f97316" strokeWidth={2} />
        <Line type="monotone" dataKey="moisture" stroke="#06b6d4" strokeWidth={2} />
        <Line type="monotone" dataKey="ph" stroke="#8b5cf6" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  )
}

