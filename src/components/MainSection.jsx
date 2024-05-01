import React from 'react';
import Hero from './organisems/Hero';
import Gambar from './organisems/Gambar';
import System from './organisems/System';
import Kenyamanan from './organisems/Kenyamanan';
import Loyality from './organisems/Loyality';
import Features from './organisems/Features';

export default function MainSection() {
  return (
    <main className="mt-20 md:mt-32">
      <article className="w-full h-max grid gap-20">
        <Hero />
        <Gambar/>
        <System/>
        <Kenyamanan/>
        <Loyality/>
        
        <section className="container max-w-[580px] md:max-w-[900px] mx-auto flex flex-col items-center gap-9">
          {/* Penjualan cross-channel */}
          <div className="max-w-[82.5 rem] mx-auto">
            <div className="justify-between">
              <div>
                <h2 className="text-4xl py-3 font-bold font-primary text-center md:text-7xl">Penjualan <span className="font-bold text-red-500">cross-channel</span></h2>
                <p className="text-xl text-left font-light">
                  <span className="font-semibold">Interface yang memiliki semuanya:</span> sangat intuitif sehingga siapapun dapat mengusainya dalam hitungan menit, namun di penuhi opsi yang mencengangkan. Tangani transaksi apapun dengan mulus dan fokus pada apa yang terpenting, pelanggan.
                </p>
              </div>
              <div className="justify-center">
                <div className="flex flex-row ">
                  <div className="flex-1 items-center">
                    <img src="https://odoocdn.com/openerp_website/static/src/img/apps/pos/cross_channel_selling_1.webp" alt="" className="object-scale-down w-[30rem]" loading="lazy" />
                  </div>
                  <div className="flex-1 flex items-center self-center justify-center">
                    <img src="https://odoocdn.com/openerp_website/static/src/img/arrows/arrow_sm_03.svg" alt="arah panah" className="rotate-[270deg] transform-gpu" loading="lazy" />
                  </div>
                  <div className="flex-1">
                    <img src="https://odoocdn.com/openerp_website/static/src/img/apps/pos/cross_channel_selling_2.webp" alt="" className="object-scale-down w-[30rem] h-auto" loading="lazy" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Features/>
      </article>
    </main>
  );
}
