import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { cva, type VariantProps } from 'class-variance-authority'
import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'
import '@/styles/Button.css'

const buttonVariants = cva(
  'btn relative inline-flex cursor-pointer items-center justify-center border-0 font-medium tracking-normal whitespace-nowrap outline-none select-none disabled:pointer-events-none disabled:opacity-55 disabled:grayscale-[0.25] focus-visible:outline-3 focus-visible:outline-offset-4',
  {
    variants: {
      variant: {
        primary:
          'btn--primary bg-primary-400 text-white hover:bg-primary-300 active:bg-primary-500 focus-visible:outline-primary-100',
        secondary:
          'btn--secondary bg-secondary-400 text-white hover:bg-secondary-300 active:bg-secondary-500 focus-visible:outline-secondary-100',
        black:
          'btn--black bg-neutral-900 text-white hover:bg-neutral-700 active:bg-neutral-1000 focus-visible:outline-neutral-300',
      },
      size: {
        sm: 'h-10 rounded-[11px] px-3.5 py-0 text-sm leading-5 gap-1.5 [--btn-icon-size:14px]',
        default: 'h-11 rounded-[12px] px-4 py-0 text-base leading-6 gap-2 [--btn-icon-size:16px]',
        lg: 'h-[52px] rounded-[13px] px-4 py-0 text-base leading-6 gap-2.5 [--btn-icon-size:18px]',
        icon: 'size-10 min-w-10 rounded-[11px] p-0 [--btn-icon-size:18px]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
)

interface ButtonProps
  extends React.ComponentProps<typeof ButtonPrimitive>, VariantProps<typeof buttonVariants> {
  leftIcon?: ReactNode
  loading?: boolean
  rightIcon?: ReactNode
}

function Button({
  className,
  variant = 'primary',
  size = 'default',
  leftIcon,
  loading = false,
  rightIcon,
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg
          className="btn__spinner"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {leftIcon ? (
        <span className="btn__icon" aria-hidden="true">
          {leftIcon}
        </span>
      ) : null}
      {children}
      {rightIcon ? (
        <span className="btn__icon" aria-hidden="true">
          {rightIcon}
        </span>
      ) : null}
    </ButtonPrimitive>
  )
}

export { Button, buttonVariants }
