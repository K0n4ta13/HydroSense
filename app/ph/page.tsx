import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PhChart } from "@/components/ph/ph-chart"
import { PhHistory } from "@/components/ph/ph-history"
import { Button } from "@/components/ui/button"
import { CalendarDateRangePicker } from "@/components/shared/date-range-picker"
import { Badge } from "@/components/ui/badge"
import { Gauge, AlertTriangle, Beaker } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export const metadata: Metadata = {
  title: "Niveles de pH",
  description: "Agricultural pH levels monitoring system",
}

export default function PhPage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-0">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Niveles de pH</h2>
          <p className="text-muted-foreground">Monitorear y analizar los niveles de pH del suelo</p>
        </div>
        <div className="flex items-center space-x-2">
          <CalendarDateRangePicker />
          <Button>Descargar Datos</Button>
        </div>
      </div>

      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Alerta de Nivel de pH</AlertTitle>
        <AlertDescription>
          El nivel de pH de la Zona C es demasiado ácido (5.2). Se recomienda aplicación de cal.
        </AlertDescription>
      </Alert>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">pH Promedio</CardTitle>
            <Gauge className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6.8</div>
            <p className="text-xs text-muted-foreground">-0.2 desde la semana pasada</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Estado del Tratamiento</CardTitle>
            <Beaker className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              <Badge>Requerido</Badge>
            </div>
            <p className="text-xs text-muted-foreground">La Zona C necesita atención</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rango de pH</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5.2 - 7.1</div>
            <p className="text-xs text-muted-foreground">En todas las zonas</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Último Tratamiento</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7 días</div>
            <p className="text-xs text-muted-foreground">Desde el último ajuste</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Tendencias de pH</CardTitle>
            <CardDescription>Variación de nivel de pH de 30 días en todas las zonas</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <PhChart />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Lecturas Recientes</CardTitle>
            <CardDescription>Últimas mediciones de pH por zona</CardDescription>
          </CardHeader>
          <CardContent>
            <PhHistory />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Análisis por Zona</CardTitle>
            <CardDescription>Niveles actuales de pH por zona</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Zone A</div>
                  <div className="text-xs text-muted-foreground">Neutro</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">7.1</div>
                  <Badge variant="secondary">Óptimo</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Zone B</div>
                  <div className="text-xs text-muted-foreground">Ligeramente Ácido</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">6.5</div>
                  <Badge variant="secondary">Óptimo</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Zone C</div>
                  <div className="text-xs text-muted-foreground">Ácido</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">5.2</div>
                  <Badge variant="destructive">Acción Requerida</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Zone D</div>
                  <div className="text-xs text-muted-foreground">Neutro</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">6.8</div>
                  <Badge variant="secondary">Óptimo</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Rangos Óptimos</CardTitle>
            <CardDescription>Requisitos de pH por cultivo</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Tomatoes</div>
                  <div className="text-xs text-muted-foreground">Zone A</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">6.0 - 7.0</div>
                  <Badge variant="outline">Actual: 7.1</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Lettuce</div>
                  <div className="text-xs text-muted-foreground">Zone B</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">6.0 - 7.0</div>
                  <Badge variant="outline">Actual: 6.5</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Peppers</div>
                  <div className="text-xs text-muted-foreground">Zone C</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">6.0 - 7.0</div>
                  <Badge variant="destructive">Actual: 5.2</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Cucumbers</div>
                  <div className="text-xs text-muted-foreground">Zone D</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">6.0 - 7.0</div>
                  <Badge variant="outline">Actual: 6.8</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Historial de Tratamientos</CardTitle>
            <CardDescription>Ajustes recientes de pH</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Zone A</div>
                  <div className="text-xs text-muted-foreground">Aplicación de Cal</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">7 días atrás</div>
                  <Badge variant="outline">Completado</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Zone B</div>
                  <div className="text-xs text-muted-foreground">Aplicación de Azufre</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">14 días atrás</div>
                  <Badge variant="outline">Completado</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Zone C</div>
                  <div className="text-xs text-muted-foreground">Aplicación de Cal</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">Hoy</div>
                  <Badge>Programado</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Zone D</div>
                  <div className="text-xs text-muted-foreground">Monitoreo de pH</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">En Curso</div>
                  <Badge variant="secondary">Activo</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

