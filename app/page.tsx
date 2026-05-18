import Hero from '@/modules/home/Hero'
import NewsMarquee from '@/modules/home/NewsMarquee'
import TentangSection from '@/modules/home/TentangSection'
import PeranSection from '@/modules/home/PeranSection'
import Event from '@/modules/home/Event'
import PersuratanSection from '@/modules/home/PersuratanSection'
import AOSInit from '@/components/elements/AOSInit'

export default function HomePage() {
  return (
    <>
      <AOSInit />
      <Hero />
      <NewsMarquee />
      <TentangSection />
      <PeranSection />
      <Event />
      <PersuratanSection />
    </>
  )
}
