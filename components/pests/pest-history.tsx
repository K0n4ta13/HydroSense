"use client"

import { useEffect, useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { fetchData } from "@/lib/api"

interface Incident {
  date: string
  zone: string
  pest: string
  severity: string
  status: string
}

interface ApiResponse {
  incidents: Incident[]
}

export function PestHistory() {
  const [incidents, setIncidents] = useState<Incident[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getHistoryData = async () => {
      try {
        setLoading(true)
        const response = await fetchData<ApiResponse>("/api/pests/history")
        setIncidents(response.incidents)
        setError(null)
      } catch (err) {
        console.error("Error fetching pest history:", err)
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
          <TableHead>Fecha</TableHead>
          <TableHead>Zona</TableHead>
          <TableHead>Plaga</TableHead>
          <TableHead>Severidad</TableHead>
          <TableHead>Estado</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {incidents.map((incident) => (
          <TableRow key={`${incident.date}-${incident.zone}`}>
            <TableCell>{incident.date}</TableCell>
            <TableCell>{incident.zone}</TableCell>
            <TableCell>{incident.pest}</TableCell>
            <TableCell>{incident.severity}</TableCell>
            <TableCell>
              <Badge
                variant={
                  incident.status === "Tratamiento Necesario"
                    ? "destructive"
                    : incident.status === "En Tratamiento"
                      ? "warning"
                      : "secondary"
                }
              >
                {incident.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

