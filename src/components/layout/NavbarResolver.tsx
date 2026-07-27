import { cn } from '@/lib/utils'

/**
 * Komponen reusable untuk memberikan ruang kosong sebesar tinggi Navbar.
 * Berguna agar konten tidak tertutup oleh Navbar yang posisinya fixed.
 */
export function NavbarResolver({ className }: { className?: string }) {
  return (
    <div 
      className={cn("h-[64px] lg:h-[76px] w-full shrink-0 pointer-events-none", className)} 
      aria-hidden="true" 
    />
  )
}
