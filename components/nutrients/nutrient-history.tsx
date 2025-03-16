"use client"

import { useEffect, useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { fetchData } from "@/lib/api"

interface Application {
  date: string
  zone: string
  type: string
  amount: string
  status: string
}

interface ApiResponse {
  applications: Application[]
}

export function NutrientHistory() {
  const [applications, setApplications] = useState<Application[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getHistoryData = async () => {
      try {
        setLoading(true)
        const response = await fetchData<ApiResponse>("/api/nutrients/history")
        setApplications(response.applications)
        setError(null)
      } catch (err) {
        console.error("Error fetching nutrient history:", err)
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
          <TableHead>Tipo</TableHead>
          <TableHead>Cantidad</TableHead>
          <TableHead>Estado</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {applications.map((application) => (
          <TableRow key={`${application.date}-${application.zone}`}>
            <TableCell>{application.date}</TableCell>
            <TableCell>{application.zone}</TableCell>
            <TableCell>{application.type}</TableCell>
            <TableCell>{application.amount}</TableCell>
            <TableCell>
              <Badge variant={application.status === "Programado" ? "default" : "secondary"}>
                {application.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

