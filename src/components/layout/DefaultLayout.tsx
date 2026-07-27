import { cn } from '@/lib/utils'

interface DefaultLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}

export default function DefaultLayout({ className, children, ...props }: DefaultLayoutProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1240px] px-6 pb-32 pt-14 sm:px-8 md:pt-20 md:pb-[196px] lg:px-10",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
