import React from 'react';
import TopPos from '../../components/organisems/TopPos';
import NominalPos from '../../components/organisems/NominalPos';
import SubmitPos from '../../components/organisems/SubmitPos';
import ContentLeftPos from '../../components/organisems/ContentLeftPos';
import EmptyOrderPos from '../../components/organisems/EmptyOrderPos';
import ListItem from '../../components/organisems/ListItem';
import Footer from '../../components/Footer';

export default function PosPage() {
  return (
    <>
      <div className="font-serif">
        <TopPos />
        <hr />
        <div className="flex flex-row font-serif mt-20">
          <div className="bg-stone-600 w-2/5 h-lvh block">
            <div className="flex flex-col h-screen">
              <EmptyOrderPos />
              <div className="flex-grow flex-row font-bold">
                <div className="bg-white h-full items-center justify-center flex flex-col">
                  <ContentLeftPos />
                  <div className="flex flex-row w-full h-full">
                    <SubmitPos />
                    <NominalPos />
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
                <input className="border-2 rounded-lg" type="search" placeholder=" Search Product" name="" id="" />
              </div>
            </div>
            {/* LIST PRODUCT */}
            <div className="block">
              <div className="bg-[#d9dade] h-full p-2 flex flex-col gap-2">
                {/* LAYER 1 */}
                <div className="flex gap-2 ">
                  <ListItem />
                </div>
              </div>
            </div>
          </div>
          {/* RIGHT */}
        </div>
        {/* FOOTER */}
        <Footer/>
      </div>
    </>
  );
}
