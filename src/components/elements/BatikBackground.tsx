import { cn } from '@/lib/cn'

type BatikProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string
  isWhite?: boolean
  /** center white band width in percent (0-100) */
  whiteWidth?: number
}

export function Batik({ className = 'batik-75', isWhite = false, ...props }: BatikProps) {
  const { whiteWidth = 50 } = props as BatikProps

  const overlayStyle: React.CSSProperties | undefined = isWhite
    ? (() => {
        const center = Math.max(0, Math.min(100, whiteWidth))
        const start = (100 - center) / 2
        const end = start + center
        return {
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,1) ${start}%, rgba(255,255,255,1) ${end}%, rgba(255,255,255,0) 100%)`,
        }
      })()
    : undefined

  return (
    <div className={cn('absolute top-0 left-0 h-full w-full', className)} {...props}>
      {isWhite && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10"
          style={overlayStyle}
        />
      )}
    </div>
  )
}
