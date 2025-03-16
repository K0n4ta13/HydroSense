"use client"

import { useEffect, useState } from "react"
import { TableHeader } from "@/components/ui/table"
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { fetchData } from "@/lib/api"

interface Reading {
  time: string
  zone: string
  moisture: string
  status: string
  action: string
}

interface ApiResponse {
  readings: Reading[]
}

export function MoistureHistory() {
  const [readings, setReadings] = useState<Reading[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getHistoryData = async () => {
      try {
        setLoading(true)
        const response = await fetchData<ApiResponse>("/api/moisture/history")
        setReadings(response.readings)
        setError(null)
      } catch (err) {
        console.error("Error fetching moisture history:", err)
        setError("Error al cargar los datos. Por favor, intente de nuevo más tarde.")
      } finally {
        setLoading(false)
      }
    }

    getHistoryData()
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
          <TableHead>Hora</TableHead>
          <TableHead>Zona</TableHead>
          <TableHead>Humedad</TableHead>
          <TableHead>Estado</TableHead>
          <TableHead>Acción</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {readings.map((reading) => (
          <TableRow key={`${reading.time}-${reading.zone}`}>
            <TableCell>{reading.time}</TableCell>
            <TableCell>{reading.zone}</TableCell>
            <TableCell>{reading.moisture}</TableCell>
            <TableCell>
              <Badge
                variant={
                  reading.status === "Low" ? "destructive" : reading.status === "Moderate" ? "warning" : "secondary"
                }
              >
                {reading.status === "Low"
                  ? "Bajo"
                  : reading.status === "Optimal"
                    ? "Óptimo"
                    : reading.status === "Moderate"
                      ? "Moderado"
                      : reading.status}
              </Badge>
            </TableCell>
            <TableCell>
              {reading.action === "Irrigation Scheduled"
                ? "Riego Programado"
                : reading.action === "None Required"
                  ? "No Requerida"
                  : reading.action === "Monitoring"
                    ? "En Monitoreo"
                    : reading.action}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

