"use client"

import { useEffect, useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { fetchData } from "@/lib/api"

interface Reading {
  time: string
  zone: string
  intensity: string
  exposure: string
  status: string
}

interface ApiResponse {
  readings: Reading[]
}

export function SunlightHistory() {
  const [readings, setReadings] = useState<Reading[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getHistoryData = async () => {
      try {
        setLoading(true)
        const response = await fetchData<ApiResponse>("/api/sunlight/history")
        setReadings(response.readings)
        setError(null)
      } catch (err) {
        console.error("Error fetching sunlight history:", err)
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
          <TableHead>Intensidad</TableHead>
          <TableHead>Exposición</TableHead>
          <TableHead>Estado</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {readings.map((reading) => (
          <TableRow key={`${reading.time}-${reading.zone}`}>
            <TableCell>{reading.time}</TableCell>
            <TableCell>{reading.zone}</TableCell>
            <TableCell>{reading.intensity}</TableCell>
            <TableCell>{reading.exposure}</TableCell>
            <TableCell>
              <Badge variant={reading.status === "Low" ? "destructive" : "secondary"}>
                {reading.status === "Low" ? "Bajo" : "Óptimo"}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

