import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { HumidityChart } from "@/components/humidity/humidity-chart"
import { HumidityHistory } from "@/components/humidity/humidity-history"
import { Button } from "@/components/ui/button"
import { CalendarDateRangePicker } from "@/components/shared/date-range-picker"
import { Badge } from "@/components/ui/badge"
import { Droplets, Wind, AlertTriangle, Thermometer } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export const metadata: Metadata = {
  title: "Monitoreo de Humedad",
  description: "Sistema de monitoreo de humedad agrícola",
}

export default function HumidityPage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-0">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Humedad</h2>
          <p className="text-muted-foreground">Monitorear y controlar los niveles de humedad</p>
        </div>
        <div className="flex items-center space-x-2">
          <CalendarDateRangePicker />
          <Button>Descargar Datos</Button>
        </div>
      </div>

      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Alerta de Humedad Alta</AlertTitle>
        <AlertDescription>
          La humedad de la Zona C supera el 85%. Aumentando la ventilación para prevenir enfermedades.
        </AlertDescription>
      </Alert>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Humedad Promedio</CardTitle>
            <Droplets className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">75%</div>
            <p className="text-xs text-muted-foreground">+5% desde ayer</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Punto de Rocío</CardTitle>
            <Thermometer className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18°C</div>
            <p className="text-xs text-muted-foreground">Riesgo moderado de condensación</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ventilación</CardTitle>
            <Wind className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              <Badge>Activa</Badge>
            </div>
            <p className="text-xs text-muted-foreground">Funcionando al 75% de capacidad</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rango Diario</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">65-85%</div>
            <p className="text-xs text-muted-foreground">Alta variación</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Tendencias de Humedad</CardTitle>
            <CardDescription>Variación de humedad de 24 horas en todas las zonas</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <HumidityChart />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Lecturas Recientes</CardTitle>
            <CardDescription>Últimas mediciones de humedad por zona</CardDescription>
          </CardHeader>
          <CardContent>
            <HumidityHistory />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Análisis por Zona</CardTitle>
            <CardDescription>Humedad actual por zona</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Zona A</div>
                  <div className="text-xs text-muted-foreground">Moderada</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">75%</div>
                  <Badge variant="secondary">Óptimo</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Zona B</div>
                  <div className="text-xs text-muted-foreground">Baja</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">65%</div>
                  <Badge variant="secondary">Óptimo</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Zona C</div>
                  <div className="text-xs text-muted-foreground">Alta</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">85%</div>
                  <Badge variant="destructive">Alerta</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Zona D</div>
                  <div className="text-xs text-muted-foreground">Moderada</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">70%</div>
                  <Badge variant="secondary">Óptimo</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Rangos Óptimos</CardTitle>
            <CardDescription>Requisitos de humedad por cultivo</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Tomates</div>
                  <div className="text-xs text-muted-foreground">Zona A</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">65-80%</div>
                  <Badge variant="secondary">Actual: 75%</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Lechuga</div>
                  <div className="text-xs text-muted-foreground">Zona B</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">60-70%</div>
                  <Badge variant="secondary">Actual: 65%</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Pimientos</div>
                  <div className="text-xs text-muted-foreground">Zona C</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">65-75%</div>
                  <Badge variant="destructive">Actual: 85%</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Hierbas</div>
                  <div className="text-xs text-muted-foreground">Zona D</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">60-75%</div>
                  <Badge variant="secondary">Actual: 70%</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Control Ambiental</CardTitle>
            <CardDescription>Ventilación y deshumidificación</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Ventilación Principal</div>
                  <div className="text-xs text-muted-foreground">Todas las Zonas</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">75% Potencia</div>
                  <Badge>Activa</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Deshumidificador</div>
                  <div className="text-xs text-muted-foreground">Zona C</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">100% Potencia</div>
                  <Badge>Activa</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Circulación de Aire</div>
                  <div className="text-xs text-muted-foreground">Todas las Zonas</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">50% Potencia</div>
                  <Badge variant="secondary">Activa</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Próximo Mantenimiento</div>
                  <div className="text-xs text-muted-foreground">Revisión del Sistema</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">2 días</div>
                  <Badge variant="secondary">Programado</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

