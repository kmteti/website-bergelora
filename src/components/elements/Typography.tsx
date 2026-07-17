import * as React from 'react'
import { cn } from '@/lib/utils'

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode
}

const H1 = ({ className, children, ...props }: TypographyProps) => (
  <h1
    className={cn(
      'font-heading font-semibold text-[32px] leading-[45px] lg:text-[52px] lg:leading-[73px]',
      className,
    )}
    {...props}
  >
    {children}
  </h1>
)

const H2 = ({ className, children, ...props }: TypographyProps) => (
  <h2
    className={cn(
      'font-heading font-semibold text-[26px] leading-[36px] lg:text-[42px] lg:leading-[59px]',
      className,
    )}
    {...props}
  >
    {children}
  </h2>
)

const H3 = ({ className, children, ...props }: TypographyProps) => (
  <h3
    className={cn(
      'font-heading font-semibold text-[22px] leading-[31px] lg:text-[34px] lg:leading-[48px]',
      className,
    )}
    {...props}
  >
    {children}
  </h3>
)

const H4 = ({ className, children, ...props }: TypographyProps) => (
  <h4
    className={cn(
      'font-heading font-semibold text-[18px] leading-[25px] lg:text-[28px] lg:leading-[39px]',
      className,
    )}
    {...props}
  >
    {children}
  </h4>
)

const H5 = ({ className, children, ...props }: TypographyProps) => (
  <h5
    className={cn(
      'font-heading font-semibold text-[16px] leading-[22px] lg:text-[22px] lg:leading-[31px]',
      className,
    )}
    {...props}
  >
    {children}
  </h5>
)


const B1 = ({ className, ...props }: TypographyProps) => (
  <p
    className={cn('font-sans font-medium text-[18px] leading-[27px]', className)}
    {...props}
  />
)

const B2 = ({ className, ...props }: TypographyProps) => (
  <p
    className={cn('font-sans font-normal text-[16px] leading-[24px]', className)}
    {...props}
  />
)

const B3 = ({ className, ...props }: TypographyProps) => (
  <p
    className={cn('font-sans font-normal text-[14px] leading-[21px]', className)}
    {...props}
  />
)

const B4 = ({ className, ...props }: TypographyProps) => (
  <p
    className={cn('font-sans font-normal text-[12px] leading-[18px]', className)}
    {...props}
  />
)

const B5 = ({ className, ...props }: TypographyProps) => (
  <p
    className={cn('font-sans font-normal text-[10px] leading-[15px]', className)}
    {...props}
  />
)

export { H1, H2, H3, H4, H5, B1, B2, B3, B4, B5 }
