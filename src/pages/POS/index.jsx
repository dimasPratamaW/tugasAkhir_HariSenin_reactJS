import React, { useEffect, useState } from 'react';
import TopPos from '../../components/organisems/TopPos';
import NominalPos from '../../components/organisems/NominalPos';
import SubmitPos from '../../components/organisems/SubmitPos';
import ContentLeftPos from '../../components/organisems/ContentLeftPos';
import EmptyOrderPos from '../../components/organisems/EmptyOrderPos';
import ListItem from '../../components/organisems/ListItem';
import Footer from '../../components/Footer';
import TopPos from "../../components/organisems/TopPos";
import NominalPos from "../../components/organisems/NominalPos";
import SubmitPos from "../../components/organisems/SubmitPos";
import ContentLeftPos from "../../components/organisems/ContentLeftPos";
import EmptyOrderPos from "../../components/organisems/EmptyOrderPos";
import RootLayouts from "../../layouts/RootLayouts";
import Home from "../../assets/icon/home.png";
import { CaretRightOutlined } from "@ant-design/icons";
import TableIcon from "../../assets/icon/desk.png";
import DataPost from "../../components/organisems/DataPost";

export default function PosPage() {
  const itemsInStore = [
    {
      idItem: 1,
      Name: "item Test 1",
      Price: 99.75,
      pictureItem: "../../assets/img/1.png"
    },
    {
      idItem: 2,
      Name: "item Test 2",
      Price: 169.05,
      pictureItem: "../../assets/img/1.png"
    },
    {
      idItem: 3,
      Name: "item Test 3",
      Price: 99.75,
      pictureItem: "../../assets/img/1.png"
    },
    {
      idItem: 4,
      Name: "item Test 4",
      Price: 99.75,
      pictureItem: "../../assets/img/1.png"
    },
    {
      idItem: 5,
      Name: "item Test 5",
      Price: 169.05,
      pictureItem: "../../assets/img/1.png"
    },
    {
      idItem: 6,
      Name: "item Test 6",
      Price: 99.75,
      pictureItem: "../../assets/img/1.png"
    },
    {
      idItem: 7,
      Name: "item Test 7",
      Price: 169.05,
      pictureItem: "../../assets/img/1.png"
    },
    {
      idItem: 8,
      Name: "item Test 8",
      Price: 99.75,
      pictureItem: "../../assets/img/1.png"
    },
  ];
}

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
        <main className="w-full h-screen mt-24 font-serif">
          <div className="container py-3 px-5 shadow-2xl rounded-xl mx-auto">
            <TopPos />
            <div className="grid grid-cols-2 gap-5">
              <div className="grid w-full">
                <div className="w-full h-[500px] border-[1px] border-solid border-black">
                  <EmptyOrderPos />
                </div>
                <div className="h-max">
                  <ContentLeftPos />
                </div>
                <div className="w-full h-[150px] flex justify-center items-center">
                  <SubmitPos />
                  <NominalPos />
                </div>
              </div>
              {/* SEARCH PRODUCT */}
              {/* <div className="flex ">
                <input className="border-2 rounded-lg" type="search" placeholder=" Search Product" name="" id="" />
              </div> */}
            </div>
            {/* LIST PRODUCT */}
            <div className="block">
              <div className="bg-[#d9dade] h-full p-2 flex flex-col gap-2">
                {/* LAYER 1 */}
                <div className="flex gap-2 ">
                  <ListItem itemsInStore={itemsInStore} onClick={onClick} />
              <div className="w-full h-full overflow-hidden">
                <div className="flex justify-between">
                  <div className="flex justify-center items-center gap-2">
                    <img src={Home} alt="home" className="w-[30px]" />
                    <span>
                      <CaretRightOutlined />
                    </span>
                    <div className="grid place-items-center">
                      <img src={TableIcon} alt="desk" className="w-[20px]" />
                      <span>Desk</span>
                    </div>
                  </div>
                  <input type="text" placeholder="Search product" className="h-max px-2 py-2 rounded-xl text-center border-[1px] border-solid border-gray-500 mb-5" />
                </div>
                <div className="h-full w-full px-3 py-4 bg-gray-400">
                  <DataPost />
                </div>
              </div>
            </div>
          </div>
      </div>
        </main>
      </RootLayouts>
    </>
  );
}
