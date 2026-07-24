import Hero from '@/modules/home/Hero'
import Profile from '@/modules/home/Profile'
import Divisi from '@/modules/home/Divisi'
import BSO from '@/modules/home/BSO'
import News from '@/modules/home/News'
import Event from '@/modules/home/Event'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Profile />
      <News />
      <Divisi />
      <BSO />
      <Event />
    </>
  )
}
