"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TemperatureChart } from "@/components/temperature/temperature-chart"
import { TemperatureHistory } from "@/components/temperature/temperature-history"
import { Button } from "@/components/ui/button"
import { CalendarDateRangePicker } from "@/components/shared/date-range-picker"
import { Thermometer, ThermometerSun, AlertTriangle, Snowflake } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { TemperatureGauge } from "@/components/temperature/temperature-gauge"
import { fetchData } from "@/lib/api"

interface GaugeData {
  average: {
    value: number
    label: string
    min: number
    max: number
    units: string
  }
  peak: {
    value: number
    label: string
    min: number
    max: number
    units: string
  }
  low: {
    value: number
    label: string
    min: number
    max: number
    units: string
  }
  variation: {
    value: number
    label: string
    min: number
    max: number
    units: string
  }
}

interface ApiResponse {
  gauges: GaugeData
}

export default function TemperaturePageClient() {
  const [gauges, setGauges] = useState<GaugeData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getGaugeData = async () => {
      try {
        setLoading(true)
        const response = await fetchData<ApiResponse>("/api/temperature/gauges")
        setGauges(response.gauges)
      } catch (err) {
        console.error("Error fetching temperature gauges:", err)
      } finally {
        setLoading(false)
      }
    }

    getGaugeData()
  }, [])

  return (
    <div className="flex-1 space-y-4 p-4 pt-0">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Temperatura</h2>
          <p className="text-muted-foreground">Monitorear y analizar la temperatura en todas las zonas</p>
        </div>
        <div className="flex items-center space-x-2">
          <CalendarDateRangePicker />
          <Button>Descargar Datos</Button>
        </div>
      </div>

      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Alerta de Temperatura Alta</AlertTitle>
        <AlertDescription>
          La temperatura de la Zona C está por encima del rango óptimo (28°C). Considere medidas adicionales de
          enfriamiento.
        </AlertDescription>
      </Alert>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Promedio Actual</CardTitle>
            <Thermometer className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex items-center justify-center h-[200px]">Cargando...</div>
            ) : gauges ? (
              <TemperatureGauge
                value={gauges.average.value}
                label={gauges.average.label}
                min={gauges.average.min}
                max={gauges.average.max}
                units={gauges.average.units}
              />
            ) : null}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pico Diario</CardTitle>
            <ThermometerSun className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex items-center justify-center h-[200px]">Cargando...</div>
            ) : gauges ? (
              <TemperatureGauge
                value={gauges.peak.value}
                label={gauges.peak.label}
                min={gauges.peak.min}
                max={gauges.peak.max}
                units={gauges.peak.units}
              />
            ) : null}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Mínima Diaria</CardTitle>
            <Snowflake className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex items-center justify-center h-[200px]">Cargando...</div>
            ) : gauges ? (
              <TemperatureGauge
                value={gauges.low.value}
                label={gauges.low.label}
                min={gauges.low.min}
                max={gauges.low.max}
                units={gauges.low.units}
              />
            ) : null}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Variación por Zona</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex items-center justify-center h-[200px]">Cargando...</div>
            ) : gauges ? (
              <TemperatureGauge
                value={gauges.variation.value}
                label={gauges.variation.label}
                min={gauges.variation.min}
                max={gauges.variation.max}
                units={gauges.variation.units}
              />
            ) : null}
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Tendencias de Temperatura</CardTitle>
            <CardDescription>Variación de temperatura de 24 horas en todas las zonas</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <TemperatureChart />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Historial de Temperatura</CardTitle>
            <CardDescription>Lecturas recientes de temperatura por zona</CardDescription>
          </CardHeader>
          <CardContent>
            <TemperatureHistory />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

