import React from "react";
import Cart from "../../assets/img/shopping_cart.svg";

export default function EmptyOrderPos() {
  return (
    <>
      <div className="flex-grow flex-row">
        <div className="bg-white h-full flex items-center justify-center">
          <div className="flex flex-col justify-center items-center">
            <img className="h-20" src={Cart} alt="shopping_cart" />
            <h1 className="text-2xl">This order is empty</h1>
          </div>
        </div>
      </div>
    </>
  );
}
