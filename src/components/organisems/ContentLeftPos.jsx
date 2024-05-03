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
  return (
    <>
      <div className="flex flex-col w-full h-full text-xs">
        {/* row 1 input menu */}
        <div className="flex flex-row flex-grow items-center">
          <button
            className="flex-col content-center items-center flex-grow bg-white gap-2 h-full w-full border-2 border-gray-400"
            type="button"
          >
            <div className="flex flex-row gap-1">
              <img className="w-5" src={Note} alt="note" />
              <span>Customer Note</span>
            </div>
          </button>
          <button
            className="flex-col flex-grow content-center items-center bg-white gap-2 h-full w-full border-t-2 border-r-2 border-b-2 border-gray-400"
            type="button"
          >
            <div className="flex flex-row gap-1">
              <img className="w-5" src={Refund} alt="refund" />
              <span>Refund</span>
            </div>
          </button>
          <button
            className="flex-col flex-grow content-center items-center bg-white gap-2 h-full w-full border-t-2 border-r-2 border-b-2 border-gray-400"
            type="button"
          >
            <div className="flex flex-row gap-1">
              <img className="w-5" src={Info} alt="info" />
              <span>Info</span>
            </div>
          </button>
        </div>
        {/* row 2 input menu */}
        <div className="flex flex-row flex-grow items-center">
          <button
            className="flex-col items-center flex-grow h-full w-full bg-white gap-2 border-l-2 border-b-2 border-r-2 border-gray-400 content-center"
            type="button"
          >
            <div className="flex flex-row gap-1">
              <img className="w-5" src={Barcode} alt="barcode" />
              <span>Enter Code</span>
            </div>
          </button>
          <button
            className="flex-col items-center content-center flex-grow h-full w-full bg-white gap-2 border-b-2 border-r-2 border-gray-400"
            type="button"
          >
            <div className="flex flex-row gap-1">
              <img className="w-5" src={Reset} alt="reset" />
              <span>Reset Programs</span>
            </div>
          </button>
          <button
            className="flex-col items-center flex-grow h-full w-full bg-white gap-2 border-b-2 border-r-2 border-gray-400 content-center"
            type="button"
          >
            <div className="flex flex-row gap-1">
              <img className="w-5" src={Reward} alt="reward" />
              <span>Reward</span>
            </div>
          </button>
        </div>
        {/* row 3 input menu */}
        <div className="flex flex-row flex-grow items-center">
          <button
            className="flex-col items-center flex-grow bg-white gap-2 h-full w-full border-l-2 border-b-2 border-r-2 border-gray-400 content-center"
            type="button"
          >
            <div className="flex flex-row gap-1">
              <img className="w-5" src={EWallet} alt="eWallet" />
              <span>eWallet</span>
            </div>
          </button>
          <button
            className="flex-col items-center flex-grow bg-white gap-2 h-full w-full border-b-2 border-r-2 border-gray-400 content-center"
            type="button"
          >
            <div className="flex flex-row gap-1">
              <img className="w-5" src={Link} alt="" />
              <span>Quotation/Order</span>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
