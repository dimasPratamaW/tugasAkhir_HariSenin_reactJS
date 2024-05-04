import React from "react";

export default function Hero() {
  return (
    <>
      <section className="container max-w-[580px] md:max-w-[900px] mx-auto flex flex-col py-5 px-4 justify-center items-center gap-4 font-body font-normal">
        <h1 className="text-7xl text-center py-3 max-w-[500px] font-bold font-primary">Point Of sale yang dapat di andalkan</h1>
        <p className="max-w-[500px] md:max-w-[800px] text-xl text-center">
          <span className="font-extrabold">Odoo POS</span> yang intuitif, bekerja baik online atau offline, serta menawarkan beragam macam opsi untuk memenuhi kebutuhan bisnis anda. Setup dalam hitungan menit, mulai menjual dalam hitungan
          detik, dan pastikan staf serta klien anda puas!
        </p>
        <button className="px-4 py-3 bg-red-950 grid place-items-center text-white w-max rounded-lg font-semibold">Mulai Sekarang Juga - Gratis</button>
        <span className="font-medium text-center">
          Bebas, selamanya, tanpa batasan pengguna.{" "}
          <a href="#" className="flex md:inline font-semibold text-teal-800">
            {" "}
            Lihat Selengkapnya
          </a>
        </span>
      </section>
    </>
  );
}
