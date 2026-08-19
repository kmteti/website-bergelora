'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { ReactLenis, useLenis } from 'lenis/react'
import { ReactNode } from 'react'

function ScrollToTopOnRouteChange() {
  const pathname = usePathname()
  const lenis = useLenis()

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, lenis])

  return null
}

export default function LenisProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ duration: 1.6 }}>
      <ScrollToTopOnRouteChange />
      {children}
    </ReactLenis>
  )
}
