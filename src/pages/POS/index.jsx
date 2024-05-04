import React, { useEffect, useState } from 'react';
import TopPos from '../../components/organisems/TopPos';
import NominalPos from '../../components/organisems/NominalPos';
import SubmitPos from '../../components/organisems/SubmitPos';
import ContentLeftPos from '../../components/organisems/ContentLeftPos';
import EmptyOrderPos from '../../components/organisems/EmptyOrderPos';
import ListItem from '../../components/organisems/ListItem';
import Footer from '../../components/Footer';

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
      <div className="font-serif">
        <TopPos />
        <hr />
        <div className="flex flex-row font-serif mt-20">
          <div className="w-2/5 h-lvh block">
            <div className="flex flex-1 flex-col h-screen">
              <EmptyOrderPos
                listItemChoosen={listItemChoosen}
                setListItemChoosen={handleSetListItemChoosen}
              />
              <div className="flex-1 flex-grow flex-row font-bold">
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
                  <ListItem itemsInStore={itemsInStore} onClick={onClick} />
                </div>
              </div>
            </div>
          </div>
          {/* RIGHT */}
        </div>
        {/* FOOTER */}
        <Footer />
      </div>
    </>
  );
}
