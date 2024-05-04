import React, { useEffect } from 'react';
import item1Image from "../../assets/img/1.png";

export default function ListItem({ itemsInStore, onClick }) {

    return (
        <>
            <div>
            <img className="" src="../../assets/img/1.png" alt="" />
                {
                    itemsInStore.map((item) => (
                        <button key={item.idItem} className="flex-col bg-white p-2 text-left mx-1 my-1" onClick={() => onClick(item)}>
                            <img className="" src={item.pictureItem} alt="" />
                            <p className="font-bold">{item.Name}</p>
                            <p className="text-[#724b68] font-bold">$ {item.Price}</p>
                        </button>
                    ))
                }
            </div>
        </>
    );
}
