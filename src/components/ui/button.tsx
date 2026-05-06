import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-xl border border-transparent text-sm font-semibold whitespace-nowrap transition-all outline-none select-none focus-visible:ring-3 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-50 hover:translate-y-[1px] hover:brightness-105 hover:cursor-pointer active:not-aria-[haspopup]:translate-y-[3px] active:not-aria-[haspopup]:shadow-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          'bg-primary-300 text-white shadow-[0_3px_0_0_#138bb6] hover:shadow-[0_2px_0_0_#138bb6]',
        blue: 'bg-primary-300 text-white shadow-[0_3px_0_0_#138bb6] hover:shadow-[0_2px_0_0_#138bb6]',
        green:
          'bg-[#87b22f] text-white shadow-[0_3px_0_0_#607e15] hover:shadow-[0_2px_0_0_#607e15]',
        yellow:
          'bg-[#ffdb43] text-neutral-800 shadow-[0_3px_0_0_#efa400] hover:shadow-[0_2px_0_0_#efa400]',
        red: 'bg-[#ff3749] text-white shadow-[0_3px_0_0_#e60416] hover:shadow-[0_2px_0_0_#e60416]',
        neutral:
          'bg-[#ffffff] text-neutral-800 shadow-[0_3px_0_0_#e5e5e5] border border-neutral-200 hover:shadow-[0_2px_0_0_#e5e5e5]',
        outline:
          'border-border bg-background hover:bg-muted hover:text-foreground shadow-none hover:translate-y-0 active:translate-y-0 active:shadow-none hover:brightness-100',
        ghost:
          'hover:bg-muted hover:text-foreground shadow-none hover:translate-y-0 active:translate-y-0 active:shadow-none hover:brightness-100',
        link: 'text-primary underline-offset-4 hover:underline shadow-none hover:translate-y-0 active:translate-y-0 hover:brightness-100',
      },
      size: {
        default: 'h-10 gap-2 px-4',
        sm: 'h-8 gap-1.5 rounded-lg px-3 text-xs',
        lg: 'h-12 gap-2 rounded-xl px-8 text-base',
        icon: 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

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
          className="mr-2 h-4 w-4 animate-spin"
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
