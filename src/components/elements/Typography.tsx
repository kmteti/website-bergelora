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

const H1 = ({ className, children, weight = 'semibold', ...props }: TypographyProps) => (
  <h1
    className={cn(
      'font-heading text-balance text-[clamp(40px,4.3vw,62px)] leading-[clamp(46px,4.9vw,70px)] tracking-[-0.02em]',
      weightClasses[weight],
      className,
    )}
    {...props}
  >
    {children}
  </h1>
)

const H2 = ({ className, children, weight = 'semibold', ...props }: TypographyProps) => (
  <h2
    className={cn(
      'font-heading text-balance text-[clamp(34px,3.9vw,57px)] leading-[clamp(40px,4.4vw,64px)] tracking-[-0.02em]',
      weightClasses[weight],
      className,
    )}
    {...props}
  >
    {children}
  </h2>
)

const H3 = ({ className, children, weight = 'semibold', ...props }: TypographyProps) => (
  <h3
    className={cn(
      'font-heading text-balance text-[clamp(28px,3.1vw,45px)] leading-[clamp(36px,3.6vw,52px)] tracking-[-0.02em]',
      weightClasses[weight],
      className,
    )}
    {...props}
  >
    {children}
  </h3>
)

const H4 = ({ className, children, weight = 'semibold', ...props }: TypographyProps) => (
  <h4
    className={cn(
      'font-heading text-balance text-[clamp(24px,2.2vw,32px)] leading-[clamp(32px,2.5vw,36px)]',
      weightClasses[weight],
      className,
    )}
    {...props}
  >
    {children}
  </h4>
)

const H5 = ({ className, children, weight = 'semibold', ...props }: TypographyProps) => (
  <h5
    className={cn(
      'font-heading text-balance text-[24px] leading-[32px]',
      weightClasses[weight],
      className,
    )}
    {...props}
  >
    {children}
  </h5>
)

const H6 = ({ className, children, weight = 'semibold', ...props }: TypographyProps) => (
  <h6
    className={cn(
      'font-heading text-balance text-[18px] leading-[24px]',
      weightClasses[weight],
      className,
    )}
    {...props}
  >
    {children}
  </h6>
)

const B1 = ({ className, weight = 'regular', ...props }: TypographyProps) => (
  <p
    className={cn(
      'font-sans text-pretty text-[clamp(20px,1.7vw,24px)] leading-[clamp(30px,2.2vw,32px)]',
      weightClasses[weight],
      className,
    )}
    {...props}
  />
)

const B2 = ({ className, weight = 'regular', ...props }: TypographyProps) => (
  <p
    className={cn(
      'font-sans text-pretty text-[18px] leading-[24px]',
      weightClasses[weight],
      className,
    )}
    {...props}
  />
)

const B3 = ({ className, weight = 'regular', ...props }: TypographyProps) => (
  <p
    className={cn(
      'font-sans text-pretty text-[16px] leading-[24px]',
      weightClasses[weight],
      className,
    )}
    {...props}
  />
)

const B4 = ({ className, weight = 'regular', ...props }: TypographyProps) => (
  <p
    className={cn(
      'font-sans text-pretty text-[14px] leading-[20px]',
      weightClasses[weight],
      className,
    )}
    {...props}
  />
)

const B5 = ({ className, weight = 'regular', ...props }: TypographyProps) => (
  <p
    className={cn(
      'font-sans text-pretty text-[12px] leading-[16px]',
      weightClasses[weight],
      className,
    )}
    {...props}
  />
)

export { H1, H2, H3, H4, H5, H6, B1, B2, B3, B4, B5 }
