import React from 'react'
import { cn } from '@/lib/utils'
import { B5 } from './Typography'

interface StepIndicatorProps {
  currentStep: number
  totalSteps: number
  onChangeStep?: (step: number) => void
  labels?: string[]
  className?: string
}

export function StepIndicator({
  currentStep,
  totalSteps,
  onChangeStep,
  labels,
  className,
}: StepIndicatorProps) {
  // Generate default labels if not provided
  const stepLabels = React.useMemo(() => {
    if (labels && labels.length >= totalSteps) return labels
    return Array.from({ length: totalSteps }, (_, i) => `Tahap ${i + 1}`)
  }, [labels, totalSteps])

  const percentage = React.useMemo(() => {
    if (totalSteps <= 1) return 0
    return Math.min(100, Math.max(0, ((currentStep - 1) / (totalSteps - 1)) * 100))
  }, [currentStep, totalSteps])

  const nodeSize = 18 // px size of diamond node
  const halfNode = nodeSize / 2 // 9px

  return (
    <div className={cn('w-full flex flex-col items-center select-none', className)}>
      <div className="w-full max-w-xl mx-auto flex flex-col px-4 sm:px-8">
        {/* 1. Labels Row */}
        <div className="relative w-full flex justify-between items-center mb-2 px-[9px]">
          {Array.from({ length: totalSteps }).map((_, idx) => {
            const stepNumber = idx + 1
            const isCurrent = currentStep === stepNumber
            const isCompleted = currentStep > stepNumber

            return (
              <div key={idx} className="w-0 flex justify-center items-center overflow-visible">
                <B5
                  weight="regular"
                  className={cn(
                    'text-center whitespace-nowrap text-xs sm:text-sm transition-colors duration-300',
                    isCurrent
                      ? 'text-primary-300 font-semibold'
                      : isCompleted
                      ? 'text-primary-400 font-medium'
                      : 'text-neutral-400 font-normal'
                  )}
                >
                  {stepLabels[idx]}
                </B5>
              </div>
            )
          })}
        </div>

        {/* 2. Nodes & Connecting Lines Row */}
        <div className="relative w-full flex items-center justify-between h-8">
          {/* Background Track Line (stretches between first and last node centers) */}
          <div
            className="absolute top-1/2 h-[6px] bg-neutral-200 rounded-full -translate-y-1/2 z-0"
            style={{
              left: `${halfNode}px`,
              right: `${halfNode}px`,
            }}
          />

          {/* Active Progress Line (mathematically aligns with node center on all screen sizes) */}
          <div
            className="absolute top-1/2 h-[6px] bg-primary-300 rounded-full transition-all duration-300 -translate-y-1/2 z-0"
            style={{
              left: `${halfNode}px`,
              width: `calc((100% - ${nodeSize}px) * ${percentage / 100})`,
            }}
          />

          {/* Diamond Nodes */}
          {Array.from({ length: totalSteps }).map((_, idx) => {
            const stepNumber = idx + 1
            const isCompleted = currentStep > stepNumber
            const isCurrent = currentStep === stepNumber

            return (
              <button
                key={idx}
                type="button"
                onClick={() => onChangeStep?.(stepNumber)}
                disabled={!onChangeStep || stepNumber > currentStep}
                className={cn(
                  'w-[18px] h-[18px] rotate-45 rounded-[3px] transition-all duration-300 z-10 flex items-center justify-center focus:outline-none shrink-0',
                  isCurrent
                    ? 'bg-primary-100 scale-125 shadow-[0_0_12px_rgba(100,202,239,0.5)] ring-2 ring-primary-300'
                    : isCompleted
                    ? 'bg-primary-400'
                    : 'bg-neutral-200 cursor-default'
                )}
                aria-label={`Go to step ${stepNumber}`}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
