import { B1, B2, B3, B4, B5, H1, H2, H3, H4, H5, H6 } from '@/components/elements/Typography'

export default function Typography() {
  return (
    <div className="flex flex-col gap-12 rounded-xl bg-white p-8 text-neutral-1000 shadow-sm">
      <div className="flex flex-col gap-4">
        <div className="border-b pb-3">
          <H3>Headings (Source Serif 4)</H3>
          <B4 className="mt-1 text-neutral-500">
            Responsive clamp, max values follow Figma Source Serif 4 styles.
          </B4>
        </div>

        <div className="flex flex-col gap-3">
          <div className="border-b border-neutral-100 pb-3">
            <B5 className="mb-1 uppercase tracking-wider text-neutral-400">
              H1 - 40/46 to 62/70 - tracking -2%
            </B5>
            <H1>The quick brown fox jumps over the lazy dog</H1>
          </div>

          <div className="border-b border-neutral-100 pb-3">
            <B5 className="mb-1 uppercase tracking-wider text-neutral-400">
              H2 - 34/40 to 57/64 - tracking -2%
            </B5>
            <H2>The quick brown fox jumps over the lazy dog</H2>
          </div>

          <div className="border-b border-neutral-100 pb-3">
            <B5 className="mb-1 uppercase tracking-wider text-neutral-400">
              H3 - 28/36 to 45/52 - tracking -2%
            </B5>
            <H3>The quick brown fox jumps over the lazy dog</H3>
          </div>

          <div className="border-b border-neutral-100 pb-3">
            <B5 className="mb-1 uppercase tracking-wider text-neutral-400">
              H4 - 24/32 to 32/36
            </B5>
            <H4>The quick brown fox jumps over the lazy dog</H4>
          </div>

          <div className="border-b border-neutral-100 pb-3">
            <B5 className="mb-1 uppercase tracking-wider text-neutral-400">H5 - 24/32</B5>
            <H5>The quick brown fox jumps over the lazy dog</H5>
          </div>

          <div className="border-b border-neutral-100 pb-3">
            <B5 className="mb-1 uppercase tracking-wider text-neutral-400">H6 - 18/24</B5>
            <H6>The quick brown fox jumps over the lazy dog</H6>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="border-b pb-3">
          <H3>Body (Montserrat)</H3>
          <B4 className="mt-1 text-neutral-500">
            Regular by default, with weight prop support for semibold and bold.
          </B4>
        </div>

        <div className="flex flex-col gap-3">
          <div className="border-b border-neutral-100 pb-3">
            <B5 className="mb-1 uppercase tracking-wider text-neutral-400">
              B1 - 20/30 to 24/32
            </B5>
            <B1>The quick brown fox jumps over the lazy dog</B1>
          </div>

          <div className="border-b border-neutral-100 pb-3">
            <B5 className="mb-1 uppercase tracking-wider text-neutral-400">
              B2 - 18/24
            </B5>
            <B2>The quick brown fox jumps over the lazy dog</B2>
          </div>

          <div className="border-b border-neutral-100 pb-3">
            <B5 className="mb-1 uppercase tracking-wider text-neutral-400">
              B3 - 16/24
            </B5>
            <B3>The quick brown fox jumps over the lazy dog</B3>
          </div>

          <div className="border-b border-neutral-100 pb-3">
            <B5 className="mb-1 uppercase tracking-wider text-neutral-400">
              B4 - 14/20
            </B5>
            <B4>The quick brown fox jumps over the lazy dog</B4>
          </div>

          <div className="border-b border-neutral-100 pb-3">
            <B5 className="mb-1 uppercase tracking-wider text-neutral-400">
              B5 - 12/16
            </B5>
            <B5>The quick brown fox jumps over the lazy dog</B5>
          </div>
        </div>

        <div className="grid gap-3 rounded-lg bg-neutral-50 p-4 md:grid-cols-3">
          <B3 weight="regular">Regular weight</B3>
          <B3 weight="semibold">Semibold weight</B3>
          <B3 weight="bold">Bold weight</B3>
        </div>
      </div>
    </div>
  )
}
