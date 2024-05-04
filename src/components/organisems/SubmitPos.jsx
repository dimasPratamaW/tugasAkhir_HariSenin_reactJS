import React from "react";
import User from "../../assets/icon/user.svg";
import Arrow from "../../assets/icon/arrowPayment.svg";

export default function SubmitPos() {
  return (
    <>
      <div className="h-full w-full max-w-[40%]">
        <div className="w-full h-full flex flex-col flex-grow text-xs flex-1">
          <div className="flex-row flex-grow bg-white text-center h-full w-full border-b-2 border-l-2 border-r-2 border-gray-400 content-center">
            <button type="button" className="h-full w-full">
              <div className="flex flex-row gap-1 justify-center">
                <img className="w-5" src={User} alt="user" />
                <span>Lily Vingroom</span>
              </div>
            </button>
          </div>
          <div className="flex-row flex-grow bg-[#1E674B] text-center h-full w-full border-b-2 border-l-2 border-r-2 border-gray-400 content-center">
            <button type="button" className="h-full w-full">
              <div className="flex flex-col gap-1 items-center text-white">
                <img className="w-9" src={Arrow} alt=">" />
                <span>Payment</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
