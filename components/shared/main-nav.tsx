"use client"

import { usePathname } from "next/navigation"
import { GalleryVerticalEnd, Droplets, ThermometerSun, Gauge, Sun, Cloud, Bug, Sprout, PieChart } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
} from "@/components/ui/sidebar"

const navigation = [
  {
    title: "Resumen",
    icon: <PieChart className="h-4 w-4" />,
    url: "/",
    isActive: true,
  },
  {
    title: "Monitoreo",
    items: [
      {
        title: "Humedad del Suelo",
        icon: <Droplets className="h-4 w-4" />,
        url: "/moisture",
      },
      {
        title: "Temperatura",
        icon: <ThermometerSun className="h-4 w-4" />,
        url: "/temperature",
      },
      {
        title: "Niveles de pH",
        icon: <Gauge className="h-4 w-4" />,
        url: "/ph",
      },
      {
        title: "Luz Solar",
        icon: <Sun className="h-4 w-4" />,
        url: "/sunlight",
      },
      {
        title: "Humedad",
        icon: <Cloud className="h-4 w-4" />,
        url: "/humidity",
      },
    ],
  },
  {
    title: "Gestión",
    items: [
      {
        title: "Control de Plagas",
        icon: <Bug className="h-4 w-4" />,
        url: "/pests",
      },
      {
        title: "Nutrientes",
        icon: <Sprout className="h-4 w-4" />,
        url: "/nutrients",
      },
    ],
  },
]

export function MainNav() {
  const pathname = usePathname()
  
  return (
    <SidebarProvider className="w-auto">
      <Sidebar>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg">
                <div className="flex aspect-square h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <GalleryVerticalEnd className="h-4 w-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">HydroSense</span>
                  <span className="text-xs">Sistema de Monitoreo</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              {navigation.map((item) =>
                !item.items ? (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={pathname === item.url}>
                      <a href={item.url}>
                        {item.icon}
                        {item.title}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ) : (
                  <SidebarGroup key={item.title}>
                    <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
                    <SidebarGroupContent>
                      <SidebarMenu>
                        {item.items.map((subItem) => (
                          <SidebarMenuItem key={subItem.title}>
                            <SidebarMenuButton asChild isActive={pathname === subItem.url}>
                              <a href={subItem.url}>
                                {subItem.icon}
                                {subItem.title}
                              </a>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        ))}
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </SidebarGroup>
                ),
              )}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  )
}

