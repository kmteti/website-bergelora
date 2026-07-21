import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
}

export function Pagination({ currentPage, totalPages, onPageChange, className }: PaginationProps) {
  return (
    <div 
      className={cn(
        "flex w-fit items-center gap-2 md:gap-4 rounded-[20px] bg-white/70 backdrop-blur-md p-2.5 shadow-[0_6px_16px_rgba(0,0,0,0.1)]", 
        className
      )}
    >
      <Button 
        variant="secondary" 
        leftIcon={<ArrowLeft className="w-5 h-5" />}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </Button>
      
      <div className="hidden sm:flex items-center gap-2">
        {/* Simple pagination logic for demo purposes */}
        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
          let pageNum = i + 1;
          // If we are at the end, show the last 5 pages
          if (totalPages > 5 && currentPage > totalPages - 3) {
            pageNum = totalPages - 4 + i;
          } else if (totalPages > 5 && currentPage > 3) {
            pageNum = currentPage - 2 + i;
          }

          return (
            <Button 
              key={pageNum}
              variant={currentPage === pageNum ? "primary" : "black"} 
              className="w-11 h-11 px-0"
              onClick={() => onPageChange(pageNum)}
            >
              {pageNum}
            </Button>
          )
        })}

        {totalPages > 5 && currentPage < totalPages - 2 && (
          <>
            <div className="flex items-center justify-center w-11 h-11 text-neutral-500 font-bold">...</div>
            <Button 
              variant="black" 
              className="w-11 h-11 px-0"
              onClick={() => onPageChange(totalPages)}
            >
              {totalPages}
            </Button>
          </>
        )}
      </div>

      <Button 
        variant="secondary" 
        rightIcon={<ArrowRight className="w-5 h-5" />}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </Button>
    </div>
  )
}
