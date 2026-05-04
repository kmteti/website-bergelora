import { cn } from '@/lib/cn'

type BatikProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string
  isWhite?: boolean
}

export function Batik({ className = 'batik-75', isWhite = false, ...props }: BatikProps) {
  return (
    <div className={cn('absolute top-0 left-0 h-full w-full', className)} {...props}>
      {isWhite && (
        <div className="absolute top-0 left-0 z-10 h-full w-full bg-linear-to-r from-red-500 via-yellow-500 to-blue-500" />
      )}
    </div>
  )
}
