import React from 'react';
import Hero from './molecules/Hero';
import Gambar from './molecules/Gambar';
import System from './molecules/System';
import Kenyamanan from './molecules/Kenyamanan';
import Loyality from './molecules/Loyality';
import Features from './molecules/Features';

export default function MainSection() {
  return (
    <main className="mt-20 md:mt-32">
      <article className="w-full h-max grid gap-20">
        <Hero />
        <Gambar/>
        <System/>
        <Kenyamanan/>
        <Loyality/>
        <Features/>
      </article>
    </main>
  );
}
