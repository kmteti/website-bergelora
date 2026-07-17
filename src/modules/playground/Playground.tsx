import { H3 } from '@/components/elements/Typography'
import { Button } from '@/components/ui/button'
import Typography from '@/modules/playground/ViewTypography'

export default function Playground() {
  return (
    <div className="bg-neutral-300 min-h-screen mt-20 p-10">
      <div className="flex flex-col gap-6 mb-12 bg-white p-8 rounded-xl shadow-sm">
        <H3>Button Variants</H3>
        <div className="flex flex-wrap gap-4">
          <Button variant="default">Default</Button>
          <Button variant="blue">Blue</Button>
          <Button variant="green">Green</Button>
          <Button variant="yellow">Yellow</Button>
          <Button variant="red">Red</Button>
          <Button variant="neutral">Neutral</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>
      <Typography />
    </div>
  )
}