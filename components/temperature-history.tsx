"use client"

import { useEffect, useState } from "react"
import { TableHeader } from "@/components/ui/table"
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { fetchData } from "@/lib/api"

interface Reading {
  time: string
  zone: string
  temperature: string
  status: string
  trend: string
}

interface ApiResponse {
  readings: Reading[]
}

export function TemperatureHistory() {
  const [readings, setReadings] = useState<Reading[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getHistoryData = async () => {
      try {
        setLoading(true)
        const response = await fetchData<ApiResponse>("/api/temperature/history")
        setReadings(response.readings)
        setError(null)
      } catch (err) {
        console.error("Error fetching temperature history:", err)
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
          <TableHead>Temperatura</TableHead>
          <TableHead>Estado</TableHead>
          <TableHead>Tendencia</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {readings.map((reading) => (
          <TableRow key={`${reading.time}-${reading.zone}`}>
            <TableCell>{reading.time}</TableCell>
            <TableCell>{reading.zone}</TableCell>
            <TableCell>{reading.temperature}</TableCell>
            <TableCell>
              <Badge variant={reading.status === "High" ? "destructive" : "secondary"}>
                {reading.status === "High" ? "Alto" : "Normal"}
              </Badge>
            </TableCell>
            <TableCell>{reading.trend}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

