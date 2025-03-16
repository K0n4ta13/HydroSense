import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MoistureChart } from "@/components/moisture/moisture-chart"
import { MoistureHistory } from "@/components/moisture/moisture-history"
import { Button } from "@/components/ui/button"
import { CalendarDateRangePicker } from "@/components/shared/date-range-picker"
import { Badge } from "@/components/ui/badge"
import { Droplets, AlertTriangle, Timer } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"

export const metadata: Metadata = {
  title: "Humedad del Suelo",
  description: "Sistema de monitoreo de humedad del suelo agrícola",
}

export default function MoisturePage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-0">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Humedad del Suelo</h2>
          <p className="text-muted-foreground">Monitorear y controlar los niveles de humedad del suelo</p>
        </div>
        <div className="flex items-center space-x-2">
          <CalendarDateRangePicker />
          <Button>Descargar Datos</Button>
        </div>
      </div>

      <Alert>
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Alerta de Humedad Baja</AlertTitle>
        <AlertDescription>
          Los niveles de humedad de la Zona B están por debajo del 45%. Riego programado para las 15:00.
        </AlertDescription>
      </Alert>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Humedad Promedio</CardTitle>
            <Droplets className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">65%</div>
            <Progress value={65} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">-2% desde ayer</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Próximo Riego</CardTitle>
            <Timer className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15:00</div>
            <p className="text-xs text-muted-foreground">Zonas B y C programadas</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Uso de Agua</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,450L</div>
            <p className="text-xs text-muted-foreground">Consumo de hoy</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Estado del Sistema</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              <Badge variant="outline">Activo</Badge>
            </div>
            <p className="text-xs text-muted-foreground">Todos los sensores operativos</p>
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
            <MoistureChart />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Actividad Reciente</CardTitle>
            <CardDescription>Últimas lecturas de humedad y eventos de riego</CardDescription>
          </CardHeader>
          <CardContent>
            <MoistureHistory />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Estado de Zonas</CardTitle>
            <CardDescription>Niveles actuales de humedad por zona</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="space-y-0.5">
                    <div className="text-sm font-medium">Zone A</div>
                  </div>
                  <span className="text-sm font-medium">70%</span>
                </div>
                <Progress value={70} className="h-2" />
                <div className="text-xs text-muted-foreground mt-1">Rango Óptimo</div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="space-y-0.5">
                    <div className="text-sm font-medium">Zone B</div>
                  </div>
                  <span className="text-sm font-medium">45%</span>
                </div>
                <Progress value={45} className="h-2" />
                <div className="text-xs text-muted-foreground mt-1">Por Debajo del Óptimo - Riego Necesario</div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="space-y-0.5">
                    <div className="text-sm font-medium">Zone C</div>
                  </div>
                  <span className="text-sm font-medium">55%</span>
                </div>
                <Progress value={55} className="h-2" />
                <div className="text-xs text-muted-foreground mt-1">Moderado - En Monitoreo</div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="space-y-0.5">
                    <div className="text-sm font-medium">Zone D</div>
                  </div>
                  <span className="text-sm font-medium">75%</span>
                </div>
                <Progress value={75} className="h-2" />
                <div className="text-xs text-muted-foreground mt-1">Rango Óptimo</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Programa de Riego</CardTitle>
            <CardDescription>Próximos eventos de riego</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Zone B</div>
                  <div className="text-xs text-muted-foreground">Duración: 30min</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">15:00</div>
                  <Badge>Programado</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Zone C</div>
                  <div className="text-xs text-muted-foreground">Duración: 20min</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">15:30</div>
                  <Badge>Programado</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Zone A</div>
                  <div className="text-xs text-muted-foreground">Duración: 15min</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">18:00</div>
                  <Badge variant="outline">Pendiente</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Zone D</div>
                  <div className="text-xs text-muted-foreground">Duración: 15min</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">18:15</div>
                  <Badge variant="outline">Pendiente</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Consumo de Agua</CardTitle>
            <CardDescription>Uso de hoy por zona</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="space-y-0.5">
                    <div className="text-sm font-medium">Zone A</div>
                  </div>
                  <span className="text-sm font-medium">650L</span>
                </div>
                <Progress value={65} className="h-2" />
                <div className="text-xs text-muted-foreground mt-1">26% del uso diario</div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="space-y-0.5">
                    <div className="text-sm font-medium">Zone B</div>
                  </div>
                  <span className="text-sm font-medium">800L</span>
                </div>
                <Progress value={80} className="h-2" />
                <div className="text-xs text-muted-foreground mt-1">33% del uso diario</div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="space-y-0.5">
                    <div className="text-sm font-medium">Zone C</div>
                  </div>
                  <span className="text-sm font-medium">600L</span>
                </div>
                <Progress value={60} className="h-2" />
                <div className="text-xs text-muted-foreground mt-1">24% del uso diario</div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="space-y-0.5">
                    <div className="text-sm font-medium">Zone D</div>
                  </div>
                  <span className="text-sm font-medium">400L</span>
                </div>
                <Progress value={40} className="h-2" />
                <div className="text-xs text-muted-foreground mt-1">17% del uso diario</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

