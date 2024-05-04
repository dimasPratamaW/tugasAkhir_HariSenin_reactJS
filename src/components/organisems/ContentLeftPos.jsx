import React from "react";
import Note from "../../assets/icon/note.svg";
import Refund from "../../assets/icon/refund.svg";
import Info from "../../assets/icon/info.svg";
import Barcode from "../../assets/icon/barcode.svg";
import Reset from "../../assets/icon/reset.svg";
import Reward from "../../assets/icon/reward.svg";
import EWallet from "../../assets/icon/eWallet.svg";
import Link from "../../assets/icon/link.svg";

export default function ContentLeftPos() {
  const dataContent = [
    {
      title: "Customer Note",
      image: Note,
    },
    {
      title: "Refund",
      image: Refund,
    },
    {
      title: "Info",
      image: Info,
    },
    {
      title: "Enter Code",
      image: Barcode,
    },
    {
      title: "Reset Programs",
      image: Reset,
    },
    {
      title: "Reward",
      image: Reward,
    },
  ];
  return (
    <>
      <div className="w-full h-max">
        <div className="grid grid-cols-3 border-[1px] border-solid border-gray-500">
          {dataContent.map((item, i) => {
            return (
              <button className="gap-3 px-3 py-4 flex justify-center items-center border-[1px] border-solid border-gray-500" key={i}>
                <span>{item.title}</span>
                <img src={item.image} alt={item.title} className="w-[25px]" />
              </button>
            );
          })}
        </div>
        <div className="flex justify-center items-center w-full border-[1px] border-solid border-gray-500 ">
          <button className="gap-3 px-4 py-5 border-[1px] border-solid border-gray-500 w-full flex justify-center items-center">
            <span>eWallet</span>
            <img src={EWallet} alt="eWallet" />
          </button>
          <button className="gap-3 px-4 py-5 border-[1px] border-solid border-gray-500 w-full flex justify-center items-center">
            <span>Order</span>
            <img src={Link} alt="Order" className="w-[20px]" />
          </button>
        </div>
      </div>
    </>
  );
}
