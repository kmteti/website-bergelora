'use client'

import { ReactLenis } from 'lenis/react'
import { ReactNode } from 'react'

export default function LenisProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ duration: 1.6 }}>
      {children}
    </ReactLenis>
  )
}
