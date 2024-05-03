import dataFooter from "../lib/dataFooter";
import logo from "../assets/gambar/logo.png";
import bendera from "../assets/gambar/bendera.png";
import { FacebookOutlined, GithubOutlined, TwitterOutlined } from "@ant-design/icons";
const Footer = () => {
  return (
    <footer className="mt-20 w-full h-max bg-gray-900 font-body font-normal">
      <div className="container max-w-[500px] md:max-w-full px-10 py-10 text-gray-400  max-auto">
        <figure className="flex justify-center pb-5">
          <img src={logo} alt="logo" className="h-auto max-w-[120px] w-full" />
        </figure>
      </div>
      <div className="w-full flex flex-wrap md:flex-nowrap justify-center items-center gap-5 py-5 px-8">
        <div className="grid grid-cols-2 place-items-start md:w-mx md:grid-cols-2 gap-3 w-full text-gray-300">
          {dataFooter.map((elm, i) => {
            return (
              <div className="pb-4 md:max-w-[400px]" key={i}>
                <p className="text-2xl font-medium text-gray-200 pb-3">{elm.label}</p>
                <p className="text-gray-300 pb-2 cursor-pointer hover:text-gray-200">{elm.title}</p>
                <ul className="grid gap-2">
                  {elm.sub.map((label, i) => {
                    return (
                      <li key={i} className="cursor-pointer text-gray-400 hover:text-gray-300">
                        {label}
                      </li>
                    );
                  })}
                  <p className="text-gray-300 hover:text-gray-200 cursor-pointer">{elm.Privasi}</p>
                </ul>
              </div>
            );
          })}
        </div>
        <div className="grid w-full text-gray-300">
          <div className="flex items-center text-gray-300 gap-2 pb-10 border-b-[1px] w-full border-gray-600">
            <img src={bendera} alt="indonesia" className="w-[30px] h-[30px] rounded-[100%] object-cover" />
            <span>Bahasa Indonesia</span>
          </div>
          <p className="pt-8">Odoo adalah rangkaian Aplikasi bisnis open source yang mencakup semua kebutuhan perusahaan Anda : CRM, eCommerce, akutansi, iventaris, point of sale, manajement project, dan seterus.</p>
          <span className="pt-3">Mudah di gunakan dan terintegrasi penuh pada saat yang sama adalah value proposition unik Odoo.</span>
          <div className="flex gap-5 pt-6 cursor-pointer">
            <FacebookOutlined style={{ fontSize: "25px" }} />
            <TwitterOutlined style={{ fontSize: "25px" }} />
            <GithubOutlined style={{ fontSize: "25px" }} />
          </div>
        </div>
      </div>
      <div className="w-full bg-black">
        <p className="flex justify-center py-5 text-gray-400">
          Website made with <span className="text-gray-200 px-2"> Group 7</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
