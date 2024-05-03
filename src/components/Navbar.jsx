import { Button } from "antd";
import logo from "../assets/gambar/logo.png";
import { useRef, useState } from "react";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
const Navbar = () => {
  const item = [
    {
      name: "home",
      link: "../",
    },
    {
      name: "FAQ",
      link: "../faq",
    },
    {
      name: "login",
      link: "../login",
    },
  ];
  const [icon, setIcon] = useState(false);
  const navRef = useRef();
  const toggleFunc = () => {
    setIcon(!icon);
    if (icon == false) {
      navRef.current.classList.remove("hidden");
    } else {
      navRef.current.classList.add("hidden");
    }
  };
  return (
    <header className="fixed py-2 top-0 left-0 z-10 m-auto shadow-sm w-full h-[50px] bg-gray-50 ">
      <div className="container mx-auto px-5 w-full h-full flex justify-between items-center">
        <figure>
          <img src={logo} alt="logo" className="h-auto max-w-[120px] w-full" />
        </figure>
        <nav ref={navRef} className="absolute hidden bg-gray-200 text-red-600 md:block md:static md:top-0 md:w-max md:mt-0 left-0 w-full md:bg-transparent md:z-auto top-[100%] transition-all ease-in duration-500">
          <ul className="grid place-content-start gap-5 py-5 md:flex">
            {item.map((elm, i) => {
              return (
                <Button type="link" key={i}>
                  <a className="uppercase font-body font-normal" href={elm.link}>
                    {elm.name}
                  </a>
                </Button>
              );
            })}
          </ul>
        </nav>

        <Button onClick={toggleFunc} className="grid place-content-center md:hidden">
          {icon ? <CloseOutlined style={{ color: "#000", fontSize: "16px" }} /> : <MenuOutlined style={{ color: "#000", fontSize: "16px" }} />}
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
