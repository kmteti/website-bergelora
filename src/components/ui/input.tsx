import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "h-12 w-full min-w-0 rounded-full border border-neutral-200 bg-neutral-100/50 px-6 font-sans text-base text-neutral-800 placeholder:text-neutral-400 outline-none transition-all duration-200 hover:border-neutral-300 focus-visible:border-primary-300 focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-primary/10 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-red-300 md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Input }
