import * as React from 'react'

import { cn } from '@/lib/utils'

type TypographyWeight = 'regular' | 'semibold' | 'bold'

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode
  weight?: TypographyWeight
}

const weightClasses: Record<TypographyWeight, string> = {
  regular: 'font-normal',
  semibold: 'font-semibold',
  bold: 'font-bold',
}

const H1 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, children, weight = 'semibold', ...props }, ref) => (
    <h1
      ref={ref}
      className={cn(
        'font-heading text-balance text-[clamp(40px,4.3vw,62px)] leading-[clamp(46px,4.9vw,70px)] tracking-[-0.02em]',
        weightClasses[weight],
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  ),
)
H1.displayName = 'H1'

const H2 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, children, weight = 'semibold', ...props }, ref) => (
    <h2
      ref={ref}
      className={cn(
        'font-heading text-balance text-[clamp(34px,3.9vw,57px)] leading-[clamp(40px,4.4vw,64px)] tracking-[-0.02em]',
        weightClasses[weight],
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  ),
)
H2.displayName = 'H2'

const H3 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, children, weight = 'semibold', ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        'font-heading text-balance text-[clamp(28px,3.1vw,45px)] leading-[clamp(36px,3.6vw,52px)] tracking-[-0.02em]',
        weightClasses[weight],
        className,
      )}
      {...props}
    >
      {children}
    </h3>
  ),
)
H3.displayName = 'H3'

const H4 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, children, weight = 'semibold', ...props }, ref) => (
    <h4
      ref={ref}
      className={cn(
        'font-heading text-balance text-[clamp(24px,2.2vw,32px)] leading-[clamp(32px,2.5vw,36px)]',
        weightClasses[weight],
        className,
      )}
      {...props}
    >
      {children}
    </h4>
  ),
)
H4.displayName = 'H4'

const H5 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, children, weight = 'semibold', ...props }, ref) => (
    <h5
      ref={ref}
      className={cn(
        'font-heading text-balance text-[24px] leading-[32px]',
        weightClasses[weight],
        className,
      )}
      {...props}
    >
      {children}
    </h5>
  ),
)
H5.displayName = 'H5'

const H6 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, children, weight = 'semibold', ...props }, ref) => (
    <h6
      ref={ref}
      className={cn(
        'font-heading text-balance text-[18px] leading-[24px]',
        weightClasses[weight],
        className,
      )}
      {...props}
    >
      {children}
    </h6>
  ),
)
H6.displayName = 'H6'

const B1 = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, weight = 'regular', ...props }, ref) => (
    <p
      ref={ref}
      className={cn(
        'font-sans text-pretty text-[clamp(20px,1.7vw,24px)] leading-[clamp(30px,2.2vw,32px)]',
        weightClasses[weight],
        className,
      )}
      {...props}
    />
  ),
)
B1.displayName = 'B1'

const B2 = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, weight = 'regular', ...props }, ref) => (
    <p
      ref={ref}
      className={cn(
        'font-sans text-pretty text-[18px] leading-[24px]',
        weightClasses[weight],
        className,
      )}
      {...props}
    />
  ),
)
B2.displayName = 'B2'

const B3 = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, weight = 'regular', ...props }, ref) => (
    <p
      ref={ref}
      className={cn(
        'font-sans text-pretty text-[16px] leading-[24px]',
        weightClasses[weight],
        className,
      )}
      {...props}
    />
  ),
)
B3.displayName = 'B3'

const B4 = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, weight = 'regular', ...props }, ref) => (
    <p
      ref={ref}
      className={cn(
        'font-sans text-pretty text-[14px] leading-[20px]',
        weightClasses[weight],
        className,
      )}
      {...props}
    />
  ),
)
B4.displayName = 'B4'

const B5 = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, weight = 'regular', ...props }, ref) => (
    <p
      ref={ref}
      className={cn(
        'font-sans text-pretty text-[12px] leading-[16px]',
        weightClasses[weight],
        className,
      )}
      {...props}
    />
  ),
)
B5.displayName = 'B5'

export { H1, H2, H3, H4, H5, H6, B1, B2, B3, B4, B5 }
