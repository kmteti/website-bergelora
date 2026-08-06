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
        "flex w-full sm:w-fit justify-between sm:justify-start items-center gap-2 md:gap-4 rounded-full bg-white/70 backdrop-blur-md p-2 shadow-[0_6px_16px_rgba(0,0,0,0.08)] border border-white/85", 
        className
      )}
    >
      <Button 
        variant="black" 
        leftIcon={<ArrowLeft className="w-5 h-5" />}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 rounded-full"
      >
        <span className="hidden sm:inline">Previous</span>
      </Button>
      
      <div className="flex items-center gap-1 sm:gap-1.5">
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
              variant={currentPage === pageNum ? "secondary" : "black"} 
              className="w-11 h-11 px-0 rounded-full"
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
              className="w-11 h-11 px-0 rounded-full"
              onClick={() => onPageChange(totalPages)}
            >
              {totalPages}
            </Button>
          </>
        )}
      </div>

      <Button 
        variant="black" 
        rightIcon={<ArrowRight className="w-5 h-5" />}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 rounded-full"
      >
        <span className="hidden sm:inline">Next</span>
      </Button>
    </div>
  )
}
