'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out',
      offset: 80,
      once: true,
    })
  }, [])

  return null
}

export default AOSInit
