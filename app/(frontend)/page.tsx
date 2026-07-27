import Hero from '@/modules/home/Hero'
import Profile from '@/modules/home/Profile'
import DivisiBSO from '@/modules/home/DivisiBSO'
import News from '@/modules/home/News'
import Event from '@/modules/home/Event'
import Life from '@/modules/home/Life'

export default function HomePage() {
  return (
    <>
      {/* Wrap Hero + Profile so Hero's sticky only works within this container.
          Once this div scrolls out of view, Hero scrolls away with it. */}
      <div className="relative">
        <Hero />
        <Profile />
      </div>
      <News />
      <DivisiBSO />
      <Event />
      <Life />
    </>
  )
}
