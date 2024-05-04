import React, { useEffect, useState } from "react";
import cartImage from "../../assets/img/shopping_cart.svg";
import { List, Button } from "antd";

export default function EmptyOrderPos({ listItemChoosen, setListItemChoosen }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(
      listItemChoosen.map((item) => ({
        ...item,
        amount: 1
      }))
    );
  }, [listItemChoosen]);

  const handleIncrement = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].amount += 1;
    setCartItems(updatedCartItems);
  };

  const handleDecrement = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].amount > 0) {
      updatedCartItems[index].amount -= 1;
      setCartItems(updatedCartItems);
    }
  };

  const handleRemoveItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    // Update listItemChoosen in the main file
    setListItemChoosen(updatedCartItems);
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

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

  return (
    <List
      className="demo-loadmore-list"
      itemLayout="horizontal"
      dataSource={cartItems}
      renderItem={(item, index) => (
        <List.Item
          actions={[
            <Button key="decrement" onClick={() => handleDecrement(index)}>-</Button>,
            <span key="amount">{item.amount}</span>,
            <Button key="increment" onClick={() => handleIncrement(index)}>+</Button>,
            <Button key="remove" onClick={() => handleRemoveItem(index)}>Remove</Button>
          ]}
        >
          <List.Item.Meta
            title={<a href="https://ant.design" className="font-bold">{item.Name}</a>}
            description={<p className="font-bold">$ {item.Price}</p>}
          />
        </List.Item>
      )}
    />
  );
}
