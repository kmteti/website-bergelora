'use client'

import { Search, SlidersHorizontal } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export interface SearchBarProps {
  placeholder?: string
  className?: string
  defaultValue?: string
  onSearch?: (value: string) => void
  onFilterClick?: () => void
}

/**
 * Search bar dengan input + tombol Filter.
 * Interaktif di sisi klien; handler `onSearch`/`onFilterClick` opsional
 * sehingga bisa dirender tanpa props dari Server Component.
 */
export function SearchBar({
  placeholder = 'Cari Keyword',
  className,
  defaultValue = '',
  onSearch,
  onFilterClick,
}: SearchBarProps) {
  const [value, setValue] = useState(defaultValue)

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        onSearch?.(value)
      }}
      className={cn(
        'flex w-full items-center gap-3 rounded-[20px] bg-white p-2.5 shadow-[0_6px_16px_rgba(0,0,0,0.1)]',
        className,
      )}
    >
      <div className="flex h-[42px] flex-1 items-center gap-2 rounded-[10px] border border-neutral-500 bg-neutral-200 px-3.5 shadow-[0_4px_5px_rgba(0,0,0,0.08)]">
        <input
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder={placeholder}
          aria-label={placeholder}
          className="w-full flex-1 bg-transparent text-sm text-neutral-1000 placeholder:text-neutral-500 focus:outline-none"
        />
        <Search className="size-5 shrink-0 text-neutral-500" aria-hidden="true" />
      </div>
      <Button type="button" variant="black" onClick={onFilterClick} rightIcon={<SlidersHorizontal />}>
        Filter
      </Button>
    </form>
  )
}
