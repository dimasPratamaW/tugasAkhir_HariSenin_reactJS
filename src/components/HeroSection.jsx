import Pos from "../assets/gambar/hero-gambar.png";
import kalkulator from "../assets/gambar/hero-gambar-2.png";
import play from "../assets/gambar/hero-play.png";

const HeroSection = () => {
  return (
    <main className="mt-20">
      <article className="w-full h-max grid gap-20 font-body font-normal">
        <section className="container max-w-[580px] md:max-w-[900px] mx-auto flex flex-col py-5 px-4 justify-center items-center gap-4">
          <h1 className="text-5xl md:text-7xl text-center py-3 max-w-[500px] font-bold font-primary">Point Of sale yang dapat di andalkan</h1>
          <p className="max-w-[500px] md:max-w-[800px] text-lg md:text-xl text-center">
            <span className="font-extrabold">Odoo POS</span> yang intuitif, bekerja baik online atau offline, serta menawarkan beragam macam opsi untuk memenuhi kebutuhan bisnis anda. Setup dalam hitungan menit, mulai menjual dalam hitungan
            detik, dan pastikan staf serta klien anda puas!
          </p>
          <button className="px-4 py-3 bg-red-950 grid place-items-cente text-white w-max rounded-lg font-semibold">Mulai Sekarang Juga - Gratis</button>
          <span className="font-medium text-center">
            Bebas, selamanya, tanpa batasan pengguna.{" "}
            <a href="#" className="flex md:inline font-semibold text-teal-800">
              {" "}
              Lihat Selengkapnya
            </a>
          </span>
        </section>
        <section className="mt-30 bg-gray-300 md:rounded-t-[35%] py-5 md:py-0 md:pb-32">
          <div className="container mx-auto h-auto min-w-[200px] md:max-w-[900px] px-4 bg-white shadow-2xl relative">
            <div className="w-full h-full py-2">
              <img src={Pos} alt="tumbnail" className="w-full h-auto object-cover" />
              <div className="hidden lg:block absolute bottom-[-120px] right-[-50px] w-[300px] h-auto">
                <img src={kalkulator} alt="" className="w-full h-auto object-cover" />
              </div>
            </div>
            <a href="#" target="_blank" className="absolute flex justify-center items-center top-2/4 left-2/4 -translate-x-2/4 md:w-24 md:h-24 h-14 w-14 bg-white rounded-full shadow-2xl">
              <img src={play} alt="play" width="10" height="20" className="w-[45px] h-[45] md:w-[70px] md:h-[70px] object-cover" />
            </a>
          </div>
        </section>
      </article>
    </main>
  );
};

export default HeroSection;
