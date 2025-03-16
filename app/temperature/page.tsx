import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TemperatureChart } from "@/components/temperature/temperature-chart"
import { TemperatureHistory } from "@/components/temperature/temperature-history"
import { Button } from "@/components/ui/button"
import { CalendarDateRangePicker } from "@/components/shared/date-range-picker"
import { Badge } from "@/components/ui/badge"
import { Thermometer, ThermometerSun, AlertTriangle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export const metadata: Metadata = {
  title: "Monitoreo de Temperatura",
  description: "Sistema de monitoreo de temperatura agrícola",
}

export default function TemperaturePage() {
  return (
      <div className="flex-1 space-y-4 p-2">
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
              <div className="text-2xl font-bold">23.5°C</div>
              <p className="text-xs text-muted-foreground">+0.5°C desde la última hora</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pico Diario</CardTitle>
              <ThermometerSun className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">28°C</div>
              <p className="text-xs text-muted-foreground">Registrado a las 2:30 PM</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Estado</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                <Badge variant="destructive">Por Encima del Óptimo</Badge>
              </div>
              <p className="text-xs text-muted-foreground">Rango óptimo: 20-25°C</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Variación de 24h</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">±4.2°C</div>
              <p className="text-xs text-muted-foreground">Mín: 19°C | Máx: 28°C</p>
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

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Análisis de Zonas</CardTitle>
              <CardDescription>Distribución de temperatura por zona</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="text-sm font-medium">Zona A</div>
                    <div className="text-xs text-muted-foreground">Rango Normal</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">23°C</div>
                    <Badge variant="secondary">Óptimo</Badge>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="text-sm font-medium">Zona B</div>
                    <div className="text-xs text-muted-foreground">Rango Normal</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">24°C</div>
                    <Badge variant="secondary">Óptimo</Badge>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="text-sm font-medium">Zona C</div>
                    <div className="text-xs text-muted-foreground">Alta Temperatura</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">28°C</div>
                    <Badge variant="destructive">Alerta</Badge>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="text-sm font-medium">Zona D</div>
                    <div className="text-xs text-muted-foreground">Rango Normal</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">22°C</div>
                    <Badge variant="secondary">Óptimo</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Rangos Óptimos</CardTitle>
              <CardDescription>Requisitos de temperatura por cultivo</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="text-sm font-medium">Tomates</div>
                    <div className="text-xs text-muted-foreground">Zona A</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">20-25°C</div>
                    <Badge variant="outline">Actual: 23°C</Badge>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="text-sm font-medium">Lechuga</div>
                    <div className="text-xs text-muted-foreground">Zona B</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">15-20°C</div>
                    <Badge variant="destructive">Actual: 24°C</Badge>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="text-sm font-medium">Pimientos</div>
                    <div className="text-xs text-muted-foreground">Zona C</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">20-25°C</div>
                    <Badge variant="destructive">Actual: 28°C</Badge>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="text-sm font-medium">Pepinos</div>
                    <div className="text-xs text-muted-foreground">Zona D</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">20-25°C</div>
                    <Badge variant="outline">Actual: 22°C</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Pronóstico de Temperatura</CardTitle>
              <CardDescription>Temperaturas previstas para las próximas 24h</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="text-sm font-medium">Mañana</div>
                    <div className="text-xs text-muted-foreground">6:00 AM - 12:00 PM</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">20-22°C</div>
                    <Badge variant="secondary">Óptimo</Badge>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="text-sm font-medium">Tarde</div>
                    <div className="text-xs text-muted-foreground">12:00 PM - 6:00 PM</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">24-26°C</div>
                    <Badge variant="outline">Precaución</Badge>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="text-sm font-medium">Noche</div>
                    <div className="text-xs text-muted-foreground">6:00 PM - 12:00 AM</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">21-23°C</div>
                    <Badge variant="secondary">Óptimo</Badge>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="text-sm font-medium">Madrugada</div>
                    <div className="text-xs text-muted-foreground">12:00 AM - 6:00 AM</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">18-20°C</div>
                    <Badge variant="secondary">Óptimo</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
  )
}