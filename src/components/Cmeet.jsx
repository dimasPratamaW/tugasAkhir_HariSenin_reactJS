import React from "react";
import arrow from "../assets/gambar/arrow.png";
import arrow2 from "../assets/gambar/arrow-2.png"; //ini
import arrowsection from "../assets/gambar/arrow-section.png";
import herogambar from "../assets/gambar/hero-gambar.png";
import star from "../assets/gambar/start.png";

const Cmeet = () => {
  return (
    <React.Fragment>
      <section className="w-full pb-32 mt-24">
        <div className="container max-w-[580px] md:max-w-[900px] mx-auto flex flex-col items-center gap-9">
          <div className="flex w-full justify-center items-center text-4xl font-primary md:text-7xl gap-4">
            <p>Kompleks</p>
            <img src={arrow} width="50" height="50" className="hidden lg:block w-20" />
            <p>bertemu</p>
            <img src={arrow2} width="50" height="50" className="hidden md:block w-20" />
            <p>intuitif</p>
          </div>
          <div className="max-w-[500px] md:max-w-[800px] px-4">
            <p className="text-xl text-center font-light">
              <span className="font-semibold">Interface yang memiliki semuanya:</span> sangat intuitif sehingga siapapun dapat mengusainya dalam hitungan menit, namun di penuhi opsi yang mencengangkan. Tangani tranksaksi apapun dengan mulus
              dan fokus pada apa yang terpenting pelanggan.
            </p>
          </div>
        </div>
        <div className="w-full mx-auto grid grid-cols-2 xl:grid-cols-[0.5fr_minmax(700px,1fr)_0.5fr] mt-28 xl:gap-18 px-4 content-center">
          <div className="text-center font-primary gap-4 md:gap-10 text-red-950 grid px-3 xl:px-14">
            <h3 className="md:text-4xl text-2xl flex flex-col">
              Penjualan kostum
              <img src={arrowsection} alt="arrowsection" width="30" height="25" loading="lazy" className="hidden xl:block w-[20px] h-[30px] rotate-[290deg] place-self-end" />
            </h3>
            <h3 className="text-2xl md:text-4xl flex flex-col">
              Program loyalitas
              <img src={arrowsection} alt="arrowsection" width="30" height="25" loading="lazy" className="hidden xl:block w-[20px] h-[40px] rotate-[280deg] place-self-end" />
            </h3>
            <h3 className="text-2xl md:text-4xl flex flex-col">
              <img src={arrowsection} alt="arrowsection" width="30" height="25" loading="lazy" className="hidden xl:block w-[20px] h-[40px] place-self-end rotate-[250deg]" />
              Lebih dari satu terminal Pembayaran
            </h3>
          </div>
          <div className="hidden xl:block md:max-w-[900px]">
            <img src={herogambar} alt="tumbnail" className="w-full h-auto object-cover" />
          </div>
          <div className="text-center grid font-primary gap-4 md:gap-10 text-red-950 px-3 xl:px-14">
            <h3 className="text-2xl md:text-4xl flex flex-col">
              <img src={arrowsection} alt="arrowsection" width="30" height="25" loading="lazy" className="hidden xl:block w-[20px] h-[40px] rotate-[70deg] place-self-start" />
              Handle onfline & Online
            </h3>
            <h3 className="text-2xl md:text-4xl flex flex-col">
              <img src={arrowsection} alt="arrowsection" width="30" height="25" loading="lazy" className="hidden xl:block w-[20px] h-[40px] rotate-[100deg] place-self-start" />
              filter berdasarkan kategori product
            </h3>
            <h3 className="text-2xl md:text-4xl flex flex-col">
              <img src={arrowsection} alt="arrowsection" width="30" height="25" loading="lazy" className="hidden xl:block w-[20px] h-[40px] place-self-start rotate-[110deg]" />
              tampilan intuitif
            </h3>
          </div>
        </div>
      </section>

      <section className="container max-w-[580px] md:max-w-[900px] mx-auto flex flex-col items-center gap-9 mt-20">
        <div className="mx-auto">
          <div className="flex flex-row justify-between">
            <>
              <div className=" flex-1 mr-8">
                <img src="https://odoocdn.com/openerp_website/static/src/img/apps/pos/self_service_for_the_win_kiosk.webp" className="object-scale-down w-30 h-auto" alt="pos_toko" />
              </div>
            </>
            <div className=" flex-1 justify-center self-center ">
              <h2 className="text-4xl text-left py-3 font-bold font-primary md:text-7xl">Pesan sendiri untuk kenyamanan pelanggan</h2>
              <p className="text-xl text-left font-light">
                <span className="font-semibold">Interface yang memiliki semuanya:</span> sangat intuitif sehingga siapapun dapat mengusainya dalam hitungan menit, namun di penuhi opsi yang mencengangkan. Tangani tranksaksi apapun dengan
                mulus dan fokus pada apa yang terpenting pelanggan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container max-w-[36.25rem] md:max-w-[56.25rem] mx-auto flex flex-col items-center gap-9 mt-24">
        <div class="max-w-[82.5 rem] mx-auto">
          <div class="flex flex-col justify-between gap-9 md:flex-row">
            <>
              <div class="">
                <h2 class=" text-4xl text-left py-3 font-bold font-primary md:text-7xl">Berikan pelanggan loyal Hadiah</h2>
                <p class="font-light">
                  <span class="font-semibold">Pastikan klien datang lagi. </span>
                  Tingkatkan pengalaman belanja mereka dengan program loyalitas: poin, hadiah, dan gift card. Menangani refund? Gunakan eWallet untuk meningkatkan retensi pelanggan sehingga pelanggan bahagia.
                </p>
              </div>
            </>

            <div class="md:w-full max-w-[31.25rem] grid grid-cols-3 content-center gap-5 md:gap-3 place-items-center">
              <div class="flex flex-col justify-center items-center">
                <img src={star} alt="star.png" class="object-scale-down w-14 h-auto" />
                <h5 class="text-center py-3 font-bold font-primary">Kupon</h5>
              </div>
              <div class="flex flex-col justify-center items-center">
                <img src={star} alt="star.png" class="object-scale-down w-14 h-auto" />
                <h5 class="text-center py-3 font-bold font-primary">Kartu Loyalitas</h5>
              </div>
              <div class="flex flex-col justify-center items-center">
                <img src={star} alt="star.png" class="object-scale-down w-14 h-auto" />
                <h5 class="text-center py-3 font-bold font-primary">Promosi</h5>
              </div>
              <div class="flex flex-col justify-center items-center">
                <img src={star} alt="star.png" class="object-scale-down w-14 h-auto" />
                <h5 class="text-center py-3 font-bold font-primary">eWallet</h5>
              </div>
              <div class="flex flex-col justify-center items-center">
                <img src={star} alt="star.png" class="object-scale-down w-14 h-auto" />
                <h5 class="text-center py-3 font-bold font-primary">Kartu Hadiah</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="container max-w-[580px] md:max-w-[900px] mx-auto flex flex-col items-center gap-9 mt-24">
        <div class="max-w-[82.5 rem] mx-auto">
          <div class="justify-between">
            <div class="">
              <h2 class="text-4xl py-3 font-bold font-primary text-center md:text-7xl">
                Penjualan
                <span class="font-bold text-red-500">cross-channel</span>
              </h2>
              <p class="text-xl text-left font-light">
                <span class="font-semibold">Interface yang memiliki semuanya:</span> sangat intuitif sehingga siapapun dapat mengusainya dalam hitungan menit, namun di penuhi opsi yang mencengangkan. Tangani tranksaksi apapun dengan mulus
                dan fokus pada apa yang terpenting pelanggan.
              </p>
            </div>
            <div class="justify-center">
              <div class="flex flex-row ">
                <div class="flex-1 items-center">
                  <img src="https://odoocdn.com/openerp_website/static/src/img/apps/pos/cross_channel_selling_1.webp" alt="" class="object-scale-down w-[30rem]" loading="lazy" />
                </div>
                <div class="flex-1 flex items-center self-center justify-center">
                  <img src="https://odoocdn.com/openerp_website/static/src/img/arrows/arrow_sm_03.svg" alt="arah panah" class="rotate-[270deg] transform-gpu" loading="lazy" />
                </div>
                <div class="flex-1">
                  <img src="https://odoocdn.com/openerp_website/static/src/img/apps/pos/cross_channel_selling_2.webp" alt="" class="object-scale-down w-[30rem] h-auto" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Cmeet;
