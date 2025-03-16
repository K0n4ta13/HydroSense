import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SunlightChart } from "@/components/sunlight-chart"
import { SunlightHistory } from "@/components/sunlight-history"
import { Button } from "@/components/ui/button"
import { CalendarDateRangePicker } from "@/components/date-range-picker"
import { Badge } from "@/components/ui/badge"
import { Sun, Sunset, AlertTriangle, Cloud } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export const metadata: Metadata = {
  title: "Luz Solar",
  description: "Agricultural sunlight exposure monitoring system",
}

export default function SunlightPage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-0">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Luz Solar</h2>
          <p className="text-muted-foreground">Monitorear y analizar la exposición a la luz solar</p>
        </div>
        <div className="flex items-center space-x-2">
          <CalendarDateRangePicker />
          <Button>Descargar Datos</Button>
        </div>
      </div>

      <Alert>
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Alerta de Luz Baja</AlertTitle>
        <AlertDescription>
          La Zona B está recibiendo luz insuficiente. Considere ajustar las estructuras de sombra.
        </AlertDescription>
      </Alert>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Exposición Diaria</CardTitle>
            <Sun className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7.5h</div>
            <p className="text-xs text-muted-foreground">+1.2h desde ayer</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Intensidad de Luz</CardTitle>
            <Sunset className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85,000 lux</div>
            <p className="text-xs text-muted-foreground">Pico a las 12:30 PM</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Índice UV</CardTitle>
            <Cloud className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6.8</div>
            <p className="text-xs text-muted-foreground">Exposición moderada</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cobertura de Nubes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">25%</div>
            <p className="text-xs text-muted-foreground">Parcialmente nublado</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Patrón de Luz Diario</CardTitle>
            <CardDescription>Intensidad de luz solar de 24 horas en todas las zonas</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <SunlightChart />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Registro de Exposición a la Luz</CardTitle>
            <CardDescription>Mediciones recientes de luz por zona</CardDescription>
          </CardHeader>
          <CardContent>
            <SunlightHistory />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Análisis por Zona</CardTitle>
            <CardDescription>Distribución de luz por zona</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Zone A</div>
                  <div className="text-xs text-muted-foreground">Sol Pleno</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">8.2h</div>
                  <Badge variant="secondary">Óptimo</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Zone B</div>
                  <div className="text-xs text-muted-foreground">Sombra Parcial</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">5.5h</div>
                  <Badge variant="destructive">Insuficiente</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Zone C</div>
                  <div className="text-xs text-muted-foreground">Sol Pleno</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">7.8h</div>
                  <Badge variant="secondary">Óptimo</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Zone D</div>
                  <div className="text-xs text-muted-foreground">Luz Filtrada</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">6.5h</div>
                  <Badge variant="secondary">Óptimo</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Requisitos de Luz</CardTitle>
            <CardDescription>Exposición óptima por cultivo</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Tomatoes</div>
                  <div className="text-xs text-muted-foreground">Zone A</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">8-10h</div>
                  <Badge variant="outline">Actual: 8.2h</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Lettuce</div>
                  <div className="text-xs text-muted-foreground">Zone B</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">6-8h</div>
                  <Badge variant="destructive">Actual: 5.5h</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Peppers</div>
                  <div className="text-xs text-muted-foreground">Zone C</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">6-8h</div>
                  <Badge variant="outline">Actual: 7.8h</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Herbs</div>
                  <div className="text-xs text-muted-foreground">Zone D</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">4-6h</div>
                  <Badge variant="outline">Actual: 6.5h</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Pronóstico Diario</CardTitle>
            <CardDescription>Condiciones de luz esperadas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Mañana</div>
                  <div className="text-xs text-muted-foreground">6:00 AM - 12:00 PM</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">Despejado</div>
                  <Badge variant="secondary">Alta Exposición</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Tarde</div>
                  <div className="text-xs text-muted-foreground">12:00 PM - 6:00 PM</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">Parcialmente Nublado</div>
                  <Badge variant="secondary">Moderado</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Noche</div>
                  <div className="text-xs text-muted-foreground">6:00 PM - Sunset</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">Despejado</div>
                  <Badge variant="secondary">Baja Exposición</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Pico de Índice UV</div>
                  <div className="text-xs text-muted-foreground">12:30 PM</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">6.8</div>
                  <Badge variant="warning">Moderado</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

