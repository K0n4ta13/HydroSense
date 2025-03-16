import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { NutrientChart } from "@/components/nutrients/nutrient-chart"
import { NutrientHistory } from "@/components/nutrients/nutrient-history"
import { Button } from "@/components/ui/button"
import { CalendarDateRangePicker } from "@/components/shared/date-range-picker"
import { Badge } from "@/components/ui/badge"
import { Sprout, AlertTriangle, FlaskRoundIcon as Flask, Droplets } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"

export const metadata: Metadata = {
  title: "Nutrient Management",
  description: "Agricultural nutrient monitoring and management system",
}

export default function NutrientsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-0">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Nutrientes</h2>
          <p className="text-muted-foreground">Monitorear y gestionar niveles de nutrientes</p>
        </div>
        <div className="flex items-center space-x-2">
          <CalendarDateRangePicker />
          <Button>Descargar Informe</Button>
        </div>
      </div>

      <Alert>
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Alerta de Nutrientes</AlertTitle>
        <AlertDescription>Deficiencia de potasio detectada en la Zona C. Se recomienda fertilización.</AlertDescription>
      </Alert>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Nitrógeno (N)</CardTitle>
            <Sprout className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">180 ppm</div>
            <Progress value={75} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">Rango Óptimo</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Fósforo (P)</CardTitle>
            <Flask className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45 ppm</div>
            <Progress value={65} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">Ligeramente Bajo</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Potasio (K)</CardTitle>
            <Droplets className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">150 ppm</div>
            <Progress value={45} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">Deficiente</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Próxima Fertilización</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Mañana</div>
            <p className="text-xs text-muted-foreground">Zonas B y C</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Niveles de Nutrientes</CardTitle>
            <CardDescription>Seguimiento de NPK de 30 días en todas las zonas</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <NutrientChart />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Aplicaciones Recientes</CardTitle>
            <CardDescription>Últimas aplicaciones y mediciones de fertilizantes</CardDescription>
          </CardHeader>
          <CardContent>
            <NutrientHistory />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Análisis por Zona</CardTitle>
            <CardDescription>Estado actual de nutrientes por zona</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="space-y-0.5">
                    <div className="text-sm font-medium">Zone A</div>
                  </div>
                  <Badge variant="secondary">Óptimo</Badge>
                </div>
                <div className="space-y-2">
                  <div className="text-xs text-muted-foreground">Nitrogen (N)</div>
                  <Progress value={80} className="h-2" />
                  <div className="text-xs text-muted-foreground">Phosphorus (P)</div>
                  <Progress value={75} className="h-2" />
                  <div className="text-xs text-muted-foreground">Potassium (K)</div>
                  <Progress value={70} className="h-2" />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="space-y-0.5">
                    <div className="text-sm font-medium">Zone B</div>
                  </div>
                  <Badge variant="destructive">Atención</Badge>
                </div>
                <div className="space-y-2">
                  <div className="text-xs text-muted-foreground">Nitrogen (N)</div>
                  <Progress value={65} className="h-2" />
                  <div className="text-xs text-muted-foreground">Phosphorus (P)</div>
                  <Progress value={45} className="h-2" />
                  <div className="text-xs text-muted-foreground">Potassium (K)</div>
                  <Progress value={60} className="h-2" />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="space-y-0.5">
                    <div className="text-sm font-medium">Zone C</div>
                  </div>
                  <Badge variant="destructive">Deficiente</Badge>
                </div>
                <div className="space-y-2">
                  <div className="text-xs text-muted-foreground">Nitrogen (N)</div>
                  <Progress value={70} className="h-2" />
                  <div className="text-xs text-muted-foreground">Phosphorus (P)</div>
                  <Progress value={65} className="h-2" />
                  <div className="text-xs text-muted-foreground">Potassium (K)</div>
                  <Progress value={40} className="h-2" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Programa de Fertilización</CardTitle>
            <CardDescription>Próximas aplicaciones de nutrientes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Zone B</div>
                  <div className="text-xs text-muted-foreground">Mezcla NPK</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">Mañana</div>
                  <Badge>Scheduled</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Zone C</div>
                  <div className="text-xs text-muted-foreground">Refuerzo de Potasio</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">Mañana</div>
                  <Badge>Scheduled</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Zone A</div>
                  <div className="text-xs text-muted-foreground">Mantenimiento</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">Próxima Semana</div>
                  <Badge variant="secondary">Pendiente</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Todas las Zonas</div>
                  <div className="text-xs text-muted-foreground">Prueba de Suelo</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">En 2 Semanas</div>
                  <Badge variant="secondary">Rutina</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Requisitos de Cultivos</CardTitle>
            <CardDescription>Rangos óptimos de nutrientes por cultivo</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="text-sm font-medium">Tomatoes</div>
                    <div className="text-xs text-muted-foreground">Zone A</div>
                  </div>
                  <Badge variant="secondary">Cumpliendo Necesidades</Badge>
                </div>
                <div className="space-y-1">
                  <div className="text-xs">N: 150-200 ppm</div>
                  <div className="text-xs">P: 40-60 ppm</div>
                  <div className="text-xs">K: 150-200 ppm</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="text-sm font-medium">Lettuce</div>
                    <div className="text-xs text-muted-foreground">Zone B</div>
                  </div>
                  <Badge variant="destructive">Necesita Atención</Badge>
                </div>
                <div className="space-y-1">
                  <div className="text-xs">N: 100-150 ppm</div>
                  <div className="text-xs">P: 30-50 ppm</div>
                  <div className="text-xs">K: 100-150 ppm</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="text-sm font-medium">Peppers</div>
                    <div className="text-xs text-muted-foreground">Zone C</div>
                  </div>
                  <Badge variant="destructive">Deficiente</Badge>
                </div>
                <div className="space-y-1">
                  <div className="text-xs">N: 150-200 ppm</div>
                  <div className="text-xs">P: 40-60 ppm</div>
                  <div className="text-xs">K: 150-200 ppm</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

