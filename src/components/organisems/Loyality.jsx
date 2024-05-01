import React from "react";
import star from "../../assets/gambar/start.png";

export default function Loyality() {
  return (
    <>
      <section className="container max-w-[36.25rem] md:max-w-[56.25rem] mx-auto flex flex-col items-center gap-9">
        <div className="max-w-[82.5 rem] mx-auto">
          <div className="flex flex-col justify-between gap-9 md:flex-row">
            <div>
              <h2 className=" text-4xl text-left py-3 font-bold font-primary md:text-7xl">
                Berikan pelanggan loyal Hadiah
              </h2>
              <p className="font-light">
                <span className="font-semibold">
                  Pastikan klien datang lagi.{" "}
                </span>
                Tingkatkan pengalaman belanja mereka dengan program loyalitas:
                poin, hadiah, dan gift card. Menangani refund? Gunakan eWallet
                untuk meningkatkan retensi pelanggan sehingga pelanggan bahagia.
              </p>
            </div>
            <div className="md:w-full max-w-[31.25rem] grid grid-cols-3 content-center gap-5 md:gap-3 place-items-center">
              <div className="flex flex-col justify-center items-center">
                <img
                  src={star}
                  alt="pos_toko"
                  className="object-scale-down w-14 h-auto"
                />
                <h5 className="text-center py-3 font-bold font-primary">
                  Kupon
                </h5>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img
                  src={star}
                  alt="pos_toko"
                  className="object-scale-down w-14 h-auto"
                />
                <h5 className="text-center py-3 font-bold font-primary">
                  Kartu Loyalitas
                </h5>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img
                  src={star}
                  alt="pos_toko"
                  className="object-scale-down w-14 h-auto"
                />
                <h5 className="text-center py-3 font-bold font-primary">
                  Promosi
                </h5>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img
                  src={star}
                  alt="pos_toko"
                  className="object-scale-down w-14 h-auto"
                />
                <h5 className="text-center py-3 font-bold font-primary">
                  eWallet
                </h5>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img
                  src={star}
                  alt="pos_toko"
                  className="object-scale-down w-14 h-auto"
                />
                <h5 className="text-center py-3 font-bold font-primary">
                  Kartu Hadiah
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
