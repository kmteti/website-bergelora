import { cn } from '@/lib/utils'

interface DefaultLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}

export default function DefaultLayout({ className, children, ...props }: DefaultLayoutProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-6xl px-4 pb-32 pt-14 md:px-8 md:pt-20 md:pb-[196px]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
