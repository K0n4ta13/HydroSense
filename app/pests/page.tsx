import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PestChart } from "@/components/pests/pest-chart"
import { PestHistory } from "@/components/pests/pest-history"
import { Button } from "@/components/ui/button"
import { CalendarDateRangePicker } from "@/components/shared/date-range-picker"
import { Badge } from "@/components/ui/badge"
import { Bug, AlertTriangle, SprayCanIcon as Spray, Shield } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export const metadata: Metadata = {
  title: "Control de Plagas",
  description: "Sistema de monitoreo y control de plagas agrícolas",
}

export default function PestPage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-0">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Control de Plagas</h2>
          <p className="text-muted-foreground">Monitorear y gestionar medidas de control de plagas</p>
        </div>
        <div className="flex items-center space-x-2">
          <CalendarDateRangePicker />
          <Button>Descargar Informe</Button>
        </div>
      </div>

      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Alerta de Plagas</AlertTitle>
        <AlertDescription>
          Infestación de áfidos detectada en la Zona B. Tratamiento programado para mañana.
        </AlertDescription>
      </Alert>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Amenazas Activas</CardTitle>
            <Bug className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Áfidos, Ácaros</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Estado del Tratamiento</CardTitle>
            <Spray className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              <Badge>En Progreso</Badge>
            </div>
            <p className="text-xs text-muted-foreground">2 zonas en tratamiento</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Nivel de Riesgo</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Moderado</div>
            <p className="text-xs text-muted-foreground">Monitoreo intensificado</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Última Inspección</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2 días atrás</div>
            <p className="text-xs text-muted-foreground">Próxima: Mañana</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Actividad de Plagas</CardTitle>
            <CardDescription>Seguimiento de incidentes de plagas de 30 días</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <PestChart />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Incidentes Recientes</CardTitle>
            <CardDescription>Últimas detecciones y tratamientos de plagas</CardDescription>
          </CardHeader>
          <CardContent>
            <PestHistory />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Estado de Zonas</CardTitle>
            <CardDescription>Actividad actual de plagas por zona</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Zona A</div>
                  <div className="text-xs text-muted-foreground">Ácaros</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">Infestación Baja</div>
                  <Badge variant="destructive">En Tratamiento</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Zona B</div>
                  <div className="text-xs text-muted-foreground">Áfidos</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">Infestación Alta</div>
                  <Badge variant="destructive">Tratamiento Necesario</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Zona C</div>
                  <div className="text-xs text-muted-foreground">Ninguna Detectada</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">Libre</div>
                  <Badge variant="secondary">En Monitoreo</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Zona D</div>
                  <div className="text-xs text-muted-foreground">Ninguna Detectada</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">Libre</div>
                  <Badge variant="secondary">En Monitoreo</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Programa de Tratamiento</CardTitle>
            <CardDescription>Próximas medidas de control de plagas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Zona B</div>
                  <div className="text-xs text-muted-foreground">Tratamiento para Áfidos</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">Mañana</div>
                  <Badge>Programado</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Zona A</div>
                  <div className="text-xs text-muted-foreground">Revisión de Seguimiento</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">En 3 días</div>
                  <Badge variant="secondary">Pendiente</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Todas las Zonas</div>
                  <div className="text-xs text-muted-foreground">Fumigación Preventiva</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">Próxima Semana</div>
                  <Badge variant="secondary">Programado</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Todas las Zonas</div>
                  <div className="text-xs text-muted-foreground">Inspección</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">Mañana</div>
                  <Badge variant="secondary">Rutina</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Medidas Preventivas</CardTitle>
            <CardDescription>Controles preventivos activos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Insectos Beneficiosos</div>
                  <div className="text-xs text-muted-foreground">Mariquitas, Crisopas</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">Todas las Zonas</div>
                  <Badge variant="secondary">Activo</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Trampas Adhesivas</div>
                  <div className="text-xs text-muted-foreground">Amarillas, Azules</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">Todas las Zonas</div>
                  <Badge variant="secondary">Activo</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Fumigación con Aceite de Neem</div>
                  <div className="text-xs text-muted-foreground">Preventivo</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">Semanal</div>
                  <Badge>Programado</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-sm font-medium">Sistema de Monitoreo</div>
                  <div className="text-xs text-muted-foreground">Automatizado</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">24/7</div>
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

