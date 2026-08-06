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

  return (
    <div className={cn('w-full flex flex-col items-center select-none', className)}>
      <div className="w-full max-w-xl mx-auto flex flex-col">
        {/* 1. Labels Row */}
        <div className="flex justify-between w-full px-8 mb-1">
          {Array.from({ length: totalSteps }).map((_, idx) => {
            const stepNumber = idx + 1
            const isCurrent = currentStep === stepNumber
            return (
              <div key={idx} className="w-0 flex justify-center items-center overflow-visible">
                <B5
                  weight="regular"
                  className={cn(
                    'text-center whitespace-nowrap transition-colors duration-200',
                    isCurrent ? 'text-primary-300 font-normal' : 'text-neutral-400 font-normal'
                  )}
                >
                  {stepLabels[idx]}
                </B5>
              </div>
            )
          })}
        </div>

        {/* 2. Nodes & Connecting Lines Row */}
        <div className="relative w-full flex items-center justify-between px-8 h-8">
          {/* Background Track Line */}
          <div className="absolute top-1/2 left-8 right-8 h-[6px] bg-neutral-200 rounded-full -translate-y-1/2 z-0" />

          {/* Active Progress Line */}
          <div
            className="absolute top-1/2 left-8 h-[6px] bg-primary-300 rounded-full transition-all duration-300 -translate-y-1/2 z-0"
            style={{
              width: `calc(${percentage}% - 12px)`,
              minWidth: currentStep > 1 ? '16px' : '0px',
            }}
          />

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
                  'w-[18px] h-[18px] rotate-45 rounded-[3px] transition-all duration-300 z-10 flex items-center justify-center focus:outline-none',
                  isCurrent
                    ? 'bg-primary-100 scale-110 shadow-[0_4px_10px_rgba(177,229,247,0.4)]'
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
