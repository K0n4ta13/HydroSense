"use client"

interface ZoneProps {
  id: string
  status: "optimal" | "warning" | "alert" | "inactive"
  x: number
  y: number
  width: number
  height: number
  label: string
  value?: string
}

const statusColors = {
  optimal: "fill-green-500/20 stroke-green-500",
  warning: "fill-yellow-500/20 stroke-yellow-500",
  alert: "fill-red-500/20 stroke-red-500",
  inactive: "fill-gray-200 stroke-gray-400",
}

export function ZoneMap({ zones }: { zones: ZoneProps[] }) {
  return (
    <div className="relative w-full aspect-[4/3]">
      <svg className="w-full h-full" viewBox="0 0 400 300">
        {/* Grid background */}
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path
            d="M 20 0 L 0 0 0 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="stroke-muted-foreground/20"
          />
        </pattern>
        <rect width="400" height="300" fill="url(#grid)" />

        {/* Zones */}
        {zones.map((zone) => (
          <g key={zone.id}>
            <rect
              x={zone.x}
              y={zone.y}
              width={zone.width}
              height={zone.height}
              className={`${statusColors[zone.status]} transition-colors duration-300`}
              strokeWidth="2"
              rx="4"
            />
            <text
              x={zone.x + zone.width / 2}
              y={zone.y + zone.height / 2}
              textAnchor="middle"
              className="fill-foreground text-sm font-medium"
            >
              {zone.label}
            </text>
            {zone.value && (
              <text
                x={zone.x + zone.width / 2}
                y={zone.y + zone.height / 2 + 20}
                textAnchor="middle"
                className="fill-muted-foreground text-xs"
              >
                {zone.value}
              </text>
            )}
          </g>
        ))}
      </svg>
    </div>
  )
}

