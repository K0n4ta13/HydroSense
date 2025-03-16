import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Overview } from "@/components/overview"
import { RecentReadings } from "@/components/recent-readings"
import { Button } from "@/components/ui/button"
import { CalendarDateRangePicker } from "@/components/date-range-picker"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export const metadata: Metadata = {
  title: "Panel de Control", // Update 1
  description: "Agricultural monitoring and management system",
}

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-0">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Panel de Control</h2> {/* Update 1 */}
        <div className="flex items-center space-x-2">
          <CalendarDateRangePicker />
          <Button>Descargar</Button> {/* Update 2 */}
        </div>
      </div>
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>¡Atención!</AlertTitle> {/* Update 3 */}
        <AlertDescription>
          Los niveles de humedad del suelo en la Zona B están por debajo de los niveles óptimos. Considere ajustar el
          programa de riego. {/* Update 4 */}
        </AlertDescription>
      </Alert>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Humedad Promedio del Suelo</CardTitle> {/* Update 5 */}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68%</div>
            <p className="text-xs text-muted-foreground">+2% desde la semana pasada</p> {/* Update 6 */}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Temperatura Promedio</CardTitle> {/* Update 7 */}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23°C</div>
            <p className="text-xs text-muted-foreground">-1°C desde ayer</p> {/* Update 8 */}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Nivel de pH</CardTitle> {/* Update 9 */}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6.8</div>
            <p className="text-xs text-muted-foreground">Rango óptimo</p> {/* Update 10 */}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Luz Solar Diaria</CardTitle> {/* Update 11 */}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7.5h</div>
            <p className="text-xs text-muted-foreground">+1.5h desde ayer</p> {/* Update 12 */}
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Resumen</CardTitle> {/* Update 13 */}
          </CardHeader>
          <CardContent className="pl-2">
            <Overview />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Lecturas Recientes</CardTitle> {/* Update 14 */}
            <CardDescription>Últimas 10 lecturas de sensores en todas las zonas</CardDescription> {/* Update 15 */}
          </CardHeader>
          <CardContent>
            <RecentReadings />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

