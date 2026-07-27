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
  onValueChange?: (value: string) => void
  onFilterClick?: () => void
  filterContent?: React.ReactNode
}

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

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
  onValueChange,
  onFilterClick,
  filterContent,
}: SearchBarProps) {
  const [value, setValue] = useState(defaultValue)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    setValue(newValue)
    onValueChange?.(newValue)
  }

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
          onChange={handleChange}
          placeholder={placeholder}
          aria-label={placeholder}
          className="w-full flex-1 bg-transparent text-sm text-neutral-1000 placeholder:text-neutral-500 focus:outline-none"
        />
        <Search className="size-5 shrink-0 text-neutral-500" aria-hidden="true" />
      </div>
      {filterContent ? (
        <Popover>
          <PopoverTrigger render={
            <Button type="button" variant="black" className="size-11 rounded-[10px] p-0" aria-label="Filter">
              <SlidersHorizontal className="size-5" />
            </Button>
          } />
          <PopoverContent className="w-80 rounded-[20px] bg-white p-5 shadow-[0_6px_16px_rgba(0,0,0,0.1)] border-none" align="end" sideOffset={12}>
            {filterContent}
          </PopoverContent>
        </Popover>
      ) : (
        <Button type="button" variant="black" onClick={onFilterClick} className="size-11 rounded-[10px] p-0" aria-label="Filter">
          <SlidersHorizontal className="size-5" />
        </Button>
      )}
    </form>
  )
}
