import React, { useEffect, useState } from "react";
import cartImage from "../../assets/img/shopping_cart.svg";
import { List, Button } from "antd";

export default function EmptyOrderPos({ listItemChoosen, setListItemChoosen }) {
  const [cartItems, setCartItems] = useState([]);
  let updatedCartItems = [...cartItems];

  useEffect(() => {
    setCartItems(
      listItemChoosen.map((item) => ({
        ...item,
        amount: 1,
      }))
    );
  }, [listItemChoosen]);

  const handleIncrement = (index) => {
    updatedCartItems[index].amount += 1;
    setCartItems(updatedCartItems);
  };

  const handleDecrement = (index) => {
    if (updatedCartItems[index].amount > 0) {
      updatedCartItems[index].amount -= 1;
      setCartItems(updatedCartItems);
    }
  };

  const handleRemoveItem = (index) => {
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    // Update listItemChoosen in the main file
    setListItemChoosen(updatedCartItems);
  };

  if (cartItems.length === 0) {
    return (
      <div className="flex-grow flex-row">
        <div className="bg-white h-full flex items-center justify-center">
          <div className="flex flex-col justify-center items-center">
            <img className="h-20" src={cartImage} alt="shopping_cart" />
            <h1 className="text-2xl">This order is empty</h1>
          </div>
        </div>
      </div>
    );
  }

  // Calculate total value for each item (amount * price)
  const itemValues = cartItems.map((item) => item.amount * item.Price);

  // Sum up all the values in the array
  const totalValue = itemValues.reduce((acc, curr) => acc + curr, 0);

  return (
    <>
      <div className=" flex-grow border-2 border-slate-300">
        <div className="bg-white justify-center ">
          <List
            itemLayout="horizontal"
            dataSource={cartItems}
            renderItem={(item, index) => (
              <List.Item
                actions={[
                  <Button key="decrement" onClick={() => handleDecrement(index)}>
                    -
                  </Button>,
                  <span key="amount">{item.amount}</span>,
                  <Button key="increment" onClick={() => handleIncrement(index)}>
                    +
                  </Button>,
                  <Button key="remove" onClick={() => handleRemoveItem(index)}>
                    Remove
                  </Button>,
                ]}
              >
                <List.Item.Meta
                  title={
                    <a href="https://ant.design" className="font-bold">
                      {item.Name}
                    </a>
                  }
                  description={<p className="font-bold">$ {item.Price}</p>}
                />
              </List.Item>
            )}
          />
        </div>
      </div>
      <div className="bg-lime-200 border-2 border-black">
        <div className="flex-row justify-items-end items-end ml-2">
          <div className="font-bold text-2xl">Total</div>
          <div className="font-bold text-xl">$ {totalValue}</div>
        </div>
      </div>
    </>
  );
}
