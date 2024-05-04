import React from "react";
import Note from "../../assets/icon/note.svg";
import Refund from "../../assets/icon/refund.svg";
import Info from "../../assets/icon/info.svg";
import Barcode from "../../assets/icon/barcode.svg";
import Reset from "../../assets/icon/reset.svg";
import Reward from "../../assets/icon/reward.svg";
import EWallet from "../../assets/icon/eWallet.svg";
import Order from "../../assets/icon/link.svg";

export default function ContentLeftPos() {
  const dataLeftContent = [
    {
      label: "Customer Note",
      icon: Note,
    },
    {
      label: "Refund",
      icon: Refund,
    },
    {
      label: "Info",
      icon: Info,
    },
    {
      label: "Enter Code",
      icon: Barcode,
    },
    {
      label: "Reset Programs",
      icon: Reset,
    },
    {
      label: "Reward",
      icon: Reward,
    },
  ];

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 items-center w-full h-max text-sm">
        {dataLeftContent.map((elm, i) => {
          return (
            <div key={i} className="w-full grid place-content-center py-4 px-3 border-[1px] border-solid border-black">
              <div className="flex justify-center items-center gap-2">
                <img className="w-[20px]" src={elm.icon} alt={elm.label} />
                <span className="font-bold">{elm.label}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-2 w-full h-max">
        <button className=" flex justify-center items-center gap-2 py-5 px-3 border-[1px] border-solid border-black w-full">
          <img src={EWallet} alt="ewallet" />
          <span className="font-bold">eWallet</span>
        </button>
        <button className=" flex justify-center items-center gap-2 py-5 px-3 border-[1px] border-solid border-black w-full">
          <img className="w-[20px]" src={Order} alt="order" />
          <span className="font-bold">Quatation/Order</span>
        </button>
      </div>
    </>
  );
}
