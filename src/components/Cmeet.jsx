import React from 'react'
import arrow from "../assets/gambar/arrow.png";
import arrow2 from "../assets/gambar/arrow2.png";
import arrowsection from "../assets/gambar/arrowsection.png";
import herogambar from '../assets/gambar/herogambar.png'

const Cmeet = () => {
  return (
    <section class="w-full pb-32">
    <div class="container max-w-[580px] md:max-w-[900px] mx-auto flex flex-col items-center gap-9">
  <div class="flex w-full justify-center items-center text-4xl font-primary md:text-7xl gap-4">
    <p>Kompleks</p>
    <img src={arrow} alt="arrow" width="50" height="50" alt="arrow" class="hidden lg:block w-20" />
    <p>bertemu</p>  
    <img src={arrow2} alt="arrow" width="50" height="50" alt="arrow" class="hidden md:block w-20" />
    <p>intuitif</p>
  </div>
  <div class="max-w-[500px] md:max-w-[800px] px-4">
    <p class="text-xl text-center font-light">
      <span class="font-semibold">Interface yang memiliki semuanya:</span> sangat intuitif sehingga siapapun
      dapat mengusainya dalam hitungan menit, namun di penuhi opsi yang mencengangkan. Tangani tranksaksi apapun
      dengan mulus
      dan fokus pada apa yang terpenting pelanggan.
    </p>
  </div>
</div>
<div
  class="w-full mx-auto grid grid-cols-2 xl:grid-cols-[0.5fr_minmax(700px,1fr)_0.5fr] mt-28 xl:gap-18 px-4 content-center">
  <div class="text-center font-primary gap-4 md:gap-10 text-red-950 grid px-3 xl:px-14">
    <h3 class="md:text-4xl text-2xl flex flex-col">
      Penjualan kostum
      <img src={arrowsection} alt="arrowsection" width="30" height="25" alt="arrow" loading="lazy"
        class="hidden xl:block w-[20px] h-[30px] rotate-[290deg] place-self-end" />
    </h3>
    <h3 class="text-2xl md:text-4xl flex flex-col">
      Program loyalitas
      <img src={arrowsection} alt="arrowsection" width="30" height="25" alt="arrow" loading="lazy"
        class="hidden xl:block w-[20px] h-[40px] rotate-[280deg] place-self-end" />
    </h3>
    <h3 class="text-2xl md:text-4xl flex flex-col">
      <img src={arrowsection} alt="arrowsection" width="30" height="25" alt="arrow" loading="lazy"
        class="hidden xl:block w-[20px] h-[40px] place-self-end rotate-[250deg]" />
      Lebih dari satu terminal Pembayaran
    </h3>
  </div>
  <div class="hidden xl:block md:max-w-[900px]">
    <img src={herogambar}  alt="tumbnail" class="w-full h-auto object-cover" />
  </div>
  <div class="text-center grid font-primary gap-4 md:gap-10 text-red-950 px-3 xl:px-14">
    <h3 class="text-2xl md:text-4xl flex flex-col">
      <img src={arrowsection} alt="arrowsection" width="30" height="25" alt="arrow" loading="lazy"
        class="hidden xl:block w-[20px] h-[40px] rotate-[70deg] place-self-start" />
      Handle onfline & Online
    </h3>
    <h3 class="text-2xl md:text-4xl flex flex-col">
      <img src={arrowsection} alt="arrowsection" width="30" height="25" alt="arrow" loading="lazy"
        class="hidden xl:block w-[20px] h-[40px] rotate-[100deg] place-self-start" />
      filter berdasarkan kategori product
    </h3>
    <h3 class="text-2xl md:text-4xl flex flex-col">
      <img src={arrowsection} alt="arrowsection" width="30" height="25" alt="arrow" loading="lazy"
        class="hidden xl:block w-[20px] h-[40px] place-self-start rotate-[110deg]" />
      tampilan intuitif
    </h3>
  </div>
</div>
</section>

  )
}

export default Cmeet
