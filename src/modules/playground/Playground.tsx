import { H3 } from '@/components/elements/Typography'
import { Button } from '@/components/ui/button'
import Typography from '@/modules/playground/ViewTypography'
import LayoutGuide from '@/modules/playground/LayoutGuide'
import { Home } from 'lucide-react'

const buttonRows = [
  { label: 'Primary', variant: 'primary' as const },
  { label: 'Secondary', variant: 'secondary' as const },
]

const buttonColumns = [
  { label: 'Small', size: 'sm' as const },
  { label: 'Default', size: 'default' as const },
  { label: 'Large', size: 'lg' as const },
]

const buttonStates = [
  { label: 'Default', props: {} },
  { label: 'Hover', props: { 'data-hover': 'true' } },
  { label: 'Pressed', props: { 'data-pressed': 'true' } },
]

export default function Playground() {
  const icon = <Home />

  return (
    <div className="mt-20 min-h-screen bg-neutral-300 p-10">
      <LayoutGuide />

      <div className="mb-12 flex flex-col gap-8 rounded-xl bg-white p-8 shadow-sm">
        <H3>Button Variants</H3>

        <div className="rounded-2xl border-2 border-dashed border-purple-300 bg-neutral-50 p-8">
          <div className="grid gap-16">
            {buttonRows.map((row) => (
              <div key={row.variant} className="grid gap-6">
                <div className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
                  {row.label}
                </div>

                <div className="grid gap-12 lg:grid-cols-3">
                  {buttonColumns.map((column) => (
                    <div key={column.size} className="grid justify-items-center gap-5">
                      <div className="text-xs font-medium uppercase tracking-wider text-neutral-400">
                        {column.label}
                      </div>

                      {buttonStates.map((state) => (
                        <Button
                          key={state.label}
                          variant={row.variant}
                          size={column.size}
                          leftIcon={icon}
                          rightIcon={icon}
                          {...state.props}
                        >
                          Button
                        </Button>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Typography />
    </div>
  )
}
