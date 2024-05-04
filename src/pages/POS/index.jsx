import { useEffect, useState } from "react";
import NominalPos from "../../components/organisems/NominalPos";
import SubmitPos from "../../components/organisems/SubmitPos";
import ContentLeftPos from "../../components/organisems/ContentLeftPos";
import EmptyOrderPos from "../../components/organisems/EmptyOrderPos";
import ListItem from "../../components/organisems/ListItem";
import RootLayouts from "../../layouts/RootLayouts";
import Home from "../../assets/icon/home.png";
import Desk from "../../assets/icon/desk.png";

export default function PosPage() {
  const [listItemChoosen, setItemsChoose] = useState([]);

  function onClick(item) {
    if (!listItemChoosen.some((chosenItem) => chosenItem.idItem === item.idItem)) {
      setItemsChoose([...listItemChoosen, item]);
    }
  }

  const handleSetListItemChoosen = (updatedList) => {
    setItemsChoose(updatedList);
  };

  useEffect(() => {
    console.log("the got sent", listItemChoosen);
  }, [listItemChoosen]);
  return (
    <>
      <RootLayouts>
        <div className="w-full h-max md:h-screen mt-24">
          <div className="container px-8 py-10 grid md:flex md:justify-center md:items-center gap-8 mx-auto shadow-2xl  h-full overflow-hidden">
            <div className="w-full h-full md:max-w-[50%] shadow-xl  order-2 md:order-1">
              <div className="flex flex-col h-full">
                <EmptyOrderPos listItemChoosen={listItemChoosen} setListItemChoosen={handleSetListItemChoosen} />
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
            <div className="w-full h-full text-[#3d444e] shadow-xl px-3 order-1 md:order-2">
              {/* RIGHT(NAVIGATION) */}
              <div className="flex items-center h-max">
                {/* HOME TO DESK */}
                <div className="flex justify-center gap-3 items-center py-2 px-3 w-max shadow-gray-300 shadow-lg  rounded-2xl mb-5">
                  <a href="#">
                    <img className="h-auto w-[20px]" src={Home} alt="home" />
                  </a>
                  <p className="">&gt;</p>
                  <div className=" grid place-items-center">
                    <img className="w-[20px]" src={Desk} alt="desk" />
                    <p>Desk</p>
                  </div>
                </div>
                {/* SEARCH PRODUCT */}
                {/* <div className="flex ">
                <input className="border-2 rounded-lg" type="search" placeholder=" Search Product" name="" id="" />
              </div> */}
              </div>
              {/* LIST PRODUCT */}
              <div className="w-full h-max  shadow-gray-300 shadow-lg">
                <div className="bg-[#d9dade] h-full p-2 gap-2">
                  {/* LAYER 1 */}
                  <ListItem onClick={onClick} />
                </div>
              </div>
            </div>
            {/* RIGHT */}
          </div>
        </div>
      </RootLayouts>
    </>
  );
}
