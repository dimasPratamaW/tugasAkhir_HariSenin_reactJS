import { useState } from "react";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import logo from "../assets/gambar/logo.png";
import { Link } from "react-router-dom";

export default function NavbarNew() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed py-2 top-0 left-0 w-full h-[80px] z-10 m-auto shadow-sm bg-gray-50">
      <div className="container w-full relative flex justify-between items-center h-full px-4 mx-auto">
        <a href="/">
          <img src={logo} alt="logo" width="80" height="50" loading="lazy" className="h-auto max-w-[120px] w-full" />
        </a>
        <nav className={`absolute bg-gray-200 md:block md:static md:top-0 md:w-max md:mt-0 left-0 w-full md:bg-transparent md:z-auto top-[90%] transition-all ease-in duration-500 ${isOpen ? "" : "hidden"}`} data-navbar>
          <ul className="h-full px-8 flex flex-col md:flex-row md:px-0 md:items-center md:w-auto">
            <li className="my-5 md:my-0">
              <a href="/" className="font-semibold">
                Home
              </a>
            </li>
            <li className="my-5 md:mx-5">
              <Link to="/faq" className="font-semibold">
                FAQ
              </Link>
            </li>
            <li className="pt-10 pb-6 border-t-[1px] md:pb-0 md:pt-0 md:border-t-0 solid border-gray-700 w-[100px]">
              <Link className="px-5 bg-white py-3 rounded-xl font-semibold shadow-xl" to="/login">
                Sign In
              </Link>
            </li>
          </ul>
        </nav>

        <button className="grid place-items-center h-10 w-10 bg-gray-200 shadow-xl rounded-lg hover:bg-gray-100 md:hidden" onClick={handleToggler}>
          {isOpen ? <CloseOutlined className="text-xl" /> : <MenuOutlined className="text-xl" />}
        </button>
      </div>
    </header>
  );
}
