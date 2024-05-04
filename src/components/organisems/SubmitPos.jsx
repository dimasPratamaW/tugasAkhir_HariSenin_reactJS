// eslint-disable-next-line no-unused-vars
import React from "react";
import User from "../../assets/icon/user.svg";
import Arrow from "../../assets/icon/arrowPayment.svg";

export default function SubmitPos() {
  return (
    <>
      <div className="flex flex-col w-full max-w-[30%] h-full">
        <button className="w-full h-full flex justify-center items-center gap-2 py-4 border-[1px] border-solid border-b-slate-950">
          <img src={User} alt="Lily Vingroom" />
          <span>Lily Vingroom</span>
        </button>
        <button className="w-full h-full flex justify-center items-center gap-2 py-4 border-[1px] border-solid border-b-slate-950 bg-[#1E674B] text-white">
          <img src={Arrow} alt="payment" />
          <span>Payment</span>
        </button>
      </div>
    </>
  );
}
