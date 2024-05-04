import React from "react";
import star from "../../assets/gambar/star.png";


export default function Features() {
  return (
    <>
      <div className="border-2 border-slate-200 rounded-tl-lg bg-gray-200">
        <section className="container pb-6 max-w-[36.25rem] md:max-w-[56.25rem] mx-auto gap-9">
          {/* FItur yang dimiliki ODOO */}
          <div className="pl-3 py-3">
            <h2 className=" text-4xl text-left font-bold font-primary md:text-7xl">
              All the features
            </h2>
            <h2 className=" text-4xl text-left font-bold font-primary md:text-7xl">
              done right.
            </h2>
          </div>
          <div className="flex flex-col justify-between gap-5 md:flex-row">
            <div className="grid gap-5">
              {/* mulai */}
              <div className="rounded-lg px-5 py-2 bg-white">
                <div className="flex flex-row justify-between">
                  <h4 className="text-2xl font-semibold self-center">
                    All devices welcome
                  </h4>
                  <img
                    src={star}
                    alt="pos_toko"
                    className="object-scale-down w-14 h-auto"
                  />
                </div>
                <p>
                  Odoo works like a charm across tablets, laptops, desktops, and
                  industrial machines. Sync it with barcode scanners and scales.
                </p>
              </div>
              <div className="rounded-lg px-5 py-2 bg-white">
                <div className="flex flex-row justify-between">
                  <h4 className="text-2xl font-semibold">Loyalty programs</h4>
                  <img
                    src={star}
                    alt="pos_toko"
                    className="object-scale-down w-14 h-auto"
                  />
                </div>
                <p>
                  Create cross-platform reward programs to keep your customers
                  coming back.
                </p>
              </div>
              <div className="rounded-lg px-5 py-2 bg-white">
                <div className="flex flex-row justify-between">
                  <h4 className="text-2xl font-semibold">Multiple cashiers</h4>
                  <img
                    src={star}
                    alt="pos_toko"
                    className="object-scale-down w-14 h-auto"
                  />
                </div>
                <p>
                  Manage several cashier accounts and secure them with badges or
                  PIN codes.
                </p>
              </div>
              <div className="rounded-lg px-5 py-2 bg-white">
                <div className="flex flex-row justify-between">
                  <h4 className="text-2xl font-semibold">Flexible invoicing</h4>
                  <img
                    src={star}
                    alt="pos_toko"
                    className="object-scale-down w-14 h-auto"
                  />
                </div>
                <p>
                  Print invoices on the fly, send them via email or a QR code.
                </p>
              </div>
            </div>
            <div className="mb-10 pb-10 grid gap-5">
              <div className="rounded-lg px-5 py-2 bg-white">
                <div className="flex flex-row justify-between">
                  <h4 className="text-2xl font-semibold">Offline payments</h4>
                  <img
                    src={star}
                    alt="pos_toko"
                    className="object-scale-down w-14 h-auto"
                  />
                </div>
                <p>
                  Payments made offline are automatically synchronized when you
                  are reconnected.
                </p>
              </div>
              <div className="rounded-lg px-5 py-2 bg-white">
                <div className="flex flex-row justify-between">
                  <h4 className="text-2xl font-semibold">
                    Integrated payments
                  </h4>
                  <img
                    src={star}
                    alt="pos_toko"
                    className="object-scale-down w-14 h-auto"
                  />
                </div>
                <p>
                  Use cash, checks, credit cards and add other payment methods
                  in a flash.
                </p>
                <img
                  src="https://odoocdn.com/openerp_website/static/src/img/apps/pos/integrated_payments.webp"
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
