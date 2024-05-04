import React, { useEffect } from 'react';

export default function ListItem({ itemsInStore, onClick }) {

    return (
        <>
            <div>
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
