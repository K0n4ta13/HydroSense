"use client"

interface SunPosition {
  time: string
  intensity: number
  position: number // 0-100
}

export function DayCycle({ data, currentTime }: { data: SunPosition[]; currentTime: string }) {
  const height = 200
  const width = 400

  return (
    <div className="relative w-full aspect-[2/1]">
      <svg className="w-full h-full" viewBox={`0 0 ${width} ${height}`}>
        {/* Sky gradient */}
        <defs>
          <linearGradient id="skyGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" className="stop-primary/5" />
            <stop offset="100%" className="stop-background" />
          </linearGradient>
        </defs>
        <rect width={width} height={height} fill="url(#skyGradient)" />

        {/* Sun path */}
        <path
          d={`M 0,${height} Q ${width / 2},0 ${width},${height}`}
          className="fill-none stroke-muted-foreground/20"
          strokeWidth="2"
          strokeDasharray="4 4"
        />

        {/* Plot sun positions */}
        {data.map((point, i) => {
          const x = (point.position / 100) * width
          const y = height - Math.sin((point.position / 100) * Math.PI) * (height - 40)

          return (
            <g key={i}>
              {/* Sun glow */}
              <circle
                cx={x}
                cy={y}
                r="20"
                className="fill-yellow-500/20"
                style={{
                  opacity: point.intensity / 100,
                }}
              />
              {/* Sun */}
              <circle
                cx={x}
                cy={y}
                r="10"
                className="fill-yellow-500"
                style={{
                  opacity: point.intensity / 100,
                }}
              />
              {/* Time label */}
              <text x={x} y={height - 10} textAnchor="middle" className="fill-muted-foreground text-xs">
                {point.time}
              </text>
              {/* Current time indicator */}
              {point.time === currentTime && (
                <path
                  d={`M ${x},${height - 25} L ${x - 5},${height - 15} L ${x + 5},${height - 15} Z`}
                  className="fill-primary"
                />
              )}
            </g>
          )
        })}
      </svg>
    </div>
  )
}

