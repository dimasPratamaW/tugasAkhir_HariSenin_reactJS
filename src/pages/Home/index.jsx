import React from 'react'
import RootLayouts from '../../layouts/RootLayouts'
import Hero from '../../components/organisems/Hero'
import Gambar from '../../components/organisems/Gambar'

export default function HomePage() {
  return (
    <RootLayouts>
        <Hero />
        <Gambar />
    </RootLayouts>

  )
}
