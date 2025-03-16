"use client"

interface NutrientPoint {
  n: number // Nitrogen (0-100)
  p: number // Phosphorus (0-100)
  k: number // Potassium (0-100)
  label: string
  status: "optimal" | "warning" | "alert"
}

const statusColors = {
  optimal: "fill-green-500",
  warning: "fill-yellow-500",
  alert: "fill-red-500",
}

export function NutrientTriangle({ points }: { points: NutrientPoint[] }) {
  // Triangle dimensions
  const width = 400
  const height = 346 // Equilateral triangle height (400 * √3/2)
  const margin = 40

  // Convert NPK percentages to x,y coordinates
  const getNPKCoordinates = (n: number, p: number, k: number) => {
    // Convert percentages to proportions
    const total = n + p + k
    const nRatio = n / total
    const pRatio = p / total
    const kRatio = k / total

    // Calculate position using barycentric coordinates
    const x = margin + (width - 2 * margin) * (0.5 * pRatio + kRatio)
    const y = height - (height - 2 * margin) * (nRatio + 0.5 * pRatio)

    return { x, y }
  }

  return (
    <div className="relative w-full aspect-[400/346]">
      <svg className="w-full h-full" viewBox={`0 0 ${width} ${height}`}>
        {/* Grid background */}
        <pattern id="triangleGrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path
            d="M 20 0 L 0 0 0 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="stroke-muted-foreground/20"
          />
        </pattern>
        <rect width={width} height={height} fill="url(#triangleGrid)" />

        {/* Triangle outline */}
        <path
          d={`M ${margin},${height - margin} L ${width - margin},${height - margin} L ${width / 2},${margin} Z`}
          className="fill-none stroke-muted-foreground"
          strokeWidth="2"
        />

        {/* Labels */}
        <text x={width / 2} y={margin - 10} textAnchor="middle" className="fill-muted-foreground">
          N
        </text>
        <text x={margin - 10} y={height - margin + 20} textAnchor="end" className="fill-muted-foreground">
          P
        </text>
        <text x={width - margin + 10} y={height - margin + 20} textAnchor="start" className="fill-muted-foreground">
          K
        </text>

        {/* Plot points */}
        {points.map((point, i) => {
          const coords = getNPKCoordinates(point.n, point.p, point.k)
          return (
            <g key={i}>
              <circle
                cx={coords.x}
                cy={coords.y}
                r="6"
                className={`${statusColors[point.status]} transition-colors duration-300`}
              />
              <text x={coords.x} y={coords.y - 10} textAnchor="middle" className="fill-foreground text-xs">
                {point.label}
              </text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}

