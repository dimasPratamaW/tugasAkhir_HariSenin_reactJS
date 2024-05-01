import React, { useState } from 'react';
import RootLayouts from '../../layouts/RootLayouts';

export default function FAQ() {
  const [activeContent, setActiveContent] = useState(null);

  const toggleContent = (id) => {
    if (activeContent === id) {
      setActiveContent(null);
    } else {
      setActiveContent(id);
    }
  };

  const faqData = [
    {
      question: 'Printer label mana saja yang dapat secara langsung digunakan oleh ODOO PoS?',
      answer: 'Kami mendukung semua label printer Zebra (Zebra ZD410, Zebra ZD420, dsb.) yang berdasarkan protokol ZPL. Pencetakan akan secara otomatis dilakukan. Label printer USB lainnya akan dideteksi oleh sistem kami, tapi beberapa modifikasi pada laporan templat akan diperlukan agar bisa kompatibel dengan format kertas printer. Pencetakan akan secara manual diluncurkan melalui halaman pencetakan browser. Catatan: IoT box diperlukan untuk printer label.'
    },
    {
      question: 'Apakah saya masih dapat mencetak walaupun sistem saya offline?',
      answer: 'Anda dapat mencetak selama PoS dan printer Anda terhubung pada jaringan lokal yang sama (wifi/ethernet).'
    },
    {
      question: 'Apakah saya butuh satu IoT Box untuk setiap PoS?',
      answer: 'Semenjak Odoo PoS v13, Anda tidak lagi membutuhkan IoT Box untuk setiap PoS yang tersedia karena Anda dapat memilih secara manual hardware yang akan digunakan untuk lebih dari satu PoS melalui menu dropdown pada menu setup IoT (terdapat beberapa pengecualian seperti terminal pembayaran Ingenico).'
    },
    {
      question: 'Apakah saya dapat menggunakan lebih dari satu terminal pembayaran elektronik (TPE) pada satu PoS?',
      answer: 'Beberapa kombinasi TPE dapat dilakukan menggunakan hanya satu POS Odoo. Lebih lagi, terminal pembayaran Adyen atau Ingenico yang sama dapat digunakan dengan PoS lainnya.'
    },
    {
      question: 'Apakah saya dapat menggunakan 2 layar tambahan untuk Odoo PoS saya dengan IoT Box?',
      answer: 'Semenjak 2020, IoT Box (yang didasarkan dari Raspberry 4) memiliki 2 colokan HDMI yang memungkinkan Anda untuk menghubungkan 2 layar di atas layar kasir (misalnya satu tampilan pelanggan dan satu tampilan promosi).'
    }
  ];

  return (
    <RootLayouts>
      <main className="mb-10 mt-28">
        <div className="bg-[#65435c] my-5 py-10 min-h-8 flex items-center justify-center">
          <div>
            <h1 className="text-4xl font-bold text-center text-white">POS FAQ</h1>
          </div>
        </div>
        <div className="grid gap-5 justify-center align-middle">
          {faqData.map((item, index) => (
            <div key={index} className="mr-8 max-w-3xl border-2 pl-3 rounded-lg bg-slate-300">
              <div className="py-2"></div>
              <a onClick={() => toggleContent(index)}>{item.question}</a>
              <div className="py-2"></div>
              <div className={activeContent === index ? '' : 'hidden'}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </RootLayouts>
  );
}
