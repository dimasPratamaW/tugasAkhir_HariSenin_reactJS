import React from "react";
import hero from "../../assets/gambar/hero-gambar.png";
import hero2 from "../../assets/gambar/hero-gambar-2.png";
import play from "../../assets/gambar/hero-play.png";
import { Link } from "react-router-dom";

export default function Gambar() {
  return (
    <>
      <section className="mt-30 bg-gray-300 md:rounded-t-[35%] py-5 md:py-0 md:pb-32">
        <div className="container mx-auto h-auto min-w-[200px] md:max-w-[900px] lg:[800px] px-4 bg-white shadow-2xl relative">
          <div className="w-full h-full py-2">
            <img
              src={hero}
              alt="tumbnail"
              className="w-full h-auto object-cover"
            />
            <div className="hidden lg:block absolute bottom-[-120px] right-[-50px] w-[300px] h-auto">
              <img
                src={hero2}
                alt=""
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <Link
            to="/pos"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute flex justify-center items-center top-2/4 left-2/4 -translate-x-2/4 md:w-24 md:h-24 h-14 w-14 bg-white rounded-full shadow-2xl"
          >
            <img
              src={play}
              alt="play"
              width="10"
              height="20"
              className="w-[45px] h-[45] md:w-[70px] md:h-[70px] object-cover"
            />
          </Link>
        </div>
      </section>
    </>
  );
}
