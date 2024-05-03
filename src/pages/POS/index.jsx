import React from 'react';
import TopPos from '../../components/organisems/TopPos';
import NominalPos from '../../components/organisems/NominalPos';
import SubmitPos from '../../components/organisems/SubmitPos';
import ContentLeftPos from '../../components/organisems/ContentLeftPos';
import EmptyOrderPos from '../../components/organisems/EmptyOrderPos';

export default function PosPage() {
  return (
    <>
      <div className="font-serif">
        <TopPos/>
        <hr />
        <div className="flex flex-row font-serif">
          <div className="bg-stone-600 w-2/5 h-lvh block">
            <div className="flex flex-col h-screen">
              <EmptyOrderPos/>
              <div className="flex-grow flex-row font-bold">
                <div className="bg-white h-full items-center justify-center flex flex-col">
                  <ContentLeftPos/>
                  <div className="flex flex-row w-full h-full">
                    <SubmitPos/>
                    <NominalPos/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* LEFT Content End */}
          {/* RIGHT */}
          <div className="w-3/5 flex-col text-[#3d444e] ">
            {/* RIGHT(NAVIGATION) */}
            <div className="flex  items-center h-9 px-1">
              {/* HOME TO DESK */}
              <div className="h-9 me-auto">
                <div className="flex items-center gap-3">
                  <a href="#"><img className="h-9" src="icon/home.png" alt="" /></a>
                  <p className="">&gt;</p>
                  <div className="flex items-center gap-2">
                    <a href="#"><img className="h-7" src="icon/desk.png" alt="" /></a>
                    <p>Desk</p>
                  </div>
                </div>
              </div>
              {/* SEARCH PRODUCT */}
              <div className="flex ">
                <input className="border-2 rounded-lg" type="search" placeholder="          Search Product" name="" id="" />
              </div>
            </div>
            {/* LIST PRODUCT */}
            <div className="block">
              <div className="bg-[#d9dade] h-full p-2 flex flex-col gap-2">
                {/* LAYER 1 */}
                <div className="flex gap-2 ">
                  <button className="flex-col  bg-white p-2 text-left">
                    <img className="" src="img/1.png" alt="" />
                    <p className="font-bold">Corner Desk Left Sit</p>
                    <p className="text-[#724b68] font-bold">$ 99.75</p>
                  </button>
                  <button className="flex-col  bg-white p-2 text-left">
                    <img className="" src="img/2.png" alt="" />
                    <p className="font-bold">Corner Desk Right Sit</p>
                    <p className="text-[#724b68] font-bold">$ 169.05</p>
                  </button>
                  <button className="flex-col  bg-white p-2 text-left">
                    <img className="" src="img/3.png" alt="" />
                    <p className="font-bold">Cuztomizable Desk...</p>
                    <p className="text-[#724b68] font-bold">$ 920.46</p>
                  </button>
                  <button className="flex-col  bg-white p-2 text-left">
                    <img className="" src="img/5.png" alt="" />
                    <p className="font-bold">Cuztomizable Desk(Custom...</p>
                    <p className="text-[#724b68] font-bold">$ 862.50</p>
                  </button>
                  <button className="flex-col  bg-white p-2 text-left">
                    <img className="" src="img/5.png" alt="" />
                    <p className="font-bold">Cuztomizable Desk(Custom...</p>
                    <p className="text-[#724b68] font-bold">$ 862.50</p>
                  </button>
                </div>
                {/* LAYER 2 */}
                <div className="flex gap-2 ">
                  <button className="flex-col  bg-white p-2 text-left">
                    <img className="" src="img/4.png" alt="" />
                    <p className="font-bold">Cuztomizable Desk(Steel,...</p>
                    <p className="text-[#724b68] font-bold">$ 862.50</p>
                  </button>
                  <button className="flex-col  bg-white p-2 text-left">
                    <img className="" src="img/5.png" alt="" />
                    <p className="font-bold">Cuztomizable Desk(Custom...</p>
                    <p className="text-[#724b68] font-bold">$ 862.50</p>
                  </button>
                  <button className="flex-col  bg-white p-2 text-left">
                    <img className="" src="img/6.png" alt="" />
                    <p className="font-bold">Desk Combination</p>
                    <p className="text-[#724b68] font-bold">$ 517.50</p>
                  </button>
                  <button className="flex-col  bg-white p-2 text-left">
                    <img className="" src="img/7.png" alt="" />
                    <p className="font-bold">Four Person <br /> Desk</p>
                    <p className="text-[#724b68] font-bold">$ 2,702.50</p>
                  </button>
                  <button className="flex-col  bg-white p-2 text-left">
                    <img className="" src="img/8.png" alt="" />
                    <p className="font-bold">Lily Vingroom</p>
                    <p className="text-[#724b68] font-bold">$ 0.00</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* RIGHT */}
        </div>
        {/* FOOTER */}
        <div className="flex justify-center items-center gap-1 bg-stone-600 h-10">
          <div>
            <img className="h-5" src="icon/cash.svg" alt="" />
          </div>
          <div>
            <p className="text-sm font-semibold">USD</p>
          </div>
          <div className="h-full w-[1px] bg-white"></div>
          <div>
            <p className="text-sm font-semibold">1,000,000</p>
          </div>
          <div className="h-full w-[1px] bg-white"></div>
          <div>
            <p className="text-sm font-semibold">ITEMS</p>
          </div>
          <div className="h-full w-[1px] bg-white"></div>
          <div>
            <p className="text-sm font-semibold">0</p>
          </div>
          <div className="h-full w-[1px] bg-white"></div>
          <div>
            <p className="text-sm font-semibold">NOTES</p>
          </div>
          <div className="h-full w-[1px] bg-white"></div>
          <div>
            <p className="text-sm font-semibold">0</p>
          </div>
        </div>
      </div>
    </>
  );
}
