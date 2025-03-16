"use client"

import { useEffect, useState } from "react"
import { TableHeader } from "@/components/ui/table"
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table"
import { fetchData } from "@/lib/api"

interface Reading {
  zone: string
  temperature: string
  moisture: string
  ph: string
  timestamp: string
}

interface ApiResponse {
  readings: Reading[]
}

export function RecentReadings() {
  const [readings, setReadings] = useState<Reading[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getRecentReadings = async () => {
      try {
        setLoading(true)
        const response = await fetchData<ApiResponse>("/api/dashboard/recent-readings")
        setReadings(response.readings)
        setError(null)
      } catch (err) {
        console.error("Error fetching recent readings:", err)
        setError("Error al cargar los datos. Por favor, intente de nuevo más tarde.")
      } finally {
        setLoading(false)
      }
    }

    getRecentReadings()
  }, [])

  if (loading) {
    return <div className="flex items-center justify-center h-[200px]">Cargando datos...</div>
  }

  if (error) {
    return <div className="flex items-center justify-center h-[200px] text-red-500">{error}</div>
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Zona</TableHead>
          <TableHead>Temp</TableHead>
          <TableHead>Humedad</TableHead>
          <TableHead>pH</TableHead>
          <TableHead>Hora</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {readings.map((reading) => (
          <TableRow key={reading.zone}>
            <TableCell className="font-medium">{reading.zone}</TableCell>
            <TableCell>{reading.temperature}</TableCell>
            <TableCell>{reading.moisture}</TableCell>
            <TableCell>{reading.ph}</TableCell>
            <TableCell className="text-muted-foreground">
              {reading.timestamp.replace("minutes ago", "minutos atrás")}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

