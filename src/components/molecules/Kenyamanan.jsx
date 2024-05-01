import React from "react";

export default function Kenyamanan() {
  return (
    <>
      <section className="container max-w-[580px] md:max-w-[900px] mx-auto flex flex-col items-center gap-9">
        <div className="mx-auto">
          <div className="flex flex-row justify-between">
            <div className=" flex-1 mr-8">
              <img
                src="https://odoocdn.com/openerp_website/static/src/img/apps/pos/self_service_for_the_win_kiosk.webp"
                className="object-scale-down w-30 h-auto"
                alt="pos_toko"
              />
            </div>
            <div className=" flex-1 justify-center self-center ">
              <h2 className="text-4xl text-left py-3 font-bold font-primary md:text-7xl">
                Pesan sendiri untuk kenyamanan pelanggan
              </h2>
              <p className="text-xl text-left font-light">
                <span className="font-semibold">
                  Interface yang memiliki semuanya:
                </span>{" "}
                sangat intuitif sehingga siapapun dapat mengusainya dalam
                hitungan menit, namun di penuhi opsi yang mencengangkan. Tangani
                transaksi apapun dengan mulus dan fokus pada apa yang
                terpenting, pelanggan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
