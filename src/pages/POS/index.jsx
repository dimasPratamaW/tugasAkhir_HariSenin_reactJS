import { useEffect, useState } from "react";
import EmptyOrderPos from "../../components/organisems/EmptyOrderPos";
import ListItem from "../../components/organisems/ListItem";
import RootLayouts from "../../layouts/RootLayouts";
import Home from "../../assets/icon/home.png";
import Desk from "../../assets/icon/desk.png";

export default function PosPage() {
  const [listItemChoosen, setItemsChoose] = useState([]);

  function onClick(item) {
    if (!listItemChoosen.some((chosenItem) => chosenItem.product_id === item.product_id)) {
      setItemsChoose([...listItemChoosen, item]);
    }
  }

  const handleSetListItemChoosen = (updatedList) => {
    setItemsChoose(updatedList);
  };

  useEffect(() => {
    console.log("Items chosen:", listItemChoosen);
  }, [listItemChoosen]);

  return (
    <>
      <RootLayouts>
        <div className="w-full h-max md:h-screen mt-24">
          <div className="container px-8 py-10 grid md:flex md:justify-center md:items-center gap-8 mx-auto shadow-2xl  h-full overflow-hidden">
            <div className="w-full h-full md:max-w-[50%] shadow-xl  order-2 md:order-1">
              <div className="flex flex-col min-h-[50%]">
                <EmptyOrderPos listItemChoosen={listItemChoosen} setListItemChoosen={handleSetListItemChoosen} />
              </div>
            </div>
            <div className="w-full h-full text-[#3d444e] shadow-xl px-3 order-1 md:order-2">
              <div className="flex items-center h-max">
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
              </div>
              <div className="w-full h-max  shadow-gray-300 shadow-lg">
                <div className="bg-[#d9dade] h-full p-2 gap-2">
                  <ListItem onClick={onClick} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </RootLayouts>
    </>
  );
}
