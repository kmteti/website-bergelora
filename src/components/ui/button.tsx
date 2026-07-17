import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import '@/styles/Button.css'

const buttonVariants = cva('btn', {
  variants: {
    variant: {
      default:
        'bg-primary-300 text-white [--btn-shadow-color:#138bb6]',
      blue:
        'bg-primary-300 text-white [--btn-shadow-color:#138bb6]',
      green:
        'bg-[#87b22f] text-white [--btn-shadow-color:#607e15]',
      yellow:
        'bg-[#ffdb43] text-neutral-800 [--btn-shadow-color:#efa400]',
      red:
        'bg-[#ff3749] text-white [--btn-shadow-color:#e60416]',
      neutral:
        'bg-white text-neutral-800 border border-neutral-200 [--btn-shadow-color:#e5e5e5]',
      link:
        'bg-primary-50 text-primary-500 [--btn-shadow-color:#bae6fd]',
    },
    size: {
      default: 'btn--default',
      sm: 'btn--sm',
      lg: 'btn--lg',
      icon: 'btn--icon',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

interface ButtonProps
  extends React.ComponentProps<typeof ButtonPrimitive>, VariantProps<typeof buttonVariants> {
  loading?: boolean
}

function Button({
  className,
  variant = 'default',
  size = 'default',
  loading = false,
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
      {children}
    </ButtonPrimitive>
  )
}

export { Button, buttonVariants }
