import React from "react";
import Backspace from "../../assets/icon/backspace.svg";

export default function NominalPos() {
  return (
    <>
      {/* <div className="flex flex-1">
        <div className="grid grid-flow-row w-full h-full">
          <div className="grid grid-cols-4">
            <div className="flex-col bg-white text-center h-full w-full border-b-2 border-r-2 border-gray-400 content-center">
              <button className="h-full w-full" type="button">
                1
              </button>
            </div>
            <div className="flex-col bg-white text-center h-full w-full border-b-2 border-r-2 border-gray-400 content-center">
              <button className="h-full w-full" type="button">
                2
              </button>
            </div>
            <div className="flex-col bg-white text-center h-full w-full border-b-2 border-r-2 border-gray-400 content-center">
              <button className="w-full h-full" type="button">
                3
              </button>
            </div>
            <div className="flex-col bg-[#652f45] text-center h-full w-full border-b-2 border-r-2 border-gray-400 content-center">
              <button className="w-full h-full text-white" type="button">
                Qty
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4">
            <div className="flex-col bg-white text-center h-full w-full border-b-2 border-r-2 border-gray-400 content-center">
              <button type="button" className="w-full h-full">
                4
              </button>
            </div>
            <div className="flex-col bg-white text-center h-full w-full border-b-2 border-r-2 border-gray-400 content-center">
              <button type="button" className="h-full w-full">
                5
              </button>
            </div>
            <div className="flex-col bg-white text-center h-full w-full border-b-2 border-r-2 border-gray-400 content-center">
              <button type="button" className="h-full w-full">
                6
              </button>
            </div>
            <div className="flex-col bg-white text-center h-full w-full border-b-2 border-r-2 border-gray-400 content-center">
              <button type="button" className="w-full h-full">
                % Disc
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4">
            <div className="flex-col bg-white text-center h-full w-full border-b-2 border-r-2 border-gray-400 content-center">
              <button type="button" className="h-full w-full">
                7
              </button>
            </div>
            <div className="flex-col bg-white text-center h-full w-full border-b-2 border-r-2 border-gray-400 content-center">
              <button type="button" className="h-full w-full">
                8
              </button>
            </div>
            <div className="flex-col bg-white text-center h-full w-full border-b-2 border-r-2 border-gray-400 content-center">
              <button type="button" className="w-full h-full">
                9
              </button>
            </div>
            <div className="flex-col bg-white text-center h-full w-full border-b-2 border-r-2 border-gray-400 content-center">
              <button type="button" className="w-full h-full">
                Price
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4">
            <div className="flex-col bg-white text-center h-full w-full border-b-2 border-r-2 border-gray-400 content-center">
              <button type="button" className="w-full h-full">
                +/-
              </button>
            </div>
            <div className="flex-col bg-white text-center h-full w-full border-b-2 border-r-2 border-gray-400 content-center">
              <button type="button" className="w-full h-full">
                0
              </button>
            </div>
            <div className="flex-col bg-white text-center h-full w-full border-b-2 border-r-2 border-gray-400 content-center">
              <button type="button" className="w-full h-full">
                .
              </button>
            </div>
            <div className="flex-col bg-white h-full w-full border-b-2 border-r-2 border-gray-400 content-center items-end">
              <button type="button" className="w-full h-full flex justify-center items-center">
                <div className="content-center justify-center">
                  <img className="w-5" src={Backspace} alt="Delete" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div> */}
      <div className="grid grid-cols-4 w-full h-full max-w-[70%] border-[1px] border-solid border-stone-600 font-semibold">
        <button className="border-[1px] border-solid border-stone-600">1</button>
        <button className="border-[1px] border-solid border-stone-600">2</button>
        <button className="border-[1px] border-solid border-stone-600">3</button>
        <button className="border-[1px] border-solid border-stone-600">Qty</button>
        <button className="border-[1px] border-solid border-stone-600">4</button>
        <button className="border-[1px] border-solid border-stone-600">5</button>
        <button className="border-[1px] border-solid border-stone-600">6</button>
        <button className="border-[1px] border-solid border-stone-600">% Disc</button>
        <button className="border-[1px] border-solid border-stone-600">7</button>
        <button className="border-[1px] border-solid border-stone-600">8</button>
        <button className="border-[1px] border-solid border-stone-600">9</button>
        <button className="border-[1px] border-solid border-stone-600">Price</button>
        <button className="border-[1px] border-solid border-stone-600">+/-</button>
        <button className="border-[1px] border-solid border-stone-600">0</button>
        <button className="border-[1px] border-solid border-stone-600">.</button>
        <button className="flex justify-center items-center border-[1px] border-solid border-stone-600">
          <img src={Backspace} alt="hapus" />
        </button>
      </div>
    </>
  );
}
